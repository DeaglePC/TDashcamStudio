# FFmpeg Download Script for TDashcam Studio
# Downloads FFmpeg binaries for Windows, macOS, and Linux

$ErrorActionPreference = "Stop"

# Set proxy if needed
$env:HTTP_PROXY = "http://127.0.0.1:7890"
$env:HTTPS_PROXY = "http://127.0.0.1:7890"

$binariesDir = Join-Path $PSScriptRoot "..\src-tauri\binaries"

# Create binaries directory if not exists
if (-not (Test-Path $binariesDir)) {
    New-Item -ItemType Directory -Path $binariesDir -Force
}

Write-Host "Downloading FFmpeg binaries to: $binariesDir" -ForegroundColor Cyan

# Download URLs
$downloads = @{
    # Windows x64
    "win64" = @{
        "url" = "https://github.com/BtbN/FFmpeg-Builds/releases/download/latest/ffmpeg-master-latest-win64-gpl.zip"
        "archive" = "ffmpeg-win64.zip"
        "target" = "ffmpeg-x86_64-pc-windows-msvc.exe"
        "extractPath" = "ffmpeg-master-latest-win64-gpl/bin/ffmpeg.exe"
    }
    # Linux x64
    "linux64" = @{
        "url" = "https://github.com/BtbN/FFmpeg-Builds/releases/download/latest/ffmpeg-master-latest-linux64-gpl.tar.xz"
        "archive" = "ffmpeg-linux64.tar.xz"
        "target" = "ffmpeg-x86_64-unknown-linux-gnu"
        "extractPath" = "ffmpeg-master-latest-linux64-gpl/bin/ffmpeg"
    }
    # macOS x64 (Intel) - using evermeet builds
    "macos-x64" = @{
        "url" = "https://evermeet.cx/ffmpeg/getrelease/zip"
        "archive" = "ffmpeg-macos-x64.zip"
        "target" = "ffmpeg-x86_64-apple-darwin"
        "extractPath" = "ffmpeg"
    }
    # macOS ARM64 (Apple Silicon) - using evermeet builds (universal binary)
    "macos-arm64" = @{
        "url" = "https://evermeet.cx/ffmpeg/getrelease/zip"
        "archive" = "ffmpeg-macos-arm64.zip"
        "target" = "ffmpeg-aarch64-apple-darwin"
        "extractPath" = "ffmpeg"
    }
}

function Download-File {
    param (
        [string]$Url,
        [string]$OutFile
    )
    
    Write-Host "Downloading: $Url" -ForegroundColor Yellow
    
    try {
        # Try using curl first (better for large files)
        $curlPath = Get-Command curl.exe -ErrorAction SilentlyContinue
        if ($curlPath) {
            & curl.exe -L -o $OutFile $Url --proxy $env:HTTP_PROXY
        } else {
            # Fallback to Invoke-WebRequest
            [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
            $webClient = New-Object System.Net.WebClient
            $webClient.Proxy = New-Object System.Net.WebProxy($env:HTTP_PROXY)
            $webClient.DownloadFile($Url, $OutFile)
        }
        Write-Host "Downloaded: $OutFile" -ForegroundColor Green
        return $true
    }
    catch {
        Write-Host "Failed to download: $_" -ForegroundColor Red
        return $false
    }
}

function Extract-Archive {
    param (
        [string]$Archive,
        [string]$ExtractPath,
        [string]$TargetFile
    )
    
    $tempDir = Join-Path $binariesDir "temp_extract"
    
    try {
        if (Test-Path $tempDir) {
            Remove-Item -Recurse -Force $tempDir
        }
        New-Item -ItemType Directory -Path $tempDir -Force | Out-Null
        
        if ($Archive -like "*.zip") {
            Write-Host "Extracting ZIP: $Archive" -ForegroundColor Yellow
            Expand-Archive -Path $Archive -DestinationPath $tempDir -Force
        }
        elseif ($Archive -like "*.tar.xz") {
            Write-Host "Extracting TAR.XZ: $Archive" -ForegroundColor Yellow
            # Need 7-Zip or tar for .tar.xz
            $tarPath = Get-Command tar -ErrorAction SilentlyContinue
            if ($tarPath) {
                & tar -xf $Archive -C $tempDir
            } else {
                Write-Host "tar command not found. Please install tar or 7-Zip to extract .tar.xz files" -ForegroundColor Red
                return $false
            }
        }
        
        # Find and copy the ffmpeg binary
        $sourceFile = Get-ChildItem -Path $tempDir -Recurse -Filter "ffmpeg*" | 
                      Where-Object { -not $_.PSIsContainer -and $_.Name -match "^ffmpeg(\.exe)?$" } | 
                      Select-Object -First 1
        
        if ($sourceFile) {
            $destPath = Join-Path $binariesDir $TargetFile
            Copy-Item -Path $sourceFile.FullName -Destination $destPath -Force
            Write-Host "Extracted to: $destPath" -ForegroundColor Green
            return $true
        } else {
            Write-Host "Could not find ffmpeg binary in archive" -ForegroundColor Red
            return $false
        }
    }
    finally {
        # Cleanup
        if (Test-Path $tempDir) {
            Remove-Item -Recurse -Force $tempDir -ErrorAction SilentlyContinue
        }
        if (Test-Path $Archive) {
            Remove-Item -Force $Archive -ErrorAction SilentlyContinue
        }
    }
}

# Download and extract Windows version
Write-Host "`n=== Windows x64 ===" -ForegroundColor Cyan
$winArchive = Join-Path $binariesDir $downloads["win64"]["archive"]
if (Download-File -Url $downloads["win64"]["url"] -OutFile $winArchive) {
    Extract-Archive -Archive $winArchive -ExtractPath $downloads["win64"]["extractPath"] -TargetFile $downloads["win64"]["target"]
}

# Download and extract Linux version
Write-Host "`n=== Linux x64 ===" -ForegroundColor Cyan
$linuxArchive = Join-Path $binariesDir $downloads["linux64"]["archive"]
if (Download-File -Url $downloads["linux64"]["url"] -OutFile $linuxArchive) {
    Extract-Archive -Archive $linuxArchive -ExtractPath $downloads["linux64"]["extractPath"] -TargetFile $downloads["linux64"]["target"]
}

# Download macOS version (evermeet provides universal binaries)
Write-Host "`n=== macOS (Intel & Apple Silicon) ===" -ForegroundColor Cyan
Write-Host "Note: evermeet.cx provides universal binaries that work on both Intel and Apple Silicon" -ForegroundColor Yellow
$macArchive = Join-Path $binariesDir $downloads["macos-x64"]["archive"]
if (Download-File -Url $downloads["macos-x64"]["url"] -OutFile $macArchive) {
    # Extract for Intel
    Extract-Archive -Archive $macArchive -ExtractPath $downloads["macos-x64"]["extractPath"] -TargetFile $downloads["macos-x64"]["target"]
    
    # Download again for ARM64 (same universal binary)
    $macArchiveArm = Join-Path $binariesDir $downloads["macos-arm64"]["archive"]
    if (Download-File -Url $downloads["macos-arm64"]["url"] -OutFile $macArchiveArm) {
        Extract-Archive -Archive $macArchiveArm -ExtractPath $downloads["macos-arm64"]["extractPath"] -TargetFile $downloads["macos-arm64"]["target"]
    }
}

Write-Host "`n=== Summary ===" -ForegroundColor Cyan
Write-Host "Expected files in $binariesDir :" -ForegroundColor Yellow
Write-Host "  - ffmpeg-x86_64-pc-windows-msvc.exe (Windows)"
Write-Host "  - ffmpeg-x86_64-unknown-linux-gnu (Linux)"
Write-Host "  - ffmpeg-x86_64-apple-darwin (macOS Intel)"
Write-Host "  - ffmpeg-aarch64-apple-darwin (macOS Apple Silicon)"

Write-Host "`nActual files:" -ForegroundColor Yellow
Get-ChildItem -Path $binariesDir -Filter "ffmpeg*" | ForEach-Object {
    Write-Host "  - $($_.Name) ($([math]::Round($_.Length / 1MB, 2)) MB)"
}

Write-Host "`nDone!" -ForegroundColor Green

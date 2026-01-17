#!/bin/bash
# FFmpeg Download Script for TDashcam Studio
# Downloads FFmpeg binaries for Windows, macOS, and Linux

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BINARIES_DIR="$SCRIPT_DIR/../src-tauri/binaries"

# Create binaries directory if not exists
mkdir -p "$BINARIES_DIR"

echo "Downloading FFmpeg binaries to: $BINARIES_DIR"

# Detect OS
OS="$(uname -s)"
ARCH="$(uname -m)"

download_file() {
    local url="$1"
    local output="$2"
    echo "Downloading: $url"
    if command -v curl &> /dev/null; then
        curl -L -o "$output" "$url"
    elif command -v wget &> /dev/null; then
        wget -O "$output" "$url"
    else
        echo "Error: curl or wget required"
        exit 1
    fi
}

# Download Windows FFmpeg
download_windows() {
    echo ""
    echo "=== Windows x64 ==="
    local url="https://github.com/BtbN/FFmpeg-Builds/releases/download/latest/ffmpeg-master-latest-win64-gpl.zip"
    local archive="$BINARIES_DIR/ffmpeg-win64.zip"
    local target="$BINARIES_DIR/ffmpeg-x86_64-pc-windows-msvc.exe"
    
    download_file "$url" "$archive"
    
    # Extract
    local temp_dir="$BINARIES_DIR/temp_win"
    mkdir -p "$temp_dir"
    unzip -q "$archive" -d "$temp_dir"
    
    # Find and copy ffmpeg.exe
    find "$temp_dir" -name "ffmpeg.exe" -exec cp {} "$target" \;
    
    # Cleanup
    rm -rf "$temp_dir" "$archive"
    echo "Extracted to: $target"
}

# Download Linux FFmpeg
download_linux() {
    echo ""
    echo "=== Linux x64 ==="
    local url="https://github.com/BtbN/FFmpeg-Builds/releases/download/latest/ffmpeg-master-latest-linux64-gpl.tar.xz"
    local archive="$BINARIES_DIR/ffmpeg-linux64.tar.xz"
    local target="$BINARIES_DIR/ffmpeg-x86_64-unknown-linux-gnu"
    
    download_file "$url" "$archive"
    
    # Extract
    local temp_dir="$BINARIES_DIR/temp_linux"
    mkdir -p "$temp_dir"
    tar -xf "$archive" -C "$temp_dir"
    
    # Find and copy ffmpeg
    find "$temp_dir" -name "ffmpeg" -type f -exec cp {} "$target" \;
    chmod +x "$target"
    
    # Cleanup
    rm -rf "$temp_dir" "$archive"
    echo "Extracted to: $target"
}

# Download macOS FFmpeg (Intel)
download_macos_x64() {
    echo ""
    echo "=== macOS x64 (Intel) ==="
    local url="https://evermeet.cx/ffmpeg/getrelease/zip"
    local archive="$BINARIES_DIR/ffmpeg-macos-x64.zip"
    local target="$BINARIES_DIR/ffmpeg-x86_64-apple-darwin"
    
    download_file "$url" "$archive"
    
    # Extract
    local temp_dir="$BINARIES_DIR/temp_macos_x64"
    mkdir -p "$temp_dir"
    unzip -q "$archive" -d "$temp_dir"
    
    # Find and copy ffmpeg
    find "$temp_dir" -name "ffmpeg" -type f -exec cp {} "$target" \;
    chmod +x "$target"
    
    # Cleanup
    rm -rf "$temp_dir" "$archive"
    echo "Extracted to: $target"
}

# Download macOS FFmpeg (Apple Silicon)
download_macos_arm64() {
    echo ""
    echo "=== macOS ARM64 (Apple Silicon) ==="
    # evermeet.cx provides universal binaries
    local url="https://evermeet.cx/ffmpeg/getrelease/zip"
    local archive="$BINARIES_DIR/ffmpeg-macos-arm64.zip"
    local target="$BINARIES_DIR/ffmpeg-aarch64-apple-darwin"
    
    download_file "$url" "$archive"
    
    # Extract
    local temp_dir="$BINARIES_DIR/temp_macos_arm64"
    mkdir -p "$temp_dir"
    unzip -q "$archive" -d "$temp_dir"
    
    # Find and copy ffmpeg
    find "$temp_dir" -name "ffmpeg" -type f -exec cp {} "$target" \;
    chmod +x "$target"
    
    # Cleanup
    rm -rf "$temp_dir" "$archive"
    echo "Extracted to: $target"
}

# Parse arguments
ALL=false
WINDOWS=false
LINUX=false
MACOS=false

if [ $# -eq 0 ]; then
    ALL=true
fi

while [ $# -gt 0 ]; do
    case "$1" in
        --all)
            ALL=true
            ;;
        --windows)
            WINDOWS=true
            ;;
        --linux)
            LINUX=true
            ;;
        --macos)
            MACOS=true
            ;;
        --help)
            echo "Usage: $0 [--all] [--windows] [--linux] [--macos]"
            echo "  --all      Download all platforms (default)"
            echo "  --windows  Download Windows binary"
            echo "  --linux    Download Linux binary"
            echo "  --macos    Download macOS binaries (Intel & Apple Silicon)"
            exit 0
            ;;
        *)
            echo "Unknown option: $1"
            exit 1
            ;;
    esac
    shift
done

# Download based on arguments
if [ "$ALL" = true ]; then
    download_windows
    download_linux
    download_macos_x64
    download_macos_arm64
else
    if [ "$WINDOWS" = true ]; then
        download_windows
    fi
    if [ "$LINUX" = true ]; then
        download_linux
    fi
    if [ "$MACOS" = true ]; then
        download_macos_x64
        download_macos_arm64
    fi
fi

echo ""
echo "=== Summary ==="
echo "Expected files in $BINARIES_DIR:"
echo "  - ffmpeg-x86_64-pc-windows-msvc.exe (Windows)"
echo "  - ffmpeg-x86_64-unknown-linux-gnu (Linux)"
echo "  - ffmpeg-x86_64-apple-darwin (macOS Intel)"
echo "  - ffmpeg-aarch64-apple-darwin (macOS Apple Silicon)"

echo ""
echo "Actual files:"
ls -lh "$BINARIES_DIR"/ffmpeg* 2>/dev/null || echo "  No ffmpeg files found"

echo ""
echo "Done!"

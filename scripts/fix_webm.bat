@echo off
setlocal enabledelayedexpansion

:: WebM Video Repair Script for Windows (PowerShell/CMD)
:: This script fixes WebM files with missing duration or seeking issues
:: usage: fix_webm.bat input.webm [output.webm]

:: Check if ffmpeg is installed
where ffmpeg >nul 2>nul
if %errorlevel% neq 0 (
    echo Error: ffmpeg is not installed or not in your PATH.
    echo Please install FFmpeg first.
    pause
    exit /b 1
)

if "%~1"=="" (
    echo Usage: %~0 ^<input_file.webm^> [output_file.webm]
    echo If output_file is not provided, it will be named ^<input^>_fixed.webm
    pause
    exit /b 1
)

set "INPUT_FILE=%~1"

:: Check if input file exists
if not exist "%INPUT_FILE%" (
    echo Error: Input file "%INPUT_FILE%" not found.
    pause
    exit /b 1
)

:: Determine output filename
if "%~2"=="" (
    set "OUTPUT_FILE=%~n1_fixed%~x1"
) else (
    set "OUTPUT_FILE=%~2"
)

echo Repairing "%INPUT_FILE%" -^> "%OUTPUT_FILE%"...

:: -fflags +genpts: Regenerate missing PTS (fixes seeking/duration)
:: -c copy: Copy streams without re-encoding (fast, no quality loss)
ffmpeg -i "%INPUT_FILE%" -fflags +genpts -c copy -y "%OUTPUT_FILE%"

if %errorlevel% equ 0 (
    echo Success! Fixed file saved as: %OUTPUT_FILE%
) else (
    echo Failed to repair video with stream copy. Attempting re-encode (slower)...
    ffmpeg -i "%INPUT_FILE%" -c:v libvpx-vp9 -crf 30 -b:v 0 -c:a libopus -y "%OUTPUT_FILE%"
    
    if !errorlevel! equ 0 (
        echo Success! Fixed file (re-encoded) saved as: %OUTPUT_FILE%
    ) else (
        echo Error: Failed to repair video.
        pause
        exit /b 1
    )
)

timeout /t 3
exit /b 0

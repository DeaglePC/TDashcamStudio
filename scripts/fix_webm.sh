#!/bin/bash

# WebM Video Repair Script using FFmpeg
# This script fixes WebM files with missing duration or seeking issues
# usage: ./fix_webm.sh input.webm [output.webm]

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "Error: ffmpeg is not installed. Please install it first."
    exit 1
fi

if [ -z "$1" ]; then
    echo "Usage: $0 <input_file.webm> [output_file.webm]"
    echo "If output_file is not provided, it will be named <input>_fixed.webm"
    exit 1
fi

INPUT_FILE="$1"

# Check if input file exists
if [ ! -f "$INPUT_FILE" ]; then
    echo "Error: Input file '$INPUT_FILE' not found."
    exit 1
fi

# Determine output filename
if [ -z "$2" ]; then
    FILENAME=$(basename -- "$INPUT_FILE")
    EXTENSION="${FILENAME##*.}"
    BASENAME="${FILENAME%.*}"
    OUTPUT_FILE="${BASENAME}_fixed.${EXTENSION}"
else
    OUTPUT_FILE="$2"
fi

echo "Repairing '$INPUT_FILE' -> '$OUTPUT_FILE'..."

# -fflags +genpts: Regenerate missing PTS (fixes seeking/duration)
# -c copy: Copy streams without re-encoding (fast, no quality loss)
ffmpeg -i "$INPUT_FILE" -fflags +genpts -c copy -y "$OUTPUT_FILE"

if [ $? -eq 0 ]; then
    echo "Success! Fixed file saved as: $OUTPUT_FILE"
else
    echo "Failed to repair video with stream copy. Attempting re-encode (slower)..."
    ffmpeg -i "$INPUT_FILE" -c:v libvpx-vp9 -crf 30 -b:v 0 -c:a libopus -y "$OUTPUT_FILE"
    
    if [ $? -eq 0 ]; then
        echo "Success! Fixed file (re-encoded) saved as: $OUTPUT_FILE"
    else
        echo "Error: Failed to repair video."
        exit 1
    fi
fi

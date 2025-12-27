# FFmpeg 二进制文件下载指南

TeslaCam Player 需要在 `src-tauri/binaries/` 目录下放置各平台的 FFmpeg 二进制文件。

## Tauri 命名规范

根据 Tauri 的 `externalBin` 配置，二进制文件必须按以下格式命名：

| 平台 | 文件名 |
|------|--------|
| Windows x64 | `ffmpeg-x86_64-pc-windows-msvc.exe` |
| Linux x64 | `ffmpeg-x86_64-unknown-linux-gnu` |
| macOS Intel | `ffmpeg-x86_64-apple-darwin` |
| macOS Apple Silicon | `ffmpeg-aarch64-apple-darwin` |

## 下载链接

### Windows x64
- **下载地址**: https://github.com/BtbN/FFmpeg-Builds/releases/download/latest/ffmpeg-master-latest-win64-gpl.zip
- **解压后**: 找到 `bin/ffmpeg.exe`
- **重命名为**: `ffmpeg-x86_64-pc-windows-msvc.exe`

### Linux x64
- **下载地址**: https://github.com/BtbN/FFmpeg-Builds/releases/download/latest/ffmpeg-master-latest-linux64-gpl.tar.xz
- **解压后**: 找到 `bin/ffmpeg`
- **重命名为**: `ffmpeg-x86_64-unknown-linux-gnu`
- **注意**: 确保文件有执行权限 (`chmod +x`)

### macOS (Intel & Apple Silicon)
- **下载地址**: https://evermeet.cx/ffmpeg/getrelease/zip
- **解压后**: 找到 `ffmpeg`
- **复制两份**:
  - `ffmpeg-x86_64-apple-darwin` (Intel)
  - `ffmpeg-aarch64-apple-darwin` (Apple Silicon)
- **注意**: evermeet.cx 提供的是通用二进制文件，同时支持 Intel 和 Apple Silicon

**备选 macOS 下载**:
- https://ffmpeg.org/download.html#build-mac

## 自动下载脚本

### Windows (PowerShell)
```powershell
cd TeslaCamPlayer
.\scripts\download-ffmpeg.ps1
```

### macOS / Linux (Bash)
```bash
cd TeslaCamPlayer
chmod +x scripts/download-ffmpeg.sh
./scripts/download-ffmpeg.sh
```

### 按平台下载
```bash
# 只下载 Linux
./scripts/download-ffmpeg.sh --linux

# 只下载 macOS
./scripts/download-ffmpeg.sh --macos

# 只下载 Windows
./scripts/download-ffmpeg.sh --windows
```

## 验证

下载完成后，`src-tauri/binaries/` 目录应包含：

```
src-tauri/binaries/
├── .gitkeep
├── ffmpeg-x86_64-pc-windows-msvc.exe   (~130 MB)
├── ffmpeg-x86_64-unknown-linux-gnu     (~100 MB)
├── ffmpeg-x86_64-apple-darwin          (~80 MB)
└── ffmpeg-aarch64-apple-darwin         (~80 MB)
```

## 注意事项

1. **文件大小**: FFmpeg 二进制文件较大，建议添加到 `.gitignore`
2. **CI/CD**: 在 CI/CD 流程中使用脚本自动下载
3. **版本**: 建议使用最新稳定版本的 FFmpeg
4. **许可证**: 使用 GPL 版本以获得完整功能支持

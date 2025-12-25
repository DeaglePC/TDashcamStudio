<p align="center">
  <img src="src/logo-small.png" alt="TeslaCam 播放器 Logo" width="80" height="80">
</p>
<h1 align="center">TeslaCam 播放器</h1>

<p align="center"><a href="README.md">English</a> | 简体中文</p>

<p align="center">
  <a href="https://github.com/DeaglePC/TeslaCamPlayer/releases"><img src="https://img.shields.io/github/v/release/DeaglePC/TeslaCamPlayer?style=flat-square&color=blue" alt="Release"></a>
  <a href="https://github.com/DeaglePC/TeslaCamPlayer/releases"><img src="https://img.shields.io/github/downloads/DeaglePC/TeslaCamPlayer/total?style=flat-square&color=green" alt="Downloads"></a>
  <a href="https://github.com/DeaglePC/TeslaCamPlayer/blob/main/LICENSE"><img src="https://img.shields.io/github/license/DeaglePC/TeslaCamPlayer?style=flat-square" alt="License"></a>
  <a href="https://github.com/DeaglePC/TeslaCamPlayer/stargazers"><img src="https://img.shields.io/github/stars/DeaglePC/TeslaCamPlayer?style=flat-square" alt="Stars"></a>
  <a href="https://teslacam.dpc.cool"><img src="https://img.shields.io/badge/Website-teslacam.dpc.cool-blue?style=flat-square" alt="Website"></a>
</p>

一个现代化的、基于浏览器的 TeslaCam 录像查看器。通过一个清爽直观的界面，同步播放所有六个摄像头（前、后、左、右、左 B 柱、右 B 柱）的画面。现已推出**桌面应用程序**！

![Screenshot](./.github/assets/home.webp)

## ✨ 功能特性

### 🎥 视频播放
*   **六镜头同步播放**: 以 6 宫格布局完美同步播放所有六个摄像头（前、后、左、右、左 B 柱、右 B 柱）的画面。
*   **B 柱摄像头支持**: 完整支持特斯拉车内 B 柱摄像头，提供全方位覆盖。
*   **交互式画中画**: 点击任何画中画视图，即可将其切换为主视频。
*   **播放速度控制**: 以 0.5x、1.0x、1.5x 或 2.0x 的速度观看录像。
*   **实时时钟**: 播放时可看到录像对应的真实日期和时间。
*   **键盘快捷键**: 使用键盘控制播放（`空格键` 播放/暂停）。

### ✂️ 高级视频编辑
*   **可视化片段选择**: 在进度条上拖动蓝色手柄精确选择起始和结束位置。
*   **多片段处理**: 自动处理跨多个 1 分钟视频文件的片段。
*   **确认按钮**: 通过专用的确认按钮（✓）将片段选择和导出操作分离，提供视觉反馈。
*   **灵活的导出选项**:
    - 选择要导出的特定摄像头（前、后、左、右、左 B 柱、右 B 柱或任意组合）
    - 添加显示精确录制时间的实时时间戳水印
    - 将摄像头视图合成为网格视频（4 摄像头为 2x2，6 摄像头为 2x3）
    - 网格模式下增强文本可见性，字体大小翻倍（36px 标签，48px 时间戳）
*   **智能处理**: 所有时间戳在跨多片段剪辑中保持准确，自动计算时间。

### 🎨 现代化用户界面
*   **双主题界面**: 在浅色和深色模式之间切换，自动检测系统偏好！
*   **双语支持（中/英）**: 完整的界面翻译，支持中文和英文。自动检测浏览器语言。
*   **精美的导出弹窗**: 紫色渐变主题，现代卡片设计，流畅动画和悬停效果。
*   **可折叠侧边栏**: 隐藏事件列表，最大化视频观看空间。
*   **直观的图标**: 剪刀图标（✂️）用于剪辑，对号图标（✓）用于确认。
*   **进度可视化**: 导出期间带发光效果的渐变进度条。

### 🔍 智能功能
*   **智能筛选**: 按日期和事件类型（最近、已保存、哨兵）轻松筛选录像。
*   **地图集成**: 点击事件的城市名称，即可通过高德地图或谷歌地图查看具体位置。
*   **片段下载**: 直接从播放器下载当前正在播放的视频片段。
*   **零时刻支持**: 正确处理从开头（0:00）开始的片段。

### 🔒 隐私与性能
*   **100% 私密**: 所有处理都使用 Canvas API 和 MediaRecorder 在浏览器本地完成。您的文件绝不上传。
*   **纯原生 JavaScript**: 无框架依赖，性能优化。
*   **客户端渲染**: 直接在浏览器中进行实时视频处理和时间戳叠加。

## 🚀 使用方法

### 🖥️ 桌面应用程序（推荐）

从 [Releases](https://github.com/DeaglePC/TeslaCamPlayer/releases) 页面下载适合您平台的桌面应用程序：

| 平台 | 下载格式 |
|------|----------|
| Windows | `.exe` / `.msi` |
| macOS (Apple Silicon) | `.dmg` (aarch64) |
| macOS (Intel) | `.dmg` (x64) |
| Linux | `.deb` / `.AppImage` |

> **macOS 用户请注意：**
> 如果您遇到“应用已损坏，无法打开”的错误提示，这是由于 Apple 的安全隔离机制导致的。请在终端（Terminal）中运行以下命令来修复：
> ```bash
> sudo xattr -rd com.apple.quarantine /Applications/TeslaCam\ Player.app
> ```
> *(如果您的应用不在 /Applications 文件夹中，请相应调整路径)*

**桌面应用的优势：**
- 无需启动本地服务器
- 原生文件系统访问
- 更好的性能
- 离线可用

---

### 🌐 在线版本（最快方式）

您可以直接使用在线版本，无需任何安装：

**👉 [https://teslacam.dpc.cool/](https://teslacam.dpc.cool/)**

只需访问网站并选择您的 TeslaCam 文件夹即可立即开始使用。所有处理都在浏览器本地完成，确保您的隐私安全。

---

### 💻 本地部署

由于浏览器的安全策略，您需要通过本地 Web 服务器来运行此应用。

**1. 启动本地服务器**

如果您安装了 Node.js，最简单的方式是使用 `npx`：

```bash
npx http-server -p 8188 src
```

然后，打开浏览器并访问 `http://localhost:8188`。

**2. 通过 Docker 部署**

如果您安装了 Docker，可以非常方便地在容器中运行此应用。

**方式 A: 使用 Docker Compose (推荐)**

最简单的方式是使用 Docker Compose 和预构建的镜像：

1.  **启动应用:**
    ```bash
    docker compose up -d
    ```

2.  **访问应用:**
    打开浏览器并访问 `http://localhost:8188`。

3.  **停止应用:**
    ```bash
    docker compose down
    ```

4.  **查看日志:**
    ```bash
    docker compose logs -f
    ```

5.  **更新到最新版本:**
    ```bash
    docker compose pull
    docker compose up -d
    ```

**方式 B: 使用 Docker 命令行**

1.  **拉取并运行预构建的镜像:**
    ```bash
    docker run -d -p 8188:80 --name teslacamplayer dupengcheng66666/teslacamplayer:latest
    ```

2.  **或者构建自己的镜像:**
    ```bash
    docker build -t teslacam-player .
    docker run -d -p 8188:80 teslacam-player
    ```

3.  **访问应用:**
    打开浏览器并访问 `http://localhost:8188`。

**3. 选择您的 TeslaCam 文件夹**

1.  点击 "📁 选择文件夹" 按钮。
2.  在文件选择对话框中，找到并选择您 U 盘中的根 `TeslaCam` 文件夹。

**4. 浏览和播放**

![视频播放](.github/assets/play.webp)

*   您的录像将按日期在侧边栏中列出。
*   使用筛选器查找特定事件。
*   点击任何事件即可开始播放。
*   点击事件列表中的城市名称(如果存在),可以在高德地图或谷歌地图上打开该位置。
*   暂停时,点击标题栏的 💾 图标即可下载当前视频文件。

**5. 剪辑和导出视频**

![剪辑选择](.github/assets/clip.webp)

1.  点击视频控制栏中的 **✂️ (剪刀)** 图标进入剪辑模式。
2.  **拖动蓝色手柄** 在进度条上选择您想要剪辑的起始和结束位置。
3.  点击 **✓ (对号)** 图标确认选择并打开导出对话框。

![导出对话框](.github/assets/export.webp)

4.  **配置导出选项**:
    - **选择摄像头**: 选择要导出的摄像头角度（前、后、左、右、左 B 柱、右 B 柱或任意组合）
    - **添加时间水印**: 叠加显示精确录制时间的实时时间戳
    - **合成网格视频**: 将所有选中的摄像头合成为网格视图（2x2 或 2x3），增强文本可见性
5.  点击 **"开始导出"** 处理并下载您的片段。

**主要特性：**
- 自动处理跨多个 1 分钟视频片段的剪辑
- 在所有片段中保持准确的时间戳
- 网格视频采用双倍大小的文本（36px 摄像头标签，48px 时间戳）以提高可读性
- 所有处理都使用 Canvas API 和 MediaRecorder 在浏览器本地完成
- 导出的视频为 WebM 格式，采用 H.264 编解码器

*注意：对于超过 1 分钟的剪辑，应用程序会自动处理所有需要的视频片段并无缝连接它们。*

## ⌨️ 键盘快捷键

*   **`空格键`**: 播放 / 暂停视频。

## 🔒 隐私优先

本工具将隐私放在首位。**所有文件处理都直接在您的浏览器中进行。** 您的视频和数据永远不会被上传到任何服务器。完全私密、安全。

## 🛠️ 技术栈

*   **HTML5, CSS3, JavaScript (ES6+)**
*   无框架，为追求性能仅使用原生 JS。
*   使用文件系统访问 API 处理本地文件。
*   **Tauri** 用于桌面应用程序（Rust 后端 + WebView）。

## 📄 许可证

MIT 许可证


<p align="center">
  <img src="src/logo-small.png" alt="TDashcam Studio Logo" width="80" height="80">
</p>
<h1 align="center">TDashcam Studio</h1>

<p align="center"><a href="README.md">English</a> | 简体中文</p>

<p align="center">
  <a href="https://github.com/DeaglePC/TDashcamStudio/releases"><img src="https://img.shields.io/github/v/release/DeaglePC/TDashcamStudio?style=flat-square&color=blue" alt="Release"></a>
  <a href="https://github.com/DeaglePC/TDashcamStudio/releases"><img src="https://img.shields.io/github/downloads/DeaglePC/TDashcamStudio/total?style=flat-square&color=green" alt="Downloads"></a>
  <a href="https://github.com/DeaglePC/TDashcamStudio/blob/main/LICENSE"><img src="https://img.shields.io/github/license/DeaglePC/TDashcamStudio?style=flat-square" alt="License"></a>
  <a href="https://github.com/DeaglePC/TDashcamStudio/stargazers"><img src="https://img.shields.io/github/stars/DeaglePC/TDashcamStudio?style=flat-square" alt="Stars"></a>
  <a href="https://teslacam.dpc.cool"><img src="https://img.shields.io/badge/Website-teslacam.dpc.cool-blue?style=flat-square" alt="Website"></a>
</p>

一个现代化的、基于浏览器的特斯拉行车记录仪播放器。通过一个清爽直观的界面，同步播放所有六个摄像头（前、后、左、右、左 B 柱、右 B 柱）的画面。现已推出**桌面应用程序**！

## 🆚 为什么选择 TDashcam Studio？

相比于特斯拉车载系统自带的原始播放器，本项目提供了更强大的功能和更极致的体验：

| 功能特性 | Tesla 车机播放 | 直接在 PC 播放 | TDashcam Studio (本项目) |
| :--- | :--- | :--- | :--- |
| **多视角同步** | ✅ 支持 6 路 | ❌ 仅能逐个文件打开，无法同步 | ✅ **6 路画面完美同步，布局直观** |
| **查看体验** | 仅限车内屏幕，无法离车 | 电脑大屏，但文件管理极度混乱 | **多端适配**，大屏且按事件列表化管理 |
| **筛选查找** | 仅限简单分类 | ❌ 需在成百上千文件夹中手动找 | ✅ **按日期、时间、事件类型智能筛选** |
| **行车数据** | ✅ 支持元数据展示 | ❌ 仅看视频，无法读取隐藏数据 | ✅ **仪表盘可视化：车速、踏板、AP等** |
| **视频剪辑** | ❌ 不支持 | ❌ 需专业剪辑软件，门槛高 | ✅ **可视化拖拽剪辑，导出视频携带行车元数据水印** |
| **一键分享** | ❌ 极难分享 | ❌ 原始分段视频，查看/分享不便 | ✅ **自动合成网格视频，自带时间戳及行车信息水印** |
| **位置集成** | 简单显示位置 | ❌ 没有任何地图信息 | ✅ **显示街名，一键跳转高德/Google地图** |
| **隐私保护** | - | ✅ 本地播放 | ✅ **100% 本地处理**，隐私无忧 |


![Screenshot](./.github/assets/home.webp)

## 📺 功能演示

| 功能描述 | 效果演示 |
| :--- | :--- |
| **快速开始**：支持文件夹拖拽，插卡即看 | ![快速开始](.github/assets/GIF/drop-open.webp) |
| **现代化 UI**：支持深色/浅色模式自动切换，交互丝滑 | ![现代化 UI](.github/assets/GIF/ui.gif) |
| **智能筛选**：按日期、事件类型快速定位关键录像 | ![智能筛选](.github/assets/GIF/filter.gif) |
| **地图集成**：显示具体街道，一键跳转高德/Google地图 | ![地图集成](.github/assets/GIF/map.webp) |
| **倍速控制**：支持 0.5x - 2.0x 灵活变速播放 | ![倍速控制](.github/assets/GIF/speed.gif) |
| **行车数据**：实时展示车速、转向灯、油门深度、刹车踏板、AP/FSD 及 方向盘角度等 | ![行车数据](.github/assets/GIF/meta-data.webp) |
| **多镜头同步**：所有视角完美同步，布局自由切换 | ![多镜头同步](.github/assets/GIF/play.webp) |
| **可视化剪辑**：进度条直接拖拽，导出所见即所得 | ![可视化剪辑](.github/assets/GIF/export.webp) |
| **导出预览**：自动合成网格视频，自带行车数据水印 | ![导出预览](.github/assets/GIF/6-exported-play.webp) |

## ✨ 功能特性


### 🎥 视频播放
*   **多视角布局切换**: 完美同步所有镜头画面，支持多种播放布局：6 宫格全视角、新版 4 宫格、旧版 4 宫格以及单个摄像头全屏播放。
*   **B 柱摄像头支持**: 完整支持特斯拉车内 B 柱摄像头，提供全方位视角覆盖。
*   **实时仪表盘**: 自动解析视频流中嵌入的 SEI 元数据，实时显示车速、档位、方向盘角度、油门/刹车状态、AP/FSD 状态及 GPS 坐标等。
*   **智能筛选**: 支持按日期、时间及事件类型（最近、已保存、哨兵）轻松筛选和查找录像。
*   **地图集成**: 实时显示录像发生地的街道名称，点击即可跳转至高德或 Google 地图查看精准位置。
*   **交互式体验**: 支持画中画切换、0.5x - 2.0x 倍速播放、一键下载当前视频片段、键盘快捷键控制（`空格` 暂停/播放）。


> **注意：** 行车元数据仅在使用**车机系统版本 2025.44.25.11 或更高版本**录制的视频中可用。

![元数据展示1](.github/assets/screenshot1.webp)
![元数据展示2](.github/assets/screenshot2.webp)

### ✂️ 视频剪辑导出

*   **可视化精确剪辑**: 在进度条上直接拖动蓝色手柄，精准选择想要导出的起始和结束时间点。
*   **多片段无缝处理**: 即使剪辑范围跨越了多个 1 分钟的原始视频文件，系统也会自动进行无缝合并处理。
*   **一键网格合成**: 支持将选中的多个摄像头画面合成为一个网格视频（2x2 或 2x3），并自动添加双倍大小的清晰文本标签。
*   **实时时间戳和行车信息水印**: 在导出视频时可选择添加实时时间戳及行车信息水印（车速、档位、AP 状态等），确保录制细节清晰可查。
*   **灵活导出配置**: 可自由选择导出的摄像头组合，支持一键确认选择并提供清晰的导出进度反馈。

### 🎨 现代化用户界面
*   **双主题模式**: 完美适配浅色和深色模式，支持跟随系统自动切换。
*   **双语支持**: 完整的中文和英文界面翻译，根据浏览器语言自动切换。
*   **极致视觉体验**: 采用现代化的卡片式设计、平滑的动画效果以及紫色渐变的主题风格。
*   **本地处理 & 隐私安全**: 所有视频处理均在浏览器本地完成（Canvas API & MediaRecorder），数据绝不上传云端。


## 🚀 使用方法

### 🖥️ 桌面应用程序（推荐）

从 [Releases](https://github.com/DeaglePC/TDashcamStudio/releases) 页面下载适合您平台的桌面应用程序：

| 平台 | 下载格式 |
|------|----------|
| Windows | `.exe` / `.msi` |
| macOS (Apple Silicon) | `.dmg` (aarch64) |
| macOS (Intel) | `.dmg` (x64) |
| Linux | `.deb` / `.AppImage` |

> **macOS 用户请注意：**
> 如果您遇到"应用已损坏，无法打开"的错误提示，这是由于 Apple 的安全隔离机制导致的。请在终端（Terminal）中运行以下命令来修复：
> ```bash
> sudo xattr -rd com.apple.quarantine /Applications/TDashcam\ Studio.app
> ```
> *(如果您的应用不在 /Applications 文件夹中，请相应调整路径)*

**桌面应用的优势：**
- 无需启动本地服务器
- 原生文件系统访问
- 更好的性能
- 离线可用

![桌面应用程序](.github/assets/mac.webp)

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
    docker run -d -p 8188:80 --name tdashcam-studio dupengcheng66666/tdashcam-studio:latest
    ```

2.  **或者构建自己的镜像:**
    ```bash
    docker build -t tdashcam-studio .
    docker run -d -p 8188:80 tdashcam-studio
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

AGPL-3.0 许可证


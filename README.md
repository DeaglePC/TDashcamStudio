<p align="center">
  <img src="src/logo.png" alt="TeslaCam Player Logo" width="80" height="80">
</p>
<h1 align="center">TeslaCam Player</h1>

<p align="center">English | <a href="README_CN.md">简体中文</a></p>

<p align="center">
  <a href="https://github.com/DeaglePC/TeslaCamPlayer/releases"><img src="https://img.shields.io/github/v/release/DeaglePC/TeslaCamPlayer?style=flat-square&color=blue" alt="Release"></a>
  <a href="https://github.com/DeaglePC/TeslaCamPlayer/releases"><img src="https://img.shields.io/github/downloads/DeaglePC/TeslaCamPlayer/total?style=flat-square&color=green" alt="Downloads"></a>
  <a href="https://github.com/DeaglePC/TeslaCamPlayer/blob/main/LICENSE"><img src="https://img.shields.io/github/license/DeaglePC/TeslaCamPlayer?style=flat-square" alt="License"></a>
  <a href="https://github.com/DeaglePC/TeslaCamPlayer/stargazers"><img src="https://img.shields.io/github/stars/DeaglePC/TeslaCamPlayer?style=flat-square" alt="Stars"></a>
  <a href="https://teslacam.dpc.cool"><img src="https://img.shields.io/badge/Website-teslacam.dpc.cool-blue?style=flat-square" alt="Website"></a>
</p>

A modern, browser-based viewer for your TeslaCam footage. Play all six camera angles (Front, Back, Left, Right, Left B-Pillar, Right B-Pillar) simultaneously with a sleek and intuitive interface. Now available as a **desktop application**!

![Screenshot](./.github/assets/home.webp)

## ✨ Features

### 🎥 Video Playback
*   **Six-Camera Sync Playback**: View footage from all six cameras (Front, Back, Left, Right, Left B-Pillar, Right B-Pillar) at once, perfectly synchronized in a 6-grid layout.
*   **B-Pillar Camera Support**: Full support for Tesla's interior B-pillar cameras for comprehensive coverage.
*   **Interactive PiP**: Click on any Picture-in-Picture view to make it the main video.
*   **Playback Speed Control**: Watch footage at 0.5x, 1.0x, 1.5x, or 2.0x speed.
*   **Real-Time Clock**: See the actual date and time of the recording as you play.
*   **Keyboard Shortcuts**: Control playback with your keyboard (`Space` for play/pause).

### ✂️ Advanced Video Editing
*   **Visual Clip Selection**: Drag blue handles on the progress bar to select precise start and end points.
*   **Multi-Segment Processing**: Automatically handles clips spanning multiple 1-minute video files.
*   **Confirm Button**: Separate clip selection from export action with a dedicated confirm button (✓) and visual feedback.
*   **Flexible Export Options**:
    - Select specific cameras to export (Front, Back, Left, Right, Left B-Pillar, Right B-Pillar, or any combination)
    - Add real-time timestamp watermarks showing exact recording time
    - Merge camera views into a grid video (2x2 for 4 cameras, 2x3 for 6 cameras)
    - Enhanced text visibility with double-sized fonts in grid mode (36px labels, 48px timestamps)
*   **Smart Processing**: All timestamps remain accurate across multi-segment clips with automatic time calculation.

### 🎨 Modern User Interface
*   **Dual-Theme Interface**: Switch between light and dark modes. Automatically detects your system's preference!
*   **Bilingual Support (EN/ZH)**: Complete interface translation in English and Chinese. Auto-detects browser language.
*   **Beautiful Export Modal**: Purple gradient theme with modern card design, smooth animations, and hover effects.
*   **Collapsible Sidebar**: Maximize video space by hiding the event list.
*   **Intuitive Icons**: Scissors icon (✂️) for clipping, checkmark (✓) for confirmation.
*   **Progress Visualization**: Gradient progress bars with glowing effects during export.

### 🔍 Smart Features
*   **Intuitive Filtering**: Easily filter recordings by date and event type (Recent, Saved, Sentry).
*   **Map Integration**: Click on the event's city to view the location on Gaode Map or Google Maps.
*   **Clip Download**: Download the currently playing video clip directly from the player.
*   **Zero-Time Support**: Correctly handles clips starting from the beginning (0:00).

### 🔒 Privacy & Performance
*   **100% Private**: All processing is done locally in your browser using Canvas API and MediaRecorder. Your files are never uploaded.
*   **Pure Vanilla JavaScript**: No frameworks, optimized for performance.
*   **Client-Side Rendering**: Real-time video processing with timestamp overlay directly in browser.

## 🚀 How to Use

### 🖥️ Desktop Application (Recommended)

Download the desktop application for your platform from the [Releases](https://github.com/DeaglePC/TeslaCamPlayer/releases) page:

| Platform | Download |
|----------|----------|
| Windows | `.exe` / `.msi` |
| macOS (Apple Silicon) | `.dmg` (aarch64) |
| macOS (Intel) | `.dmg` (x64) |
| Linux | `.deb` / `.AppImage` |

> **Note for macOS Users:**
> If you encounter the "App is damaged and can't be opened" error, this is due to Apple's security quarantine. Please run the following command in Terminal to fix it:
> ```bash
> sudo xattr -rd com.apple.quarantine /Applications/TeslaCam\ Player.app
> ```
> *(Adjust the path if your app is not in the /Applications folder)*

**Advantages of Desktop App:**
- No need to start a local server
- Native file system access
- Better performance
- Works offline

---

### 🌐 Online Version (Quickest Way)

You can directly use the online version without any installation:

**👉 [https://teslacam.dpc.cool/](https://teslacam.dpc.cool/)**

Simply visit the website and select your TeslaCam folder to start using it right away. All processing is done locally in your browser, ensuring your privacy.

---

### 💻 Local Deployment

Because of web browser security policies, you need to run this application from a local web server.

**1. Start the Local Server**

If you have Node.js installed, the easiest way is to use `npx`:

```bash
npx http-server -p 8188 src
```

Then, open your browser and go to `http://localhost:8188`.

**2. Deploy with Docker**

If you have Docker installed, you can easily run the application in a container.

**Option A: Using Docker Compose (Recommended)**

The easiest way is to use Docker Compose with the pre-built image:

1.  **Start the application:**
    ```bash
    docker compose up -d
    ```

2.  **Access the application:**
    Open your browser and go to `http://localhost:8188`.

3.  **Stop the application:**
    ```bash
    docker compose down
    ```

4.  **View logs:**
    ```bash
    docker compose logs -f
    ```

5.  **Update to latest version:**
    ```bash
    docker compose pull
    docker compose up -d
    ```

**Option B: Using Docker CLI**

1.  **Pull and run the pre-built image:**
    ```bash
    docker run -d -p 8188:80 --name teslacamplayer dupengcheng66666/teslacamplayer:latest
    ```

2.  **Or build your own image:**
    ```bash
    docker build -t teslacam-player .
    docker run -d -p 8188:80 teslacam-player
    ```

3.  **Access the application:**
    Open your browser and go to `http://localhost:8188`.

**3. Select Your TeslaCam Folder**

1.  Click the "📁 Select Folder" button.
2.  In the file selection dialog, navigate to and select the root `TeslaCam` folder from your USB drive.

**4. Browse and Play**

![Video Playback](.github/assets/play.webp)

*   Your recordings will appear in the sidebar, sorted by date.
*   Use the filters to find specific events.
*   Click on any event to start playing.
*   Click on a city name (if available) to open the location on Gaode Map or Google Maps.
*   When paused, click the 💾 icon in the header to download the current video file.

**5. Clip and Export Videos**

![Clip Selection](.github/assets/clip.webp)

1.  Click the **✂️ (scissors)** icon in the video controls to enter clip mode.
2.  **Drag the blue handles** on the progress bar to select the start and end points of your desired clip.
3.  Click the **✓ (checkmark)** icon to confirm your selection and open the export dialog.

![Export Dialog](.github/assets/export.webp)

4.  **Configure export options**:
    - **Select Cameras**: Choose which camera angles to export (Front, Back, Left, Right, Left B-Pillar, Right B-Pillar, or any combination)
    - **Add Timestamp Watermark**: Overlay real-time timestamp showing the exact recording time
    - **Merge as Grid Video**: Combine all selected cameras into a grid view (2x2 or 2x3) with enhanced text visibility
5.  Click **"Start Export"** to process and download your clip(s).

**Key Features:**
- Automatically handles clips spanning multiple 1-minute video segments
- Maintains accurate timestamps across all segments
- Grid videos feature double-sized text (36px camera labels, 48px timestamps) for better readability
- All processing is done locally in your browser using Canvas API and MediaRecorder
- Exported videos are in WebM format with H.264 codec

*Note: For clips longer than 1 minute, the application automatically processes all required video segments and concatenates them seamlessly.*

## ⌨️ Keyboard Shortcuts

*   **`Spacebar`**: Play / Pause the video.

## 🔒 Privacy First

This tool is built with privacy as a top priority. **All file processing happens directly in your browser.** Your videos and data are never uploaded to any server. It's completely private and secure.

## 🛠️ Tech Stack

*   **HTML5, CSS3, JavaScript (ES6+)**
*   No frameworks, just pure vanilla JS for performance.
*   File System Access API for local file handling.
*   **Tauri** for desktop application (Rust backend + WebView).

## 📄 License

MIT License


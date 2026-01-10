 const i18n = {
    en: {
        pageTitle: "TeslaCam Player",
        headerTitle: "TeslaCam Player",
        toggleSidebar: "Toggle Sidebar",
        toggleTheme: "Toggle Theme",
        toggleLanguage: "切换到中文",
        drivingRecords: "Driving Records",
        date: "Date",
        eventType: "Event Type",
        allTypes: "📂 All Types",
        recentClips: "🕒 Recent Clips",
        savedClips: "💾 Saved Clips",
        sentryClips: "🤖 Sentry Clips",
        noRecordsFound: "No records found",
        selectFolder: "📁 Select Folder",
        selectFiles: "📁 Select Files",
        helpStep1: "Insert your Tesla USB drive into your PC",
        helpStep2: "Select or drag the 'TeslaCam' directory from the drive",
        helpStep1IOS: "Copy TeslaCam videos to your iPad/iPhone",
        helpStep2IOS: "Select the video files (e.g., 2024-01-15_12-30-00-front.mp4)",
        helpNote: "Note: This tool does not upload your data. All operations are performed locally. (Gaode Maps may have inaccuracies due to limited WGS-84 support.)",
        desktopTip: "💡 Tip: Due to browser limitations, it is recommended to use the desktop version for better performance.",
        desktopDownload: "Download Desktop Version",
        mapModalTitle: "View on Map",
        gaodeMap: "Gaode Map",
        googleMap: "Google Map",
        revealFile: "Reveal File Path",
        downloadFile: "Download Current File",
        filePathAlertTitle: "Current Video File Path",
        copiedToClipboard: "Copied to clipboard",
        noFilePath: "Could not determine file path for the active camera.",
        selectDate: "Select Date",
        minutes: "minutes",
        preview: "Preview",
        noSignal: "No Signal",
        front: "Front",
        back: "Back",
        left: "Left",
        right: "Right",
        leftPillar: "Left Pillar",
        rightPillar: "Right Pillar",
        play: "Play",
        pause: "Pause",
        toggleDay: "Switch to Day Mode",
        toggleNight: "Switch to Night Mode",
        invalidFolder: "This does not appear to be a valid TeslaCam directory. Please ensure you select the 'TeslaCam' directory which contains subfolders like RecentClips, SavedClips, etc.",
        clipVideo: "Clip Video",
        confirmClip: "Confirm Clip Range",
        exportClip: "Export Video Clip",
        clipDuration: "Duration:",
        clipStartTime: "Start Time:",
        clipEndTime: "End Time:",
        selectCameras: "Select Cameras:",
        addTimestamp: "Add Timestamp Watermark",
        mergeVideos: "Merge as Grid Video",
        startExport: "Start Export",
        cancel: "Cancel",
        preparing: "Preparing...",
        processing: "Processing...",
        exporting: "Exporting...",
        complete: "Complete!",
        selectClipRange: "Select clip range on progress bar first",
        selectAtLeastOneCamera: "Please select at least one camera",
        exportFailed: "Export failed: ",
        metadata: "Metadata",
        loadingMetadata: "Loading...",
        noMetadata: "No metadata found",
        speed: "Speed",
        gear: "Gear",
        steering: "Steering",
        accelerator: "Accelerator",
        brake: "Brake",
        brakeApplied: "Applied",
        brakeNotApplied: "Not applied",
        blinker: "Blinker",

        autopilot: "Autopilot",
        gps: "GPS",
        heading: "Heading",
        acceleration: "Acceleration",
        gearPark: "Park",
        gearDrive: "Drive",
        gearReverse: "Reverse",
        gearNeutral: "Neutral",
        blinkerLeft: "Left",
        blinkerRight: "Right",
        blinkerBoth: "Both",
        blinkerOff: "Off",
        autopilotNone: "None",
        autopilotSelfDriving: "FSD",
        autopilotAutosteer: "Autosteer",
        autopilotTACC: "TACC"
    },
    zh: {
        pageTitle: "TeslaCam 播放器",
        headerTitle: "TeslaCam 播放器",
        toggleSidebar: "切换侧边栏",
        toggleTheme: "切换主题",
        toggleLanguage: "Switch to English",
        drivingRecords: "行车记录",
        date: "日期",
        eventType: "事件类型",
        allTypes: "🎥 所有类型",
        recentClips: "🕒 最近片段",
        savedClips: "💾 保存片段",
        sentryClips: "🤖 哨兵模式",
        noRecordsFound: "没有找到匹配的记录",
        selectFolder: "📁 选择文件夹",
        selectFiles: "📁 选择文件",
        helpStep1: "插入特斯拉U盘到你的PC",
        helpStep2: "选择或拖拽U盘中的TeslaCam目录",
        helpStep1IOS: "将TeslaCam视频复制到iPad/iPhone",
        helpStep2IOS: "选择视频文件（如 2024-01-15_12-30-00-front.mp4）",
        helpNote: "注意：本工具不会上传你的数据，一切操作都是本地行为。（由于高德对WGS-84支持不够，所以高德地图有误差）",
        desktopTip: "💡 提示：由于浏览器有诸多限制，建议使用桌面版获得更好的性能体验。",
        desktopDownload: "下载桌面版",
        mapModalTitle: "在地图上查看",
        gaodeMap: "高德地图",
        googleMap: "谷歌地图",
        revealFile: "显示文件路径",
        downloadFile: "下载当前文件",
        filePathAlertTitle: "当前视频文件路径",
        copiedToClipboard: "已复制到剪贴板",
        noFilePath: "无法获取当前摄像头的文件路径",
        selectDate: "选择日期",
        minutes: "分钟",
        preview: "预览图",
        noSignal: "无信号",
        grid6: "6宫格",
        grid4: "4宫格",
        legacy: "画中画",
        front: "前",
        back: "后",
        left: "左",
        right: "右",
        leftPillar: "左柱",
        rightPillar: "右柱",
        play: "播放",
        pause: "暂停",
        toggleDay: "切换到日间模式",
        toggleNight: "切换到夜间模式",
        invalidFolder: "这似乎不是一个有效的TeslaCam目录。请确保您选择了包含RecentClips, SavedClips等子文件夹的TeslaCam目录。",
        clipVideo: "剪辑视频",
        confirmClip: "确认剪辑范围",
        exportClip: "导出视频片段",
        clipDuration: "选中时长:",
        clipStartTime: "起始时间:",
        clipEndTime: "结束时间:",
        selectCameras: "选择摄像头:",
        addTimestamp: "添加时间水印",
        mergeVideos: "合成四宫格视频",
        startExport: "开始导出",
        cancel: "取消",
        preparing: "准备中...",
        processing: "处理中...",
        exporting: "导出中...",
        complete: "完成!",
        selectClipRange: "请先在进度条上选择剪辑范围",
        selectAtLeastOneCamera: "请至少选择一个摄像头",
        exportFailed: "导出失败: ",
        metadata: "元数据",
        loadingMetadata: "加载中...",
        noMetadata: "无元数据",
        speed: "速度",
        gear: "档位",
        steering: "方向盘角度",
        accelerator: "油门踏板",
        brake: "刹车",
        brakeApplied: "踩下",
        brakeNotApplied: "未踩",
        blinker: "转向灯",
        autopilot: "自动驾驶",
        gps: "GPS 坐标",
        heading: "航向",
        acceleration: "加速度",
        gearPark: "驻车 (P)",
        gearDrive: "前进 (D)",
        gearReverse: "倒车 (R)",
        gearNeutral: "空档 (N)",
        blinkerLeft: "左",
        blinkerRight: "右",
        blinkerBoth: "双闪",
        blinkerOff: "关",
        autopilotNone: "无",
        autopilotSelfDriving: "完全自动驾驶 (FSD)",
        autopilotAutosteer: "自动辅助转向",
        autopilotTACC: "自适应巡航"
    }
};

// --- Tauri Helper Functions ---
function getTauri() {
    return window.__TAURI__;
}

function getFileUrl(file) {
    const tauri = getTauri();
    if (tauri && file.path) {
        // Tauri 2: use core.convertFileSrc
        let convertFn = null;
        if (tauri.core && tauri.core.convertFileSrc) {
            convertFn = tauri.core.convertFileSrc;
        } else if (tauri.tauri && tauri.tauri.convertFileSrc) {
            convertFn = tauri.tauri.convertFileSrc;
        } else if (tauri.convertFileSrc) {
            convertFn = tauri.convertFileSrc;
        }
        
        if (convertFn) {
            const url = convertFn(file.path);
            console.log('[getFileUrl] path:', file.path, '-> url:', url);
            return url;
        }
        
        // Fallback: return path directly (won't work but helps debug)
        console.warn('[getFileUrl] No convertFileSrc found, returning raw path');
        return file.path;
    }
    return URL.createObjectURL(file);
}

class TauriFile {
    constructor(entry, rootPath) {
        this.name = entry.name;
        this.path = entry.path; 
        
        // Calculate webkitRelativePath - must use forward slashes
        if (this.path && rootPath) {
             // Normalize all separators to forward slashes
             const normalizedPath = this.path.replace(/\\/g, '/');
             const normalizedRoot = rootPath.replace(/\\/g, '/');
             
             // Get the root folder name (e.g., "TeslaCam")
             const rootName = normalizedRoot.split('/').filter(Boolean).pop();
             
             // Get the relative part after the root path
             const relativePart = normalizedPath.substring(normalizedRoot.length);
             const cleanRelative = relativePart.startsWith('/') ? relativePart.slice(1) : relativePart;
             
             if (cleanRelative) {
                 // Ensure forward slashes in the final path
                 this.webkitRelativePath = (rootName + '/' + cleanRelative).replace(/\\/g, '/');
             } else {
                 this.webkitRelativePath = this.name;
             }
             
             console.log('[TauriFile] path:', this.path, '-> webkitRelativePath:', this.webkitRelativePath);
        } else {
             this.webkitRelativePath = this.name;
        }

        this.lastModified = 0;
        this.size = 0; 
        this.type = this.guessType(this.name);
    }
    
    guessType(name) {
        if (name.endsWith('.mp4')) return 'video/mp4';
        if (name.endsWith('.json')) return 'application/json';
        if (name.endsWith('.png')) return 'image/png';
        return '';
    }

    async text() {
        const tauri = getTauri();
        if (!tauri) throw new Error("Tauri API not found");
        return await tauri.fs.readTextFile(this.path);
    }
    
    async arrayBuffer() {
        const tauri = getTauri();
        if (!tauri) throw new Error("Tauri API not found");
        const binary = await tauri.fs.readFile(this.path);
        return binary.buffer;
    }
}
// --- End Tauri Helper ---

class MetadataManager {
    constructor(viewer) {
        this.viewer = viewer;
        this.protoRoot = null;
        this.SeiMetadata = null;
        this.currentMetadata = []; // Array of metadata objects for the current segment
        this.isLoading = false;
        
        this.dom = {
            panel: document.getElementById('metadataPanel'),
            switchBtn: document.getElementById('metaSwitchBtn'),
            loading: document.getElementById('metadataLoading'),
            empty: document.getElementById('metadataEmpty'),
            items: document.getElementById('metadataItems'),
            values: {
                speed: document.getElementById('metaSpeed'),
                gear: document.getElementById('metaGear'),
                steering: document.getElementById('metaSteering'),
                steeringIcon: document.getElementById('metaSteeringIcon'),
                steeringContainer: document.getElementById('metaSteeringContainer'),
                blinkerLeft: document.getElementById('metaBlinkerLeft'),
                blinkerRight: document.getElementById('metaBlinkerRight'),
                brakeIcon: document.getElementById('metaBrakeIcon'),
                brakeActiveGroup: document.getElementById('brakeActiveGroup'),
                acceleratorIcon: document.getElementById('metaAcceleratorIcon'),
                accelFillRect: document.getElementById('accelFillRect'),
                autopilot: document.getElementById('metaAutopilot'),
                gps: document.getElementById('metaGPS'),
                heading: document.getElementById('metaHeading'),
                acceleration: document.getElementById('metaAcceleration')
            }
        };
        
        this.initializeProtobuf();
        this.bindEvents();
    }
    
    async initializeProtobuf() {
        try {
            if (typeof protobuf === 'undefined') {
                console.warn("[MetadataManager] protobuf.js not loaded yet, retrying in 1s");
                setTimeout(() => this.initializeProtobuf(), 1000);
                return;
            }
            this.protoRoot = await protobuf.load("dashcam.proto");
            this.SeiMetadata = this.protoRoot.lookupType("SeiMetadata");
            console.log("[MetadataManager] Protobuf initialized");
        } catch (err) {
            console.error("[MetadataManager] Failed to load protobuf:", err);
        }
    }
    
    bindEvents() {
        // Toggle from header button
        if (this.dom.switchBtn) {
            this.dom.switchBtn.addEventListener('click', () => {
                const isCollapsed = this.dom.panel.classList.contains('collapsed');
                this.setCollapsed(!isCollapsed);
            });
        }

        // Draggable logic
        let isDragging = false;
        let offsetX, offsetY;

        this.dom.panel.addEventListener('mousedown', (e) => {
            // Only drag if left click
            if (e.button !== 0) return;
            if (this.dom.panel.classList.contains('collapsed')) return;

            isDragging = true;
            this.dom.panel.classList.add('dragging');
            
            // Get the container's bounding box to calculate relative coordinates
            const parentRect = this.dom.panel.parentElement.getBoundingClientRect();
            const rect = this.dom.panel.getBoundingClientRect();
            
            // Calculate the offset of the mouse relative to the panel's top-left corner
            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;

            // Add global mouse listeners
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
            
            e.preventDefault();
        });

        const onMouseMove = (e) => {
            if (!isDragging) return;

            const parentRect = this.dom.panel.parentElement.getBoundingClientRect();
            
            // Calculate new position relative to the parent container
            let newLeft = e.clientX - parentRect.left - offsetX;
            let newTop = e.clientY - parentRect.top - offsetY;

            // Boundary checks
            const panelRect = this.dom.panel.getBoundingClientRect();
            newLeft = Math.max(0, Math.min(newLeft, parentRect.width - panelRect.width));
            newTop = Math.max(0, Math.min(newTop, parentRect.height - panelRect.height));

            this.dom.panel.style.left = `${newLeft}px`;
            this.dom.panel.style.top = `${newTop}px`;
            this.dom.panel.classList.add('is-moved');
            this.dom.panel.style.transform = 'none'; 
            this.dom.panel.style.margin = '0';
        };

        const onMouseUp = () => {
            isDragging = false;
            this.dom.panel.classList.remove('dragging');
            this.dom.panel.style.transform = ''; // Allow CSS to handle scale/transitions
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);

            // Convert to percentages for responsiveness
            const parentRect = this.dom.panel.parentElement.getBoundingClientRect();
            const panelRect = this.dom.panel.getBoundingClientRect();
            
            if (parentRect.width > 0 && parentRect.height > 0) {
                const leftPct = ((panelRect.left - parentRect.left) / parentRect.width) * 100;
                const topPct = ((panelRect.top - parentRect.top) / parentRect.height) * 100;
                
                this.dom.panel.style.left = `${leftPct}%`;
                this.dom.panel.style.top = `${topPct}%`;
            }
        };

        // Handle window resize to keep panel in bounds
        window.addEventListener('resize', () => {
            if (this.dom.panel.style.left && this.dom.panel.style.left.includes('%')) {
                this.ensureInBounds();
            }
        });
    }

    ensureInBounds() {
        const parentRect = this.dom.panel.parentElement.getBoundingClientRect();
        const panelRect = this.dom.panel.getBoundingClientRect();
        
        if (panelRect.right > parentRect.right) {
            const newLeft = Math.max(0, parentRect.width - panelRect.width);
            this.dom.panel.style.left = `${(newLeft / parentRect.width) * 100}%`;
        }
        if (panelRect.bottom > parentRect.bottom) {
            const newTop = Math.max(0, parentRect.height - panelRect.height);
            this.dom.panel.style.top = `${(newTop / parentRect.height) * 100}%`;
        }
    }

    setCollapsed(collapsed) {
        if (collapsed) {
            this.dom.panel.classList.add('collapsed');
            if (this.dom.switchBtn) this.dom.switchBtn.classList.remove('active');
        } else {
            this.dom.panel.classList.remove('collapsed');
            if (this.dom.switchBtn) this.dom.switchBtn.classList.add('active');
        }
    }
    
    async loadMetadata(file) {
        if (!this.SeiMetadata) {
            console.warn("[MetadataManager] Protobuf not ready, skipping metadata load");
            return;
        }
        
        this.isLoading = true;
        this.updateUIStatus();
        this.currentMetadata = [];
        
        try {
            let buffer;
            if (file instanceof File) {
                buffer = await file.arrayBuffer();
            } else if (file instanceof TauriFile) {
                buffer = await file.arrayBuffer();
            } else if (file && file.path) {
                // If it's a file-like object but not instance of File/TauriFile
                const response = await fetch(getFileUrl(file));
                buffer = await response.arrayBuffer();
            } else {
                console.warn("[MetadataManager] Unknown file type for metadata loading");
                return;
            }

            const parser = new DashcamMP4(buffer);
            const rawMetadata = parser.parseMetadata();
            
            this.currentMetadata = rawMetadata.map(item => {
                try {
                    const decoded = this.SeiMetadata.decode(item.data);
                    return {
                        time: item.time,
                        data: this.SeiMetadata.toObject(decoded, { enums: String, longs: String })
                    };
                } catch (e) {
                    console.warn("[MetadataManager] Failed to decode SEI item:", e);
                    return null;
                }
            }).filter(Boolean);
            
            console.log(`[MetadataManager] Loaded ${this.currentMetadata.length} metadata points`);
            
            // Auto expand panel if metadata is loaded
            if (this.currentMetadata.length > 0 && this.dom.panel.classList.contains('collapsed')) {
                this.setCollapsed(false);
            }
        } catch (err) {

            console.error("[MetadataManager] Error parsing metadata:", err);
            this.currentMetadata = [];
        } finally {
            this.isLoading = false;
            this.updateUIStatus();
        }
    }
    
    updateUIStatus() {
        if (!this.dom.loading) return;
        this.dom.loading.style.display = this.isLoading ? 'block' : 'none';
        this.dom.empty.style.display = (!this.isLoading && this.currentMetadata.length === 0) ? 'block' : 'none';
        this.dom.items.style.display = (!this.isLoading && this.currentMetadata.length > 0) ? 'flex' : 'none';
    }
    
    updateDisplay(currentTime) {
        if (this.currentMetadata.length === 0) return;
        
        const lang = this.viewer.currentLanguage;
        
        // Find the metadata item closest to current playback time
        let bestMatch = this.currentMetadata[0];
        for (let i = 0; i < this.currentMetadata.length; i++) {
            if (this.currentMetadata[i].time <= currentTime) {
                bestMatch = this.currentMetadata[i];
            } else {
                break;
            }
        }
        
        if (!bestMatch || !bestMatch.data) return;
        
        const d = bestMatch.data;
        const v = this.dom.values;
        
        // Update speed (just the number, unit is separate)
        const speedKmh = (d.vehicleSpeedMps || 0) * 3.6;
        const speedDisplay = Math.round(speedKmh);
        v.speed.textContent = speedDisplay === 0 ? '0' : speedDisplay;
        
        // Update gear (single letter: P, D, R, N)
        const gearLetterMap = {
            'GEAR_PARK': 'P',
            'GEAR_DRIVE': 'D',
            'GEAR_REVERSE': 'R',
            'GEAR_NEUTRAL': 'N'
        };
        v.gear.textContent = gearLetterMap[d.gearState] || '--';
        
        // Update steering wheel angle and rotation
        const steeringAngle = d.steeringWheelAngle || 0;
        v.steering.textContent = `${steeringAngle.toFixed(0)}°`;
        // Rotate the steering wheel icon - allow full rotation (can exceed 360°)
        v.steeringIcon.style.transform = `rotate(${steeringAngle}deg)`;
        
        // Update steering wheel color based on autopilot state
        v.steeringIcon.classList.remove('autopilot-active', 'autopilot-self-driving');
        if (d.autopilotState === 'SELF_DRIVING') {
            v.steeringIcon.classList.add('autopilot-self-driving');
        } else if (d.autopilotState === 'AUTOSTEER' || d.autopilotState === 'TACC') {
            v.steeringIcon.classList.add('autopilot-active');
        }
        
        // Update accelerator pedal - fill height based on pedal position (grows from bottom)
        const accelPercent = d.acceleratorPedalPosition || 0;
        if (v.accelFillRect) {
            const maxHeight = 20; // max fill height
            const fillHeight = (accelPercent / 100) * maxHeight;
            const yPos = 26 - fillHeight; // start from bottom (y=26) and grow upward
            v.accelFillRect.setAttribute('y', yPos);
            v.accelFillRect.setAttribute('height', fillHeight);
            v.accelFillRect.setAttribute('opacity', accelPercent > 0 ? 0.9 : 0);
        }
        v.acceleratorIcon.classList.toggle('active', accelPercent > 5);
        
        // Update brake - show red active group when brake is applied
        const brakeApplied = d.brakeApplied || false;
        if (v.brakeActiveGroup) {
            v.brakeActiveGroup.setAttribute('opacity', brakeApplied ? 1 : 0);
        }
        v.brakeIcon.classList.toggle('active', brakeApplied);
        
        // Update blinkers
        v.blinkerLeft.classList.toggle('active', d.blinkerOnLeft || false);
        v.blinkerRight.classList.toggle('active', d.blinkerOnRight || false);
        
        // Update autopilot
        const apMap = {
            'NONE': 'autopilotNone',
            'SELF_DRIVING': 'autopilotSelfDriving',
            'AUTOSTEER': 'autopilotAutosteer',
            'TACC': 'autopilotTACC'
        };
        v.autopilot.textContent = i18n[lang][apMap[d.autopilotState] || d.autopilotState] || d.autopilotState || '--';
        v.autopilot.style.color = d.autopilotState !== 'NONE' ? '#1890ff' : '';
        
        // Update GPS
        v.gps.textContent = (typeof d.latitudeDeg === 'number' && typeof d.longitudeDeg === 'number') 
            ? `${d.latitudeDeg.toFixed(6)}, ${d.longitudeDeg.toFixed(6)}` 
            : '--';
        
        // Update Heading
        v.heading.textContent = (typeof d.headingDeg === 'number') ? `${d.headingDeg.toFixed(0)}°` : '--';
        
        // Update Acceleration
        v.acceleration.textContent = (typeof d.linearAccelerationMps2X === 'number' && 
                                     typeof d.linearAccelerationMps2Y === 'number' && 
                                     typeof d.linearAccelerationMps2Z === 'number') 
            ? `X:${d.linearAccelerationMps2X.toFixed(2)} Y:${d.linearAccelerationMps2Y.toFixed(2)} Z:${d.linearAccelerationMps2Z.toFixed(2)}` 
            : '--';
    }
    
    clear() {
        this.currentMetadata = [];
        this.updateUIStatus();
    }
}

// --- Device Detection ---
function isIOSDevice() {
    // Detect iOS/iPadOS (including Chrome on iPad which uses WebKit)
    return /iPad|iPhone|iPod/.test(navigator.userAgent) || 
           (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) ||
           (navigator.userAgent.includes('CriOS')) || // Chrome on iOS
           (navigator.userAgent.includes('Mobile') && navigator.maxTouchPoints > 1);
}

function supportsDirectoryPicker() {
    // Check if webkitdirectory is actually supported and works
    const input = document.createElement('input');
    return 'webkitdirectory' in input && !isIOSDevice();
}

// Check if File System Access API is supported (for persistent directory handle)
function supportsFileSystemAccess() {
    return 'showDirectoryPicker' in window && !isIOSDevice();
}

// --- IndexedDB helpers for storing directory handle ---
const DB_NAME = 'TeslaCamPlayerDB';
const DB_VERSION = 1;
const STORE_NAME = 'directoryHandles';

function openDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result);
        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, { keyPath: 'id' });
            }
        };
    });
}

async function saveDirectoryHandle(handle) {
    try {
        const db = await openDB();
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        await new Promise((resolve, reject) => {
            const request = store.put({ id: 'lastDirectory', handle });
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
        db.close();
        console.log('[IndexedDB] Directory handle saved');
    } catch (e) {
        console.warn('[IndexedDB] Failed to save directory handle:', e);
    }
}

async function getDirectoryHandle() {
    try {
        const db = await openDB();
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const result = await new Promise((resolve, reject) => {
            const request = store.get('lastDirectory');
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
        db.close();
        return result?.handle || null;
    } catch (e) {
        console.warn('[IndexedDB] Failed to get directory handle:', e);
        return null;
    }
}

async function clearDirectoryHandle() {
    try {
        const db = await openDB();
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        await new Promise((resolve, reject) => {
            const request = store.delete('lastDirectory');
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
        db.close();
        console.log('[IndexedDB] Directory handle cleared');
    } catch (e) {
        console.warn('[IndexedDB] Failed to clear directory handle:', e);
    }
}
// --- End IndexedDB helpers ---

// --- End Device Detection ---

// --- Coordinate Conversion Functions ---
const x_pi = 3.14159265358979324 * 3000.0 / 180.0;
const PI = 3.1415926535897932384626;
const a = 6378245.0;
const ee = 0.00669342162296594323;

function transformlat(lng, lat) {
    let ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng));
    ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(lat * PI) + 40.0 * Math.sin(lat / 3.0 * PI)) * 2.0 / 3.0;
    ret += (160.0 * Math.sin(lat / 12.0 * PI) + 320 * Math.sin(lat * PI / 30.0)) * 2.0 / 3.0;
    return ret;
}

function transformlng(lng, lat) {
    let ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng));
    ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(lng * PI) + 40.0 * Math.sin(lng / 3.0 * PI)) * 2.0 / 3.0;
    ret += (150.0 * Math.sin(lng / 12.0 * PI) + 300.0 * Math.sin(lng / 30.0 * PI)) * 2.0 / 3.0;
    return ret;
}

function wgs84togcj02(lng, lat) {
    let dlat = transformlat(lng - 105.0, lat - 35.0);
    let dlng = transformlng(lng - 105.0, lat - 35.0);
    const radlat = lat / 180.0 * PI;
    let magic = Math.sin(radlat);
    magic = 1 - ee * magic * magic;
    const sqrtmagic = Math.sqrt(magic);
    dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * PI);
    dlng = (dlng * 180.0) / (a / sqrtmagic * Math.cos(radlat) * PI);
    const mglat = lat + dlat;
    const mglng = lng + dlng;
    return [mglng, mglat];
}

function gcj02tobd09(lng, lat) {
    const z = Math.sqrt(lng * lng + lat * lat) + 0.00002 * Math.sin(lat * x_pi);
    const theta = Math.atan2(lat, lng) + 0.000003 * Math.cos(lng * x_pi);
    const bd_lng = z * Math.cos(theta) + 0.0065;
    const bd_lat = z * Math.sin(theta) + 0.006;
    return [bd_lng, bd_lat];
}
// --- End Coordinate Conversion ---

class VideoListComponent {
    constructor(elementId, eventHandler, viewer) {
        this.container = document.getElementById(elementId);
        this.eventHandler = eventHandler;
        this.viewer = viewer;
        if (!this.container) {
            throw new Error(`Element with id "${elementId}" not found.`);
        }
    }

    render(events) {
        const lang = this.viewer.currentLanguage;
        const translations = i18n[lang];
        this.container.innerHTML = '';
        if (!events || events.length === 0) {
            if (this.viewer.allFiles.length > 0) {
                this.container.innerHTML = `<div class="empty-state"><p>${translations.noRecordsFound}</p></div>`;
            } else {
                this.viewer.showInitialHelpMessage();
            }
            return;
        }
        const fragment = document.createDocumentFragment();
        events.forEach(event => {
            const card = this.createVideoCard(event);
            if (card) fragment.appendChild(card);
        });
        this.container.appendChild(fragment);
    }

    createVideoCard(event) {
        if (!event || !event.segments || event.segments.length === 0) return null;
        const firstSegment = event.segments[0];
        const card = document.createElement('div');
        card.className = 'video-card';
        card.dataset.eventId = event.eventId;
        
        const thumbnailDiv = document.createElement('div');
        thumbnailDiv.className = 'video-thumbnail';
        if (event.thumbFile) {
            const thumbUrl = getFileUrl(event.thumbFile);
            const img = document.createElement('img');
            img.src = thumbUrl;
            img.alt = '预览图';
            img.onload = () => URL.revokeObjectURL(img.src);
            thumbnailDiv.appendChild(img);
        } else {
            thumbnailDiv.innerHTML = `<div class="no-thumb">${this.getEventTypeLabel(event.eventType)}</div>`;
        }
        const durationDiv = document.createElement('div');
        durationDiv.className = 'video-duration';
        durationDiv.textContent = `${event.segments.length} ${i18n[this.viewer.currentLanguage].minutes}`;
        thumbnailDiv.appendChild(durationDiv);
        card.appendChild(thumbnailDiv);

        const infoDiv = document.createElement('div');
        infoDiv.className = 'video-info';
        const startTime = this.parseTimestamp(event.startTime);
        const timeString = startTime.toLocaleString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' });
        
        let cityHtml = '';
        if (event.city && event.lat && event.lon) {
            const locationText = event.street ? `${event.city} · ${event.street}` : event.city;
            cityHtml = `<span class="city-link" data-lat="${event.lat}" data-lon="${event.lon}">${locationText}</span> `;
        } else if (event.city) {
            const locationText = event.street ? `${event.city} · ${event.street}` : event.city;
            cityHtml = `${locationText} `;
        }

        const eventTypeLabel = this.getEventTypeLabel(event.eventType);

        infoDiv.innerHTML = `
            <div class="video-time">${cityHtml}${timeString}</div>
            <div class="video-type" title="${eventTypeLabel}">${eventTypeLabel.split(' ')[0]}</div>
        `;
        card.appendChild(infoDiv);
        
        // Attach event listener to the card, but check for city-link target
        card.onclick = (e) => {
            if (e.target.classList.contains('city-link')) {
                e.stopPropagation(); // Prevent card click from firing
                this.viewer.showMapModal(e.target.dataset.lat, e.target.dataset.lon);
            } else {
                this.eventHandler(event.eventId);
            }
        };

        return card;
    }

    getEventTypeLabel(type) {
        const lang = this.viewer.currentLanguage;
        return i18n[lang][type.charAt(0).toLowerCase() + type.slice(1)] || type;
    }

    parseTimestamp(timestamp) {
        // Handles "2024-01-01_12-00-00" format
        const [datePart, timePart] = timestamp.split('_');
        return new Date(`${datePart}T${timePart.replace(/-/g, ':')}`);
    }
}

class MultiCameraPlayer {
    constructor() {
        this.players = {
            front: document.getElementById('front-player'),
            back: document.getElementById('back-player'),
            left: document.getElementById('left-player'),
            right: document.getElementById('right-player'),
            left_pillar: document.getElementById('left-pillar-player'),
            right_pillar: document.getElementById('right-pillar-player')
        };
        this.playerContainers = {
            front: document.getElementById('front-container'),
            back: document.getElementById('back-container'),
            left: document.getElementById('left-container'),
            right: document.getElementById('right-container'),
            left_pillar: document.getElementById('left-pillar-container'),
            right_pillar: document.getElementById('right-pillar-container')
        };
        this.currentUrls = { front: null, back: null, left: null, right: null, left_pillar: null, right_pillar: null };
        this.activeCamera = 'front';
        this.layoutMode = 'grid4'; // Default to 4-Grid
        this.isPlaying = false;
        this.isSeeking = false;
        this.playbackRate = 1.0;
        this.lastSyncTime = 0;
        
        // Start label loop
        this.startRenderLoop();
    }
    
    // Start render loop for labels
    startRenderLoop() {
        if (this.renderLoopRunning) return;
        this.renderLoopRunning = true;
        this.renderLoop();
    }

    renderLoop() {
        const isGrid = ['grid', 'grid4'].includes(this.layoutMode);
        
        if (isGrid) {
            // Check active views to determine layout
            const views = this.layoutMode === 'grid' ?
                ['left_pillar', 'front', 'right_pillar', 'left', 'back', 'right'] : // 6-grid (grid)
                ['front', 'back', 'left', 'right']; // 4-grid (grid4)

            // Iterate over each view container and add/update labels
            views.forEach(camera => {
                const container = this.playerContainers[camera];
                if (container) {
                     let label = container.querySelector('.camera-label');
                     if (!label) {
                         label = document.createElement('div');
                         label.className = 'camera-label';
                         // Style is handled in CSS, but ensure it exists
                         label.style.position = 'absolute';
                         label.style.top = '10px';
                         label.style.left = '10px';
                         label.style.color = 'white';
                         label.style.backgroundColor = 'rgba(0,0,0,0.5)';
                         label.style.padding = '5px 10px';
                         label.style.fontSize = '14px';
                         label.style.pointerEvents = 'none';
                         label.style.zIndex = '10';
                         container.appendChild(label);
                     }
                     // Set localized text (Simple check for window.viewer global or fallback)
                     // Note: We access window.viewer carefully
                     const lang = (window.viewer && window.viewer.currentLanguage) || 'zh';
                     const cameraNames = {
                        front: { en: 'Front', zh: '前视' },
                        left_pillar: { en: 'Left Pillar', zh: '左柱' },
                        right_pillar: { en: 'Right Pillar', zh: '右柱' },
                        back: { en: 'Back', zh: '后视' },
                        left: { en: 'Left', zh: '左侧' },
                        right: { en: 'Right', zh: '右侧' }
                     };
                     label.innerText = cameraNames[camera]?.[lang] || camera;
                     label.style.display = 'block';
                }
            });
            
             // Hide labels for inactive cameras in the grid
             Object.keys(this.playerContainers).forEach(key => {
                 if (!views.includes(key)) {
                     const container = this.playerContainers[key];
                     if (container) {
                        const label = container.querySelector('.camera-label');
                        if (label) label.style.display = 'none';
                     }
                 }
             });

        } else {
             // Single/Legacy view mode: Revert to CSS control (Single hidden by opacity, Legacy PIP shown by opacity)
             Object.values(this.playerContainers).forEach(container => {
                 if (container) {
                    const label = container.querySelector('.camera-label');
                    if (label) label.style.display = '';
                 }
             });
        }

        requestAnimationFrame(() => this.renderLoop());
    }

    setLayout(mode) {
        this.layoutMode = mode;
        this.updateLayout();
    }

    setCamera(camera) {
        if (this.players[camera]) {
            this.activeCamera = camera;
            this.updateLayout();
        }
    }

    updateLayout() {
        const playerArea = document.getElementById('playerArea');
        if (!playerArea) return;

        // Reset Player Area Classes
        playerArea.classList.remove('grid-view', 'grid4-view', 'legacy-view', 'single-view');

        // Reset Container Classes
        const positionClasses = ['pos-top-left', 'pos-top-right', 'pos-bottom-left', 'pos-bottom-right'];
        Object.keys(this.playerContainers).forEach(key => {
            const container = this.playerContainers[key];
            if (!container) return;
            container.classList.remove('is-main', 'is-pip', 'hidden', 'is-grid', 'is-active-single', ...positionClasses);
            container.style.display = ''; // Reset inline display
        });

        // Apply Logic based on Layout Mode
        if (this.layoutMode === 'grid') {
            playerArea.classList.add('grid-view');
            Object.values(this.playerContainers).forEach(c => { if(c) c.classList.add('is-grid'); });
        } 
        else if (this.layoutMode === 'grid4') {
            playerArea.classList.add('grid4-view');
            Object.keys(this.playerContainers).forEach(key => {
                const c = this.playerContainers[key];
                if (!c) return;
                // Only Front, Back, Left, Right are standard grid4
                if (['front', 'back', 'left', 'right'].includes(key)) {
                    c.classList.add('is-grid');
                } else {
                    // Pillars are hidden via CSS for grid4-view, but we can ensure it
                }
            });
        }
        else if (this.layoutMode === 'single') {
            playerArea.classList.add('single-view');
            const activeC = this.playerContainers[this.activeCamera];
            if (activeC) activeC.classList.add('is-active-single');
        }
        else if (this.layoutMode === 'legacy') {
            playerArea.classList.add('legacy-view');
            
            const layouts = {
                front: { back: 'top-right', left: 'bottom-left', right: 'bottom-right' },
                back: { front: 'top-left', left: 'bottom-left', right: 'bottom-right' },
                left: { front: 'top-left', back: 'top-right', right: 'bottom-right' },
                right: { front: 'top-left', back: 'top-right', left: 'bottom-left' },
                left_pillar: { front: 'top-left', back: 'top-right', left: 'bottom-left' },
                right_pillar: { front: 'top-left', back: 'top-right', right: 'bottom-right' }
            };
            const pipMapping = layouts[this.activeCamera] || {};

            Object.keys(this.playerContainers).forEach(key => {
                const container = this.playerContainers[key];
                if (!container) return;

                if (key === this.activeCamera) {
                    container.classList.add('is-main');
                } else if (pipMapping[key]) {
                    container.classList.add('is-pip', `pos-${pipMapping[key]}`);
                } else {
                    container.classList.add('is-pip', 'hidden');
                }
            });
        }
    }

    // Deprecated but kept for compatibility if needed, aliased to setCamera + Single Mode
    setActive(cameraType) {
        if (['grid', 'grid4', 'legacy'].includes(cameraType)) {
            this.setLayout(cameraType);
        } else {
            this.setCamera(cameraType);
            this.setLayout('single');
        }
    }

    async loadSegmentForAllCameras(segment) {
        this.cleanup();
        const cameras = ['front', 'back', 'left', 'right', 'left_pillar', 'right_pillar'];
        let activeCount = 0;

        for (const camera of cameras) {
            const file = segment.files[camera];
            const player = this.players[camera];
            const cameraView = this.playerContainers[camera];

            if (file && player) {
                activeCount++;
                this.currentUrls[camera] = getFileUrl(file);
                player.src = this.currentUrls[camera];
                // Re-apply the rate here as cleanup() / .src change resets the player state.
                player.defaultPlaybackRate = this.playbackRate;
                player.playbackRate = this.playbackRate;
                if(cameraView) cameraView.classList.remove('error', 'empty');
            } else {
                if (player) player.src = '';
                if(cameraView) cameraView.classList.add('empty');
            }
        }

        // Adjust Grid Layout based on active cameras
        // Logic removed: User explicitly selects layout now.
        
        await this.waitForAllVideosLoaded();

        // Load SEI metadata from front camera
        if (segment.files['front'] && window.viewer && window.viewer.metadataManager) {
            window.viewer.metadataManager.loadMetadata(segment.files['front']);
        } else if (window.viewer && window.viewer.metadataManager) {
            window.viewer.metadataManager.clear();
        }
    }


    async waitForAllVideosLoaded() {
        const loadPromises = Object.values(this.players).filter(p => p.src).map(player =>
            new Promise((resolve) => {
                if (player.readyState >= 2) resolve();
                else {
                    player.addEventListener('loadeddata', resolve, { once: true });
                    player.addEventListener('error', resolve, { once: true });
                }
            })
        );
        await Promise.all(loadPromises);
    }

    async syncAllPlayers() {
        if (this.isSeeking) return;

        const now = performance.now();
        if (now - this.lastSyncTime < 100) { // Throttle to max 10 times per second
            return;
        }
        this.lastSyncTime = now;

        const mainPlayer = this.players[this.activeCamera];
        if (!mainPlayer || !mainPlayer.src) return;
        const currentTime = mainPlayer.currentTime;

        // Update metadata display
        if (window.viewer && window.viewer.metadataManager) {
            window.viewer.metadataManager.updateDisplay(currentTime);
        }

        Object.keys(this.players).forEach(key => {
            if (key !== this.activeCamera && this.players[key] && this.players[key].src) {
                const player = this.players[key];
                if (Math.abs(player.currentTime - currentTime) > 0.1) {
                    player.currentTime = currentTime;
                }
            }
        });
    }

    async playAll() {
        const playPromises = Object.values(this.players).filter(p => p.src).map(p => p.play().catch(e => console.warn('Play failed:', e)));
        await Promise.all(playPromises);
    }

    pauseAll() {
        Object.values(this.players).forEach(p => { if (p.src) p.pause(); });
    }

    seekAll(time) {
        this.isSeeking = true;
        Object.values(this.players).forEach(p => { if (p.src) p.currentTime = time; });
        setTimeout(() => { this.isSeeking = false; }, 100);
    }

    cleanup() {
        this.pauseAll();
        Object.values(this.players).forEach(player => {
            player.src = '';
            player.removeAttribute('src');
            player.load();
        });
        Object.keys(this.currentUrls).forEach(key => {
            if (this.currentUrls[key]) {
                URL.revokeObjectURL(this.currentUrls[key]);
                this.currentUrls[key] = null;
            }
        });
    }

    setPlaybackRate(rate) {
        this.playbackRate = rate;
        Object.values(this.players).forEach(p => {
            if (p) {
                p.defaultPlaybackRate = rate;
                p.playbackRate = rate;
            }
        });
    }
}

class ContinuousVideoPlayer {
    constructor(multiCameraPlayer) {
        this.multiCameraPlayer = multiCameraPlayer;
        this.currentEvent = null;
        this.currentSegmentIndex = 0;
        this.totalDuration = 0;
        this.segmentDurations = [];
        this.segmentStartTimes = [];
        this.isTransitioning = false;
        this.bindEvents();
    }

    bindEvents() {
        const refPlayer = this.multiCameraPlayer.players.front;
        if (!refPlayer) return;
        refPlayer.addEventListener('ended', () => { if (!this.isTransitioning) this.playNextSegment(); });
        refPlayer.addEventListener('timeupdate', () => this.multiCameraPlayer.syncAllPlayers());
    }

    async calculateEventDurations(event) {
        if (!event.segments || event.segments.length === 0) {
            event.totalDuration = 0;
            event.segmentDurations = [];
            event.segmentStartTimes = [];
            return;
        }
        const getVideoDuration = (file) => new Promise((resolve) => {
            if (!file) { resolve(60); return; }
            const video = document.createElement('video');
            const url = getFileUrl(file);
            const cleanup = () => {
                video.onloadedmetadata = null;
                video.onerror = null;
                video.src = '';
                URL.revokeObjectURL(url);
            };
            video.preload = 'metadata';
            video.onloadedmetadata = () => {
                const duration = video.duration;
                cleanup();
                resolve(isFinite(duration) ? duration : 60);
            };
            video.onerror = () => { cleanup(); resolve(60); };
            video.src = url;
        });
        const segmentCount = event.segments.length;
        const durations = new Array(segmentCount).fill(60);
        if (segmentCount > 0) {
            const lastSegment = event.segments[segmentCount - 1];
            const repFile = lastSegment.files.front || lastSegment.files.back || lastSegment.files.left || lastSegment.files.right || lastSegment.files.left_pillar || lastSegment.files.right_pillar;
            durations[segmentCount - 1] = await getVideoDuration(repFile);
        }
        event.segmentDurations = [];
        event.segmentStartTimes = [];
        let accumulatedTime = 0;
        for (let i = 0; i < segmentCount; i++) {
            event.segmentStartTimes[i] = accumulatedTime;
            const segmentDuration = durations[i];
            event.segmentDurations[i] = segmentDuration;
            accumulatedTime += segmentDuration;
        }
        event.totalDuration = accumulatedTime;
    }

    async loadEvent(event) {
        this.currentEvent = event;
        this.currentSegmentIndex = 0;
        this.segmentDurations = event.segmentDurations || [];
        this.segmentStartTimes = event.segmentStartTimes || [];
        this.totalDuration = event.totalDuration || 0;
        await this.loadSegment(0);
    }

    async loadSegment(index) {
        if (!this.currentEvent || index < 0 || index >= this.currentEvent.segments.length) return;
        this.currentSegmentIndex = index;
        const segment = this.currentEvent.segments[index];
        await this.multiCameraPlayer.loadSegmentForAllCameras(segment);
    }

    async playNextSegment() {
        if (this.currentSegmentIndex < this.currentEvent.segments.length - 1) {
            this.isTransitioning = true;
            await this.loadSegment(this.currentSegmentIndex + 1);
            await this.multiCameraPlayer.playAll();
            this.isTransitioning = false;
        } else {
            console.log("All segments played.");
            this.multiCameraPlayer.pauseAll();
        }
    }

    getCurrentTime() {
        if (!this.currentEvent) return 0;
        const segmentStartTime = this.segmentStartTimes[this.currentSegmentIndex] || 0;
        const activePlayer = this.multiCameraPlayer.players[this.multiCameraPlayer.activeCamera];
        const segmentCurrentTime = activePlayer ? activePlayer.currentTime : 0;
        return segmentStartTime + segmentCurrentTime;
    }

    async seekToTime(targetTime) {
        if (!this.currentEvent) return;
        let targetSegmentIndex = 0;
        for (let i = 0; i < this.segmentStartTimes.length; i++) {
            if (targetTime >= this.segmentStartTimes[i]) targetSegmentIndex = i;
            else break;
        }
        const segmentStartTime = this.segmentStartTimes[targetSegmentIndex];
        const segmentTime = targetTime - segmentStartTime;
        if (targetSegmentIndex !== this.currentSegmentIndex) {
            await this.loadSegment(targetSegmentIndex);
        }
        this.multiCameraPlayer.seekAll(segmentTime);
    }

    getTotalDuration() { return this.totalDuration; }
}

class ModernVideoControls {
    constructor(continuousPlayer, viewer) {
        this.continuousPlayer = continuousPlayer;
        this.multiCameraPlayer = continuousPlayer.multiCameraPlayer;
        this.viewer = viewer;
        this.player = this.multiCameraPlayer.players.front;
        this.container = document.getElementById('playerArea');
        this.totalDuration = 0;
        this.isPlaying = false;
        this.isDragging = false;
        this.wasPlaying = false;
        this.currentEventStartTime = null;
        
        // Clip selection state
        this.clipStartTime = null;
        this.clipEndTime = null;
        this.isDraggingClipStart = false;
        this.isDraggingClipEnd = false;
        this.clipModeActive = false;
        
        this.hideControlsTimer = null;
        
        this.initializeElements();
        this.bindEvents();
    }

    initializeElements() {
        if (!this.container) return;
        this.overlay = this.container.querySelector('#videoControlsOverlay');
        this.playPauseBtn = this.container.querySelector('#playPauseBtn');
        this.playPauseIcon = this.container.querySelector('#playPauseIcon');
        this.progressContainer = this.container.querySelector('#progressContainer');
        this.progressPlayed = this.container.querySelector('#progressPlayed');
        this.progressHandle = this.container.querySelector('#progressHandle');
        this.videoTimeDisplay = this.container.querySelector('#videoTimeDisplay');
        this.timePreview = this.container.querySelector('#timePreview');
        this.realTimeClock = document.getElementById('realTimeClock');
        this.speedControl = this.container.querySelector('#speedControl');
        this.speedBtn = this.container.querySelector('#speedBtn');
        this.speedOptions = this.container.querySelector('.speed-options');
        
        // Clip elements
        this.clipBtn = this.container.querySelector('#clipBtn');
        this.confirmClipBtn = this.container.querySelector('#confirmClipBtn');
        this.clipSelection = this.container.querySelector('#clipSelection');
        this.clipStartHandle = this.container.querySelector('#clipStartHandle');
        this.clipEndHandle = this.container.querySelector('#clipEndHandle');
        this.viewSwitcher = this.container.querySelector('#viewSwitcher');
    }

    bindEvents() {
        if (this.viewSwitcher) {
            this.viewSwitcher.addEventListener('click', (e) => {
                const btn = e.target.closest('.view-btn');
                if (btn && btn.dataset.view) {
                    this.viewer.switchCamera(btn.dataset.view);
                }
            });
        }

        if (this.playPauseBtn) this.playPauseBtn.addEventListener('click', () => this.togglePlayPause());

        if (this.progressContainer) {
            this.progressContainer.addEventListener('mousedown', (e) => this.startDrag(e));
            document.addEventListener('mousemove', (e) => this.onDrag(e));
            document.addEventListener('mouseup', (e) => this.stopDrag(e));

            this.progressContainer.addEventListener('mousemove', (e) => {
                if (!this.isDragging && !this.isDraggingClipStart && !this.isDraggingClipEnd) this.showTimePreview(e);
            });
            this.progressContainer.addEventListener('mouseleave', () => {
                if (!this.isDragging && !this.isDraggingClipStart && !this.isDraggingClipEnd) this.hideTimePreview();
            });
        }
        
        // Clip handle events
        if (this.clipStartHandle) {
            this.clipStartHandle.addEventListener('mousedown', (e) => {
                e.stopPropagation();
                this.isDraggingClipStart = true;
                this.wasPlaying = this.multiCameraPlayer.isPlaying;
                if (this.wasPlaying) this.multiCameraPlayer.pauseAll();
            });
        }
        
        if (this.clipEndHandle) {
            this.clipEndHandle.addEventListener('mousedown', (e) => {
                e.stopPropagation();
                this.isDraggingClipEnd = true;
                this.wasPlaying = this.multiCameraPlayer.isPlaying;
                if (this.wasPlaying) this.multiCameraPlayer.pauseAll();
            });
        }
        
        // Clip button
        if (this.clipBtn) {
            this.clipBtn.addEventListener('click', () => {
                if (!this.clipModeActive) {
                    // Enter clip mode
                    this.toggleClipMode();
                } else {
                    // Exit clip mode
                    this.toggleClipMode();
                }
            });
        }
        
        // Confirm clip button
        if (this.confirmClipBtn) {
            this.confirmClipBtn.addEventListener('click', () => {
                this.viewer.showClipModal();
            });
        }

        if (this.player) {
            this.player.addEventListener('timeupdate', () => {
                if (!this.isDragging) this.updateProgress();
            });
            this.player.addEventListener('play', () => this.updatePlayState(true));
            this.player.addEventListener('pause', () => this.updatePlayState(false));
        }

        if (this.container) {
            const resetTimer = () => this.resetHideTimer();
            this.container.addEventListener('mousemove', resetTimer);
            this.container.addEventListener('click', resetTimer);
            this.container.addEventListener('touchstart', resetTimer);
            this.container.addEventListener('mouseenter', resetTimer);
            this.container.addEventListener('mouseleave', () => {
                // If playing, hide immediately on mouse leave (standard behavior)
                // But keep showing if paused or interacting
                if (this.isPlaying && !this.isDragging && !this.speedControl?.classList.contains('active')) {
                    this.hideControls();
                }
            });
        }

        if (this.speedBtn) {
            this.speedBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.speedControl.classList.toggle('active');
            });
        }

        if (this.speedOptions) {
            this.speedOptions.addEventListener('click', (e) => {
                e.stopPropagation();
                if (e.target.dataset.speed) {
                    this.setSpeed(parseFloat(e.target.dataset.speed));
                    this.speedControl.classList.remove('active');
                }
            });
        }

        document.addEventListener('click', (e) => {
            if (this.speedControl && this.speedControl.classList.contains('active') && !this.speedControl.contains(e.target)) {
                this.speedControl.classList.remove('active');
            }
        });
    }
    
    updateViewSwitcherUI(cameraType) {
        if (!this.viewSwitcher) return;
        this.viewSwitcher.querySelectorAll('.view-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.view === cameraType);
        });
    }

    updatePillarButtons(show) {
        if (!this.viewSwitcher) return;
        
        // Always show Pillar Buttons (User Request)
        const pillarBtns = this.viewSwitcher.querySelectorAll('[data-view="left_pillar"], [data-view="right_pillar"]');
        pillarBtns.forEach(btn => {
            btn.style.display = 'flex';
        });

        // Always show 6-Grid Button
        const grid6Btn = this.viewSwitcher.querySelector('[data-view="grid"]');
        if (grid6Btn) {
            grid6Btn.style.display = 'flex';
        }
    }

    toggleClipMode() {
        this.clipModeActive = !this.clipModeActive;
        
        if (this.clipModeActive) {
            // Enter clip mode - pause video first
            if (this.multiCameraPlayer.isPlaying) {
                this.multiCameraPlayer.pauseAll();
                this.updatePlayState(false);
            }
            
            // Initialize selection
            const currentTime = this.continuousPlayer.getCurrentTime();
            const duration = this.totalDuration;
            
            // Set default selection: current time ± 30 seconds (or bounds)
            this.clipStartTime = Math.max(0, currentTime - 30);
            this.clipEndTime = Math.min(duration, currentTime + 30);
            
            this.updateClipSelection();
            this.clipSelection.classList.add('active');
            this.clipStartHandle.classList.add('active');
            this.clipEndHandle.classList.add('active');
            this.clipBtn.style.color = '#007bff';
            
            // Show confirm button, hide clip button
            if (this.confirmClipBtn) {
                this.confirmClipBtn.style.display = 'block';
            }
        } else {
            // Exit clip mode
            this.clipSelection.classList.remove('active');
            this.clipStartHandle.classList.remove('active');
            this.clipEndHandle.classList.remove('active');
            this.clipBtn.style.color = '';
            this.clipStartTime = null;
            this.clipEndTime = null;
            
            // Hide confirm button
            if (this.confirmClipBtn) {
                this.confirmClipBtn.style.display = 'none';
            }
        }
    }
    
    updateClipSelection() {
        if (!this.clipStartTime && this.clipStartTime !== 0) return;
        if (!this.clipEndTime) return;
        
        const startPercent = (this.clipStartTime / this.totalDuration) * 100;
        const endPercent = (this.clipEndTime / this.totalDuration) * 100;
        const widthPercent = endPercent - startPercent;
        
        this.clipSelection.style.left = `${startPercent}%`;
        this.clipSelection.style.width = `${widthPercent}%`;
        
        this.clipStartHandle.style.left = `${startPercent}%`;
        this.clipEndHandle.style.left = `${endPercent}%`;
    }

    setTotalDuration(duration) {
        this.totalDuration = duration || 0;
        this.updateProgress();
    }

    async togglePlayPause() {
        if (!this.multiCameraPlayer.isPlaying) await this.multiCameraPlayer.playAll();
        else this.multiCameraPlayer.pauseAll();
    }

    startDrag(e) {
        e.preventDefault();
        this.isDragging = true;
        this.wasPlaying = this.multiCameraPlayer.isPlaying;
        if (this.wasPlaying) {
            this.multiCameraPlayer.pauseAll();
        }
        this.timePreview.classList.remove('show');
    }

    onDrag(e) {
        if (this.isDraggingClipStart) {
            e.preventDefault();
            const rect = this.progressContainer.getBoundingClientRect();
            const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
            const newTime = pos * this.totalDuration;
            
            // Don't let start go past end
            if (newTime < this.clipEndTime) {
                this.clipStartTime = newTime;
                this.updateClipSelection();
            }
            return;
        }
        
        if (this.isDraggingClipEnd) {
            e.preventDefault();
            const rect = this.progressContainer.getBoundingClientRect();
            const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
            const newTime = pos * this.totalDuration;
            
            // Don't let end go before start
            if (newTime > this.clipStartTime) {
                this.clipEndTime = newTime;
                this.updateClipSelection();
            }
            return;
        }
        
        if (!this.isDragging) return;
        e.preventDefault();
        const rect = this.progressContainer.getBoundingClientRect();
        const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        
        const currentTime = pos * this.totalDuration;

        this.progressPlayed.style.width = `${pos * 100}%`;
        this.progressHandle.style.left = `${pos * 100}%`;
        this.videoTimeDisplay.textContent = `${this.formatTime(currentTime)} / ${this.formatTime(this.totalDuration)}`;
    }

    async stopDrag(e) {
        if (this.isDraggingClipStart || this.isDraggingClipEnd) {
            this.isDraggingClipStart = false;
            this.isDraggingClipEnd = false;
            if (this.wasPlaying) {
                await this.multiCameraPlayer.playAll();
            }
            return;
        }
        
        if (!this.isDragging) return;
        this.isDragging = false;

        const rect = this.progressContainer.getBoundingClientRect();
        const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));

        if (this.totalDuration > 0) {
            const targetTime = pos * this.totalDuration;
            
            this.progressPlayed.style.width = `${pos * 100}%`;
            this.progressHandle.style.left = `${pos * 100}%`;
            this.videoTimeDisplay.textContent = `${this.formatTime(targetTime)} / ${this.formatTime(this.totalDuration)}`;

            await this.continuousPlayer.seekToTime(targetTime);
        }

        if (this.wasPlaying) {
            await this.multiCameraPlayer.playAll();
        }
    }

    showTimePreview(e) {
        const rect = this.progressContainer.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const pos = Math.max(0, Math.min(1, mouseX / rect.width));
        const time = pos * this.totalDuration;
        this.timePreview.style.left = `${pos * 100}%`;
        this.timePreview.querySelector('.time-preview-time').textContent = this.formatTime(time);
        this.timePreview.classList.add('show');
    }

    hideTimePreview() {
        this.timePreview.classList.remove('show');
        this.updateProgress();
    }

    updateProgress() {
        const currentTime = this.continuousPlayer.getCurrentTime();
        if (this.totalDuration > 0) {
            const progress = (currentTime / this.totalDuration) * 100;
            this.progressPlayed.style.width = `${progress}%`;
            this.progressHandle.style.left = `${progress}%`;
        }
        this.updateTimeDisplay();
        this.updateRealTimeClock();
    }

    setEventStartTime(startTime) {
        this.currentEventStartTime = startTime ? this.parseTimestamp(startTime) : null;
        this.updateRealTimeClock();
    }

    parseTimestamp(timestamp) {
        // Handles "2024-01-01_12-00-00" format
        const [datePart, timePart] = timestamp.split('_');
        return new Date(`${datePart}T${timePart.replace(/-/g, ':')}`);
    }

    updateRealTimeClock() {
        if (!this.realTimeClock) return;

        const currentEvent = this.continuousPlayer.currentEvent;
        if (!currentEvent) {
            this.realTimeClock.classList.remove('visible');
            return;
        }
        
        // Show the clock when there's an event
        this.realTimeClock.classList.add('visible');

        try {
            let newTime;
            const activePlayer = this.multiCameraPlayer.players[this.multiCameraPlayer.activeCamera];
            const segmentTime = activePlayer ? activePlayer.currentTime : 0;

            if (currentEvent.eventType === 'RecentClips') {
                const currentSegmentIndex = this.continuousPlayer.currentSegmentIndex;
                const segment = currentEvent.segments[currentSegmentIndex];
                const activeCameraFile = segment.files[this.multiCameraPlayer.activeCamera];

                if (activeCameraFile && activeCameraFile.name) {
                    const timestampMatch = activeCameraFile.name.match(/(\d{4}-\d{2}-\d{2}_\d{2}-\d{2}-\d{2})/);
                    if (timestampMatch) {
                        const segmentStartTime = this.parseTimestamp(timestampMatch[0]);
                        if (segmentStartTime) {
                            newTime = new Date(segmentStartTime.getTime());
                            newTime.setSeconds(newTime.getSeconds() + segmentTime);
                        }
                    }
                }
            } 
            
            // Fallback or default behavior for Sentry/Saved and if RecentClips logic fails
            if (!newTime) {
                if (!this.currentEventStartTime) {
                    this.realTimeClock.classList.remove('visible');
                    return;
                }
                newTime = new Date(this.currentEventStartTime.getTime());
                const totalElapsedTime = this.continuousPlayer.getCurrentTime();
                newTime.setSeconds(newTime.getSeconds() + totalElapsedTime);
            }

            const locale = this.viewer.currentLanguage === 'zh' ? 'zh-CN' : 'en-CA';
            this.realTimeClock.textContent = newTime.toLocaleString(locale, {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            }).replace(/\//g, '-').replace(',', '');

        } catch (e) {
            this.realTimeClock.textContent = '错误';
            console.error("Error updating real-time clock:", e);
        }
    }

    updatePlayState(playing) {
        this.isPlaying = playing;
        this.multiCameraPlayer.isPlaying = playing;
        this.playPauseIcon.src = playing ? 'assets/icons/pause.svg' : 'assets/icons/play.svg';
        this.playPauseIcon.alt = i18n[this.viewer.currentLanguage][playing ? 'pause' : 'play'];
        
        this.resetHideTimer();

        const revealBtn = this.viewer.dom.revealFileBtn;
        if (revealBtn) {
            revealBtn.disabled = playing || !this.viewer.currentEvent;
        }
        const downloadBtn = this.viewer.dom.downloadFileBtn;
        if (downloadBtn) {
            downloadBtn.disabled = playing || !this.viewer.currentEvent;
        }
        
        // Enable/disable metadata button
        const metadataBtn = this.viewer.dom.metadataSwitchBtn;
        if (metadataBtn) {
            metadataBtn.disabled = !this.viewer.currentEvent;
        }
        
        // Enable/disable clip button
        if (this.clipBtn) {
            this.clipBtn.disabled = !this.viewer.currentEvent;
            this.clipBtn.title = i18n[this.viewer.currentLanguage].clipVideo;
        }
        
        // Update confirm clip button title
        if (this.confirmClipBtn) {
            this.confirmClipBtn.title = i18n[this.viewer.currentLanguage].confirmClip;
        }
    }

    updateTimeDisplay() {
        const current = this.formatTime(this.continuousPlayer.getCurrentTime());
        const total = this.formatTime(this.totalDuration);
        this.videoTimeDisplay.textContent = `${current} / ${total}`;
    }

    formatTime(seconds) {
        if (isNaN(seconds)) return '--:--';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    showControls() {
        this.overlay.classList.add('show');
        if (this.container) {
            this.container.classList.remove('hide-cursor');
        }
    }

    hideControls() {
        // Don't hide if paused, speed menu is open, or dragging
        if (!this.isPlaying ||
            this.speedControl?.classList.contains('active') || 
            this.isDragging || 
            this.isDraggingClipStart || 
            this.isDraggingClipEnd) {
            return;
        }
        this.overlay.classList.remove('show');
        if (this.container) {
            this.container.classList.add('hide-cursor');
        }
    }
    
    resetHideTimer() {
        this.showControls();
        
        if (this.hideControlsTimer) {
            clearTimeout(this.hideControlsTimer);
            this.hideControlsTimer = null;
        }

        if (this.isPlaying) {
            this.hideControlsTimer = setTimeout(() => {
                this.hideControls();
            }, 3000); // 3 seconds auto-hide
        }
    }

    setSpeed(rate) {
        this.multiCameraPlayer.setPlaybackRate(rate);
        this.speedBtn.textContent = `${rate.toFixed(1)}x`;
        
        this.speedOptions.querySelectorAll('div').forEach(div => {
            div.classList.remove('active');
        });
        const activeOption = this.speedOptions.querySelector(`[data-speed="${rate.toFixed(1)}"]`);
        if (activeOption) {
            activeOption.classList.add('active');
        }
    }

    addEventMarkers(event) {
        if (!this.progressContainer) return;
        // Clear previous markers
        this.progressContainer.querySelectorAll('.event-marker').forEach(m => m.remove());

        if (!event.eventTimestamp || !event.startTime || !this.totalDuration) {
            return;
        }

        try {
            const eventTime = new Date(event.eventTimestamp);
            const videoStartTime = this.parseTimestamp(event.startTime);
            
            const timeOffset = (eventTime.getTime() - videoStartTime.getTime()) / 1000;

            if (timeOffset >= 0 && timeOffset <= this.totalDuration) {
                const positionPercent = (timeOffset / this.totalDuration) * 100;
                
                const marker = document.createElement('div');
                marker.className = 'event-marker';
                marker.style.left = `${positionPercent}%`;
                marker.title = `Event: ${eventTime.toLocaleTimeString()}`;
                this.progressContainer.appendChild(marker);
            }
        } catch (e) {
            console.error("Error creating event marker:", e);
        }
    }
}

// WebM Duration Fixer
// MediaRecorder 生成的 webm 文件缺少正确的 duration 元数据
// 这个类通过解析和修改 EBML 结构来修复 duration
class WebmDurationFixer {
    constructor() {
        // EBML Element IDs
        this.EBML_ID = 0x1A45DFA3;
        this.SEGMENT_ID = 0x18538067;
        this.INFO_ID = 0x1549A966;
        this.DURATION_ID = 0x4489;
        this.TIMECODE_SCALE_ID = 0x2AD7B1;
        this.CLUSTER_ID = 0x1F43B675;
        this.TIMECODE_ID = 0xE7;
    }

    async fixDuration(blob, durationMs) {
        console.log('[WebmFixer] Starting duration fix, blob size:', blob.size, 'duration:', durationMs, 'ms');
        
        try {
            const buffer = await blob.arrayBuffer();
            const view = new DataView(buffer);
            
            // 查找 Segment 和 Info 元素的位置
            const segmentInfo = this.findElement(view, 0, this.SEGMENT_ID);
            if (!segmentInfo) {
                console.warn('[WebmFixer] Segment not found, returning original blob');
                return blob;
            }
            
            const infoInfo = this.findElement(view, segmentInfo.dataStart, this.INFO_ID);
            if (!infoInfo) {
                console.warn('[WebmFixer] Info not found, returning original blob');
                return blob;
            }
            
            // 查找 TimecodeScale（默认 1000000 纳秒 = 1 毫秒）
            let timecodeScale = 1000000;
            const timecodeScaleInfo = this.findElement(view, infoInfo.dataStart, this.TIMECODE_SCALE_ID, infoInfo.dataStart + infoInfo.dataSize);
            if (timecodeScaleInfo) {
                timecodeScale = this.readUint(view, timecodeScaleInfo.dataStart, timecodeScaleInfo.dataSize);
            }
            
            // 如果没有提供 duration，尝试从最后一个 Cluster 的 Timecode 计算
            if (!durationMs || durationMs <= 0) {
                durationMs = this.calculateDurationFromClusters(view, segmentInfo.dataStart);
            }
            
            if (!durationMs || durationMs <= 0) {
                console.warn('[WebmFixer] Could not determine duration, returning original blob');
                return blob;
            }
            
            // 将毫秒转换为 WebM 时间单位
            const durationWebm = (durationMs * 1000000) / timecodeScale;
            
            // 查找现有的 Duration 元素
            const durationInfo = this.findElement(view, infoInfo.dataStart, this.DURATION_ID, infoInfo.dataStart + infoInfo.dataSize);
            
            if (durationInfo) {
                // Duration 已存在，直接修改
                console.log('[WebmFixer] Duration element found, modifying in place');
                const newBuffer = buffer.slice(0);
                const newView = new DataView(newBuffer);
                this.writeFloat64(newView, durationInfo.dataStart, durationWebm);
                const fixedBlob = new Blob([newBuffer], { type: 'video/webm' });
                console.log('[WebmFixer] Duration fixed successfully');
                return fixedBlob;
            } else {
                // Duration 不存在，需要插入
                console.log('[WebmFixer] Duration element not found, inserting new element');
                return this.insertDurationElement(buffer, infoInfo, durationWebm);
            }
        } catch (error) {
            console.error('[WebmFixer] Error fixing duration:', error);
            return blob;
        }
    }
    
    // 从 Cluster 的 Timecode 计算总时长
    calculateDurationFromClusters(view, segmentStart) {
        let maxTimecode = 0;
        let offset = segmentStart;
        const endOffset = view.byteLength;
        
        while (offset < endOffset - 4) {
            const clusterInfo = this.findElement(view, offset, this.CLUSTER_ID, endOffset);
            if (!clusterInfo) break;
            
            // 查找 Cluster 中的 Timecode
            const timecodeInfo = this.findElement(view, clusterInfo.dataStart, this.TIMECODE_ID, clusterInfo.dataStart + Math.min(clusterInfo.dataSize, 100));
            if (timecodeInfo) {
                const timecode = this.readUint(view, timecodeInfo.dataStart, timecodeInfo.dataSize);
                if (timecode > maxTimecode) {
                    maxTimecode = timecode;
                }
            }
            
            offset = clusterInfo.dataStart + clusterInfo.dataSize;
        }
        
        // 添加一些额外时间（最后一个 cluster 的大概时长）
        return maxTimecode > 0 ? maxTimecode + 1000 : 0;
    }
    
    // 插入 Duration 元素到 Info 中
    insertDurationElement(buffer, infoInfo, durationWebm) {
        // Duration 元素: ID (2 bytes) + Size (1 byte) + Float64 (8 bytes) = 11 bytes
        const durationElementSize = 11;
        const durationElement = new Uint8Array(durationElementSize);
        const durationView = new DataView(durationElement.buffer);
        
        // 写入 Duration ID (0x4489)
        durationElement[0] = 0x44;
        durationElement[1] = 0x89;
        // 写入 Size (8 bytes for float64)
        durationElement[2] = 0x88; // VINT for 8
        // 写入 Float64 值
        durationView.setFloat64(3, durationWebm, false);
        
        // 创建新的 buffer
        const insertPosition = infoInfo.dataStart;
        const newBuffer = new Uint8Array(buffer.byteLength + durationElementSize);
        
        // 复制插入点之前的数据
        newBuffer.set(new Uint8Array(buffer, 0, insertPosition), 0);
        // 插入 Duration 元素
        newBuffer.set(durationElement, insertPosition);
        // 复制插入点之后的数据
        newBuffer.set(new Uint8Array(buffer, insertPosition), insertPosition + durationElementSize);
        
        // 更新 Info 元素的大小
        this.updateElementSize(newBuffer, infoInfo.sizeStart, infoInfo.sizeLength, infoInfo.dataSize + durationElementSize);
        
        const fixedBlob = new Blob([newBuffer], { type: 'video/webm' });
        console.log('[WebmFixer] Duration element inserted, new size:', fixedBlob.size);
        return fixedBlob;
    }
    
    // 更新元素大小（VINT 编码）
    updateElementSize(buffer, sizeStart, sizeLength, newSize) {
        // 简单实现：只支持固定长度的 size 更新
        const view = new DataView(buffer.buffer);
        if (sizeLength === 1) {
            buffer[sizeStart] = 0x80 | newSize;
        } else if (sizeLength === 2) {
            buffer[sizeStart] = 0x40 | (newSize >> 8);
            buffer[sizeStart + 1] = newSize & 0xFF;
        } else if (sizeLength === 3) {
            buffer[sizeStart] = 0x20 | (newSize >> 16);
            buffer[sizeStart + 1] = (newSize >> 8) & 0xFF;
            buffer[sizeStart + 2] = newSize & 0xFF;
        } else if (sizeLength === 4) {
            buffer[sizeStart] = 0x10 | (newSize >> 24);
            buffer[sizeStart + 1] = (newSize >> 16) & 0xFF;
            buffer[sizeStart + 2] = (newSize >> 8) & 0xFF;
            buffer[sizeStart + 3] = newSize & 0xFF;
        }
    }
    
    // 查找 EBML 元素
    findElement(view, startOffset, targetId, endOffset) {
        endOffset = endOffset || view.byteLength;
        let offset = startOffset;
        
        while (offset < endOffset - 4) {
            const { id, idLength } = this.readVintId(view, offset);
            if (idLength === 0) break;
            
            const sizeStart = offset + idLength;
            const { value: size, length: sizeLength } = this.readVint(view, sizeStart);
            if (sizeLength === 0) break;
            
            const dataStart = sizeStart + sizeLength;
            
            if (id === targetId) {
                return {
                    offset,
                    idLength,
                    sizeStart,
                    sizeLength,
                    dataStart,
                    dataSize: size
                };
            }
            
            // 对于容器元素（Segment, Info），不跳过内容
            if (id === this.SEGMENT_ID || id === this.INFO_ID) {
                offset = dataStart;
            } else {
                offset = dataStart + size;
            }
        }
        
        return null;
    }
    
    // 读取 VINT ID
    readVintId(view, offset) {
        if (offset >= view.byteLength) return { id: 0, idLength: 0 };
        
        const first = view.getUint8(offset);
        let idLength = 1;
        let id = first;
        
        if (first >= 0x80) {
            idLength = 1;
        } else if (first >= 0x40) {
            idLength = 2;
        } else if (first >= 0x20) {
            idLength = 3;
        } else if (first >= 0x10) {
            idLength = 4;
        } else {
            return { id: 0, idLength: 0 };
        }
        
        for (let i = 1; i < idLength; i++) {
            id = (id << 8) | view.getUint8(offset + i);
        }
        
        return { id, idLength };
    }
    
    // 读取 VINT 大小
    readVint(view, offset) {
        if (offset >= view.byteLength) return { value: 0, length: 0 };
        
        const first = view.getUint8(offset);
        let length = 1;
        let value = first;
        
        if (first >= 0x80) {
            length = 1;
            value = first & 0x7F;
        } else if (first >= 0x40) {
            length = 2;
            value = first & 0x3F;
        } else if (first >= 0x20) {
            length = 3;
            value = first & 0x1F;
        } else if (first >= 0x10) {
            length = 4;
            value = first & 0x0F;
        } else if (first >= 0x08) {
            length = 5;
            value = first & 0x07;
        } else if (first >= 0x04) {
            length = 6;
            value = first & 0x03;
        } else if (first >= 0x02) {
            length = 7;
            value = first & 0x01;
        } else if (first >= 0x01) {
            length = 8;
            value = 0;
        } else {
            return { value: 0, length: 0 };
        }
        
        for (let i = 1; i < length; i++) {
            value = (value << 8) | view.getUint8(offset + i);
        }
        
        return { value, length };
    }
    
    // 读取无符号整数
    readUint(view, offset, length) {
        let value = 0;
        for (let i = 0; i < length; i++) {
            value = (value << 8) | view.getUint8(offset + i);
        }
        return value;
    }
    
    // 写入 Float64
    writeFloat64(view, offset, value) {
        view.setFloat64(offset, value, false); // big-endian
    }
}

// 全局 WebM Duration Fixer 实例（单例）
const webmDurationFixer = new WebmDurationFixer();

// Video Clip Processor using Canvas API
class VideoClipProcessor {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.mediaRecorder = null;
        this.recordingStartTime = null;
        this.ffmpegFixerLoaded = false;
        this.ffmpeg = null;
    }

    formatBytes(bytes) {
        if (typeof bytes !== 'number') return 'n/a';
        const MB = 1024 * 1024;
        if (bytes < MB) return `${bytes.toFixed(0)} B`;
        return `${(bytes / MB).toFixed(2)} MB`;
    }

    logMemory(label, extra = {}) {
        try {
            const mem = performance?.memory;
            const payload = {
                ...extra,
            };
            if (mem) {
                payload.usedJSHeapSize = this.formatBytes(mem.usedJSHeapSize);
                payload.totalJSHeapSize = this.formatBytes(mem.totalJSHeapSize);
                payload.jsHeapSizeLimit = this.formatBytes(mem.jsHeapSizeLimit);
            }
            console.log(`[Mem][Grid] ${label}`, payload);
        } catch (err) {
            console.warn('logMemory failed', err);
        }
    }
    
    // Clean up resources to prevent memory leaks
    cleanup() {
        console.log('[VideoClipProcessor] Cleaning up resources...');

        
        // Clear canvas
        if (this.ctx && this.canvas) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
        
        // Reset canvas size to minimal to free GPU memory
        if (this.canvas) {
            this.canvas.width = 1;
            this.canvas.height = 1;
            this.canvas = null;
        }
        this.ctx = null;
        
        // Clear media recorder
        if (this.mediaRecorder) {
            if (this.mediaRecorder.state !== 'inactive') {
                try {
                    this.mediaRecorder.stop();
                } catch (e) {
                    // Ignore errors when stopping
                }
            }
            this.mediaRecorder = null;
        }
        
        this.recordingStartTime = null;
        
        console.log('[VideoClipProcessor] Cleanup completed');
    }

    async loadFFmpeg(progressCallback) {
        if (this.ffmpeg && this.ffmpegLoaded) return this.ffmpeg;
        
        // Try different global names for FFmpeg WASM library
        // CDN UMD build exposes FFmpegWASM global
        const FFmpegLib = window.FFmpegWASM || window.FFmpeg;
        
        if (!FFmpegLib) {
            throw new Error('FFmpeg WASM library not loaded. Please check if the script is included.');
        }

        const { FFmpeg } = FFmpegLib;
        
        if (!this.ffmpeg) {
            this.ffmpeg = new FFmpeg();
            
            this.ffmpeg.on('log', ({ message }) => {
                console.log('[FFmpeg]', message);
            });
            
            // Use arrow function to capture 'this' and access current progress callback
            this.ffmpeg.on('progress', ({ progress, time }) => {
                 // progress is 0-1
                 if (this.ffmpegProgressCallback) {
                     this.ffmpegProgressCallback(`编码中... ${(progress * 100).toFixed(0)}%`);
                 }
            });
        }

        // Check if multi-threading is supported (requires COOP/COEP headers)
        const supportsMultiThread = typeof SharedArrayBuffer !== 'undefined';
        const useMultiThread = supportsMultiThread; // Re-enabled with scale optimization
        
        if (useMultiThread) {
            progressCallback?.('加载 FFmpeg 多线程核心模块...');
            console.log('[FFmpeg] Loading FFmpeg WASM core (multi-threaded)...');
        } else {
            progressCallback?.('加载 FFmpeg 核心模块...');
            console.log('[FFmpeg] Loading FFmpeg WASM core (single-threaded)...');
        }
        
        const startTime = performance.now();
        
        // Load from local files for faster loading and offline support
        // Must use absolute URLs for ffmpeg.wasm to work correctly
        const baseURL = new URL('libs/ffmpeg', window.location.href).href;
        
        try {
            if (useMultiThread) {
                // Multi-threaded version - faster but requires COOP/COEP headers
                await this.ffmpeg.load({
                    coreURL: `${baseURL}/ffmpeg-core-mt.js`,
                    wasmURL: `${baseURL}/ffmpeg-core-mt.wasm`,
                    workerURL: `${baseURL}/ffmpeg-core.worker.js`,
                    classWorkerURL: `${baseURL}/814.ffmpeg.js`,
                });
                this.ffmpegMultiThread = true;
            } else {
                // Single-threaded version - more stable
                await this.ffmpeg.load({
                    coreURL: `${baseURL}/ffmpeg-core.js`,
                    wasmURL: `${baseURL}/ffmpeg-core.wasm`,
                    classWorkerURL: `${baseURL}/814.ffmpeg.js`,
                });
                this.ffmpegMultiThread = false;
            }
        } catch (mtError) {
            // If multi-thread fails, fallback to single-thread
            if (useMultiThread) {
                console.warn('[FFmpeg] Multi-thread load failed, falling back to single-thread:', mtError);
                progressCallback?.('多线程加载失败，使用单线程模式...');
                await this.ffmpeg.load({
                    coreURL: `${baseURL}/ffmpeg-core.js`,
                    wasmURL: `${baseURL}/ffmpeg-core.wasm`,
                    classWorkerURL: `${baseURL}/814.ffmpeg.js`,
                });
                this.ffmpegMultiThread = false;
            } else {
                throw mtError;
            }
        }
        
        this.ffmpegLoaded = true;
        const loadTime = ((performance.now() - startTime) / 1000).toFixed(1);
        console.log(`[FFmpeg] FFmpeg WASM loaded successfully in ${loadTime}s (multi-thread: ${this.ffmpegMultiThread})`);
        return this.ffmpeg;
    }
    
    // Fix WebM metadata using FFmpeg WASM (for streamed files)
    async fixWebmWithFFmpeg(fileHandle, progressCallback) {
        try {
            progressCallback?.('加载 FFmpeg 修复模块...');
            const ffmpeg = await this.loadFFmpeg(progressCallback);
            
            // Read the file content
            progressCallback?.('读取视频文件...');
            const file = await fileHandle.getFile();
            const inputData = new Uint8Array(await file.arrayBuffer());
            
            // Write to FFmpeg virtual filesystem
            await ffmpeg.writeFile('input.webm', inputData);
            
            // Run FFmpeg to remux (copy streams, fix metadata)
            progressCallback?.('修复视频元数据...');
            await ffmpeg.exec([
                '-i', 'input.webm',
                '-c', 'copy',
                '-y',
                'output.webm'
            ]);
            
            // Read the fixed file
            const outputData = await ffmpeg.readFile('output.webm');
            
            // Clean up FFmpeg virtual filesystem
            try {
                await ffmpeg.deleteFile('input.webm');
                await ffmpeg.deleteFile('output.webm');
            } catch (e) {
                console.warn('[FFmpeg] Cleanup warning:', e);
            }
            
            // Write back to the original file
            progressCallback?.('保存修复后的视频...');
            const writable = await fileHandle.createWritable();
            await writable.write(outputData);
            await writable.close();
            
            console.log('[FFmpeg] WebM metadata fixed successfully');
            return true;
        } catch (error) {
            console.error('[FFmpeg] Failed to fix WebM metadata:', error);
            return false;
        }
    }
    
    // Helper function to fetch file as Uint8Array (replaces @ffmpeg/util fetchFile)
    async fetchFileAsUint8Array(file) {
        if (file instanceof File) {
            return new Uint8Array(await file.arrayBuffer());
        } else if (file instanceof Blob) {
            return new Uint8Array(await file.arrayBuffer());
        } else if (typeof file === 'string') {
            // URL or path
            const response = await fetch(file);
            return new Uint8Array(await response.arrayBuffer());
        } else if (file instanceof Uint8Array) {
            return file;
        }
        throw new Error('Unsupported file type');
    }

    async processWithFFmpegWasm(clipSegments, cameras, startTime, endTime, addTimestamp, mergeGrid, eventStartTime, progressCallback, fileHandle = null) {
        // Set the progress callback for FFmpeg events
        this.ffmpegProgressCallback = progressCallback;
        
        const ffmpeg = await this.loadFFmpeg(progressCallback);
        
        // Track all temporary files to ensure cleanup
        const allCreatedFiles = [];
        
        // Prepare writable stream if available
        let writable = null;
        if (fileHandle) {
             try {
                 writable = await fileHandle.createWritable();
             } catch(e) {
                 console.warn("Create writable stream failed, fallback to memory mode", e);
             }
        }
        
        try {
            // Sort cameras for grid layout consistency
            let sortedCameras = cameras;
            if (mergeGrid) {
                 const order = ['front', 'back', 'left', 'right', 'left_pillar', 'right_pillar'];
                 sortedCameras = cameras.sort((a, b) => {
                     const idxA = order.indexOf(a);
                     const idxB = order.indexOf(b);
                     return (idxA === -1 ? 99 : idxA) - (idxB === -1 ? 99 : idxB);
                 });
            }

            // Load Font if needed (once)
            let fontFile = null;
            if (addTimestamp) {
                progressCallback?.('加载字体...');
                try {
                     const fontUrl = 'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxP.ttf';
                     const fontData = await this.fetchFileAsUint8Array(fontUrl);
                     await ffmpeg.writeFile('font.ttf', fontData);
                     fontFile = 'font.ttf';
                     allCreatedFiles.push('font.ttf');
                } catch (e) {
                     console.warn('Font load failed, timestamp disabled', e);
                     addTimestamp = false;
                }
            }

            // Process each segment sequentially to save memory
            // Use TS (MPEG-TS) for intermediate segments as it's streamable
            const tsBlobs = [];
            
            for (let i = 0; i < clipSegments.length; i++) {
                const seg = clipSegments[i];
                const segmentFiles = []; // Files for this segment only
                
                progressCallback?.(`处理片段 ${i + 1}/${clipSegments.length}...`);
                
                const cameraInputs = {};
                
                // 1. Write input files for this segment
                for (const cam of sortedCameras) {
                    const file = seg.segment.files[cam];
                    if (!file) continue;
                    
                    const filename = `s${i}_${cam}.mp4`;
                    let data;
                    if (file.path && window.__TAURI__) {
                         data = await window.__TAURI__.fs.readFile(file.path);
                    } else {
                         data = await this.fetchFileAsUint8Array(file);
                    }
                    
                    await ffmpeg.writeFile(filename, data);
                    segmentFiles.push(filename);
                    if (!cameraInputs[cam]) cameraInputs[cam] = [];
                    cameraInputs[cam].push(filename);
                    
                    // Allow GC
                    data = null;
                }
                
                // 2. Build filter graph for this segment
                let filterComplex = '';
                let inputIdx = 0;
                const cameraStreamNames = [];
                
                // Calculate timestamp for this segment
                let segmentTimestampStr = '';
                if (addTimestamp) {
                    // Base timestamp from file or fallback
                    const firstCam = sortedCameras[0];
                    const firstFile = seg.segment.files[firstCam];
                    const fileName = firstFile?.name || (firstFile?.path ? firstFile.path.split(/[/\\]/).pop() : null);
                    const fullTimestampMatch = fileName?.match(/(\d{4}-\d{2}-\d{2}_\d{2}-\d{2}-\d{2})/);
                    
                    let segBaseTime;
                    if (fullTimestampMatch) {
                        segBaseTime = this.parseTimestamp(fullTimestampMatch[1]);
                    } else {
                        segBaseTime = this.parseTimestamp(seg.timestamp);
                    }
                    
                    // Add clipStart offset
                    const currentSegTime = new Date(segBaseTime.getTime() + seg.clipStart * 1000);
                    
                    segmentTimestampStr = currentSegTime.toLocaleString('zh-CN', {
                        year: 'numeric', month: '2-digit', day: '2-digit',
                        hour: '2-digit', minute: '2-digit', second: '2-digit',
                        hour12: false
                    }).replace(/\//g, '-');
                }

                // Build inputs and filters
                for (const cam of sortedCameras) {
                    if (!cameraInputs[cam]) continue;
                    
                    // Since we process one segment, there is only one file per camera here
                    const inputFile = cameraInputs[cam][0];
                    const inputStream = `[${inputIdx}:v]`;
                    inputIdx++;
                    
                    const trimmedStream = `[v_${cam}_trimmed]`;
                    // Use segment-specific clip duration
                    const duration = seg.clipEnd - seg.clipStart;
                    
                    filterComplex += `${inputStream}trim=start=${seg.clipStart}:duration=${duration},setpts=PTS-STARTPTS${trimmedStream};`;
                    cameraStreamNames.push({ name: trimmedStream, cam });
                }
                
                let finalStream = '';
                
                if (mergeGrid && cameraStreamNames.length > 1) {
                    // Grid logic
                    const scaledStreams = [];
                    for (const {name, cam} of cameraStreamNames) {
                        const scaledName = `[v_${cam}_scaled]`;
                        filterComplex += `${name}scale=960:540${scaledName};`;
                        scaledStreams.push(scaledName);
                    }
                    
                    const count = scaledStreams.length;
                    let stackLayout = '';
                    if (count === 4) stackLayout = '0_0|w0_0|0_h0|w0_h0';
                    else if (count === 2) stackLayout = '0_0|w0_0';
                    else if (count === 3) stackLayout = '0_0|w0_0|0_h0';
                    else if (count === 6) stackLayout = '0_0|w0_0|w0+w1_0|0_h0|w0_h0|w0+w1_h0';
                    else stackLayout = '0_0';
                    
                    finalStream = `[v_grid]`;
                    filterComplex += `${scaledStreams.join('')}xstack=inputs=${count}:layout=${stackLayout}${finalStream};`;
                } else {
                    finalStream = cameraStreamNames[0].name;
                }
                
                // Add timestamp
                if (addTimestamp && fontFile) {
                    const stampedStream = `[v_final]`;
                    const escapedTimestamp = segmentTimestampStr.replace(/:/g, '\\:');
                    const drawText = `drawtext=fontfile=${fontFile}:text='${escapedTimestamp}':x=w-text_w-20:y=20:fontsize=48:fontcolor=white:box=1:boxcolor=black@0.5`;
                    
                    filterComplex += `${finalStream}${drawText}${stampedStream}`;
                    finalStream = stampedStream;
                }
                
                if (filterComplex.endsWith(';')) filterComplex = filterComplex.slice(0, -1);
                
                const args = [];
                // Add inputs
                for (const cam of sortedCameras) {
                    if (cameraInputs[cam]) args.push('-i', cameraInputs[cam][0]);
                }
                
                args.push('-filter_complex', filterComplex);
                args.push('-map', finalStream);
                
                // Encoding settings
                // Use MPEG-TS for intermediate segments
                args.push('-c:v', 'libx264', '-preset', 'ultrafast');
                // Cap bitrate to control file size and memory usage (4Mbps is sufficient for dashboard)
                args.push('-b:v', '4000k', '-maxrate', '4000k', '-bufsize', '8000k');
                args.push('-crf', '28'); // Slightly better quality than 32, but bitrate cap will control size
                args.push('-g', '48', '-bf', '0', '-pix_fmt', 'yuv420p');
                args.push('-f', 'mpegts'); // Output as TS
                
                const tempOutName = `temp_out_${i}.ts`;
                args.push(tempOutName);
                
                console.log(`[FFmpeg] Processing segment ${i}`, args.join(' '));
                await ffmpeg.exec(args);
                
                // Read temp file to JS memory
                const segData = await ffmpeg.readFile(tempOutName);
                
                if (writable) {
                     // Streaming write to disk directly
                     progressCallback?.(`写入磁盘 (段 ${i + 1})...`);
                     await writable.write(segData);
                } else {
                     // Convert to Blob immediately
                     const segBlob = new Blob([segData.buffer], { type: 'video/mp2t' });
                     tsBlobs.push(segBlob);
                }
                
                // Clean up WASM memory
                await ffmpeg.deleteFile(tempOutName);
                
                // CLEANUP INPUTS IMMEDIATELY
                for (const f of segmentFiles) {
                    await ffmpeg.deleteFile(f);
                }
                
                // Explicitly nullify
                data = null; 
            }
            
            if (writable) {
                 await writable.close();
                 this.ffmpegProgressCallback = null;
                 // Return empty blob to satisfy signature, but with saved: true
                 return new Blob([], { type: 'video/mp2t' });
            }
            
            // 3. Concat all segments (Memory Mode Fallback)
            progressCallback?.('合并片段...');
            
            try {
                const allTsBlob = new Blob(tsBlobs, { type: 'video/mp2t' });
                
                // Only try to remux if small enough
                const MAX_SAFE_SIZE = 500 * 1024 * 1024; // Lower limit to 500MB
                if (allTsBlob.size > MAX_SAFE_SIZE) {
                    console.warn('[FFmpeg] Total size too large, returning TS file');
                    return allTsBlob;
                }

                const allTsBuffer = await allTsBlob.arrayBuffer();
                const allTsUint8 = new Uint8Array(allTsBuffer);
                
                await ffmpeg.writeFile('all.ts', allTsUint8);
                allCreatedFiles.push('all.ts');
                
                progressCallback?.('封装 MP4...');
                const args = [
                    '-i', 'all.ts',
                    '-c', 'copy',
                    '-movflags', '+faststart',
                    'output.mp4'
                ];
                
                await ffmpeg.exec(args);
                const finalOutputData = await ffmpeg.readFile('output.mp4');
                allCreatedFiles.push('output.mp4');
                
                const blob = new Blob([finalOutputData.buffer], { type: 'video/mp4' });
                
                // Final cleanup
                for (const f of allCreatedFiles) {
                    try { await ffmpeg.deleteFile(f); } catch {}
                }
                
                this.ffmpegProgressCallback = null;
                return blob;
                
            } catch (remuxError) {
                console.warn('[FFmpeg] MP4 Remux failed, falling back to TS:', remuxError);
                const finalBlob = new Blob(tsBlobs, { type: 'video/mp2t' });
                for (const f of allCreatedFiles) {
                    try { await ffmpeg.deleteFile(f); } catch {}
                }
                this.ffmpegProgressCallback = null;
                return finalBlob; 
            }

        } catch (e) {
            console.error('FFmpeg WASM Error:', e);
            if (writable) {
                 try { await writable.close(); } catch {}
            }
            this.ffmpegProgressCallback = null;
            // Attempt cleanup
            for (const f of allCreatedFiles) {
                try { await ffmpeg.deleteFile(f); } catch {}
            }
            throw new Error('浏览器导出失败: ' + e.message + "\\n建议使用 Chrome 浏览器或尝试本地应用模式。");
        }
    }

    initCanvas(width, height) {
        if (!this.canvas) {
            this.canvas = document.createElement('canvas');
            this.ctx = this.canvas.getContext('2d');
        }
        this.canvas.width = width;
        this.canvas.height = height;
    }
    
    async checkFFmpeg() {
        const tauri = window.__TAURI__;
        if (!tauri || !tauri.shell) {
            console.warn('[FFmpeg] Tauri shell not available');
            return false;
        }
        try {
            console.log('[FFmpeg] Checking bundled FFmpeg availability...');
            // Try bundled FFmpeg first (sidecar)
            try {
                const sidecarCommand = tauri.shell.Command.sidecar('binaries/ffmpeg', ['-version']);
                const sidecarOutput = await sidecarCommand.execute();
                if (sidecarOutput.code === 0) {
                    console.log('[FFmpeg] Bundled FFmpeg available');
                    this.ffmpegCommand = 'sidecar';
                    return true;
                }
            } catch (e) {
                console.log('[FFmpeg] Bundled FFmpeg not available, trying system FFmpeg...');
            }
            
            // Fallback to system FFmpeg
            const command = tauri.shell.Command.create('ffmpeg', ['-version']);
            const output = await command.execute();
            console.log('[FFmpeg] System FFmpeg check result:', output);
            if (output.code === 0) {
                this.ffmpegCommand = 'system';
                return true;
            }
            return false;
        } catch (e) {
            console.warn('[FFmpeg] Check failed:', e);
            return false;
        }
    }
    
    createFFmpegCommand(args) {
        const tauri = window.__TAURI__;
        if (this.ffmpegCommand === 'sidecar') {
            return tauri.shell.Command.sidecar('binaries/ffmpeg', args);
        }
        return tauri.shell.Command.create('ffmpeg', args);
    }

    async processWithFFmpeg(clipSegments, camera, progressCallback) {
        const tauri = window.__TAURI__;
        const fs = tauri.fs;
        const shell = tauri.shell;
        
        // Use the directory of the first file
        const firstFile = clipSegments[0].segment.files[camera];
        if (!firstFile || !firstFile.path) throw new Error('File path not found');
        
        // Get directory path (handle both forward and back slashes)
        const pathSeparator = firstFile.path.includes('\\') ? '\\' : '/';
        const workDir = firstFile.path.substring(0, firstFile.path.lastIndexOf(pathSeparator));
        
        const timestamp = new Date().getTime();
        const listFilename = `ffmpeg_list_${camera}_${timestamp}.txt`;
        const outputFilename = `export_${camera}_${timestamp}.mp4`;
        
        const listPath = `${workDir}${pathSeparator}${listFilename}`;
        const outputPath = `${workDir}${pathSeparator}${outputFilename}`;
        
        // Generate list content
        let listContent = '';
        for (const seg of clipSegments) {
            const file = seg.segment.files[camera];
            if (!file || !file.path) continue;
            
            // For ffmpeg concat, paths should be escaped
            // Windows paths: C:\Path\To\File -> 'C:\Path\To\File'
            // We need to escape single quotes in the path
            const safePath = file.path.replace(/'/g, "'\\''");
            listContent += `file '${safePath}'\n`;
            listContent += `inpoint ${seg.clipStart}\n`;
            listContent += `outpoint ${seg.clipEnd}\n`;
        }
        
        try {
            // Write list file
            await fs.writeTextFile(listPath, listContent);
            
            // ffmpeg args
            const args = [
                '-f', 'concat',
                '-safe', '0',
                '-i', listPath,
                '-c', 'copy',
                '-y',
                outputPath
            ];
            
            console.log('Running ffmpeg:', args);
            progressCallback?.(`FFmpeg 导出中...`);
            
            const command = this.createFFmpegCommand(args);
            const output = await command.execute();
            
            if (output.code !== 0) {
                throw new Error(`FFmpeg error: ${output.stderr}`);
            }
            
            // Read result
            const binary = await fs.readFile(outputPath);
            const blob = new Blob([binary], { type: 'video/mp4' });
            
            // Cleanup
            await fs.remove(listPath);
            await fs.remove(outputPath);
            
            return blob;
            
        } catch (e) {
            // Cleanup on error
            try { await fs.remove(listPath); } catch(_) {}
            try { await fs.remove(outputPath); } catch(_) {}
            throw e;
        }
    }


    async processClip(segments, cameras, startTime, endTime, addTimestamp, mergeGrid, eventStartTime, progressCallback, useLocalFFmpeg = false, language = 'zh', fileHandle = null) {
        try {
            // Store language for use in processing methods
            this.currentLanguage = language;
            // Calculate which segments are needed
            const clipSegments = this.getSegmentsForTimeRange(segments, startTime, endTime);
            
            if (clipSegments.length === 0) {
                throw new Error('未找到有效的视频片段');
            }

            // 1. Use local FFmpeg if requested (Tauri desktop only)
            if (useLocalFFmpeg && window.__TAURI__) {
                const hasFFmpeg = await this.checkFFmpeg();
                if (!hasFFmpeg) {
                    throw new Error('未检测到 FFmpeg，请先安装 FFmpeg 并确保其在系统 PATH 中');
                }
                
                console.log('[VideoClipProcessor] Using local FFmpeg for export');
                
                if (mergeGrid && cameras.length > 1) {
                    // FFmpeg grid merge with optional timestamp
                    progressCallback?.('FFmpeg 合成四宫格视频...');
                    const result = await this.processWithFFmpegGrid(clipSegments, cameras, addTimestamp, eventStartTime, progressCallback);
                    return [result];
                } else {
                    // FFmpeg single camera export
                    const results = [];
                    for (const camera of cameras) {
                        progressCallback?.(`FFmpeg 极速导出 ${camera}...`);
                        const result = await this.processWithFFmpegFull(clipSegments, camera, addTimestamp, eventStartTime, progressCallback);
                        results.push(result);
                    }
                    return results;
                }
            }

            // 2. Fallback: Try native FFmpeg for fast copy (no timestamp, no grid) - Tauri only
            const hasFFmpeg = await this.checkFFmpeg();
            if (hasFFmpeg && !addTimestamp && !mergeGrid) {
                 const results = [];
                 for (const camera of cameras) {
                     progressCallback?.(`极速导出 ${camera}...`);
                     const blob = await this.processWithFFmpeg(clipSegments, camera, progressCallback);
                     results.push({ camera, blob });
                 }
                 return results;
            }
            
            // 3. Web FFmpeg (WASM) for Grid or Timestamp in Browser
            // If we have fileHandle (streaming mode), force use Web FFmpeg logic even if cameras.length=1
            // But currently processWithFFmpegWasm is only called if we implement it here.
            // Wait, previous logic called createGridVideoFromSegments or processVideoWithTimestamp (Canvas).
            // We want to replace Canvas with FFmpegWASM for better quality if possible, OR just optimize processWithFFmpegWasm
            
            // Previously, there was NO call to processWithFFmpegWasm in processClip in the provided snippet!
            // Wait, let's check the original code again.
            // Ah, the original code used Canvas (createGridVideoFromSegments / processVideoWithTimestamp).
            // But I modified processWithFFmpegWasm earlier. Where is it called?
            // It seems processWithFFmpegWasm was added but maybe not hooked up in processClip in the original code, 
            // OR I missed where it was called.
            
            // Let's hook it up. If fileHandle is provided, OR if we want to use WASM instead of Canvas.
            // Using WASM is generally better quality than Canvas recording but slower.
            // If the user is on Web, we prefer WASM for Grid/Timestamp to avoid re-encoding loss of Canvas recording (which is real-time-ish).
            
            // However, to be safe and stick to the "fix memory" goal:
            // If fileHandle is present, we MUST use processWithFFmpegWasm because Canvas recording doesn't support stream writing easily (MediaRecorder returns chunks, we could write chunks...).
            // Actually MediaRecorder chunks CAN be written to fileHandle!
            // But processWithFFmpegWasm was the one I optimized.
            
            // Let's use processWithFFmpegWasm if fileHandle is present OR if we want higher quality.
            // For now, let's only enable it if fileHandle is present to test the fix.
            
            if (fileHandle) {
                 progressCallback?.('正在使用流式导出模式 (Canvas)...');
                 
                 // 如果是合并四宫格
                 if (mergeGrid && cameras.length > 1) {
                     const result = await this.createGridVideoFromSegments(
                        clipSegments,
                        cameras,
                        startTime,
                        endTime,
                        addTimestamp,
                        eventStartTime,
                        progressCallback,
                        fileHandle
                    );
                    // result 可能是 Blob 或 { saved: true, blob: ... }
                    const blob = result.saved ? result.blob : result;
                    const saved = !!result.saved;
                    return [{ camera: 'grid', blob: blob, saved: saved }];
                 } else {
                     // 单个摄像头处理
                     const results = [];
                     for (const camera of cameras) {
                         const result = await this.processVideoWithTimestamp(
                            clipSegments, 
                            camera, 
                            startTime, 
                            endTime, 
                            addTimestamp,
                            eventStartTime,
                            progressCallback,
                            fileHandle
                        );
                        const blob = result.saved ? result.blob : result;
                        const saved = !!result.saved;
                        results.push({ camera, blob: blob, saved: saved });
                     }
                     return results;
                 }
            }

            // 3. If merging as grid, process all cameras together (Canvas method)
            if (mergeGrid && cameras.length > 1) {
                progressCallback?.('合成四宫格视频...');
                const gridBlob = await this.createGridVideoFromSegments(
                    clipSegments,
                    cameras,
                    startTime,
                    endTime,
                    addTimestamp,
                    eventStartTime,
                    progressCallback
                );
                return [{ camera: 'grid', blob: gridBlob }];
            }
            
            // 5. Otherwise, process each camera individually (Canvas method - fallback)
            const results = [];
            
            for (const camera of cameras) {
                progressCallback?.(`处理 ${camera} 摄像头...`);
                
                const videoBlob = await this.processVideoWithTimestamp(
                    clipSegments, 
                    camera, 
                    startTime, 
                    endTime, 
                    addTimestamp,
                    eventStartTime,
                    progressCallback
                );
                
                results.push({ camera, blob: videoBlob });
            }
            
            return results;
            
        } catch (error) {
            console.error('Video processing error:', error);
            throw error;
        } finally {
            // Clean up canvas and media recorder resources
            this.cleanup();
        }
    }
    
    // FFmpeg full export with optional timestamp (single camera)
    async processWithFFmpegFull(clipSegments, camera, addTimestamp, eventStartTime, progressCallback) {
        const tauri = window.__TAURI__;
        const fs = tauri.fs;
        const shell = tauri.shell;
        
        const firstFile = clipSegments[0].segment.files[camera];
        if (!firstFile || !firstFile.path) throw new Error(`${camera} 摄像头文件路径未找到`);
        
        const pathSeparator = firstFile.path.includes('\\') ? '\\' : '/';
        const workDir = firstFile.path.substring(0, firstFile.path.lastIndexOf(pathSeparator));
        
        const timestamp = new Date().getTime();
        const listFilename = `ffmpeg_list_${camera}_${timestamp}.txt`;
        const outputFilename = `TeslaCam_${camera}_${timestamp}.mp4`;
        
        const listPath = `${workDir}${pathSeparator}${listFilename}`;
        const outputPath = `${workDir}${pathSeparator}${outputFilename}`;
        
        // Generate concat list
        let listContent = '';
        for (const seg of clipSegments) {
            const file = seg.segment.files[camera];
            if (!file || !file.path) continue;
            const safePath = file.path.replace(/'/g, "'\\''");
            listContent += `file '${safePath}'\n`;
            listContent += `inpoint ${seg.clipStart}\n`;
            listContent += `outpoint ${seg.clipEnd}\n`;
        }
        
        try {
            await fs.writeTextFile(listPath, listContent);
            
            let args;
            if (addTimestamp) {
                // With timestamp: need re-encode
                // Extract full timestamp (with seconds) from filename
                const firstFile = clipSegments[0].segment.files[camera];
                const fileName = firstFile.name || firstFile.path.split(/[/\\]/).pop();
                const fullTimestampMatch = fileName.match(/(\d{4}-\d{2}-\d{2}_\d{2}-\d{2}-\d{2})/);
                
                let firstSegTime;
                if (fullTimestampMatch) {
                    firstSegTime = this.parseTimestamp(fullTimestampMatch[1]);
                } else {
                    // Fallback to segment timestamp (without seconds)
                    firstSegTime = this.parseTimestamp(clipSegments[0].timestamp);
                }
                
                const clipStartTimeObj = new Date(firstSegTime.getTime() + clipSegments[0].clipStart * 1000);
                const startEpoch = Math.floor(clipStartTimeObj.getTime() / 1000);
                
                console.log('[FFmpeg Timestamp Debug]', {
                    fileName,
                    fullTimestamp: fullTimestampMatch ? fullTimestampMatch[1] : null,
                    segmentTimestamp: clipSegments[0].timestamp,
                    firstSegTime: firstSegTime.toISOString(),
                    clipStart: clipSegments[0].clipStart,
                    clipStartTimeObj: clipStartTimeObj.toISOString(),
                    startEpoch
                });
                
                // Determine font file path based on OS (use CJK-compatible font)
                let fontOption = "";
                if (navigator.userAgent.includes('Windows')) {
                    fontOption = "fontfile='C\\:/Windows/Fonts/msyh.ttc':";
                } else if (navigator.userAgent.includes('Mac')) {
                    fontOption = "fontfile='/System/Library/Fonts/PingFang.ttc':";
                }

                // drawtext filter for timestamp (top-right corner)
                const drawtext = `drawtext=${fontOption}text='%{pts\\:localtime\\:${startEpoch}\\:%Y-%m-%d %H\\\\\\:%M\\\\\\:%S}':x=w-text_w-20:y=20:fontsize=28:fontcolor=white:box=1:boxcolor=black@0.5`;
                
                args = [
                    '-f', 'concat',
                    '-safe', '0',
                    '-i', listPath,
                    '-vf', drawtext,
                    '-c:v', 'libx264',
                    '-preset', 'fast',
                    '-crf', '23',
                    '-c:a', 'aac',
                    '-y',
                    outputPath
                ];
            } else {
                // Without timestamp: fast copy
                args = [
                    '-f', 'concat',
                    '-safe', '0',
                    '-i', listPath,
                    '-c', 'copy',
                    '-y',
                    outputPath
                ];
            }
            
            console.log('[FFmpeg] Running:', args.join(' '));
            progressCallback?.(`FFmpeg 处理 ${camera}...`);
            
            const command = this.createFFmpegCommand(args);
            let output;
            try {
                output = await command.execute();
            } catch (execError) {
                console.error('[FFmpeg] Execute error:', execError);
                throw new Error(`FFmpeg 执行失败: ${execError?.message || execError?.toString?.() || '命令执行异常'}`);
            }
            
            console.log('[FFmpeg] Output:', output);
            
            if (output.code !== 0) {
                throw new Error(`FFmpeg 错误 (code ${output.code}): ${output.stderr || output.stdout || '未知错误'}`);
            }
            
            // Return path instead of blob for Tauri
            await fs.remove(listPath);
            
            return { camera, path: outputPath, isFile: true };
            
        } catch (e) {
            try { await fs.remove(listPath); } catch(_) {}
            try { await fs.remove(outputPath); } catch(_) {}
            throw e;
        }
    }
    
    // FFmpeg grid merge export
    async processWithFFmpegGrid(clipSegments, cameras, addTimestamp, eventStartTime, progressCallback) {
        const tauri = window.__TAURI__;
        const fs = tauri.fs;
        const shell = tauri.shell;

        // Sort cameras for 6-grid layout
        let sortedCameras = [...cameras];
        if (cameras.length > 4) {
            const sortOrder = ['left_pillar', 'front', 'right_pillar', 'left', 'back', 'right'];
            sortedCameras.sort((a, b) => {
                const idxA = sortOrder.indexOf(a);
                const idxB = sortOrder.indexOf(b);
                return (idxA === -1 ? 99 : idxA) - (idxB === -1 ? 99 : idxB);
            });
        } else {
             // Standard layout for <= 4 cameras
             const sortOrder = ['front', 'back', 'left', 'right', 'left_pillar', 'right_pillar'];
             sortedCameras.sort((a, b) => {
                const idxA = sortOrder.indexOf(a);
                const idxB = sortOrder.indexOf(b);
                return (idxA === -1 ? 99 : idxA) - (idxB === -1 ? 99 : idxB);
            });
        }
        
        const firstFile = clipSegments[0].segment.files[sortedCameras[0]];
        if (!firstFile || !firstFile.path) throw new Error('文件路径未找到');
        
        const pathSeparator = firstFile.path.includes('\\') ? '\\' : '/';
        const workDir = firstFile.path.substring(0, firstFile.path.lastIndexOf(pathSeparator));
        
        const timestamp = new Date().getTime();
        const outputFilename = `TeslaCam_grid_${timestamp}.mp4`;
        const outputPath = `${workDir}${pathSeparator}${outputFilename}`;
        
        // Create temp concat files for each camera
        const tempFiles = [];
        const inputArgs = [];
        
        try {
            for (const camera of sortedCameras) {
                const listFilename = `ffmpeg_list_${camera}_${timestamp}.txt`;
                const listPath = `${workDir}${pathSeparator}${listFilename}`;
                tempFiles.push(listPath);
                
                let listContent = '';
                for (const seg of clipSegments) {
                    const file = seg.segment.files[camera];
                    if (!file || !file.path) continue;
                    const safePath = file.path.replace(/'/g, "'\\''");
                    listContent += `file '${safePath}'\n`;
                    listContent += `inpoint ${seg.clipStart}\n`;
                    listContent += `outpoint ${seg.clipEnd}\n`;
                }
                
                await fs.writeTextFile(listPath, listContent);
                inputArgs.push('-f', 'concat', '-safe', '0', '-i', listPath);
            }
            
            // Build filter for grid layout
            const count = sortedCameras.length;
            let filterComplex = '';
            
            // Camera names for localization
            const lang = this.currentLanguage || 'zh';
            const cameraNames = {
                front: { en: 'Front', zh: '前视' },
                left_pillar: { en: 'Left Pillar', zh: '左柱' },
                right_pillar: { en: 'Right Pillar', zh: '右柱' },
                back: { en: 'Back', zh: '后视' },
                left: { en: 'Left', zh: '左侧' },
                right: { en: 'Right', zh: '右侧' }
            };

            // Scale each input and add label
            for (let i = 0; i < count; i++) {
                const camName = sortedCameras[i];
                const labelText = cameraNames[camName]?.[lang] || camName.toUpperCase();
                
                // Determine font file path based on OS for labels (use CJK-compatible font)
                let fontOption = "";
                if (navigator.userAgent.includes('Windows')) {
                    fontOption = "fontfile='C\\:/Windows/Fonts/msyh.ttc':";
                } else if (navigator.userAgent.includes('Mac')) {
                    fontOption = "fontfile='/System/Library/Fonts/PingFang.ttc':";
                }

                const drawLabel = `drawtext=${fontOption}text='${labelText}':x=10:y=10:fontsize=18:fontcolor=white:box=1:boxcolor=black@0.5`;
                filterComplex += `[${i}:v]scale=960:540,${drawLabel}[v${i}];`;
            }
            
            // Stack layout
            let stackFilter = '';
            if (count === 2) {
                stackFilter = `[v0][v1]hstack=inputs=2[grid]`;
            } else if (count === 3) {
                // Top: 2 videos (1920px), Bottom: 1 video (960px) -> Pad bottom to 1920px (center aligned)
                stackFilter = `[v0][v1]hstack=inputs=2[top];[v2]pad=1920:540:480:0[v2_padded];[top][v2_padded]vstack=inputs=2[grid]`;
            } else if (count === 4) {
                stackFilter = `[v0][v1]hstack=inputs=2[top];[v2][v3]hstack=inputs=2[bottom];[top][bottom]vstack=inputs=2[grid]`;
            } else if (count >= 5) {
                // 3x2 grid. Top row is always 3 videos (2880px).
                stackFilter = `[v0][v1][v2]hstack=inputs=3[top];`;
                if (count === 5) {
                    // Bottom: 2 videos (1920px) -> Pad to 2880px (center aligned: (2880-1920)/2 = 480)
                    stackFilter += `[v3][v4]hstack=inputs=2,pad=2880:540:480:0[bottom];[top][bottom]vstack=inputs=2[grid]`;
                } else {
                    // Bottom: 3 videos (2880px)
                    stackFilter += `[v3][v4][v5]hstack=inputs=3[bottom];[top][bottom]vstack=inputs=2[grid]`;
                }
            } else {
                stackFilter = `[v0]null[grid]`;
            }
            
            filterComplex += stackFilter;
            
            // Add timestamp if needed
            let finalOutput = '[grid]';
            if (addTimestamp) {
                // Extract full timestamp (with seconds) from filename
                const firstFile = clipSegments[0].segment.files[sortedCameras[0]];
                const fileName = firstFile.name || firstFile.path.split(/[/\\]/).pop();
                const fullTimestampMatch = fileName.match(/(\d{4}-\d{2}-\d{2}_\d{2}-\d{2}-\d{2})/);
                
                let firstSegTime;
                if (fullTimestampMatch) {
                    firstSegTime = this.parseTimestamp(fullTimestampMatch[1]);
                } else {
                    firstSegTime = this.parseTimestamp(clipSegments[0].timestamp);
                }
                
                const clipStartTimeObj = new Date(firstSegTime.getTime() + clipSegments[0].clipStart * 1000);
                const startEpoch = Math.floor(clipStartTimeObj.getTime() / 1000);
                
                let fontOption = "";
                if (navigator.userAgent.includes('Windows')) {
                    fontOption = "fontfile='C\\:/Windows/Fonts/msyh.ttc':";
                } else if (navigator.userAgent.includes('Mac')) {
                    fontOption = "fontfile='/System/Library/Fonts/PingFang.ttc':";
                }
                
                const drawtext = `drawtext=${fontOption}text='%{pts\\:localtime\\:${startEpoch}\\:%Y-%m-%d %H\\\\\\:%M\\\\\\:%S}':x=w-text_w-20:y=20:fontsize=28:fontcolor=white:box=1:boxcolor=black@0.5`;
                filterComplex += `;[grid]${drawtext}[final]`;
                finalOutput = '[final]';
            }
            
            const args = [
                ...inputArgs,
                '-filter_complex', filterComplex,
                '-map', finalOutput,
                '-c:v', 'libx264',
                '-preset', 'fast',
                '-crf', '23',
                '-r', '24',
                '-y',
                outputPath
            ];
            
            console.log('[FFmpeg Grid] Running:', args.join(' '));
            progressCallback?.('FFmpeg 合成四宫格...');
            
            const command = this.createFFmpegCommand(args);
            let output;
            try {
                output = await command.execute();
            } catch (execError) {
                console.error('[FFmpeg Grid] Execute error:', execError);
                throw new Error(`FFmpeg 执行失败: ${execError?.message || execError?.toString?.() || '命令执行异常'}`);
            }
            
            console.log('[FFmpeg Grid] Output:', output);
            
            if (output.code !== 0) {
                throw new Error(`FFmpeg 错误 (code ${output.code}): ${output.stderr || output.stdout || '未知错误'}`);
            }
            
            // Cleanup temp files
            for (const f of tempFiles) {
                try { await fs.remove(f); } catch(_) {}
            }
            
            return { camera: 'grid', path: outputPath, isFile: true };
            
        } catch (e) {
            for (const f of tempFiles) {
                try { await fs.remove(f); } catch(_) {}
            }
            try { await fs.remove(outputPath); } catch(_) {}
            throw e;
        }
    }
    
    getSegmentsForTimeRange(allSegments, startTime, endTime) {
        const result = [];
        let accumulatedTime = 0;
        
        for (let i = 0; i < allSegments.length; i++) {
            const segment = allSegments[i];
            const segmentDuration = segment.duration || 60; // Default 60s
            const segmentStart = accumulatedTime;
            const segmentEnd = accumulatedTime + segmentDuration;
            
            // Check if this segment overlaps with our clip range
            if (segmentEnd > startTime && segmentStart < endTime) {
                const clipStart = Math.max(0, startTime - segmentStart);
                const clipEnd = Math.min(segmentDuration, endTime - segmentStart);
                
                result.push({
                    segment,
                    segmentIndex: i,
                    clipStart,
                    clipEnd,
                    clipDuration: clipEnd - clipStart,
                    timestamp: segment.timestamp,
                    absoluteStart: segmentStart
                });
            }
            
            accumulatedTime += segmentDuration;
            
            if (accumulatedTime >= endTime) break;
        }
        
        return result;
    }
    
    async processVideoWithTimestamp(clipSegments, camera, totalStartTime, totalEndTime, addTimestamp, eventStartTime, progressCallback, fileHandle = null) {
        if (clipSegments.length === 0) {
            throw new Error('没有可用的视频片段');
        }
        
        progressCallback?.(`处理 ${camera} 摄像头 (${clipSegments.length} 个片段)...`);
        
        // Check if we're in Tauri environment
        const isTauri = !!window.__TAURI__;
        
        // First pass: get video dimensions from first segment (load and release immediately)
        let canvasWidth = 0;
        let canvasHeight = 0;
        const firstVideoFile = clipSegments[0].segment.files[camera];
        if (firstVideoFile) {
            const tempVideo = document.createElement('video');
            tempVideo.muted = true;
            tempVideo.crossOrigin = 'anonymous';
            tempVideo.src = getFileUrl(firstVideoFile);
            await new Promise((resolve, reject) => {
                tempVideo.onloadedmetadata = resolve;
                tempVideo.onerror = reject;
            });
            canvasWidth = tempVideo.videoWidth;
            canvasHeight = tempVideo.videoHeight;
            // Release immediately
            URL.revokeObjectURL(tempVideo.src);
            tempVideo.src = '';
            tempVideo.load();
        }
        
        // Initialize canvas
        this.initCanvas(canvasWidth, canvasHeight);
        
        // Calculate total duration
        const FPS = 30;
        let totalDuration = 0;
        for (const clipSegment of clipSegments) {
            totalDuration += clipSegment.clipDuration;
        }
        const totalFrames = Math.ceil(totalDuration * FPS);
        
        // Setup MediaRecorder with fixed framerate
        const stream = this.canvas.captureStream(FPS);
        
        // Try VP9 first, fallback to VP8 if not supported
        let mimeType = 'video/webm;codecs=vp9';
        if (!MediaRecorder.isTypeSupported(mimeType)) {
            mimeType = 'video/webm;codecs=vp8';
        }
        
        this.mediaRecorder = new MediaRecorder(stream, {
            mimeType,
            videoBitsPerSecond: 3000000 // Reduced to 3 Mbps for lower memory footprint
        });
        
        // Use streaming approach - write chunks to array and periodically clear
        const chunks = [];
        let totalChunkSize = 0;
        let writable = null;
        
        // Write queue system to avoid Promise chain memory leaks
        const writeQueue = [];
        let writeQueueSize = 0;
        let isWriting = false;
        
        const processWriteQueue = async () => {
            if (isWriting) return;
            isWriting = true;
            
            while (writeQueue.length > 0) {
                const blob = writeQueue.shift();
                if (!blob) {
                    continue;
                }
                writeQueueSize -= blob.size || 0;
                try {
                    await writable.write(blob);
                } catch (err) {
                    console.error('Write error:', err);
                }
            }
            
            isWriting = false;
        };
        
        if (fileHandle) {
             try {
                 writable = await fileHandle.createWritable();
             } catch(e) {
                 console.warn("Writable creation failed", e);
             }
        }
        
        this.mediaRecorder.ondataavailable = (e) => {
            const size = e?.data ? e.data.size : 0;
            if (size > 0) {
                if (writable) {
                    writeQueue.push(e.data);
                    writeQueueSize += size;
                    if (writeQueueSize > 50 * 1024 * 1024) {
                        this.logMemory('writeQueue > 50MB', {
                            writeQueueSize: this.formatBytes(writeQueueSize),
                            totalChunkSize: this.formatBytes(totalChunkSize),
                            chunksBuffered: chunks.length,
                        });
                    }
                    processWriteQueue();
                } else {
                    chunks.push(e.data);
                }
                totalChunkSize += size;
            }
        };

        
        const recordingComplete = new Promise((resolve) => {
            this.mediaRecorder.onstop = async () => {
                console.log('MediaRecorder stopped, chunks count:', chunks.length, 'total size:', totalChunkSize);
                if (writable) {
                     await writable.close();
                     // Return result indicating saved
                     resolve({ saved: true, blob: new Blob([], { type: 'video/webm' }) });
                } else {
                    const blob = new Blob(chunks, { type: 'video/webm' });
                    console.log('Created blob, size:', blob.size);
                    // Clear chunks array to free memory
                    chunks.length = 0;
                    resolve(blob);
                }
            };
        });
        
        // Start recording - smaller timeslice helps reduce internal buffering
        this.mediaRecorder.start(250);
        const recordingStartTime = performance.now();
        
        // Process segments one at a time (streaming approach to reduce memory)
        let processedFrames = 0;
        const hasVideoFrameCallback = 'requestVideoFrameCallback' in HTMLVideoElement.prototype;
        
        for (let i = 0; i < clipSegments.length; i++) {
            const clipSegment = clipSegments[i];
            const videoFile = clipSegment.segment.files[camera];
            
            if (!videoFile) {
                throw new Error(`${camera} 摄像头在片段 ${i + 1} 中没有可用的视频文件`);
            }
            
            progressCallback?.(`加载片段 ${i + 1}/${clipSegments.length}...`);
            
            // Load video for this segment only
            const video = document.createElement('video');
            video.muted = true;
            video.crossOrigin = 'anonymous';
            
            // In Tauri, we need to read the file as blob to avoid CORS issues with canvas
            if (isTauri && videoFile.path) {
                try {
                    const fs = window.__TAURI__.fs;
                    const fileData = await fs.readFile(videoFile.path);
                    const blob = new Blob([fileData], { type: 'video/mp4' });
                    video.src = URL.createObjectURL(blob);
                } catch (e) {
                    console.error('Failed to read file via Tauri fs:', e);
                    video.src = getFileUrl(videoFile);
                }
            } else {
                video.src = getFileUrl(videoFile);
            }
            
            await new Promise((resolve, reject) => {
                video.onloadedmetadata = resolve;
                video.onerror = reject;
            });
            
            // Calculate timestamp for this segment - extract full timestamp from filename
            const fileName = videoFile?.name || (videoFile?.path ? videoFile.path.split(/[/\\]/).pop() : null);
            const fullTimestampMatch = fileName?.match(/(\d{4}-\d{2}-\d{2}_\d{2}-\d{2}-\d{2})/);
            
            let segmentTime;
            if (fullTimestampMatch) {
                segmentTime = this.parseTimestamp(fullTimestampMatch[1]);
            } else {
                segmentTime = this.parseTimestamp(clipSegment.timestamp);
            }
            
            const segmentEndTime = clipSegment.clipEnd;
            
            // Adjust clipStart if it exceeds video duration
            const actualClipStart = Math.min(clipSegment.clipStart, video.duration);
            // Adjust clipEnd based on actual video duration
            const actualEndTime = Math.min(segmentEndTime, video.duration);
            
            // Calculate timestamp based on actual clip start
            const segmentStartTimestamp = new Date(segmentTime.getTime() + actualClipStart * 1000);
            
            // Skip this segment if clipStart is already past video duration
            if (actualClipStart >= video.duration) {
                console.warn(`Segment ${i + 1}: clipStart (${clipSegment.clipStart}) exceeds video duration (${video.duration}), skipping`);
                // Release video resources
                URL.revokeObjectURL(video.src);
                video.src = '';
                video.load();
                continue;
            }
            
            console.log(`Processing single camera segment ${i + 1}/${clipSegments.length}:`, {
                clipStart: clipSegment.clipStart,
                actualClipStart,
                clipEnd: clipSegment.clipEnd,
                segmentEndTime,
                actualEndTime,
                videoDuration: video.duration,
                actualDuration: actualEndTime - actualClipStart
            });
            
            // Seek to clip start position
            video.currentTime = actualClipStart;
            await new Promise((resolve) => {
                video.onseeked = resolve;
            });
            
            if (hasVideoFrameCallback) {
                // Use requestVideoFrameCallback for precise frame capture
                await new Promise((resolve) => {
                    let lastFrameTime = -1;
                    let resolved = false;
                    
                    const captureFrame = (now, metadata) => {
                        if (resolved) return;
                        
                        if (video.currentTime >= actualEndTime + 0.05 || video.ended) {
                            resolved = true;
                            video.pause();
                            resolve();
                            return;
                        }
                        
                        if (metadata.mediaTime !== lastFrameTime) {
                            lastFrameTime = metadata.mediaTime;
                            
                            this.ctx.drawImage(video, 0, 0, this.canvas.width, this.canvas.height);
                            
                            if (addTimestamp) {
                                const currentTime = new Date(segmentStartTimestamp.getTime() + (video.currentTime - actualClipStart) * 1000);
                                const timeString = currentTime.toLocaleString('zh-CN', {
                                    year: 'numeric',
                                    month: '2-digit',
                                    day: '2-digit',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    second: '2-digit',
                                    hour12: false
                                }).replace(/\//g, '-');
                                
                                this.drawTimestamp(timeString);
                            }
                            
                            processedFrames++;
                            
                            if (processedFrames % 30 === 0) {
                                const progress = Math.min(100, Math.round((processedFrames / totalFrames) * 100));
                                progressCallback?.(`处理 ${camera}: ${progress}%`);
                            }
                        }
                        
                        if (!resolved) {
                            video.requestVideoFrameCallback(captureFrame);
                        }
                    };
                    
                    video.onended = () => {
                        if (!resolved) {
                            resolved = true;
                            video.pause();
                            resolve();
                        }
                    };
                    
                    video.requestVideoFrameCallback(captureFrame);
                    video.play();
                });
            } else {
                // Fallback: play and sample at FPS (avoid per-frame seeking which can explode memory)
                const frameInterval = 1000 / FPS;
                
                await new Promise((resolve) => {
                    let resolved = false;
                    
                    const stop = () => {
                        if (resolved) return;
                        resolved = true;
                        video.pause();
                        resolve();
                    };
                    
                    const tick = () => {
                        if (resolved) return;
                        
                        const t = video.currentTime;
                        if (t >= actualEndTime - 0.02 || video.ended) {
                            stop();
                            return;
                        }
                        
                        this.ctx.drawImage(video, 0, 0, this.canvas.width, this.canvas.height);
                        
                        if (addTimestamp) {
                            const currentTime = new Date(segmentStartTimestamp.getTime() + (t - actualClipStart) * 1000);
                            const timeString = currentTime.toLocaleString('zh-CN', {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit',
                                hour: '2-digit',
                                minute: '2-digit',
                                second: '2-digit',
                                hour12: false
                            }).replace(/\//g, '-');
                            
                            this.drawTimestamp(timeString);
                        }
                        
                        processedFrames++;
                        
                        if (processedFrames % 30 === 0) {
                            const progress = Math.min(100, Math.round((processedFrames / totalFrames) * 100));
                            progressCallback?.(`处理 ${camera}: ${progress}%`);
                        }
                        
                        setTimeout(tick, frameInterval);
                    };
                    
                    video.play().then(() => tick()).catch(() => tick());
                });
            }
            
            // Release video resources immediately after processing this segment
            video.pause();
            URL.revokeObjectURL(video.src);
            video.src = '';
            video.load();
            
            // Allow GC
            if (i % 5 === 0) {
                 await new Promise(r => setTimeout(r, 100));
            }

            console.log(`Segment ${i + 1} completed, memory released`);
            this.logMemory(`segment done ${i + 1}/${clipSegments.length}`, {
                writeQueueSize: this.formatBytes(writeQueueSize),
                totalChunkSize: this.formatBytes(totalChunkSize),
                chunksBuffered: chunks.length,
                writeQueueItems: writeQueue.length,
            });
        }

        
        // Ensure all writes are finished before stopping
        if (writable) {
            while (isWriting || writeQueue.length > 0) {
                await new Promise(r => setTimeout(r, 100));
            }
        }
        
        // Stop recording
        await new Promise(resolve => setTimeout(resolve, 500));
        this.mediaRecorder.stop();
        
        const result = await recordingComplete;
        
        const calculatedDuration = (processedFrames / FPS) * 1000;
        const recordingEndTime = performance.now();
        const realTimeDuration = recordingEndTime - recordingStartTime;
        console.log(`[Single Video Export] Recording completed. Expected: ${totalDuration * 1000}ms, Calculated: ${calculatedDuration}ms, RealTime: ${realTimeDuration}ms, Frames: ${processedFrames}`);
        
        // Clean up canvas and stream
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
        }
        
        if (result.saved) {
            // For streamed files, use FFmpeg to fix metadata
            if (fileHandle) {
                await this.fixWebmWithFFmpeg(fileHandle, progressCallback);
            }
            return result;
        }

        progressCallback?.('修复视频元数据...');
        const fixedBlob = await webmDurationFixer.fixDuration(result, calculatedDuration);
        
        return fixedBlob;
    }
    
    async createGridVideoFromSegments(clipSegments, cameras, totalStartTime, totalEndTime, addTimestamp, eventStartTime, progressCallback, fileHandle = null) {
        progressCallback?.(`准备四宫格视频 (${clipSegments.length} 个片段)...`);
        
        // Check if we're in Tauri environment
        const isTauri = !!window.__TAURI__;
        
        // First pass: get video dimensions from first segment (load and release immediately)
        let canvasWidth = 0;
        let canvasHeight = 0;
        const firstVideoFile = clipSegments[0].segment.files[cameras[0]];
        if (firstVideoFile) {
            const tempVideo = document.createElement('video');
            tempVideo.muted = true;
            tempVideo.crossOrigin = 'anonymous';
            tempVideo.src = getFileUrl(firstVideoFile);
            await new Promise((resolve, reject) => {
                tempVideo.onloadedmetadata = resolve;
                tempVideo.onerror = reject;
            });
            canvasWidth = tempVideo.videoWidth;
            canvasHeight = tempVideo.videoHeight;
            URL.revokeObjectURL(tempVideo.src);
            tempVideo.src = '';
            tempVideo.load();
        }
        
        const videoCount = cameras.length;
        
        // Calculate grid layout and sort order
        let gridCols, gridRows;
        let sortOrder;

        if (videoCount > 4) {
            gridCols = 3; 
            gridRows = 2;
            sortOrder = ['left_pillar', 'front', 'right_pillar', 'left', 'back', 'right'];
        } else {
            sortOrder = ['front', 'back', 'left', 'right', 'left_pillar', 'right_pillar'];
            if (videoCount === 1) {
                gridCols = 1; gridRows = 1;
            } else if (videoCount === 2) {
                gridCols = 2; gridRows = 1;
            } else {
                gridCols = 2; gridRows = 2;
            }
        }

        const sortedCameras = cameras.sort((a, b) => {
            const idxA = sortOrder.indexOf(a);
            const idxB = sortOrder.indexOf(b);
            return (idxA === -1 ? 99 : idxA) - (idxB === -1 ? 99 : idxB);
        });

        // Target output resolution: 1920x1080 (scales each cell to fit)
        const targetWidth = 1920;
        const targetHeight = 1080;
        const cellWidth = Math.floor(targetWidth / gridCols);
        const cellHeight = Math.floor(targetHeight / gridRows);
        const gridCanvasWidth = targetWidth;
        const gridCanvasHeight = targetHeight;
        
        // Initialize canvas
        this.initCanvas(gridCanvasWidth, gridCanvasHeight);

        
        // Calculate total duration
        const FPS = 30;
        let totalDuration = 0;
        for (const clipSegment of clipSegments) {
            totalDuration += clipSegment.clipDuration;
        }
        const totalFrames = Math.ceil(totalDuration * FPS);
        
        // Setup MediaRecorder
        const stream = this.canvas.captureStream(FPS);
        
        // Dynamic bitrate based on grid cell count
        // Optimize bitrate to reduce memory usage: ~2.5Mbps per camera is sufficient
        const gridCellCount = gridCols * gridRows;
        const videoBitsPerSecond = Math.min(2500000 * gridCellCount, 15000000);
        
        let mimeType = 'video/webm;codecs=vp9';
        if (!MediaRecorder.isTypeSupported(mimeType)) {
            mimeType = 'video/webm;codecs=vp8';
        }
        
        console.log(`Grid export: ${gridCols}x${gridRows}, ${gridCanvasWidth}x${gridCanvasHeight}, ${videoBitsPerSecond / 1000000} Mbps, codec: ${mimeType}, total frames: ${totalFrames}`);
        this.logMemory('grid init', {
            gridSize: `${gridCols}x${gridRows}`,
            canvasSize: `${gridCanvasWidth}x${gridCanvasHeight}`,
            bitrateMbps: (videoBitsPerSecond / 1000000).toFixed(2),
        });
        
        this.mediaRecorder = new MediaRecorder(stream, {
            mimeType,
            videoBitsPerSecond
        });

        
        const chunks = [];
        let totalChunkSize = 0;
        let writable = null;
        
        // Write queue system to avoid Promise chain memory leaks
        const writeQueue = [];
        let writeQueueSize = 0;
        let isWriting = false;
        
        const processWriteQueue = async () => {
            if (isWriting) return;
            isWriting = true;
            
            while (writeQueue.length > 0) {
                const blob = writeQueue.shift();
                if (!blob) {
                    continue;
                }
                writeQueueSize -= blob.size || 0;
                try {
                    await writable.write(blob);
                } catch (err) {
                    console.error('Write error:', err);
                }
            }
            
            isWriting = false;
        };


        if (fileHandle) {
             try {
                 writable = await fileHandle.createWritable();
             } catch(e) {
                 console.warn("Writable creation failed", e);
             }
        }
        
        this.mediaRecorder.ondataavailable = (e) => {
            const size = e?.data ? e.data.size : 0;
            if (size > 0) {
                if (writable) {
                    writeQueue.push(e.data);
                    writeQueueSize += size;
                    if (writeQueueSize > 50 * 1024 * 1024) {
                        this.logMemory('writeQueue > 50MB', {
                            writeQueueSize: this.formatBytes(writeQueueSize),
                            totalChunkSize: this.formatBytes(totalChunkSize),
                            chunksBuffered: chunks.length,
                        });
                    }
                    processWriteQueue();
                } else {
                    chunks.push(e.data);
                }
                totalChunkSize += size;
            }
        };

        
        const recordingComplete = new Promise((resolve) => {
            this.mediaRecorder.onstop = async () => {
                console.log('MediaRecorder stopped, chunks count:', chunks.length, 'total size:', totalChunkSize);
                if (writable) {
                     await writable.close();
                     resolve({ saved: true, blob: new Blob([], { type: 'video/webm' }) });
                } else {
                    const blob = new Blob(chunks, { type: 'video/webm' });
                    console.log('Created blob, size:', blob.size);
                    chunks.length = 0;
                    resolve(blob);
                }
            };
        });
        
        // Start recording - smaller timeslice helps reduce internal buffering
        this.mediaRecorder.start(250);
        const recordingStartTime = performance.now();
        
        // Position mapping for grid
        const cameraPositions = {};
        sortedCameras.forEach((cam, index) => {
            cameraPositions[cam] = {
                x: index % gridCols,
                y: Math.floor(index / gridCols)
            };
        });
        
        // Process segments one at a time (streaming approach)
        let processedFrames = 0;
        const hasVideoFrameCallback = 'requestVideoFrameCallback' in HTMLVideoElement.prototype;
        
        for (let i = 0; i < clipSegments.length; i++) {
            const clipSegment = clipSegments[i];
            
            progressCallback?.(`加载片段 ${i + 1}/${clipSegments.length}...`);
            
            // Load videos for this segment only
            const videos = {};
            for (const camera of cameras) {
                const videoFile = clipSegment.segment.files[camera];
                if (!videoFile) continue;
                
                const video = document.createElement('video');
                video.muted = true;
                video.crossOrigin = 'anonymous';
                
                if (isTauri && videoFile.path) {
                    try {
                        const fs = window.__TAURI__.fs;
                        const fileData = await fs.readFile(videoFile.path);
                        const blob = new Blob([fileData], { type: 'video/mp4' });
                        video.src = URL.createObjectURL(blob);
                    } catch (e) {
                        console.error('Failed to read file via Tauri fs:', e);
                        video.src = getFileUrl(videoFile);
                    }
                } else {
                    video.src = getFileUrl(videoFile);
                }
                
                await new Promise((resolve, reject) => {
                    video.onloadedmetadata = resolve;
                    video.onerror = reject;
                });
                
                videos[camera] = video;
            }
            
            if (Object.keys(videos).length === 0) {
                throw new Error(`片段 ${i + 1} 没有可用的视频文件`);
            }

            const videoCountLoaded = Object.keys(videos).length;
            this.logMemory(`segment start ${i + 1}/${clipSegments.length}`, {
                videoCountLoaded,
                writeQueueSize: this.formatBytes(writeQueueSize),
                totalChunkSize: this.formatBytes(totalChunkSize),
                chunksBuffered: chunks.length,
                writeQueueItems: writeQueue.length,
            });
            
            // Calculate timestamp for this segment
            const firstCam = sortedCameras[0];

            const videoFile = clipSegment.segment.files[firstCam];
            const fileName = videoFile?.name || (videoFile?.path ? videoFile.path.split(/[/\\]/).pop() : null);
            const fullTimestampMatch = fileName?.match(/(\d{4}-\d{2}-\d{2}_\d{2}-\d{2}-\d{2})/);
            
            let segmentTime;
            if (fullTimestampMatch) {
                segmentTime = this.parseTimestamp(fullTimestampMatch[1]);
            } else {
                segmentTime = this.parseTimestamp(clipSegment.timestamp);
            }
            
            const segmentEndTime = clipSegment.clipEnd;
            
            const videoEntries = Object.entries(videos);
            const firstVideo = videoEntries[0][1];
            
            // Adjust clipStart if it exceeds video duration
            const actualClipStart = Math.min(clipSegment.clipStart, firstVideo.duration);
            // Adjust clipEnd based on actual video duration
            const actualEndTime = Math.min(segmentEndTime, firstVideo.duration);
            
            // Calculate timestamp based on actual clip start
            const segmentStartTimestamp = new Date(segmentTime.getTime() + actualClipStart * 1000);
            
            // Skip this segment if clipStart is already past video duration
            if (actualClipStart >= firstVideo.duration) {
                console.warn(`Grid segment ${i + 1}: clipStart (${clipSegment.clipStart}) exceeds video duration (${firstVideo.duration}), skipping`);
                // Release video resources
                for (const video of Object.values(videos)) {
                    URL.revokeObjectURL(video.src);
                    video.src = '';
                    video.load();
                }
                continue;
            }
            
            console.log(`Processing segment ${i + 1}/${clipSegments.length}:`, {
                clipStart: clipSegment.clipStart,
                actualClipStart,
                clipEnd: clipSegment.clipEnd,
                clipDuration: clipSegment.clipDuration,
                segmentEndTime,
                actualEndTime,
                videoDuration: firstVideo.duration,
                actualDuration: actualEndTime - actualClipStart
            });
            
            // Seek all videos to clip start position
            for (const video of Object.values(videos)) {
                video.currentTime = actualClipStart;
                video.playbackRate = 1.0;
            }
            await Promise.all(Object.values(videos).map(video => 
                new Promise(resolve => { video.onseeked = resolve; })
            ));
            
            const segmentDuration = actualEndTime - actualClipStart;
            const segmentFrameCount = Math.ceil(segmentDuration * FPS);
            console.log(`Segment ${i + 1}: clipStart=${clipSegment.clipStart}, actualEndTime=${actualEndTime}, segmentDuration=${segmentDuration}s, expectedFrames=${segmentFrameCount}`);
            
        const renderFrame = (videoTime) => {
            // Clear canvas
            this.ctx.fillStyle = '#000';
            this.ctx.fillRect(0, 0, gridCanvasWidth, gridCanvasHeight);
            
            // 2x2 特殊逻辑：等比缩小、不裁剪；同一行的两张图水平拼成一组，整组居中，保证左右贴合无外部空隙
            const is2x2 = gridCols === 2 && gridRows === 2;

            if (is2x2) {
                const layout = videoEntries.map(([camera, video]) => {
                    const pos = cameraPositions[camera] || { x: 0, y: 0 };
                    const x = pos.x * cellWidth;
                    const y = pos.y * cellHeight;
                    const srcW = video.videoWidth || cellWidth;
                    const srcH = video.videoHeight || cellHeight;
                    const scale = Math.min(cellWidth / srcW, cellHeight / srcH); // contain: 不裁剪
                    const drawW = Math.ceil(srcW * scale);
                    const drawH = Math.ceil(srcH * scale);
                    return { camera, video, x, y, row: pos.y, drawW, drawH };
                });

                // 按行处理，每行两张：总宽度 <= 1920，整行居中；左右紧贴
                const rows = new Map();
                for (const item of layout) {
                    if (!rows.has(item.row)) rows.set(item.row, []);
                    rows.get(item.row).push(item);
                }

                for (const [, items] of rows) {
                    items.sort((a, b) => a.x - b.x); // 左右顺序
                    const totalW = items.reduce((sum, it) => sum + it.drawW, 0);
                    const startX = Math.floor((gridCanvasWidth - totalW) / 2);
                    let cursorX = startX;
                    for (const item of items) {
                        const offsetX = cursorX;
                        const offsetY = item.y + Math.floor((cellHeight - item.drawH) / 2);
                        this.ctx.drawImage(item.video, offsetX, offsetY, item.drawW, item.drawH);
                        cursorX += item.drawW;

                        // Draw camera label (auto width)
                        const labelX = offsetX + 4;
                        const labelY = item.y + 4;
                        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
                        this.ctx.font = 'bold 12px Arial';
                        const lang = this.currentLanguage || 'zh';
                        const cameraNames = {
                            front: { en: 'Front', zh: '前视' },
                            left_pillar: { en: 'Left Pillar', zh: '左柱' },
                            right_pillar: { en: 'Right Pillar', zh: '右柱' },
                            back: { en: 'Back', zh: '后视' },
                            left: { en: 'Left', zh: '左侧' },
                            right: { en: 'Right', zh: '右侧' }
                        };
                        const labelText = cameraNames[item.camera]?.[lang] || item.camera.toUpperCase();
                        const textW = this.ctx.measureText(labelText).width;
                        const padX = 6;
                        const padY = 4;
                        const boxW = Math.ceil(textW + padX * 2);
                        const boxH = 20 + padY * 0; // 20 高度够 12px 字体
                        this.ctx.fillRect(labelX, labelY, boxW, boxH);
                        this.ctx.fillStyle = '#fff';
                        this.ctx.fillText(labelText, labelX + padX, labelY + 14);

                    }
                }
            } else {

            // Draw each camera view (contain: keep aspect, center inside cell)
            for (const [camera, video] of videoEntries) {
                const pos = cameraPositions[camera] || { x: 0, y: 0 };
                const x = pos.x * cellWidth;
                const y = pos.y * cellHeight;

                const srcW = video.videoWidth || cellWidth;
                const srcH = video.videoHeight || cellHeight;
                const scale = Math.min(cellWidth / srcW, cellHeight / srcH); // contain: 不裁剪
                const drawW = Math.ceil(srcW * scale);
                const drawH = Math.ceil(srcH * scale);

                const offsetX = x + Math.floor((cellWidth - drawW) / 2);
                const offsetY = y + Math.floor((cellHeight - drawH) / 2);
                
                this.ctx.drawImage(video, offsetX, offsetY, drawW, drawH);

                
                // Draw camera label (auto width)
                const labelX = x + 4;
                const labelY = y + 4;
                this.ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
                this.ctx.font = 'bold 12px Arial';
                
                const lang = this.currentLanguage || 'zh';
                const cameraNames = {
                    front: { en: 'Front', zh: '前视' },
                    left_pillar: { en: 'Left Pillar', zh: '左柱' },
                    right_pillar: { en: 'Right Pillar', zh: '右柱' },
                    back: { en: 'Back', zh: '后视' },
                    left: { en: 'Left', zh: '左侧' },
                    right: { en: 'Right', zh: '右侧' }
                };
                const labelText = cameraNames[camera]?.[lang] || camera.toUpperCase();
                const textW = this.ctx.measureText(labelText).width;
                const padX = 6;
                const padY = 4;
                const boxW = Math.ceil(textW + padX * 2);
                const boxH = 20 + padY * 0;
                this.ctx.fillRect(labelX, labelY, boxW, boxH);
                this.ctx.fillStyle = '#fff';
                this.ctx.fillText(labelText, labelX + padX, labelY + 14);




            }
            }



            
            // Draw timestamp if needed
            if (addTimestamp) {
                const currentTime = new Date(segmentStartTimestamp.getTime() + (videoTime - actualClipStart) * 1000);
                const timeString = currentTime.toLocaleString('zh-CN', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: false
                }).replace(/\//g, '-');
                
                this.ctx.font = 'bold 20px Arial';
                const textWidth = this.ctx.measureText(timeString).width;
                const padding = 10;
                const boxWidth = textWidth + padding * 2;
                const boxHeight = 32;

                // 放到右上角单元格的右上侧内边距位置
                const topRightCell = videoEntries.reduce((acc, [cam]) => {
                    const pos = cameraPositions[cam] || { x: 0, y: 0 };
                    if (!acc) return { cam, pos };
                    if (pos.x > acc.pos.x || (pos.x === acc.pos.x && pos.y < acc.pos.y)) {
                        return { cam, pos };
                    }
                    return acc;
                }, null);
                const targetX = topRightCell ? topRightCell.pos.x * cellWidth : gridCanvasWidth - cellWidth;
                const targetY = topRightCell ? topRightCell.pos.y * cellHeight : 0;
                const margin = 16; // base inset
                // 额外左移：按文本宽度的一半（n/2），让长时间戳整体更向内
                const extraLeft = textWidth / 2;
                const tsX = targetX + cellWidth - boxWidth - margin - extraLeft;
                const tsY = targetY + margin;

                
                this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
                this.ctx.fillRect(tsX, tsY, boxWidth, boxHeight);
                this.ctx.fillStyle = '#fff';
                this.ctx.textAlign = 'right';
                this.ctx.fillText(timeString, tsX + boxWidth - padding, tsY + 24);


                this.ctx.textAlign = 'left';

            }


        };


            
            if (hasVideoFrameCallback) {
                await new Promise((resolve) => {
                    let resolved = false;
                    const masterVideo = firstVideo;
                    
                    const stopAll = () => {
                        if (resolved) return;
                        resolved = true;
                        for (const video of Object.values(videos)) {
                            video.pause();
                        }
                        resolve();
                    };
                    
                    const onFrame = () => {
                        if (resolved) return;
                        
                        const t = masterVideo.currentTime;
                        if (t >= actualEndTime - 0.02 || masterVideo.ended) {
                            stopAll();
                            return;
                        }
                        
                        // Light sync: if other cameras drift too much, correct occasionally
                        for (const video of Object.values(videos)) {
                            if (video === masterVideo) continue;
                            if (Math.abs(video.currentTime - t) > 0.15) {
                                video.currentTime = t;
                            }
                        }
                        
                        renderFrame(t);
                        processedFrames++;
                        
                        if (processedFrames % 30 === 0) {
                            const progress = Math.min(100, Math.round((processedFrames / totalFrames) * 100));
                            progressCallback?.(`处理四宫格: ${progress}%`);
                        }
                        
                        masterVideo.requestVideoFrameCallback(onFrame);
                    };
                    
                    Promise.all(Object.values(videos).map(v => v.play().catch(() => null)))
                        .then(() => {
                            masterVideo.requestVideoFrameCallback(onFrame);
                        });
                });
            } else {
                // Fallback: play and sample at FPS without per-frame seeking
                await new Promise((resolve) => {
                    let resolved = false;
                    const masterVideo = firstVideo;
                    const frameInterval = 1000 / FPS;
                    
                    const stopAll = () => {
                        if (resolved) return;
                        resolved = true;
                        for (const video of Object.values(videos)) {
                            video.pause();
                        }
                        resolve();
                    };
                    
                    const tick = () => {
                        if (resolved) return;
                        const t = masterVideo.currentTime;
                        if (t >= actualEndTime - 0.02 || masterVideo.ended) {
                            stopAll();
                            return;
                        }
                        renderFrame(t);
                        processedFrames++;
                        
                        if (processedFrames % 30 === 0) {
                            const progress = Math.min(100, Math.round((processedFrames / totalFrames) * 100));
                            progressCallback?.(`处理四宫格: ${progress}%`);
                        }
                        setTimeout(tick, frameInterval);
                    };
                    
                    Promise.all(Object.values(videos).map(v => v.play().catch(() => null)))
                        .then(() => {
                            tick();
                        });
                });
            }
            
            // Release video resources immediately after processing this segment
            for (const key of Object.keys(videos)) {
                const video = videos[key];
                video.pause();
                URL.revokeObjectURL(video.src);
                video.src = '';
                video.load(); // Detach source
                videos[key] = null;
            }
            
            // Explicitly force garbage collection pause if processing many segments
            if (i % 5 === 0) {
                 await new Promise(r => setTimeout(r, 100));
            }
            
            console.log(`Segment ${i + 1} completed, memory released`);
            this.logMemory(`segment done ${i + 1}/${clipSegments.length}`, {
                writeQueueSize: this.formatBytes(writeQueueSize),
                totalChunkSize: this.formatBytes(totalChunkSize),
                chunksBuffered: chunks.length,
                writeQueueItems: writeQueue.length,
            });
        }

        
        // Ensure all writes are finished before stopping
        if (writable) {
            // Wait for queue to drain
            while (isWriting || writeQueue.length > 0) {
                await new Promise(r => setTimeout(r, 100));
            }
            this.logMemory('write queue drained', {
                writeQueueSize: this.formatBytes(writeQueueSize),
                totalChunkSize: this.formatBytes(totalChunkSize),
                chunksBuffered: chunks.length,
                writeQueueItems: writeQueue.length,
            });
        }


        // Stop recording
        await new Promise(resolve => setTimeout(resolve, 500));
        this.mediaRecorder.stop();
        
        const result = await recordingComplete;
        
        const calculatedDuration = (processedFrames / FPS) * 1000;
        const recordingEndTime = performance.now();
        const realTimeDuration = recordingEndTime - recordingStartTime;
        console.log(`[Grid Video Export] Recording completed. Expected: ${totalDuration * 1000}ms, Calculated: ${calculatedDuration}ms, RealTime: ${realTimeDuration}ms, Frames: ${processedFrames}`);
        this.logMemory('recording stopped', {
            writeQueueSize: this.formatBytes(writeQueueSize),
            totalChunkSize: this.formatBytes(totalChunkSize),
            chunksBuffered: chunks.length,
            writeQueueItems: writeQueue.length,
        });
        
        // Clean up canvas and stream
        if (stream) {

            stream.getTracks().forEach(track => track.stop());
        }
        
        if (result.saved) {
            // For streamed files, use FFmpeg to fix metadata
            if (fileHandle) {
                await this.fixWebmWithFFmpeg(fileHandle, progressCallback);
            }
            return result;
        }

        progressCallback?.('修复视频元数据...');
        const fixedBlob = await webmDurationFixer.fixDuration(result, calculatedDuration);
        
        return fixedBlob;
    }
    
    drawTimestamp(timeString) {
        // Measure text width
        this.ctx.font = 'bold 28px Arial';
        const textWidth = this.ctx.measureText(timeString).width;
        const padding = 15;
        const boxWidth = textWidth + padding * 2;
        const boxHeight = 40;
        const x = this.canvas.width - boxWidth - 20;
        const y = 20;
        
        // Draw background (top-right corner)
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
        this.ctx.fillRect(x, y, boxWidth, boxHeight);
        
        // Draw text
        this.ctx.fillStyle = '#fff';
        this.ctx.fillText(timeString, x + padding, y + 30);
    }
    
    parseTimestamp(timestamp) {
        // Handles "2024-01-01_12-00-00" format
        const [datePart, timePart] = timestamp.split('_');
        return new Date(`${datePart}T${timePart.replace(/-/g, ':')}`);
    }
}

class TeslaCamViewer {
    constructor() {
        this.isTauri = !!window.__TAURI__;
        this.allFiles = [];
        this.eventGroups = [];
        this.currentEvent = null;
        this.currentLanguage = 'zh';
        this.currentMapCoordinates = null;
        this.flatpickrInstance = null;
        this.videoClipProcessor = new VideoClipProcessor();
        this.metadataManager = new MetadataManager(this);
        this.dom = {
            folderInput: document.getElementById('folderInput'),
            fileInputIOS: document.getElementById('fileInputIOS'),
            selectFolderBtn: document.getElementById('selectFolderBtn'),
            dateFilter: document.getElementById('dateFilter'),
            clearDateBtn: document.getElementById('clearDateBtn'),
            eventFilter: document.getElementById('eventFilter'),
            sidebar: document.querySelector('.sidebar'),
            toggleSidebarBtn: document.getElementById('toggleSidebarBtn'),
            openSidebarBtn: document.getElementById('openSidebarBtn'),
            playerArea: document.getElementById('playerArea'),
            overlay: document.getElementById('overlay'),
            themeToggleBtn: document.getElementById('themeToggleBtn'),
            langToggleBtn: document.getElementById('langToggleBtn'),
            mapModal: document.getElementById('mapModal'),
            mapModalTitle: document.getElementById('mapModalTitle'),
            gaodeMapBtn: document.getElementById('gaodeMapBtn'),
            googleMapBtn: document.getElementById('googleMapBtn'),
            closeModalBtn: document.getElementById('closeModalBtn'),
            revealFileBtn: document.getElementById('revealFileBtn'),
            downloadFileBtn: document.getElementById('downloadFileBtn'),
            metadataSwitchBtn: document.getElementById('metaSwitchBtn'),
            headerLocationDisplay: document.getElementById('headerLocationDisplay'),
            // Clip modal elements
            clipModal: document.getElementById('clipModal'),
            clipModalTitle: document.getElementById('clipModalTitle'),
            clipInfo: document.getElementById('clipInfo'),
            clipOptions: document.getElementById('clipOptions'),
            clipDuration: document.getElementById('clipDuration'),
            clipStartTime: document.getElementById('clipStartTime'),
            clipEndTime: document.getElementById('clipEndTime'),
            exportFront: document.getElementById('exportFront'),
            exportBack: document.getElementById('exportBack'),
            exportLeft: document.getElementById('exportLeft'),
            exportRight: document.getElementById('exportRight'),
            exportLeftPillar: document.getElementById('exportLeftPillar'),
            exportRightPillar: document.getElementById('exportRightPillar'),
            addTimestamp: document.getElementById('addTimestamp'),
            mergeVideos: document.getElementById('mergeVideos'),
            useLocalFFmpeg: document.getElementById('useLocalFFmpeg'),
            ffmpegOptionRow: document.getElementById('ffmpegOptionRow'),
            clipProgress: document.getElementById('clipProgress'),
            clipProgressBar: document.getElementById('clipProgressBar'),
            clipProgressText: document.getElementById('clipProgressText'),
            startClipBtn: document.getElementById('startClipBtn'),
            cancelClipBtn: document.getElementById('cancelClipBtn'),
            closeClipModalBtn: document.getElementById('closeClipModalBtn'),
            // File path modal elements
            filePathModal: document.getElementById('filePathModal'),
            filePathModalTitle: document.getElementById('filePathModalTitle'),
            filePathInput: document.getElementById('filePathInput'),
            copyPathBtn: document.getElementById('copyPathBtn'),
            copySuccessHint: document.getElementById('copySuccessHint'),
            closeFilePathModalBtn: document.getElementById('closeFilePathModalBtn'),
        };
        this.videoListComponent = new VideoListComponent('fileList', (eventId) => this.playEvent(eventId), this);
        this.multiCameraPlayer = new MultiCameraPlayer();
        this.continuousPlayer = new ContinuousVideoPlayer(this.multiCameraPlayer);
        this.videoControls = new ModernVideoControls(this.continuousPlayer, this);
        this.initializeEventListeners();
        this.initializeFlatpickr();
        this.loadTheme();
        this.loadLanguage();
        this.loadLastTeslaCamPath();
    }

    // 清理旧数据，释放内存
    cleanupOldData() {
        // 清理视频播放器
        if (this.multiCameraPlayer) {
            this.multiCameraPlayer.cleanup();
        }
        
        // 清理缩略图的 blob URL
        if (this.eventGroups) {
            for (const event of this.eventGroups) {
                if (event.thumbFile && !this.isTauri) {
                    // Web 环境下的缩略图可能有 blob URL 需要清理
                    // 但实际上缩略图 URL 在 img.onload 时已经 revoke 了
                }
            }
        }
        
        // 清空旧数据引用
        this.allFiles = [];
        this.eventGroups = [];
        this.currentEvent = null;
        
        // 强制垃圾回收提示（浏览器可能会忽略）
        if (window.gc) {
            window.gc();
        }
        
        console.log('[cleanupOldData] Old data cleaned up');
    }

    initializeEventListeners() {
        const useFileInput = !supportsDirectoryPicker();
        
        this.dom.selectFolderBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Tauri 环境下使用 dialog API 选择目录
            if (this.isTauri) {
                await this.selectTauriDirectory();
                return;
            }
            
            // 优先使用 File System Access API（支持持久化目录句柄）
            if (supportsFileSystemAccess()) {
                await this.selectDirectoryWithFSA();
                return;
            }
            
            if (useFileInput) {
                this.dom.fileInputIOS.click();
            } else {
                this.dom.folderInput.click();
            }
        });
        this.dom.folderInput.addEventListener('change', (e) => this.handleFolderSelection(e.target.files));
        this.dom.fileInputIOS.addEventListener('change', (e) => this.handleIOSFileSelection(e.target.files));

        // Drag & Drop Support
        const dropZone = document.body;
        dropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.dataTransfer.dropEffect = 'copy';
            this.dom.sidebar.classList.add('drag-over');
        });
        dropZone.addEventListener('dragleave', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.dom.sidebar.classList.remove('drag-over');
        });
        dropZone.addEventListener('drop', (e) => this.handleDrop(e));

        // Tauri File Drop Support
        if (this.isTauri) {
            const tauri = getTauri();
            if (tauri && tauri.event) {
                console.log('Registering Tauri drag/drop listeners');
                
                // Tauri 2 uses different event names
                const dropEvent = 'tauri://drag-drop';
                const enterEvent = 'tauri://drag-enter';
                const leaveEvent = 'tauri://drag-leave';
                
                tauri.event.listen(enterEvent, (event) => {
                    console.log('Tauri drag enter:', event);
                    this.dom.sidebar.classList.add('drag-over');
                }).catch(err => console.error('Failed to listen to drag-enter', err));
                
                tauri.event.listen(leaveEvent, (event) => {
                    console.log('Tauri drag leave:', event);
                    this.dom.sidebar.classList.remove('drag-over');
                }).catch(err => console.error('Failed to listen to drag-leave', err));
                
                tauri.event.listen(dropEvent, (event) => {
                    console.log('Tauri drag drop event received:', event);
                    this.dom.sidebar.classList.remove('drag-over');
                    const paths = event.payload?.paths || event.payload;
                    if (paths && paths.length > 0) {
                        this.handleTauriDrop(paths);
                    }
                }).catch(err => console.error('Failed to listen to drag-drop', err));
            } else {
                console.warn('Tauri detected but event API not found. window.__TAURI__:', tauri);
            }
        }

        this.dom.eventFilter.addEventListener('change', () => this.filterAndRender());
        this.dom.toggleSidebarBtn.addEventListener('click', () => this.toggleSidebar());
        if (this.dom.openSidebarBtn) {
            this.dom.openSidebarBtn.addEventListener('click', () => this.toggleSidebar(true));
        }
        this.dom.overlay.addEventListener('click', () => this.toggleSidebar(false));
        
        // Mobile swipe gesture support for sidebar
        this.initSwipeGestures();
        
        this.dom.playerArea.addEventListener('click', (e) => {
            const container = e.target.closest('.video-container.is-pip');
            if (container) {
                 this.multiCameraPlayer.setCamera(container.dataset.camera);
            }
        });
        this.dom.themeToggleBtn.addEventListener('click', () => this.toggleTheme());
        this.dom.langToggleBtn.addEventListener('click', () => this.toggleLanguage());
        document.addEventListener('keydown', (e) => this.handleGlobalKeydown(e));

        window.addEventListener('resize', () => this.handleResize());

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (!localStorage.getItem('theme')) {
                const isDark = e.matches;
                document.body.classList.toggle('dark-theme', isDark);
                this.updateThemeIcon(isDark);
            }
        });

        // Map Modal Listeners
        this.dom.closeModalBtn.addEventListener('click', () => this.hideMapModal());
        this.dom.mapModal.addEventListener('click', (e) => {
            if (e.target === this.dom.mapModal) {
                this.hideMapModal();
            }
        });
        this.dom.gaodeMapBtn.addEventListener('click', () => this.openMap('gaode'));
        this.dom.googleMapBtn.addEventListener('click', () => this.openMap('google'));
        this.dom.revealFileBtn.addEventListener('click', () => this.revealCurrentFilePath());
        this.dom.downloadFileBtn.addEventListener('click', () => this.downloadCurrentFile());
        
        // Clip modal listeners
        this.dom.closeClipModalBtn.addEventListener('click', () => this.hideClipModal());
        this.dom.cancelClipBtn.addEventListener('click', () => this.hideClipModal());
        this.dom.startClipBtn.addEventListener('click', () => this.startClipExport());
        this.dom.clipModal.addEventListener('click', (e) => {
            if (e.target === this.dom.clipModal) {
                this.hideClipModal();
            }
        });
        
        // File path modal listeners
        this.dom.closeFilePathModalBtn.addEventListener('click', () => this.hideFilePathModal());
        this.dom.copyPathBtn.addEventListener('click', () => this.copyFilePath());
        this.dom.filePathModal.addEventListener('click', (e) => {
            if (e.target === this.dom.filePathModal) {
                this.hideFilePathModal();
            }
        });
    }

    /**
     * 显示 toast 提示
     * @param {string} message - 提示消息
     * @param {string} type - 类型: 'success' | 'error' | 'info'
     * @param {number} duration - 显示时长(ms)，默认3000
     */
    showToast(message, type = 'success', duration = 3000) {
        let container = document.querySelector('.toast-container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'toast-container';
            document.body.appendChild(container);
        }

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        container.appendChild(toast);

        // 触发重排以启动动画
        toast.offsetHeight;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                toast.remove();
                if (container.children.length === 0) {
                    container.remove();
                }
            }, 300);
        }, duration);
    }

    initializeFlatpickr() {
        if (!this.dom.dateFilter) return; // Guard clause
        const lang = this.currentLanguage;
        const translations = i18n[lang];
        this.flatpickrInstance = flatpickr(this.dom.dateFilter, {
            dateFormat: "Y-m-d",
            locale: this.currentLanguage === 'zh' ? 'zh' : 'default',
            placeholder: translations.selectDate,
            disableMobile: true, // Force flatpickr on mobile instead of native picker
            onChange: (selectedDates, dateStr, instance) => {
                this.filterAndRender();
                this.updateClearDateButton();
            },
            onReady: (selectedDates, dateStr, instance) => {
                // Guard clause for onReady
                if (instance.calendarContainer) {
                    instance.calendarContainer.classList.add('teslacam-flatpickr');
                }
            }
        });
        
        // Initialize clear date button
        if (this.dom.clearDateBtn) {
            this.dom.clearDateBtn.addEventListener('click', () => this.clearDateFilter());
            this.updateClearDateButton();
        }
    }
    
    clearDateFilter() {
        if (this.flatpickrInstance) {
            this.flatpickrInstance.clear();
            this.filterAndRender();
            this.updateClearDateButton();
        }
    }
    
    updateClearDateButton() {
        if (this.dom.clearDateBtn) {
            const hasValue = this.dom.dateFilter && this.dom.dateFilter.value;
            this.dom.clearDateBtn.classList.toggle('visible', !!hasValue);
        }
    }

    handleGlobalKeydown(e) {
        const activeElement = document.activeElement;
        const isTyping = activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA' || activeElement.isContentEditable);

        if (e.key === ' ' && !isTyping) {
            e.preventDefault();
            this.videoControls.togglePlayPause();
        }
    }

    handleResize() {
        this.dom.sidebar.style.transition = 'none';
        
        const isCollapsed = this.dom.sidebar.classList.contains('collapsed');
        this.dom.overlay.classList.toggle('active', !isCollapsed && window.innerWidth < 768);

        setTimeout(() => {
            this.dom.sidebar.style.transition = '';
        }, 50);
    }

    async handleDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        this.dom.sidebar.classList.remove('drag-over');

        if (this.isTauri) {
            console.log('Tauri drop detected, waiting for tauri://file-drop event');
            return;
        }

        const items = e.dataTransfer.items;
        if (!items) return;

        const files = [];
        const queue = [];

        // Normalize items to entries
        for (let i = 0; i < items.length; i++) {
            const entry = items[i].webkitGetAsEntry ? items[i].webkitGetAsEntry() : null;
            if (entry) {
                queue.push(entry);
            }
        }

        // Recursive scan
        while (queue.length > 0) {
            const entry = queue.shift();
            if (entry.isFile) {
                try {
                    const file = await new Promise((resolve, reject) => entry.file(resolve, reject));
                    // Manually attach webkitRelativePath based on fullPath
                    // entry.fullPath usually starts with /
                    const relativePath = entry.fullPath.startsWith('/') ? entry.fullPath.slice(1) : entry.fullPath;
                    
                    // We need to define property because webkitRelativePath is read-only
                    Object.defineProperty(file, 'webkitRelativePath', {
                        value: relativePath,
                        writable: false
                    });
                    files.push(file);
                } catch (err) {
                    console.error("Error reading file:", entry.name, err);
                }
            } else if (entry.isDirectory) {
                try {
                    const dirReader = entry.createReader();
                    // readEntries might not return all files at once, need to loop
                    const readEntries = async () => {
                        return new Promise((resolve, reject) => {
                            dirReader.readEntries(resolve, reject);
                        });
                    };
                    
                    let entries;
                    do {
                        entries = await readEntries();
                        for (const childEntry of entries) {
                            queue.push(childEntry);
                        }
                    } while (entries.length > 0);
                } catch (err) {
                     console.error("Error reading directory:", entry.name, err);
                }
            }
        }

        if (files.length > 0) {
            this.handleFolderSelection(files);
        }
    }

    async handleTauriDrop(paths) {
        console.log('[Tauri Drop] Received paths:', paths);
        
        // Show loading state
        const loadingDiv = document.createElement('div');
        loadingDiv.id = 'tauri-loading';
        loadingDiv.style.position = 'fixed';
        loadingDiv.style.top = '50%';
        loadingDiv.style.left = '50%';
        loadingDiv.style.transform = 'translate(-50%, -50%)';
        loadingDiv.style.padding = '20px';
        loadingDiv.style.background = 'rgba(0,0,0,0.8)';
        loadingDiv.style.color = 'white';
        loadingDiv.style.borderRadius = '10px';
        loadingDiv.style.zIndex = '9999';
        loadingDiv.innerText = 'Scanning files...';
        document.body.appendChild(loadingDiv);

        try {
            const allFiles = [];
            // 记录第一个有效的目录路径用于保存
            let validDirPath = null;
            
            for (const path of paths) {
                console.log('[Tauri Drop] Scanning path:', path);
                const files = await this.scanTauriFiles(path, path);
                console.log('[Tauri Drop] Found files:', files.length);
                allFiles.push(...files);
                
                // 记录第一个路径作为保存的目录
                if (!validDirPath && files.length > 0) {
                    validDirPath = path;
                }
            }

            console.log('[Tauri Drop] Total files found:', allFiles.length);
            if (allFiles.length > 0) {
                // Log first few files for debugging
                allFiles.slice(0, 5).forEach(f => {
                    console.log('[Tauri Drop] Sample file:', f.name, 'webkitRelativePath:', f.webkitRelativePath);
                });
                
                // 检查是否是有效的 TeslaCam 目录
                const hasTeslaCamSubfolders = allFiles.some(file => 
                    file.webkitRelativePath.includes('RecentClips/') ||
                    file.webkitRelativePath.includes('SavedClips/') ||
                    file.webkitRelativePath.includes('SentryClips/')
                );
                
                if (hasTeslaCamSubfolders && validDirPath) {
                    // 保存路径到配置文件，供下次启动使用
                    await this.saveTauriConfig({ lastTeslaCamPath: validDirPath });
                    console.log('[Tauri Drop] Saved path to config:', validDirPath);
                }
                
                this.handleFolderSelection(allFiles);
            } else {
                alert('No files found in the dropped folder.');
            }
        } catch (e) {
            console.error('Tauri drop error:', e);
            alert('Error reading files: ' + e.message);
        } finally {
            if (loadingDiv) loadingDiv.remove();
        }
    }

    async scanTauriFiles(currentPath, rootPath) {
        const tauri = getTauri();
        const files = [];
        
        try {
            let isDir = false;
            let isFile = false;
            
            try {
                const metadata = await tauri.fs.stat(currentPath);
                isDir = metadata.isDirectory;
                isFile = metadata.isFile;
            } catch (e) {
                console.warn('Stat failed for', currentPath, e);
                return [];
            }

            if (isFile) {
                const name = currentPath.split(/[\\/]/).pop();
                files.push(new TauriFile({ name, path: currentPath }, rootPath));
            } else if (isDir) {
                const entries = await tauri.fs.readDir(currentPath);
                for (const entry of entries) {
                     const separator = currentPath.includes('\\') ? '\\' : '/';
                     const fullPath = currentPath + (currentPath.endsWith(separator) ? '' : separator) + entry.name;
                     
                     if (entry.isDirectory) {
                         const subFiles = await this.scanTauriFiles(fullPath, rootPath);
                         files.push(...subFiles);
                     } else if (entry.isFile) {
                         files.push(new TauriFile({ name: entry.name, path: fullPath }, rootPath));
                     }
                }
            }
        } catch (e) {
            console.warn(`Error scanning ${currentPath}:`, e);
        }
        return files;
    }

    async handleFolderSelection(files) {
        // 清理旧数据，释放内存
        this.cleanupOldData();
        
        this.allFiles = Array.from(files);
        
        console.log('[handleFolderSelection] Total files:', this.allFiles.length);
        // Log sample paths for debugging
        this.allFiles.slice(0, 5).forEach(f => {
            console.log('[handleFolderSelection] File:', f.name, 'webkitRelativePath:', f.webkitRelativePath);
        });

        const hasTeslaCamSubfolders = this.allFiles.some(file => 
            file.webkitRelativePath.includes('RecentClips/') ||
            file.webkitRelativePath.includes('SavedClips/') ||
            file.webkitRelativePath.includes('SentryClips/')
        );
        
        console.log('[handleFolderSelection] hasTeslaCamSubfolders:', hasTeslaCamSubfolders);

        if (!hasTeslaCamSubfolders) {
            alert(i18n[this.currentLanguage].invalidFolder);
            this.dom.folderInput.value = ''; 
            this.allFiles = [];
            this.showInitialHelpMessage();
            return;
        }

        this.eventGroups = await this.processFiles(this.allFiles);
        console.log('[handleFolderSelection] eventGroups:', this.eventGroups.length);
        this.filterAndRender();
    }

    async handleIOSFileSelection(files) {
        if (!files || files.length === 0) return;
        
        // Convert files to array and add fake webkitRelativePath based on filename
        this.allFiles = Array.from(files).map(file => {
            // TeslaCam filename format: 2024-01-15_12-30-00-front.mp4
            // Create a fake path structure for iOS
            const timestampMatch = file.name.match(/(\d{4}-\d{2}-\d{2}_\d{2}-\d{2})-\d{2}/);
            if (timestampMatch) {
                // Create fake relative path: RecentClips/2024-01-15_12-30/filename.mp4
                const eventFolder = timestampMatch[1].replace(/_/g, '-');
                const fakePath = `RecentClips/${eventFolder}/${file.name}`;
                // Create a new object that mimics the file with webkitRelativePath
                return Object.defineProperty(file, 'webkitRelativePath', {
                    value: fakePath,
                    writable: false
                });
            }
            return file;
        });

        const validFiles = this.allFiles.filter(f => f.webkitRelativePath && f.name.endsWith('.mp4'));
        
        if (validFiles.length === 0) {
            const lang = this.currentLanguage;
            alert(lang === 'zh' 
                ? '未找到有效的TeslaCam视频文件。请选择文件名格式为 "2024-01-15_12-30-00-front.mp4" 的视频文件。'
                : 'No valid TeslaCam video files found. Please select video files with filename format like "2024-01-15_12-30-00-front.mp4".');
            this.dom.fileInputIOS.value = '';
            this.allFiles = [];
            this.showInitialHelpMessage();
            return;
        }

        this.eventGroups = await this.processFiles(this.allFiles);
        this.filterAndRender();
    }

    async processFiles(files) {
        const eventMap = new Map();
        const videoFiles = files.filter(f => f.name.endsWith('.mp4'));
        for (const file of videoFiles) {
            const eventType = this.getEventType(file.webkitRelativePath);
            if (eventType === 'Unknown') continue;
            const timestampMatch = file.name.match(/(\d{4}-\d{2}-\d{2}_\d{2}-\d{2})-\d{2}/);
            if (!timestampMatch) continue;
            const eventId = file.webkitRelativePath.substring(0, file.webkitRelativePath.lastIndexOf('/'));
            if (!eventMap.has(eventId)) eventMap.set(eventId, { eventId, eventType, segments: new Map() });
            const event = eventMap.get(eventId);
            const minuteTimestamp = timestampMatch[1];
            if (!event.segments.has(minuteTimestamp)) event.segments.set(minuteTimestamp, { timestamp: minuteTimestamp, files: {} });
            const segment = event.segments.get(minuteTimestamp);
            const cameraType = this.getCameraType(file.name);
            if (cameraType) segment.files[cameraType] = file;
        }

        const jsonFiles = files.filter(f => f.name === 'event.json');
        console.log('[processFiles] Found event.json files:', jsonFiles.length);
        for (const jsonFile of jsonFiles) {
            const eventId = jsonFile.webkitRelativePath.substring(0, jsonFile.webkitRelativePath.lastIndexOf('/'));
            console.log('[processFiles] Processing event.json, eventId:', eventId, 'exists in map:', eventMap.has(eventId));
            if (eventMap.has(eventId)) {
                try {
                    const textContent = await jsonFile.text();
                    console.log('[processFiles] event.json content preview:', textContent.substring(0, 200));
                    const eventData = JSON.parse(textContent);
                    const eventObj = eventMap.get(eventId);
                    eventObj.city = eventData.city;
                    eventObj.street = eventData.street;
                    eventObj.eventTimestamp = eventData.timestamp;
                    eventObj.lat = eventData.est_lat;
                    eventObj.lon = eventData.est_lon;
                    console.log('[processFiles] Parsed city:', eventObj.city, 'street:', eventObj.street);
                } catch (e) {
                    console.error(`Error parsing event.json for ${eventId}:`, e);
                }
            }
        }

        const thumbFiles = files.filter(f => f.name === 'thumb.png');
        for(const thumb of thumbFiles) {
            const thumbDir = thumb.webkitRelativePath.substring(0, thumb.webkitRelativePath.lastIndexOf('/'));
            if (eventMap.has(thumbDir)) eventMap.get(thumbDir).thumbFile = thumb;
        }
        return Array.from(eventMap.values()).map(event => {
            event.segments = Array.from(event.segments.values()).sort((a, b) => a.timestamp.localeCompare(b.timestamp));
            if (event.segments.length > 0) {
                // Try to get precise start time from the first file of the first segment
                const firstSegment = event.segments[0];
                const firstFile = Object.values(firstSegment.files)[0];
                if (firstFile) {
                    const match = firstFile.name.match(/(\d{4}-\d{2}-\d{2}_\d{2}-\d{2}-\d{2})/);
                    if (match) {
                        event.startTime = match[1];
                    } else {
                        event.startTime = firstSegment.timestamp;
                    }
                } else {
                    event.startTime = firstSegment.timestamp;
                }
            }
            return event;
        }).filter(e => e.segments.length > 0).sort((a, b) => b.startTime.localeCompare(a.startTime));
    }

    filterAndRender() {
        const dateFilter = this.dom.dateFilter.value;
        const eventFilter = this.dom.eventFilter.value;
        const filteredEvents = this.eventGroups.filter(event => 
            (!dateFilter || event.startTime.startsWith(dateFilter)) && 
            (!eventFilter || event.eventType === eventFilter)
        );
        this.videoListComponent.render(filteredEvents);
    }

    async playEvent(eventId) {
        const event = this.eventGroups.find(e => e.eventId === eventId);
        if (!event) return;
        this.currentEvent = event;

        if (this.dom.headerLocationDisplay) {
            if (event.city && event.lat && event.lon) {
                const locationText = event.street ? `${event.city} · ${event.street}` : event.city;
                this.dom.headerLocationDisplay.innerHTML = `📍 <span class="city-text">${locationText}</span>`;
                this.dom.headerLocationDisplay.onclick = () => this.showMapModal(event.lat, event.lon);
                this.dom.headerLocationDisplay.style.display = 'block';
            } else {
                this.dom.headerLocationDisplay.innerHTML = '';
                this.dom.headerLocationDisplay.onclick = null;
                this.dom.headerLocationDisplay.style.display = 'none';
            }
        }

        this.dom.playerArea.classList.remove('empty');

        this.videoControls.setEventStartTime(event.startTime);
        
        // Check for pillars and update UI
        const hasPillars = event.segments.some(seg => seg.files.left_pillar || seg.files.right_pillar);
        this.videoControls.updatePillarButtons(hasPillars);

        if (!event.totalDuration || event.totalDuration <= 0) {
            await this.continuousPlayer.calculateEventDurations(event);
        }

        await this.continuousPlayer.loadEvent(event); 
        this.videoControls.setTotalDuration(this.continuousPlayer.getTotalDuration());
        this.videoControls.addEventMarkers(event);
        
        // Default to Legacy (PIP) view with Front camera
        this.multiCameraPlayer.setCamera('front');
        this.multiCameraPlayer.setLayout('legacy');
        this.videoControls.updateViewSwitcherUI('legacy');

        await this.multiCameraPlayer.playAll();

        document.querySelectorAll('.video-card.active').forEach(c => c.classList.remove('active'));
        document.querySelector(`.video-card[data-event-id="${eventId}"]`)?.classList.add('active');
        if (window.innerWidth < 768) this.toggleSidebar(false);
    }

    switchCamera(viewId) {
        if (!this.currentEvent) return;
        
        if (['grid', 'grid4', 'legacy'].includes(viewId)) {
            this.multiCameraPlayer.setLayout(viewId);
        } else {
            this.multiCameraPlayer.setCamera(viewId);
            this.multiCameraPlayer.setLayout('single');
        }
        this.videoControls.updateViewSwitcherUI(viewId);
    }

    toggleTheme() {
        const isDark = document.body.classList.toggle('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        this.updateThemeIcon(isDark);
    }

    loadTheme() {
        const savedTheme = localStorage.getItem('theme');
        let isDark;
        if (savedTheme) {
            isDark = savedTheme === 'dark';
        } else {
            isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        document.body.classList.toggle('dark-theme', isDark);
        this.updateThemeIcon(isDark);
    }

    updateThemeIcon(isDark) {
        if (this.dom.themeToggleBtn) {
            this.dom.themeToggleBtn.textContent = isDark ? '🌙' : '☀️';
            this.dom.themeToggleBtn.title = i18n[this.currentLanguage][isDark ? 'toggleDay' : 'toggleNight'];
        }
    }

    showInitialHelpMessage() {
        const lang = this.currentLanguage;
        const translations = i18n[lang];
        const useFileInput = !supportsDirectoryPicker();
        
        const step1 = useFileInput ? translations.helpStep1IOS : translations.helpStep1;
        const step2 = useFileInput ? translations.helpStep2IOS : translations.helpStep2;
        
        // Show desktop tip only in web environment (not in Tauri)
        const desktopTipHtml = !this.isTauri ? `
            <p class="desktop-tip">
                ${translations.desktopTip}
                <a href="https://github.com/DeaglePC/TeslaCamPlayer/releases" target="_blank" class="desktop-link">${translations.desktopDownload}</a>
            </p>
        ` : '';
        
        const helpHtml = `
            <div class="empty-state help-text">
                <ol>
                    <li>${step1}</li>
                    <li>${step2}</li>
                </ol>
                <p class="note">${translations.helpNote}</p>
                ${desktopTipHtml}
            </div>
        `;
        this.videoListComponent.container.innerHTML = helpHtml;
    }

    toggleLanguage() {
        const newLang = this.currentLanguage === 'zh' ? 'en' : 'zh';
        this.setLanguage(newLang);
    }

    setLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
        // Guard clause for flatpickr instance and its methods
        if (this.flatpickrInstance && typeof this.flatpickrInstance.set === 'function') {
            const isChinese = lang === 'zh';
            this.flatpickrInstance.set('locale', isChinese ? 'zh' : 'default');
            this.flatpickrInstance.redraw();
        }
        // Guard clause for dateFilter element
        if (this.dom.dateFilter) {
            this.dom.dateFilter.placeholder = i18n[lang].selectDate;
        }
        this.updateAllUIText(lang);
    }

    loadLanguage() {
        const savedLang = localStorage.getItem('language');
        let lang = navigator.language.startsWith('zh') ? 'zh' : 'en';
        if (savedLang) {
            lang = savedLang;
        }
        this.setLanguage(lang);
    }

    /**
     * 获取 Tauri 配置文件路径
     */
    async getTauriConfigPath() {
        const tauri = getTauri();
        if (!tauri || !tauri.path) return null;
        
        try {
            // 使用应用数据目录存储配置
            const appDataDir = await tauri.path.appDataDir();
            return `${appDataDir}config.json`;
        } catch (e) {
            console.warn('[getTauriConfigPath] Failed to get app data dir:', e);
            return null;
        }
    }

    /**
     * 保存 Tauri 配置到本地文件
     */
    async saveTauriConfig(config) {
        const tauri = getTauri();
        if (!tauri || !tauri.fs) return;
        
        try {
            const configPath = await this.getTauriConfigPath();
            if (!configPath) return;
            
            // 确保目录存在
            const appDataDir = await tauri.path.appDataDir();
            try {
                await tauri.fs.mkdir(appDataDir, { recursive: true });
            } catch (e) {
                // 目录可能已存在
            }
            
            await tauri.fs.writeTextFile(configPath, JSON.stringify(config, null, 2));
            console.log('[saveTauriConfig] Config saved to:', configPath);
        } catch (e) {
            console.warn('[saveTauriConfig] Failed to save config:', e);
        }
    }

    /**
     * 读取 Tauri 配置文件
     */
    async loadTauriConfig() {
        const tauri = getTauri();
        if (!tauri || !tauri.fs) return null;
        
        try {
            const configPath = await this.getTauriConfigPath();
            if (!configPath) return null;
            
            const content = await tauri.fs.readTextFile(configPath);
            return JSON.parse(content);
        } catch (e) {
            // 文件不存在或解析失败
            console.log('[loadTauriConfig] No config file found or parse error:', e.message);
            return null;
        }
    }

    /**
     * 加载上次选择的 TeslaCam 目录
     */
    async loadLastTeslaCamPath() {
        // Tauri 环境：使用本地配置文件存储路径
        if (this.isTauri) {
            // 等待一小段时间确保 Tauri API 完全初始化
            await new Promise(resolve => setTimeout(resolve, 100));
            
            const tauri = getTauri();
            if (!tauri || !tauri.fs) {
                console.warn('[loadLastTeslaCamPath] Tauri fs API not available');
                return;
            }
            
            // 从配置文件读取上次的路径
            const config = await this.loadTauriConfig();
            const lastPath = config?.lastTeslaCamPath;
            
            if (!lastPath) {
                console.log('[loadLastTeslaCamPath] No saved path found in config');
                return;
            }
            
            console.log('[loadLastTeslaCamPath] Found saved path:', lastPath);
            
            try {
                // 检查目录是否仍然存在
                const metadata = await tauri.fs.stat(lastPath);
                if (!metadata.isDirectory) {
                    console.log('[loadLastTeslaCamPath] Path is not a directory');
                    return;
                }
                
                // 自动加载该目录
                console.log('[loadLastTeslaCamPath] Auto-loading directory...');
                await this.loadTauriDirectory(lastPath);
            } catch (e) {
                console.warn('[loadLastTeslaCamPath] Failed to load saved path:', e);
            }
            return;
        }
        
        // Web 环境：使用 File System Access API 和 IndexedDB 存储目录句柄
        if (supportsFileSystemAccess()) {
            try {
                const handle = await getDirectoryHandle();
                if (!handle) {
                    console.log('[loadLastTeslaCamPath] No saved directory handle found');
                    return;
                }
                
                console.log('[loadLastTeslaCamPath] Found saved directory handle:', handle.name);
                
                // 请求权限（用户可能需要重新授权）
                const permission = await handle.requestPermission({ mode: 'read' });
                if (permission !== 'granted') {
                    console.log('[loadLastTeslaCamPath] Permission denied, clearing saved handle');
                    await clearDirectoryHandle();
                    return;
                }
                
                // 加载目录
                console.log('[loadLastTeslaCamPath] Auto-loading directory from handle...');
                await this.loadDirectoryFromHandle(handle);
            } catch (e) {
                console.warn('[loadLastTeslaCamPath] Failed to load saved directory handle:', e);
                await clearDirectoryHandle();
            }
        } else {
            console.log('[loadLastTeslaCamPath] File System Access API not supported');
        }
    }

    /**
     * 使用 File System Access API 选择目录（Web 版本）
     */
    async selectDirectoryWithFSA() {
        try {
            const handle = await window.showDirectoryPicker({
                id: 'teslacam-directory',
                mode: 'read',
                startIn: 'documents'
            });
            
            console.log('[selectDirectoryWithFSA] Selected directory:', handle.name);
            
            // 保存目录句柄到 IndexedDB
            await saveDirectoryHandle(handle);
            
            // 加载目录
            await this.loadDirectoryFromHandle(handle);
        } catch (e) {
            if (e.name === 'AbortError') {
                console.log('[selectDirectoryWithFSA] User cancelled');
                return;
            }
            console.error('[selectDirectoryWithFSA] Error:', e);
            this.showToast('选择目录失败: ' + e.message, 'error');
        }
    }

    /**
     * 从目录句柄加载文件（Web 版本）
     */
    async loadDirectoryFromHandle(handle) {
        // 显示加载状态
        const loadingDiv = document.createElement('div');
        loadingDiv.id = 'fsa-loading';
        loadingDiv.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(0,0,0,0.8);color:white;padding:20px 40px;border-radius:8px;z-index:9999;';
        loadingDiv.textContent = this.currentLanguage === 'zh' ? '正在加载目录...' : 'Loading directory...';
        document.body.appendChild(loadingDiv);
        
        try {
            const files = [];
            await this.collectFilesFromHandle(handle, handle.name, files);
            
            console.log('[loadDirectoryFromHandle] Collected files:', files.length);
            
            if (files.length === 0) {
                this.showToast(i18n[this.currentLanguage].invalidFolder, 'error');
                await clearDirectoryHandle();
                return;
            }
            
            // 检查是否有 TeslaCam 子文件夹
            const hasTeslaCamSubfolders = files.some(file => 
                file.webkitRelativePath.includes('RecentClips/') ||
                file.webkitRelativePath.includes('SavedClips/') ||
                file.webkitRelativePath.includes('SentryClips/')
            );
            
            if (!hasTeslaCamSubfolders) {
                this.showToast(i18n[this.currentLanguage].invalidFolder, 'error');
                await clearDirectoryHandle();
                return;
            }
            
            // 清理旧数据
            this.cleanupOldData();
            
            this.allFiles = files;
            this.eventGroups = await this.processFiles(this.allFiles);
            console.log('[loadDirectoryFromHandle] eventGroups:', this.eventGroups.length);
            this.filterAndRender();
            
        } finally {
            loadingDiv.remove();
        }
    }

    /**
     * 递归收集目录中的所有文件
     */
    async collectFilesFromHandle(dirHandle, basePath, files) {
        for await (const entry of dirHandle.values()) {
            const entryPath = `${basePath}/${entry.name}`;
            
            if (entry.kind === 'file') {
                // 收集视频文件、缩略图和事件JSON
                if (entry.name.endsWith('.mp4') || entry.name.endsWith('.png') || entry.name.endsWith('.jpg') || entry.name === 'event.json') {
                    try {
                        const file = await entry.getFile();
                        // 添加 webkitRelativePath 属性
                        Object.defineProperty(file, 'webkitRelativePath', {
                            value: entryPath,
                            writable: false
                        });
                        files.push(file);
                    } catch (e) {
                        console.warn('[collectFilesFromHandle] Failed to get file:', entryPath, e);
                    }
                }
            } else if (entry.kind === 'directory') {
                // 递归处理子目录
                await this.collectFilesFromHandle(entry, entryPath, files);
            }
        }
    }

    /**
     * 使用 Tauri dialog 选择目录
     */
    async selectTauriDirectory() {
        const tauri = getTauri();
        if (!tauri) return;
        
        try {
            // 获取上次选择的路径作为默认目录
            const config = await this.loadTauriConfig();
            const lastPath = config?.lastTeslaCamPath;
            
            // 使用 Tauri dialog API 选择目录
            let dialog = tauri.dialog;
            if (!dialog && tauri.api) {
                dialog = tauri.api.dialog;
            }
            
            if (!dialog || !dialog.open) {
                console.warn('[selectTauriDirectory] Dialog API not available');
                this.dom.folderInput.click();
                return;
            }
            
            const selected = await dialog.open({
                directory: true,
                multiple: false,
                title: 'Select TeslaCam Directory',
                defaultPath: lastPath || undefined
            });
            
            if (!selected) {
                console.log('[selectTauriDirectory] User cancelled');
                return;
            }
            
            const path = typeof selected === 'string' ? selected : selected[0];
            console.log('[selectTauriDirectory] Selected path:', path);
            
            await this.loadTauriDirectory(path);
        } catch (e) {
            console.error('[selectTauriDirectory] Error:', e);
            this.showToast('选择目录失败: ' + e.message, 'error');
        }
    }

    /**
     * 加载 Tauri 目录
     */
    async loadTauriDirectory(path) {
        // Show loading state
        const loadingDiv = document.createElement('div');
        loadingDiv.id = 'tauri-loading';
        loadingDiv.style.position = 'fixed';
        loadingDiv.style.top = '50%';
        loadingDiv.style.left = '50%';
        loadingDiv.style.transform = 'translate(-50%, -50%)';
        loadingDiv.style.padding = '20px';
        loadingDiv.style.background = 'rgba(0,0,0,0.8)';
        loadingDiv.style.color = 'white';
        loadingDiv.style.borderRadius = '10px';
        loadingDiv.style.zIndex = '9999';
        loadingDiv.innerText = 'Scanning files...';
        document.body.appendChild(loadingDiv);

        try {
            console.log('[loadTauriDirectory] Scanning path:', path);
            const files = await this.scanTauriFiles(path, path);
            console.log('[loadTauriDirectory] Found files:', files.length);

            if (files.length > 0) {
                // Log first few files for debugging
                files.slice(0, 5).forEach(f => {
                    console.log('[loadTauriDirectory] Sample file:', f.name, 'webkitRelativePath:', f.webkitRelativePath);
                });
                
                // 检查是否是有效的 TeslaCam 目录
                const hasTeslaCamSubfolders = files.some(file => 
                    file.webkitRelativePath.includes('RecentClips/') ||
                    file.webkitRelativePath.includes('SavedClips/') ||
                    file.webkitRelativePath.includes('SentryClips/')
                );
                
                if (hasTeslaCamSubfolders) {
                    // 保存路径到配置文件
                    await this.saveTauriConfig({ lastTeslaCamPath: path });
                    console.log('[loadTauriDirectory] Saved path to config file');
                    
                    await this.handleFolderSelection(files);
                } else {
                    this.showToast(i18n[this.currentLanguage].invalidFolder, 'error', 5000);
                }
            } else {
                this.showToast('No files found in the selected folder.', 'error');
            }
        } catch (e) {
            console.error('[loadTauriDirectory] Error:', e);
            this.showToast('Error reading files: ' + e.message, 'error');
        } finally {
            if (loadingDiv) loadingDiv.remove();
        }
    }

    updateAllUIText(lang) {
        const translations = i18n[lang];
        if (!translations) return;

        document.title = translations.pageTitle;
        this.dom.langToggleBtn.textContent = lang === 'zh' ? 'En' : '中';
        this.dom.langToggleBtn.title = translations.toggleLanguage;
        this.dom.themeToggleBtn.title = translations.toggleTheme;
        this.dom.toggleSidebarBtn.title = translations.toggleSidebar;
        this.dom.mapModalTitle.textContent = translations.mapModalTitle;
        this.dom.gaodeMapBtn.textContent = translations.gaodeMap;
        this.dom.googleMapBtn.textContent = translations.googleMap;
        this.dom.revealFileBtn.title = translations.revealFile;
        this.dom.downloadFileBtn.title = translations.downloadFile;

        document.querySelector('.sidebar-header .header-title span').textContent = translations.headerTitle;
        document.querySelector('.filter-group label[for="dateFilter"]').textContent = translations.date;
        document.querySelector('.filter-group label[for="eventFilter"]').textContent = translations.eventType;
        document.querySelector('#eventFilter option[value=""]').textContent = translations.allTypes;
        document.querySelector('#eventFilter option[value="RecentClips"]').textContent = translations.recentClips;
        document.querySelector('#eventFilter option[value="SavedClips"]').textContent = translations.savedClips;
        document.querySelector('#eventFilter option[value="SentryClips"]').textContent = translations.sentryClips;
        
        const useFileInput = !supportsDirectoryPicker();
        document.querySelector('#selectFolderBtn').textContent = useFileInput ? translations.selectFiles : translations.selectFolder;

        // Update View Switcher and other common labels
        document.querySelectorAll('[data-i18n="front"]').forEach(el => el.textContent = translations.front);
        document.querySelectorAll('[data-i18n="back"]').forEach(el => el.textContent = translations.back);
        document.querySelectorAll('[data-i18n="left"]').forEach(el => el.textContent = translations.left);
        document.querySelectorAll('[data-i18n="right"]').forEach(el => el.textContent = translations.right);
        document.querySelectorAll('[data-i18n="leftPillar"]').forEach(el => el.textContent = translations.leftPillar);
        document.querySelectorAll('[data-i18n="rightPillar"]').forEach(el => el.textContent = translations.rightPillar);
        document.querySelectorAll('[data-i18n="grid6"]').forEach(el => el.textContent = translations.grid6);
        document.querySelectorAll('[data-i18n="grid4"]').forEach(el => el.textContent = translations.grid4);
        document.querySelectorAll('[data-i18n="legacy"]').forEach(el => el.textContent = translations.legacy);

        // Update Metadata Panel
        const metadataKeys = [
            'metadata', 'loadingMetadata', 'noMetadata', 'speed', 'gear', 'steering', 
            'accelerator', 'brake', 'blinker', 'autopilot', 'gps', 'heading', 'acceleration'
        ];
        metadataKeys.forEach(key => {
            document.querySelectorAll(`[data-i18n="${key}"]`).forEach(el => {
                if (translations[key]) el.textContent = translations[key];
            });
        });


        if (this.allFiles.length === 0) {
            this.showInitialHelpMessage();
        } else {
            this.filterAndRender();
        }
        
        this.videoControls.updatePlayState(this.multiCameraPlayer.isPlaying);
        this.videoControls.updateRealTimeClock();
    }

    toggleSidebar(forceState) {
        let isNowCollapsed;
        if (typeof forceState !== 'undefined') {
            isNowCollapsed = !forceState;
            this.dom.sidebar.classList.toggle('collapsed', isNowCollapsed);
        } else {
            isNowCollapsed = this.dom.sidebar.classList.toggle('collapsed');
        }
        
        document.body.classList.toggle('sidebar-collapsed', isNowCollapsed);
        this.dom.toggleSidebarBtn.classList.toggle('collapsed', isNowCollapsed);
        this.dom.overlay.classList.toggle('active', !isNowCollapsed && window.innerWidth < 768);
    }

    initSwipeGestures() {
        let touchStartX = 0;
        let touchStartY = 0;
        let touchEndX = 0;
        let touchEndY = 0;
        const minSwipeDistance = 50;
        const maxVerticalDistance = 100;
        const edgeThreshold = 30; // Edge area for swipe-to-open

        // Swipe on sidebar to close
        this.dom.sidebar.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
        }, { passive: true });

        this.dom.sidebar.addEventListener('touchend', (e) => {
            if (window.innerWidth >= 768) return; // Only on mobile
            
            touchEndX = e.changedTouches[0].screenX;
            touchEndY = e.changedTouches[0].screenY;
            
            const deltaX = touchEndX - touchStartX;
            const deltaY = Math.abs(touchEndY - touchStartY);
            
            // Swipe left to close sidebar
            if (deltaX < -minSwipeDistance && deltaY < maxVerticalDistance) {
                this.toggleSidebar(false);
            }
        }, { passive: true });

        // Swipe from left edge to open sidebar
        document.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
        }, { passive: true });

        document.addEventListener('touchend', (e) => {
            if (window.innerWidth >= 768) return; // Only on mobile
            
            const isCollapsed = this.dom.sidebar.classList.contains('collapsed');
            if (!isCollapsed) return; // Only handle swipe-to-open when sidebar is hidden
            
            touchEndX = e.changedTouches[0].screenX;
            touchEndY = e.changedTouches[0].screenY;
            
            const deltaX = touchEndX - touchStartX;
            const deltaY = Math.abs(touchEndY - touchStartY);
            
            // Swipe right from left edge to open sidebar
            if (touchStartX < edgeThreshold && deltaX > minSwipeDistance && deltaY < maxVerticalDistance) {
                this.toggleSidebar(true);
            }
        }, { passive: true });
        
        // Initialize view switcher scroll with mouse wheel support
        this.initViewSwitcherScroll();
    }

    initViewSwitcherScroll() {
        const viewSwitcher = document.getElementById('viewSwitcher');
        if (!viewSwitcher) return;

        // Mouse wheel horizontal scroll
        viewSwitcher.addEventListener('wheel', (e) => {
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                e.preventDefault();
                viewSwitcher.scrollLeft += e.deltaY;
            }
        }, { passive: false });
    }

    async revealCurrentFilePath() {
        if (this.multiCameraPlayer.isPlaying || !this.continuousPlayer.currentEvent) {
            return;
        }
    
        const currentSegmentIndex = this.continuousPlayer.currentSegmentIndex;
        const segment = this.continuousPlayer.currentEvent.segments[currentSegmentIndex];
        if (!segment) {
            alert("Could not determine file path.");
            return;
        }
    
        const activeCamera = this.multiCameraPlayer.activeCamera;
        const file = segment.files[activeCamera];
    
        // In Tauri desktop, open file explorer and select the file
        if (this.isTauri && file && file.path) {
            try {
                const tauri = window.__TAURI__;
                const shell = tauri.shell;
                
                // Detect OS and use appropriate command
                const platform = navigator.platform.toLowerCase();
                const isWindows = platform.includes('win');
                const isMac = platform.includes('mac');
                
                if (isWindows) {
                    // Windows: explorer /select,"path" - must be a single argument
                    const normalizedPath = file.path.replace(/\//g, '\\');
                    const command = shell.Command.create('explorer', [`/select,${normalizedPath}`]);
                    await command.execute();
                } else if (isMac) {
                    // macOS: open -R "path"
                    const command = shell.Command.create('open', ['-R', file.path]);
                    await command.execute();
                } else {
                    // Linux: xdg-open parent directory (can't select file directly)
                    const parentDir = file.path.substring(0, file.path.lastIndexOf('/'));
                    const command = shell.Command.create('xdg-open', [parentDir]);
                    await command.execute();
                }
                return;
            } catch (e) {
                console.error('Failed to reveal file in explorer:', e);
                // Fall through to show modal with path
            }
        }
        
        // Fallback: show modal with file path for easy copying
        // Prefer absolute path (file.path) if available, otherwise use webkitRelativePath
        const displayPath = file?.path || file?.webkitRelativePath;
        if (displayPath) {
            this.showFilePathModal(displayPath);
        } else {
            this.showToast(i18n[this.currentLanguage].noFilePath || "Could not determine file path for the active camera.", 'error');
        }
    }
    
    showFilePathModal(filePath) {
        const translations = i18n[this.currentLanguage];
        this.dom.filePathModalTitle.textContent = translations.filePathAlertTitle;
        this.dom.filePathInput.value = filePath;
        this.dom.copySuccessHint.classList.remove('show');
        this.dom.filePathModal.style.display = 'flex';
        requestAnimationFrame(() => {
            this.dom.filePathModal.classList.add('show');
        });
        // Select the text for easy copying
        this.dom.filePathInput.select();
    }
    
    hideFilePathModal() {
        this.dom.filePathModal.classList.remove('show');
        setTimeout(() => {
            this.dom.filePathModal.style.display = 'none';
        }, 300);
    }
    
    async copyFilePath() {
        const filePath = this.dom.filePathInput.value;
        const translations = i18n[this.currentLanguage];
        try {
            await navigator.clipboard.writeText(filePath);
            this.dom.copySuccessHint.textContent = translations.copiedToClipboard;
            this.dom.copySuccessHint.classList.add('show');
            setTimeout(() => {
                this.dom.copySuccessHint.classList.remove('show');
            }, 2000);
        } catch (e) {
            // Fallback for older browsers
            this.dom.filePathInput.select();
            document.execCommand('copy');
            this.dom.copySuccessHint.textContent = translations.copiedToClipboard;
            this.dom.copySuccessHint.classList.add('show');
            setTimeout(() => {
                this.dom.copySuccessHint.classList.remove('show');
            }, 2000);
        }
    }

    async downloadCurrentFile() {
        if (this.multiCameraPlayer.isPlaying || !this.continuousPlayer.currentEvent) {
            return;
        }

        const currentSegmentIndex = this.continuousPlayer.currentSegmentIndex;
        const segment = this.continuousPlayer.currentEvent.segments[currentSegmentIndex];
        if (!segment) {
            return;
        }

        const activeCamera = this.multiCameraPlayer.activeCamera;
        const file = segment.files[activeCamera];
        if (!file) {
            return;
        }

        if (window.__TAURI__) {
            try {
                const invoke = window.__TAURI__.core?.invoke || window.__TAURI__.invoke || (window.__TAURI__.tauri && window.__TAURI__.tauri.invoke);
                if (!invoke) throw new Error('Tauri invoke not found');

                const defaultName = file.name || 'TeslaCam.mp4';
                const savePath = await invoke('plugin:dialog|save', {
                    options: {
                        defaultPath: defaultName,
                        filters: [{
                            name: 'Video',
                            extensions: ['mp4']
                        }]
                    }
                });

                const resolvedSavePath = typeof savePath === 'string' ? savePath : savePath?.path;
                if (!resolvedSavePath) {
                    return;
                }

                const arrayBuffer = await file.arrayBuffer();
                const uint8Array = new Uint8Array(arrayBuffer);

                // Use Tauri fs plugin to write binary file
                const fs = window.__TAURI__.fs;
                if (fs && fs.writeFile) {
                    await fs.writeFile(resolvedSavePath, uint8Array);
                } else {
                    // Fallback to custom command
                    const bytes = Array.from(uint8Array);
                    await invoke('write_binary_file', {
                        path: resolvedSavePath,
                        bytes
                    });
                }

                this.showToast('保存成功!', 'success');
            } catch (e) {
                console.error('Tauri download failed:', e);
                const errorMsg = typeof e === 'string' ? e : (e.message || JSON.stringify(e));
                alert('保存失败: ' + errorMsg);
            }
            return;
        }

        const a = document.createElement('a');
        const url = getFileUrl(file);
        a.href = url;
        a.download = file.name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    
    showClipModal() {
        if (!this.videoControls.clipModeActive || 
            this.videoControls.clipStartTime === null || 
            this.videoControls.clipStartTime === undefined || 
            this.videoControls.clipEndTime === null || 
            this.videoControls.clipEndTime === undefined) {
            alert(i18n[this.currentLanguage].selectClipRange);
            return;
        }
        
        const translations = i18n[this.currentLanguage];
        
        // Update modal title and labels
        this.dom.clipModalTitle.textContent = translations.exportClip;
        
        // Update labels
        document.getElementById('selectCamerasLabel').textContent = translations.selectCameras;
        document.getElementById('addTimestampLabel').textContent = translations.addTimestamp;
        document.getElementById('mergeVideosLabel').textContent = translations.mergeVideos;
        this.dom.startClipBtn.textContent = translations.startExport;
        this.dom.cancelClipBtn.textContent = translations.cancel;
        
        // Update camera labels
        document.querySelectorAll('[data-i18n="front"]').forEach(el => el.textContent = translations.front);
        document.querySelectorAll('[data-i18n="back"]').forEach(el => el.textContent = translations.back);
        document.querySelectorAll('[data-i18n="left"]').forEach(el => el.textContent = translations.left);
        document.querySelectorAll('[data-i18n="right"]').forEach(el => el.textContent = translations.right);
        document.querySelectorAll('[data-i18n="leftPillar"]').forEach(el => el.textContent = translations.leftPillar);
        document.querySelectorAll('[data-i18n="rightPillar"]').forEach(el => el.textContent = translations.rightPillar);
        document.querySelectorAll('[data-i18n="grid6"]').forEach(el => el.textContent = translations.grid6);
        document.querySelectorAll('[data-i18n="grid4"]').forEach(el => el.textContent = translations.grid4);
        document.querySelectorAll('[data-i18n="legacy"]').forEach(el => el.textContent = translations.legacy);

        // Update Metadata Panel
        const metadataKeys = [
            'metadata', 'loadingMetadata', 'noMetadata', 'speed', 'gear', 'steering', 
            'accelerator', 'brake', 'blinker', 'autopilot', 'gps', 'heading', 'acceleration'
        ];
        metadataKeys.forEach(key => {
            document.querySelectorAll(`[data-i18n="${key}"]`).forEach(el => {
                if (translations[key]) el.textContent = translations[key];
            });
        });

        
        // Update clip info labels
        const clipDurationLabel = this.dom.clipDuration.previousElementSibling;
        const clipStartTimeLabel = this.dom.clipStartTime.previousElementSibling;
        const clipEndTimeLabel = this.dom.clipEndTime.previousElementSibling;
        if (clipDurationLabel) clipDurationLabel.textContent = translations.clipDuration;
        if (clipStartTimeLabel) clipStartTimeLabel.textContent = translations.clipStartTime;
        if (clipEndTimeLabel) clipEndTimeLabel.textContent = translations.clipEndTime;
        
        // Calculate duration
        const duration = this.videoControls.clipEndTime - this.videoControls.clipStartTime;
        this.dom.clipDuration.textContent = this.videoControls.formatTime(duration);
        
        // Calculate actual timestamps
        const event = this.continuousPlayer.currentEvent;
        if (event && event.startTime) {
            const startDate = this.parseTimestamp(event.startTime);
            const startTime = new Date(startDate.getTime() + this.videoControls.clipStartTime * 1000);
            const endTime = new Date(startDate.getTime() + this.videoControls.clipEndTime * 1000);
            
            const locale = this.currentLanguage === 'zh' ? 'zh-CN' : 'en-CA';
            this.dom.clipStartTime.textContent = startTime.toLocaleString(locale, {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            });
            this.dom.clipEndTime.textContent = endTime.toLocaleString(locale, {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            });
        }
        
        // Reset checkboxes
        this.dom.exportFront.checked = true;
        this.dom.exportBack.checked = false;
        this.dom.exportLeft.checked = false;
        this.dom.exportRight.checked = false;
        this.dom.addTimestamp.checked = true;
        this.dom.mergeVideos.checked = false;
        
        // Show FFmpeg option only in Tauri desktop
        if (this.isTauri && this.dom.ffmpegOptionRow) {
            this.dom.ffmpegOptionRow.style.display = 'flex';
            // Check FFmpeg availability
            this.videoClipProcessor.checkFFmpeg().then(hasFFmpeg => {
                if (hasFFmpeg) {
                    this.dom.useLocalFFmpeg.checked = true;
                    this.dom.useLocalFFmpeg.disabled = false;
                    document.getElementById('useLocalFFmpegLabel').textContent = 
                        this.currentLanguage === 'zh' ? '使用 FFmpeg 极速导出' : 'Use FFmpeg Fast Export';
                } else {
                    this.dom.useLocalFFmpeg.checked = false;
                    this.dom.useLocalFFmpeg.disabled = true;
                    document.getElementById('useLocalFFmpegLabel').textContent = 
                        this.currentLanguage === 'zh' ? 'FFmpeg 未安装' : 'FFmpeg Not Installed';
                }
            });
        } else if (this.dom.ffmpegOptionRow) {
            this.dom.ffmpegOptionRow.style.display = 'none';
        }
        
        // Hide progress
        this.dom.clipProgress.style.display = 'none';
        this.dom.startClipBtn.disabled = false;
        this.dom.startClipBtn.style.display = 'block'; // Ensure visible
        this.dom.cancelClipBtn.disabled = false;
        this.dom.cancelClipBtn.textContent = i18n[this.currentLanguage].cancel; // Reset text
        this.dom.cancelClipBtn.style.display = 'block'; // Ensure visible
        
        // Reset clip info and options state (remove disabled class)
        this.dom.clipInfo.classList.remove('disabled');
        this.dom.clipOptions.classList.remove('disabled');
        
        // Hide download buttons if any
        const downloadButtons = document.getElementById('downloadButtons');
        if (downloadButtons) {
            downloadButtons.style.display = 'none';
            downloadButtons.innerHTML = '';
        }
        
        // Show modal
        this.dom.clipModal.style.display = 'flex';
        setTimeout(() => this.dom.clipModal.classList.add('show'), 10);
    }
    
    hideClipModal() {
        this.dom.clipModal.classList.remove('show');
        setTimeout(() => {
            this.dom.clipModal.style.display = 'none';
            // Reset download buttons
            const downloadButtons = document.getElementById('downloadButtons');
            if (downloadButtons) {
                downloadButtons.style.display = 'none';
                downloadButtons.innerHTML = '';
            }
            
            // Clean up pending export blobs to free memory
            if (this.pendingExportBlobs) {
                console.log('[Memory] Cleaning up pending export blobs...');
                for (const result of this.pendingExportBlobs) {
                    if (result.blob) {
                        // Clear the blob reference
                        result.blob = null;
                    }
                }
                this.pendingExportBlobs = null;
                
                // Suggest garbage collection (browser will do this automatically, but this helps)
                if (window.gc) {
                    window.gc();
                }
                console.log('[Memory] Export blobs cleaned up');
            }
        }, 300);
    }
    
    parseTimestamp(timestamp) {
        // Handles "2024-01-01_12-00-00" format
        const [datePart, timePart] = timestamp.split('_');
        return new Date(`${datePart}T${timePart.replace(/-/g, ':')}`);
    }
    
    async saveVideoFile(blob, filename) {
        try {
            // Check if File System Access API is available (Chrome 86+, Edge 86+)
            if ('showSaveFilePicker' in window) {
                try {
                    const fileHandle = await window.showSaveFilePicker({
                        suggestedName: filename,
                        types: [{
                            description: 'WebM Video',
                            accept: { 'video/webm': ['.webm'] }
                        }]
                    });

                    const writable = await fileHandle.createWritable();
                    await writable.write(blob);
                    await writable.close();

                    console.log('File saved via File System Access API');
                    this.showToast('视频保存成功!', 'success');
                } catch (fsError) {
                    // User cancelled the save dialog or API failed
                    if (fsError.name === 'AbortError') {
                        console.log('User cancelled save dialog');
                        return;
                    }
                    throw fsError; // Re-throw other errors to fall back
                }
            } else {
                // Fallback to traditional download for older browsers
                const url = URL.createObjectURL(blob);
                console.log('Created blob URL:', url);

                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = filename;
                document.body.appendChild(a);

                await new Promise(resolve => {
                    setTimeout(() => {
                        a.click();
                        console.log('Download link clicked');
                        resolve();
                    }, 100);
                });

                setTimeout(() => {
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                    console.log('Cleanup completed');
                }, 1000);
                
                this.showToast(`视频已下载: ${filename}`, 'success');
            }
        } catch (downloadError) {
            console.error('Download error:', downloadError);
            alert('下载失败: ' + downloadError.message);
        }
    }

    async startClipExport() {
        const translations = i18n[this.currentLanguage];
        
        // Get selected cameras
        const cameras = [];
        if (this.dom.exportFront.checked) cameras.push('front');
        if (this.dom.exportBack.checked) cameras.push('back');
        if (this.dom.exportLeft.checked) cameras.push('left');
        if (this.dom.exportRight.checked) cameras.push('right');
        if (this.dom.exportLeftPillar && this.dom.exportLeftPillar.checked) cameras.push('left_pillar');
        if (this.dom.exportRightPillar && this.dom.exportRightPillar.checked) cameras.push('right_pillar');
        
        if (cameras.length === 0) {
            alert(translations.selectAtLeastOneCamera);
            return;
        }
        
        const addTimestamp = this.dom.addTimestamp.checked;
        const mergeGrid = this.dom.mergeVideos.checked && cameras.length > 1;
        const useLocalFFmpeg = this.isTauri && this.dom.useLocalFFmpeg && this.dom.useLocalFFmpeg.checked;
        
        console.log('[startClipExport] Export options:', { addTimestamp, mergeGrid, useLocalFFmpeg, cameras });
        
        // WEB ONLY: Ask for save location upfront to enable streaming
        let fileHandle = null;
        if (!this.isTauri && 'showSaveFilePicker' in window && !useLocalFFmpeg) {
             // Only support streaming for Grid (1 file) or Single Camera (1 file)
             if (mergeGrid || cameras.length === 1) {
                  try {
                      const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
                      const camName = mergeGrid ? 'grid' : cameras[0];
                      // Canvas export produces WebM
                      const suggestedName = `TeslaCam_${camName}_${timestamp}.webm`;
                      
                      fileHandle = await window.showSaveFilePicker({
                          suggestedName: suggestedName,
                          types: [{
                              description: 'WebM Video',
                              accept: { 'video/webm': ['.webm'] }
                          }],
                      });
                  } catch (e) {
                      if (e.name === 'AbortError') return; // User cancelled
                      console.error('File picker failed, falling back to memory mode:', e);
                  }
             }
        }

        // Disable button and show progress
        this.dom.startClipBtn.disabled = true;
        this.dom.cancelClipBtn.disabled = true;
        this.dom.clipInfo.classList.add('disabled');
        this.dom.clipOptions.classList.add('disabled');
        this.dom.clipProgress.style.display = 'block';
        this.dom.clipProgressBar.style.width = '0%';
        this.dom.clipProgressBar.classList.remove('indeterminate');
        this.dom.clipProgressText.textContent = translations.preparing;
        
        // Ensure buttons state
        const downloadButtons = document.getElementById('downloadButtons');
        if (downloadButtons) {
            downloadButtons.style.display = 'none';
            downloadButtons.innerHTML = '';
        }

        try {
            const event = this.continuousPlayer.currentEvent;
            
            // Add duration to segments
            const segmentsWithDuration = event.segments.map((seg, idx) => {
                return {
                    ...seg,
                    duration: event.segmentDurations[idx] || 60
                };
            });
            
            const results = await this.videoClipProcessor.processClip(
                segmentsWithDuration,
                cameras,
                this.videoControls.clipStartTime,
                this.videoControls.clipEndTime,
                addTimestamp,
                mergeGrid,
                event.startTime,
                (msg) => {
                    this.dom.clipProgressText.textContent = msg;
                    // Extract real percentage from message if available
                    const percentMatch = msg.match(/(\d+)%/);
                    if (percentMatch) {
                        // Real progress - remove indeterminate animation
                        this.dom.clipProgressBar.classList.remove('indeterminate');
                        const percent = parseInt(percentMatch[1], 10);
                        this.dom.clipProgressBar.style.width = Math.min(95, percent) + '%';
                    } else if (msg.includes('FFmpeg') || msg.includes('极速导出') || msg.includes('写入磁盘')) {
                        // FFmpeg export - use indeterminate animation
                        this.dom.clipProgressBar.classList.add('indeterminate');
                    } else {
                        // For other non-percentage messages
                        this.dom.clipProgressBar.classList.remove('indeterminate');
                        const currentWidth = parseFloat(this.dom.clipProgressBar.style.width) || 0;
                        if (currentWidth < 30) {
                            this.dom.clipProgressBar.style.width = Math.min(30, currentWidth + 5) + '%';
                        }
                    }
                },
                useLocalFFmpeg,
                this.currentLanguage,
                fileHandle
            );
            
            this.dom.clipProgressBar.classList.remove('indeterminate');
            
            this.dom.clipProgressBar.style.width = '100%';
            
            if (window.__TAURI__) {
                // Tauri implementation
                this.dom.clipProgressText.textContent = translations.exporting;
                for (const result of results) {
                    // Check if result is from FFmpeg (file path) or Canvas (blob)
                    if (result.isFile && result.path) {
                        // FFmpeg export - file already saved, ask user where to move it
                        const ext = result.path.endsWith('.mp4') ? 'mp4' : 'webm';
                        const defaultFilename = result.path.substring(result.path.lastIndexOf('/') + 1).replace(/\\/g, '/').split('/').pop();
                        
                        try {
                            const invoke = window.__TAURI__.core?.invoke || window.__TAURI__.invoke;
                            const fs = window.__TAURI__.fs;
                            
                            const savePath = await invoke('plugin:dialog|save', {
                                options: {
                                    defaultPath: defaultFilename,
                                    filters: [{
                                        name: 'Video',
                                        extensions: [ext]
                                    }]
                                }
                            });
                            
                            const resolvedSavePath = typeof savePath === 'string' ? savePath : savePath?.path;
                            if (resolvedSavePath && resolvedSavePath !== result.path) {
                                // Copy file to new location
                                await fs.copyFile(result.path, resolvedSavePath);
                                // Remove temp file
                                await fs.remove(result.path);
                                this.showToast('保存成功!', 'success');
                            } else if (resolvedSavePath === result.path) {
                                this.showToast('保存成功!', 'success');
                            } else {
                                // User cancelled, keep the file in original location
                                this.showToast(`视频已保存到: ${result.path}`, 'success');
                            }
                        } catch (e) {
                            console.error('File move failed:', e);
                            this.showToast(`视频已保存到: ${result.path}`, 'success');
                        }
                    } else if (result.blob) {
                        // Canvas export - blob needs to be saved
                        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
                        const filename = `TeslaCam_${result.camera}_${timestamp}.webm`;
                        
                        if (result.blob.size === 0) {
                            console.error('Invalid blob for camera:', result.camera);
                            alert('导出失败：生成的视频文件为空');
                            continue;
                        }
                        
                        try {
                            const invoke = window.__TAURI__.core?.invoke || window.__TAURI__.invoke;
                            const fs = window.__TAURI__.fs;

                            const savePath = await invoke('plugin:dialog|save', {
                                options: {
                                    defaultPath: filename,
                                    filters: [{
                                        name: 'Video',
                                        extensions: ['webm']
                                    }]
                                }
                            });
                            
                            const resolvedSavePath = typeof savePath === 'string' ? savePath : savePath?.path;
                            if (resolvedSavePath) {
                                const arrayBuffer = await result.blob.arrayBuffer();
                                const uint8Array = new Uint8Array(arrayBuffer);
                                
                                if (fs && fs.writeFile) {
                                    await fs.writeFile(resolvedSavePath, uint8Array);
                                } else                                 if (fs && fs.writeBinaryFile) {
                                    await fs.writeBinaryFile(resolvedSavePath, uint8Array);
                                }
                                this.showToast('保存成功!', 'success');
                            }
                        } catch (e) {
                            console.error('Tauri save failed:', e);
                            alert('保存失败: ' + (e.message || e));
                        }
                    }
                }
                
                this.dom.clipProgressText.textContent = translations.complete;
                setTimeout(() => {
                    this.hideClipModal();
                    this.videoControls.toggleClipMode(); 
                }, 2000);
            } else {
                // Browser download - Show buttons
                this.dom.clipProgressText.textContent = '视频已生成，请点击下方按钮保存';
                
                // Disable clip info and options since video is already generated
                this.dom.clipInfo.classList.add('disabled');
                this.dom.clipOptions.classList.add('disabled');
                
                // Store results for cleanup when modal closes
                this.pendingExportBlobs = results;
                
                if (downloadButtons) {
                    downloadButtons.style.display = 'flex';
                    
                    for (const result of results) {
                        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
                        const filename = `TeslaCam_${result.camera}_${timestamp}.webm`;
                        const isGrid = result.camera === 'grid';
                        const cameraName = isGrid ? '四宫格' : result.camera;
                        const sizeInMB = result.blob.size / (1024 * 1024);
                        const sizeText = sizeInMB >= 1 ? `${sizeInMB.toFixed(1)} MB` : `${(result.blob.size / 1024).toFixed(0)} KB`;
                        
                        const btn = document.createElement('button');
                        btn.className = `download-btn${isGrid ? ' grid-btn' : ''}`;
                        
                        if (result.saved) {
                             btn.disabled = true;
                             btn.innerHTML = `
                                <span class="btn-icon">✅</span>
                                <span class="btn-text">${cameraName} 已保存</span>
                            `;
                             if (result.blob && result.blob.size > 0) {
                                 btn.innerHTML += `<span class="btn-size">${sizeText}</span>`;
                             }
                             this.dom.clipProgressText.textContent = translations.complete;
                        } else {
                            btn.innerHTML = `
                                <span class="btn-icon">💾</span>
                                <span class="btn-text">保存 ${cameraName} 视频</span>
                                <span class="btn-size">${sizeText}</span>
                            `;
                            btn.onclick = async () => {
                                await this.saveVideoFile(result.blob, filename);
                                // Mark as downloaded
                                result.downloaded = true;
                                btn.disabled = true;
                                btn.innerHTML = `
                                    <span class="btn-icon">✅</span>
                                    <span class="btn-text">${cameraName} 已保存</span>
                                    <span class="btn-size">${sizeText}</span>
                                `;
                            };
                        }
                        downloadButtons.appendChild(btn);
                    }
                }
                
                // Hide both buttons since we have the X close button
                this.dom.cancelClipBtn.style.display = 'none';
                this.dom.startClipBtn.style.display = 'none';
            }
            
        } catch (error) {
            console.error('Clip export error:', error);
            const errorMsg = error?.message || error?.toString?.() || JSON.stringify(error) || '未知错误';
            alert(translations.exportFailed + errorMsg);
            this.dom.clipProgress.style.display = 'none';
            this.dom.startClipBtn.disabled = false;
            this.dom.cancelClipBtn.disabled = false;
        }
    }

    showMapModal(lat, lon) {
        this.currentMapCoordinates = { lat, lon };
        this.dom.mapModal.style.display = 'flex';
        setTimeout(() => this.dom.mapModal.classList.add('show'), 10);
    }

    hideMapModal() {
        this.dom.mapModal.classList.remove('show');
        setTimeout(() => {
            this.dom.mapModal.style.display = 'none';
            this.currentMapCoordinates = null;
        }, 300);
    }

    async openMap(type) {
        if (!this.currentMapCoordinates) return;
        const { lat, lon } = this.currentMapCoordinates;
        let url;
        if (type === 'gaode') {
            // Convert WGS-84 (GPS) to GCJ-02 (Gaode/AMap) for accuracy
            const gcj02 = wgs84togcj02(parseFloat(lon), parseFloat(lat));
            const gcj_lon = gcj02[0];
            const gcj_lat = gcj02[1];
            // Gaode URI API uses lon,lat order and GCJ-02 coordinates
            url = `https://uri.amap.com/marker?position=${gcj_lon},${gcj_lat}&name=事件位置`;
        } else { // google
            url = `https://www.google.com/maps?q=${lat},${lon}`;
        }
        
        // In Tauri desktop, use shell plugin to open in default browser
        if (this.isTauri && window.__TAURI__) {
            try {
                const tauri = window.__TAURI__;
                // Tauri 2: try different API paths for shell.open
                let openFn = null;
                if (tauri.shell?.open) {
                    openFn = tauri.shell.open;
                } else if (tauri.opener?.open) {
                    openFn = tauri.opener.open;
                }
                
                if (openFn) {
                    await openFn(url);
                } else {
                    // Fallback: use invoke to call shell plugin directly
                    const invoke = tauri.core?.invoke || tauri.invoke || (tauri.tauri && tauri.tauri.invoke);
                    if (invoke) {
                        await invoke('plugin:shell|open', { path: url });
                    } else {
                        window.open(url, '_blank');
                    }
                }
            } catch (e) {
                console.error('Failed to open URL with Tauri shell:', e);
                window.open(url, '_blank');
            }
        } else {
            window.open(url, '_blank');
        }
        this.hideMapModal();
    }

    getEventType(path) {
        if (path.includes('RecentClips/')) return 'RecentClips';
        if (path.includes('SavedClips/')) return 'SavedClips';
        if (path.includes('SentryClips/')) return 'SentryClips';
        return 'Unknown';
    }

    getCameraType(fileName) {
        if (fileName.includes('-front.mp4')) return 'front';
        if (fileName.includes('-back.mp4')) return 'back';
        if (fileName.includes('-left_repeater.mp4')) return 'left';
        if (fileName.includes('-right_repeater.mp4')) return 'right';
        if (fileName.includes('-left_pillar.mp4')) return 'left_pillar';
        if (fileName.includes('-right_pillar.mp4')) return 'right_pillar';
        return null;
    }

    destroy() { if (this.multiCameraPlayer) this.multiCameraPlayer.cleanup(); }
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        window.viewer = new TeslaCamViewer();
        window.addEventListener('beforeunload', () => { if (window.viewer) window.viewer.destroy(); });
        console.log('TeslaCam Player Initialized');
    } catch (error) {
        console.error("Initialization failed:", error);
        alert("Player initialization failed. Check console for details.");
    }
});
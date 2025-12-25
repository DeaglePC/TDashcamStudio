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
        mapModalTitle: "View on Map",
        gaodeMap: "Gaode Map",
        googleMap: "Google Map",
        revealFile: "Reveal File Path",
        downloadFile: "Download Current File",
        filePathAlertTitle: "Current Video File Path",
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
        exportFailed: "Export failed: "
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
        mapModalTitle: "在地图上查看",
        gaodeMap: "高德地图",
        googleMap: "谷歌地图",
        revealFile: "显示文件路径",
        downloadFile: "下载当前文件",
        filePathAlertTitle: "当前视频文件路径",
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
        exportFailed: "导出失败: "
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
            cityHtml = `<span class="city-link" data-lat="${event.lat}" data-lon="${event.lon}">${event.city}</span> `;
        } else if (event.city) {
            cityHtml = `${event.city} `;
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
            // Enter clip mode - initialize selection
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
    }
    
    initCanvas(width, height) {
        if (!this.canvas) {
            this.canvas = document.createElement('canvas');
            this.ctx = this.canvas.getContext('2d');
        }
        this.canvas.width = width;
        this.canvas.height = height;
    }
    
    async processClip(segments, cameras, startTime, endTime, addTimestamp, mergeGrid, eventStartTime, progressCallback) {
        try {
            // Calculate which segments are needed
            const clipSegments = this.getSegmentsForTimeRange(segments, startTime, endTime);
            
            if (clipSegments.length === 0) {
                throw new Error('未找到有效的视频片段');
            }
            
            // If merging as grid, process all cameras together
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
            
            // Otherwise, process each camera individually
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
    
    async processVideoWithTimestamp(clipSegments, camera, totalStartTime, totalEndTime, addTimestamp, eventStartTime, progressCallback) {
        if (clipSegments.length === 0) {
            throw new Error('没有可用的视频片段');
        }
        
        progressCallback?.(`处理 ${camera} 摄像头 (${clipSegments.length} 个片段)...`);
        
        // Prepare all video elements for all segments
        const videoElements = [];
        let canvasWidth = 0;
        let canvasHeight = 0;
        
        // Check if we're in Tauri environment
        const isTauri = !!window.__TAURI__;
        
        for (const clipSegment of clipSegments) {
            const videoFile = clipSegment.segment.files[camera];
            
            if (!videoFile) {
                throw new Error(`${camera} 摄像头在某个片段中没有可用的视频文件`);
            }
            
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
            
            if (canvasWidth === 0) {
                canvasWidth = video.videoWidth;
                canvasHeight = video.videoHeight;
            }
            
            videoElements.push({
                video,
                clipSegment
            });
        }
        
        // Initialize canvas
        this.initCanvas(canvasWidth, canvasHeight);
        
        // Calculate total duration
        const FPS = 30;
        let totalDuration = 0;
        for (const { clipSegment } of videoElements) {
            totalDuration += clipSegment.clipDuration;
        }
        const totalFrames = Math.ceil(totalDuration * FPS);
        
        // Setup MediaRecorder with fixed framerate
        const stream = this.canvas.captureStream(FPS);
        const chunks = [];
        
        // Try VP9 first, fallback to VP8 if not supported
        let mimeType = 'video/webm;codecs=vp9';
        if (!MediaRecorder.isTypeSupported(mimeType)) {
            mimeType = 'video/webm;codecs=vp8';
        }
        
        this.mediaRecorder = new MediaRecorder(stream, {
            mimeType,
            videoBitsPerSecond: 5000000 // 5 Mbps
        });
        
        this.mediaRecorder.ondataavailable = (e) => {
            if (e.data.size > 0) {
                chunks.push(e.data);
            }
        };
        
        const recordingComplete = new Promise((resolve) => {
            this.mediaRecorder.onstop = () => {
                console.log('MediaRecorder stopped, chunks count:', chunks.length, 'total size:', chunks.reduce((acc, c) => acc + c.size, 0));
                const blob = new Blob(chunks, { type: 'video/webm' });
                console.log('Created blob, size:', blob.size);
                resolve(blob);
            };
        });
        
        // Start recording
        this.mediaRecorder.start(100);
        
        // Process all segments using requestVideoFrameCallback for precise frame capture
        let processedFrames = 0;
        const hasVideoFrameCallback = 'requestVideoFrameCallback' in HTMLVideoElement.prototype;
        
        for (let i = 0; i < videoElements.length; i++) {
            const { video, clipSegment } = videoElements[i];
            
            // Calculate timestamp for this segment
            const segmentTime = this.parseTimestamp(clipSegment.timestamp);
            const segmentStartTimestamp = new Date(segmentTime.getTime() + clipSegment.clipStart * 1000);
            const segmentEndTime = clipSegment.clipEnd; // Use clipEnd directly
            
            // Calculate actual end time (use video duration as upper bound)
            const actualEndTime = Math.min(segmentEndTime, video.duration);
            
            console.log(`Processing single camera segment ${i + 1}/${videoElements.length}:`, {
                clipStart: clipSegment.clipStart,
                clipEnd: clipSegment.clipEnd,
                segmentEndTime,
                actualEndTime,
                videoDuration: video.duration
            });
            
            // Seek to clip start position
            video.currentTime = clipSegment.clipStart;
            await new Promise((resolve) => {
                video.onseeked = resolve;
            });
            
            if (hasVideoFrameCallback) {
                // Use requestVideoFrameCallback for precise frame capture
                // This ensures we capture every frame the video produces
                await new Promise((resolve) => {
                    let lastFrameTime = -1;
                    let resolved = false;
                    
                    const captureFrame = (now, metadata) => {
                        // Prevent multiple resolves
                        if (resolved) return;
                        
                        // Check if we've reached the end - use actualEndTime
                        if (video.currentTime >= actualEndTime - 0.05 || video.ended) {
                            resolved = true;
                            video.pause();
                            resolve();
                            return;
                        }
                        
                        // Only capture if this is a new frame
                        if (metadata.mediaTime !== lastFrameTime) {
                            lastFrameTime = metadata.mediaTime;
                            
                            // Draw video frame
                            this.ctx.drawImage(video, 0, 0, this.canvas.width, this.canvas.height);
                            
                            // Draw timestamp if enabled
                            if (addTimestamp) {
                                const currentTime = new Date(segmentStartTimestamp.getTime() + (video.currentTime - clipSegment.clipStart) * 1000);
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
                            
                            // Update progress every 30 frames
                            if (processedFrames % 30 === 0) {
                                const progress = Math.min(100, Math.round((processedFrames / totalFrames) * 100));
                                progressCallback?.(`处理 ${camera}: ${progress}%`);
                            }
                        }
                        
                        // Continue requesting frames only if not resolved
                        if (!resolved) {
                            video.requestVideoFrameCallback(captureFrame);
                        }
                    };
                    
                    // Also listen for video ended event as a fallback
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
                // Fallback: Use setTimeout-based loop for consistent timing
                // This is more reliable than requestAnimationFrame when the tab is in background
                await new Promise((resolve) => {
                    const frameInterval = 1000 / FPS;
                    let expectedTime = performance.now();
                    let resolved = false;
                    
                    const processFrame = () => {
                        // Prevent multiple resolves
                        if (resolved) return;
                        
                        if (video.ended || video.currentTime >= actualEndTime - 0.05) {
                            resolved = true;
                            video.pause();
                            resolve();
                            return;
                        }
                        
                        // Draw video frame
                        this.ctx.drawImage(video, 0, 0, this.canvas.width, this.canvas.height);
                        
                        // Draw timestamp if enabled
                        if (addTimestamp) {
                            const currentTime = new Date(segmentStartTimestamp.getTime() + (video.currentTime - clipSegment.clipStart) * 1000);
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
                        
                        // Update progress every 30 frames
                        if (processedFrames % 30 === 0) {
                            const progress = Math.min(100, Math.round((processedFrames / totalFrames) * 100));
                            progressCallback?.(`处理 ${camera}: ${progress}%`);
                        }
                        
                        // Calculate next frame time with drift correction
                        expectedTime += frameInterval;
                        const drift = performance.now() - expectedTime;
                        const nextDelay = Math.max(0, frameInterval - drift);
                        
                        if (!resolved) {
                            setTimeout(processFrame, nextDelay);
                        }
                    };
                    
                    // Also listen for video ended event as a fallback
                    video.onended = () => {
                        if (!resolved) {
                            resolved = true;
                            video.pause();
                            resolve();
                        }
                    };
                    
                    video.play();
                    setTimeout(processFrame, 0);
                });
            }
        }
        
        // Stop recording
        this.mediaRecorder.stop();
        
        const resultBlob = await recordingComplete;
        
        // Calculate actual duration based on frames
        const actualDuration = totalDuration * 1000; // Convert to ms
        
        // Fix WebM duration metadata
        progressCallback?.('修复视频元数据...');
        const fixedBlob = await webmDurationFixer.fixDuration(resultBlob, actualDuration);
        
        // Clean up
        for (const { video } of videoElements) {
            URL.revokeObjectURL(video.src);
        }
        
        return fixedBlob;
    }
    
    async createGridVideoFromSegments(clipSegments, cameras, totalStartTime, totalEndTime, addTimestamp, eventStartTime, progressCallback) {
        progressCallback?.(`准备四宫格视频 (${clipSegments.length} 个片段)...`);
        
        // Prepare video elements for all segments and all cameras
        const allSegmentVideos = [];
        let canvasWidth = 0;
        let canvasHeight = 0;
        
        // Check if we're in Tauri environment
        const isTauri = !!window.__TAURI__;
        
        for (const clipSegment of clipSegments) {
            const segmentVideos = {};
            
            for (const camera of cameras) {
                const videoFile = clipSegment.segment.files[camera];
                if (!videoFile) continue;
                
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
                
                if (canvasWidth === 0) {
                    canvasWidth = video.videoWidth;
                    canvasHeight = video.videoHeight;
                }
                
                segmentVideos[camera] = video;
            }
            
            if (Object.keys(segmentVideos).length === 0) {
                throw new Error('某个片段没有可用的视频文件');
            }
            
            allSegmentVideos.push({
                videos: segmentVideos,
                clipSegment
            });
        }
        
        const videoCount = cameras.length;
        
        // Calculate grid layout and sort order
        let gridCols, gridRows;
        let sortOrder;

        if (videoCount > 4) {
            // 3x2 Grid for > 4 cameras
            gridCols = 3; 
            gridRows = 2;
            // Visual layout: LP Front RP / Left Back Right
            sortOrder = ['left_pillar', 'front', 'right_pillar', 'left', 'back', 'right'];
        } else {
            // Standard layout behavior for <= 4 cameras
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
            // Handle unknown cameras by putting them at the end
            return (idxA === -1 ? 99 : idxA) - (idxB === -1 ? 99 : idxB);
        });

        const cellWidth = canvasWidth;
        const cellHeight = canvasHeight;
        const gridCanvasWidth = cellWidth * gridCols;
        const gridCanvasHeight = cellHeight * gridRows;
        
        // Initialize canvas
        this.initCanvas(gridCanvasWidth, gridCanvasHeight);
        
        // Calculate total duration
        const FPS = 30;
        let totalDuration = 0;
        for (const { clipSegment } of allSegmentVideos) {
            totalDuration += clipSegment.clipDuration;
        }
        const totalFrames = Math.ceil(totalDuration * FPS);
        
        // Setup MediaRecorder with fixed framerate
        const stream = this.canvas.captureStream(FPS);
        const chunks = [];
        
        // Dynamic bitrate based on grid cell count (5 Mbps per cell to match single video quality)
        // Cap at 25 Mbps to avoid browser encoding issues
        const gridCellCount = gridCols * gridRows;
        const videoBitsPerSecond = Math.min(5000000 * gridCellCount, 25000000);
        
        // Try VP9 first, fallback to VP8 if not supported
        let mimeType = 'video/webm;codecs=vp9';
        if (!MediaRecorder.isTypeSupported(mimeType)) {
            mimeType = 'video/webm;codecs=vp8';
        }
        
        console.log(`Grid export: ${gridCols}x${gridRows}, ${gridCanvasWidth}x${gridCanvasHeight}, ${videoBitsPerSecond / 1000000} Mbps, codec: ${mimeType}, total frames: ${totalFrames}`);
        
        this.mediaRecorder = new MediaRecorder(stream, {
            mimeType,
            videoBitsPerSecond
        });
        
        this.mediaRecorder.ondataavailable = (e) => {
            if (e.data.size > 0) {
                chunks.push(e.data);
            }
        };
        
        const recordingComplete = new Promise((resolve) => {
            this.mediaRecorder.onstop = () => {
                console.log('MediaRecorder stopped, chunks count:', chunks.length, 'total size:', chunks.reduce((acc, c) => acc + c.size, 0));
                const blob = new Blob(chunks, { type: 'video/webm' });
                console.log('Created blob, size:', blob.size);
                resolve(blob);
            };
        });
        
        // Start recording
        this.mediaRecorder.start(100);
        
        // Position mapping for grid
        const cameraPositions = {};
        sortedCameras.forEach((cam, index) => {
            cameraPositions[cam] = {
                x: index % gridCols,
                y: Math.floor(index / gridCols)
            };
        });
        
        // Process all segments using requestVideoFrameCallback for precise frame capture
        let processedFrames = 0;
        const hasVideoFrameCallback = 'requestVideoFrameCallback' in HTMLVideoElement.prototype;
        
        for (let i = 0; i < allSegmentVideos.length; i++) {
            const { videos, clipSegment } = allSegmentVideos[i];
            
            // Calculate timestamp for this segment
            const segmentTime = this.parseTimestamp(clipSegment.timestamp);
            const segmentStartTimestamp = new Date(segmentTime.getTime() + clipSegment.clipStart * 1000);
            const segmentEndTime = clipSegment.clipEnd; // Use clipEnd directly, not clipStart + clipDuration
            
            // Get the first video as reference for timing
            const videoEntries = Object.entries(videos);
            const firstVideo = videoEntries[0][1];
            
            // Log segment info for debugging
            console.log(`Processing segment ${i + 1}/${allSegmentVideos.length}:`, {
                clipStart: clipSegment.clipStart,
                clipEnd: clipSegment.clipEnd,
                clipDuration: clipSegment.clipDuration,
                segmentEndTime,
                videoDuration: firstVideo.duration
            });
            
            // Seek all videos to clip start position
            for (const video of Object.values(videos)) {
                video.currentTime = clipSegment.clipStart;
            }
            await Promise.all(Object.values(videos).map(video => 
                new Promise(resolve => { video.onseeked = resolve; })
            ));
            
            if (hasVideoFrameCallback) {
                // Use requestVideoFrameCallback for precise frame capture
                // Calculate actual end time (use video duration as upper bound)
                const actualEndTime = Math.min(segmentEndTime, firstVideo.duration);
                console.log(`Segment ${i + 1}: actualEndTime = ${actualEndTime}, video.duration = ${firstVideo.duration}`);
                
                await new Promise((resolve) => {
                    let lastFrameTime = -1;
                    let resolved = false;
                    
                    const captureFrame = (now, metadata) => {
                        // Prevent multiple resolves
                        if (resolved) return;
                        
                        // Check if we've reached the end - use actualEndTime
                        if (firstVideo.currentTime >= actualEndTime - 0.05 || firstVideo.ended) {
                            console.log(`Segment ${i + 1} ended: currentTime=${firstVideo.currentTime}, actualEndTime=${actualEndTime}, ended=${firstVideo.ended}`);
                            resolved = true;
                            for (const video of Object.values(videos)) {
                                video.pause();
                            }
                            resolve();
                            return;
                        }
                        
                        // Only capture if this is a new frame
                        if (metadata.mediaTime !== lastFrameTime) {
                            lastFrameTime = metadata.mediaTime;
                            
                            // Clear canvas
                            this.ctx.fillStyle = '#000';
                            this.ctx.fillRect(0, 0, gridCanvasWidth, gridCanvasHeight);
                            
                            // Draw each camera view
                            for (const [camera, video] of videoEntries) {
                                const pos = cameraPositions[camera] || { x: 0, y: 0 };
                                const x = pos.x * cellWidth;
                                const y = pos.y * cellHeight;
                                
                                this.ctx.drawImage(video, x, y, cellWidth, cellHeight);
                                
                                // Draw camera label
                                this.ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
                                this.ctx.fillRect(x + 10, y + 10, 120, 60);
                                this.ctx.fillStyle = '#fff';
                                this.ctx.font = 'bold 36px Arial';
                                this.ctx.fillText(camera.toUpperCase(), x + 20, y + 54);
                            }
                            
                            // Draw timestamp if needed
                            if (addTimestamp) {
                                const currentTime = new Date(segmentStartTimestamp.getTime() + (firstVideo.currentTime - clipSegment.clipStart) * 1000);
                                const timeString = currentTime.toLocaleString('zh-CN', {
                                    year: 'numeric',
                                    month: '2-digit',
                                    day: '2-digit',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    second: '2-digit',
                                    hour12: false
                                }).replace(/\//g, '-');
                                
                                // Draw at bottom center
                                this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
                                this.ctx.fillRect(gridCanvasWidth / 2 - 300, gridCanvasHeight - 90, 600, 80);
                                this.ctx.fillStyle = '#fff';
                                this.ctx.font = 'bold 48px Arial';
                                this.ctx.textAlign = 'center';
                                this.ctx.fillText(timeString, gridCanvasWidth / 2, gridCanvasHeight - 35);
                                this.ctx.textAlign = 'left';
                            }
                            
                            processedFrames++;
                            
                            // Update progress every 30 frames
                            if (processedFrames % 30 === 0) {
                                const progress = Math.min(100, Math.round((processedFrames / totalFrames) * 100));
                                progressCallback?.(`处理四宫格: ${progress}%`);
                            }
                        }
                        
                        // Continue requesting frames only if not resolved
                        if (!resolved) {
                            firstVideo.requestVideoFrameCallback(captureFrame);
                        }
                    };
                    
                    // Also listen for video ended event as a fallback
                    firstVideo.onended = () => {
                        if (!resolved) {
                            resolved = true;
                            for (const video of Object.values(videos)) {
                                video.pause();
                            }
                            resolve();
                        }
                    };
                    
                    // Start all videos
                    for (const video of Object.values(videos)) {
                        video.play();
                    }
                    firstVideo.requestVideoFrameCallback(captureFrame);
                });
            } else {
                // Fallback: Use setTimeout-based loop for consistent timing
                // This is more reliable than requestAnimationFrame when the tab is in background
                // Calculate actual end time (use video duration as upper bound)
                const actualEndTime = Math.min(segmentEndTime, firstVideo.duration);
                
                await new Promise((resolve) => {
                    const frameInterval = 1000 / FPS;
                    let expectedTime = performance.now();
                    let resolved = false;
                    
                    const processFrame = () => {
                        // Prevent multiple resolves
                        if (resolved) return;
                        
                        if (firstVideo.ended || firstVideo.currentTime >= actualEndTime - 0.05) {
                            resolved = true;
                            for (const video of Object.values(videos)) {
                                video.pause();
                            }
                            resolve();
                            return;
                        }
                        
                        // Clear canvas
                        this.ctx.fillStyle = '#000';
                        this.ctx.fillRect(0, 0, gridCanvasWidth, gridCanvasHeight);
                        
                        // Draw each camera view
                        for (const [camera, video] of videoEntries) {
                            const pos = cameraPositions[camera] || { x: 0, y: 0 };
                            const x = pos.x * cellWidth;
                            const y = pos.y * cellHeight;
                            
                            this.ctx.drawImage(video, x, y, cellWidth, cellHeight);
                            
                            // Draw camera label
                            this.ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
                            this.ctx.fillRect(x + 10, y + 10, 120, 60);
                            this.ctx.fillStyle = '#fff';
                            this.ctx.font = 'bold 36px Arial';
                            this.ctx.fillText(camera.toUpperCase(), x + 20, y + 54);
                        }
                        
                        // Draw timestamp if needed
                        if (addTimestamp) {
                            const currentTime = new Date(segmentStartTimestamp.getTime() + (firstVideo.currentTime - clipSegment.clipStart) * 1000);
                            const timeString = currentTime.toLocaleString('zh-CN', {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit',
                                hour: '2-digit',
                                minute: '2-digit',
                                second: '2-digit',
                                hour12: false
                            }).replace(/\//g, '-');
                            
                            // Draw at bottom center
                            this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
                            this.ctx.fillRect(gridCanvasWidth / 2 - 300, gridCanvasHeight - 90, 600, 80);
                            this.ctx.fillStyle = '#fff';
                            this.ctx.font = 'bold 48px Arial';
                            this.ctx.textAlign = 'center';
                            this.ctx.fillText(timeString, gridCanvasWidth / 2, gridCanvasHeight - 35);
                            this.ctx.textAlign = 'left';
                        }
                        
                        processedFrames++;
                        
                        // Update progress every 30 frames
                        if (processedFrames % 30 === 0) {
                            const progress = Math.min(100, Math.round((processedFrames / totalFrames) * 100));
                            progressCallback?.(`处理四宫格: ${progress}%`);
                        }
                        
                        // Calculate next frame time with drift correction
                        expectedTime += frameInterval;
                        const drift = performance.now() - expectedTime;
                        const nextDelay = Math.max(0, frameInterval - drift);
                        
                        if (!resolved) {
                            setTimeout(processFrame, nextDelay);
                        }
                    };
                    
                    // Also listen for video ended event as a fallback
                    firstVideo.onended = () => {
                        if (!resolved) {
                            resolved = true;
                            for (const video of Object.values(videos)) {
                                video.pause();
                            }
                            resolve();
                        }
                    };
                    
                    // Start all videos
                    for (const video of Object.values(videos)) {
                        video.play();
                    }
                    setTimeout(processFrame, 0);
                });
            }
        }
        
        // Stop recording
        this.mediaRecorder.stop();
        
        const resultBlob = await recordingComplete;
        
        // Calculate actual duration based on frames
        const actualDuration = totalDuration * 1000; // Convert to ms
        
        // Fix WebM duration metadata
        progressCallback?.('修复视频元数据...');
        const fixedBlob = await webmDurationFixer.fixDuration(resultBlob, actualDuration);
        
        // Clean up
        for (const { videos } of allSegmentVideos) {
            for (const video of Object.values(videos)) {
                URL.revokeObjectURL(video.src);
            }
        }
        
        return fixedBlob;
    }
    
    drawTimestamp(timeString) {
        // Draw background
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        this.ctx.fillRect(10, 10, 380, 50);
        
        // Draw text
        this.ctx.fillStyle = '#fff';
        this.ctx.font = 'bold 28px Arial';
        this.ctx.fillText(timeString, 20, 45);
    }
    
    parseTimestamp(timestamp) {
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
            headerLocationDisplay: document.getElementById('headerLocationDisplay'),
            // Clip modal elements
            clipModal: document.getElementById('clipModal'),
            clipModalTitle: document.getElementById('clipModalTitle'),
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
            clipProgress: document.getElementById('clipProgress'),
            clipProgressBar: document.getElementById('clipProgressBar'),
            clipProgressText: document.getElementById('clipProgressText'),
            startClipBtn: document.getElementById('startClipBtn'),
            cancelClipBtn: document.getElementById('cancelClipBtn'),
            closeClipModalBtn: document.getElementById('closeClipModalBtn'),
        };
        this.videoListComponent = new VideoListComponent('fileList', (eventId) => this.playEvent(eventId), this);
        this.multiCameraPlayer = new MultiCameraPlayer();
        this.continuousPlayer = new ContinuousVideoPlayer(this.multiCameraPlayer);
        this.videoControls = new ModernVideoControls(this.continuousPlayer, this);
        this.initializeEventListeners();
        this.initializeFlatpickr();
        this.loadTheme();
        this.loadLanguage();
    }

    initializeEventListeners() {
        const useFileInput = !supportsDirectoryPicker();
        
        this.dom.selectFolderBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
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
            for (const path of paths) {
                console.log('[Tauri Drop] Scanning path:', path);
                const files = await this.scanTauriFiles(path, path);
                console.log('[Tauri Drop] Found files:', files.length);
                allFiles.push(...files);
            }

            console.log('[Tauri Drop] Total files found:', allFiles.length);
            if (allFiles.length > 0) {
                // Log first few files for debugging
                allFiles.slice(0, 5).forEach(f => {
                    console.log('[Tauri Drop] Sample file:', f.name, 'webkitRelativePath:', f.webkitRelativePath);
                });
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
        for (const jsonFile of jsonFiles) {
            const eventId = jsonFile.webkitRelativePath.substring(0, jsonFile.webkitRelativePath.lastIndexOf('/'));
            if (eventMap.has(eventId)) {
                try {
                    const eventData = JSON.parse(await jsonFile.text());
                    const eventObj = eventMap.get(eventId);
                    eventObj.city = eventData.city;
                    eventObj.eventTimestamp = eventData.timestamp;
                    eventObj.lat = eventData.est_lat;
                    eventObj.lon = eventData.est_lon;
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
                this.dom.headerLocationDisplay.innerHTML = `📍 <span class="city-text">${event.city}</span>`;
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
        
        const helpHtml = `
            <div class="empty-state help-text">
                <ol>
                    <li>${step1}</li>
                    <li>${step2}</li>
                </ol>
                <p class="note">${translations.helpNote}</p>
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

    revealCurrentFilePath() {
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
    
        if (file && file.webkitRelativePath) {
            const lang = this.currentLanguage;
            const translations = i18n[lang];
            alert(`${translations.filePathAlertTitle}:\n\n${file.webkitRelativePath}`);
        } else {
            alert("Could not determine file path for the active camera.");
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

                alert('保存成功!');
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
        
        // Hide progress
        this.dom.clipProgress.style.display = 'none';
        this.dom.startClipBtn.disabled = false;
        this.dom.startClipBtn.style.display = 'block'; // Ensure visible
        this.dom.cancelClipBtn.disabled = false;
        this.dom.cancelClipBtn.textContent = i18n[this.currentLanguage].cancel; // Reset text
        
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
        }, 300);
    }
    
    parseTimestamp(timestamp) {
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
                    alert('视频保存成功!');
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
                
                alert(`视频已下载: ${filename}\n\n提示：如需选择保存位置，请使用Chrome/Edge浏览器或在浏览器设置中开启"下载前询问保存位置"`);
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
        
        // Disable button and show progress
        this.dom.startClipBtn.disabled = true;
        this.dom.cancelClipBtn.disabled = true;
        this.dom.clipProgress.style.display = 'block';
        this.dom.clipProgressBar.style.width = '0%';
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
                    // Simulate progress
                    const currentWidth = parseFloat(this.dom.clipProgressBar.style.width) || 0;
                    this.dom.clipProgressBar.style.width = Math.min(90, currentWidth + 10) + '%';
                }
            );
            
            this.dom.clipProgressBar.style.width = '100%';
            
            if (window.__TAURI__) {
                // Tauri implementation
                this.dom.clipProgressText.textContent = translations.exporting;
                for (const result of results) {
                    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
                    const filename = `TeslaCam_${result.camera}_${timestamp}.webm`;
                    
                    if (!result.blob || result.blob.size === 0) {
                        console.error('Invalid blob for camera:', result.camera);
                        alert('导出失败：生成的视频文件为空');
                        continue;
                    }
                    
                    try {
                        const invoke = window.__TAURI__.core?.invoke || window.__TAURI__.invoke || (window.__TAURI__.tauri && window.__TAURI__.tauri.invoke);
                        if (!invoke) throw new Error('Tauri invoke not found');

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
                            
                            // Use Tauri fs plugin to write binary file
                            const fs = window.__TAURI__.fs;
                            if (fs && fs.writeFile) {
                                await fs.writeFile(resolvedSavePath, uint8Array);
                            } else if (fs && fs.writeBinaryFile) {
                                await fs.writeBinaryFile(resolvedSavePath, uint8Array);
                            } else {
                                const bytes = Array.from(uint8Array);
                                await invoke('write_binary_file', {
                                    path: resolvedSavePath,
                                    bytes
                                });
                            }
                            alert('保存成功!');
                        }
                    } catch (e) {
                        console.error('Tauri save failed:', e);
                        const errorMsg = typeof e === 'string' ? e : (e.message || JSON.stringify(e));
                        alert('保存失败: ' + errorMsg);
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
                
                if (downloadButtons) {
                    downloadButtons.style.display = 'flex';
                    
                    for (const result of results) {
                        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
                        const filename = `TeslaCam_${result.camera}_${timestamp}.webm`;
                        
                        const btn = document.createElement('button');
                        btn.className = 'map-btn'; // Use existing class for styling
                        btn.style.backgroundColor = '#28a745'; // Green for save
                        btn.style.width = '100%';
                        btn.style.marginTop = '5px';
                        btn.textContent = `保存 ${result.camera === 'grid' ? '四宫格' : result.camera} 视频`;
                        btn.onclick = () => this.saveVideoFile(result.blob, filename);
                        downloadButtons.appendChild(btn);
                    }
                }
                
                // Re-enable cancel button to allow closing
                this.dom.cancelClipBtn.disabled = false;
                this.dom.cancelClipBtn.textContent = '关闭'; 
                
                // Hide start button to avoid confusion
                this.dom.startClipBtn.style.display = 'none';
            }
            
        } catch (error) {
            console.error('Clip export error:', error);
            alert(translations.exportFailed + error.message);
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
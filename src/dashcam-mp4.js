/**
 * Tesla Dashcam MP4 Parser
 * Parses MP4 files and extracts SEI metadata from Tesla dashcam footage.
 * Based on Tesla's official dashcam metadata specification.
 */
class DashcamMP4 {
  constructor(buffer) {
    this.buffer = buffer;
    this.view = new DataView(buffer);
    this._config = null;
  }

  // -------------------------------------------------------------
  // MP4 Box Navigation
  // -------------------------------------------------------------

  /** Find a box by name within a range */
  findBox(start, end, name) {
    for (let pos = start; pos + 8 <= end;) {
      let size = this.view.getUint32(pos);
      const type = this.readAscii(pos + 4, 4);
      const headerSize = size === 1 ? 16 : 8;

      if (size === 1) {
        const high = this.view.getUint32(pos + 8);
        const low = this.view.getUint32(pos + 12);
        size = Number((BigInt(high) << 32n) | BigInt(low));
      } else if (size === 0) {
        size = end - pos;
      }

      if (type === name) {
        return { start: pos + headerSize, end: pos + size, size: size - headerSize };
      }
      pos += size;
    }
    throw new Error(`Box "${name}" not found`);
  }

  /** Find mdat box and return content location */
  findMdat() {
    const mdat = this.findBox(0, this.view.byteLength, 'mdat');
    return { offset: mdat.start, size: mdat.size };
  }

  // -------------------------------------------------------------
  // Video Configuration
  // -------------------------------------------------------------

  /** Get video configuration (lazy-loaded) */
  getConfig() {
    if (this._config) return this._config;

    const moov = this.findBox(0, this.view.byteLength, 'moov');
    const trak = this.findBox(moov.start, moov.end, 'trak');
    const mdia = this.findBox(trak.start, trak.end, 'mdia');
    const minf = this.findBox(mdia.start, mdia.end, 'minf');
    const stbl = this.findBox(minf.start, minf.end, 'stbl');
    const stsd = this.findBox(stbl.start, stbl.end, 'stsd');
    const avc1 = this.findBox(stsd.start + 8, stsd.end, 'avc1');
    const avcC = this.findBox(avc1.start + 78, avc1.end, 'avcC');

    const o = avcC.start;
    const codec = `avc1.${this.hex(this.view.getUint8(o + 1))}${this.hex(this.view.getUint8(o + 2))}${this.hex(this.view.getUint8(o + 3))}`;

    // Extract SPS/PPS
    let p = o + 6;
    const spsLen = this.view.getUint16(p);
    const sps = new Uint8Array(this.buffer.slice(p + 2, p + 2 + spsLen));
    p += 2 + spsLen + 1;
    const ppsLen = this.view.getUint16(p);
    const pps = new Uint8Array(this.buffer.slice(p + 2, p + 2 + ppsLen));

    // Get timescale from mdhd (ticks per second, used to convert stts deltas to ms)
    const mdhd = this.findBox(mdia.start, mdia.end, 'mdhd');
    const mdhdVersion = this.view.getUint8(mdhd.start);
    const timescale = mdhdVersion === 1
      ? this.view.getUint32(mdhd.start + 20)
      : this.view.getUint32(mdhd.start + 12);

    // Get frame durations from stts (delta ticks per frame -> converted to ms)
    const stts = this.findBox(stbl.start, stbl.end, 'stts');
    const entryCount = this.view.getUint32(stts.start + 4);
    const durations = [];
    let pos = stts.start + 8;
    for (let i = 0; i < entryCount; i++) {
      const count = this.view.getUint32(pos);
      const delta = this.view.getUint32(pos + 4);
      const ms = (delta / timescale) * 1000;
      for (let j = 0; j < count; j++) durations.push(ms);
      pos += 8;
    }

    this._config = {
      width: this.view.getUint16(avc1.start + 24),
      height: this.view.getUint16(avc1.start + 26),
      codec, sps, pps, timescale, durations
    };
    return this._config;
  }

  // -------------------------------------------------------------
  // Frame Parsing (for Video Playback)
  // -------------------------------------------------------------

  /** Parse video frames with SEI metadata */
  parseFrames(SeiMetadata) {
    const config = this.getConfig();
    const mdat = this.findMdat();
    const frames = [];
    let cursor = mdat.offset;
    const end = mdat.offset + mdat.size;
    let pendingSei = null, currentSps = config.sps, currentPps = config.pps;

    while (cursor + 4 <= end) {
      const len = this.view.getUint32(cursor);
      cursor += 4;
      if (len < 1 || cursor + len > this.view.byteLength) break;

      const type = this.view.getUint8(cursor) & 0x1F;
      const data = new Uint8Array(this.buffer.slice(cursor, cursor + len));

      if (type === 7) currentSps = data; // SPS
      else if (type === 8) currentPps = data; // PPS
      else if (type === 6) pendingSei = this.decodeSei(data, SeiMetadata); // SEI
      else if (type === 5 || type === 1) { // IDR or Slice
        frames.push({
          index: frames.length,
          keyframe: type === 5,
          data,
          sei: pendingSei,
          sps: currentSps,
          pps: currentPps
        });
        pendingSei = null;
      }
      cursor += len;
    }
    return frames;
  }

  // -------------------------------------------------------------
  // SEI Extraction
  // -------------------------------------------------------------

  /** Extract all SEI messages with timestamps */
  parseMetadata() {
    const config = this.getConfig();
    const mdat = this.findMdat();
    const metadata = [];
    let cursor = mdat.offset;
    const end = mdat.offset + mdat.size;
    let frameIndex = 0;
    let currentTimeMs = 0;

    while (cursor + 4 <= end) {
      const nalSize = this.view.getUint32(cursor);
      cursor += 4;

      if (nalSize < 1 || cursor + nalSize > this.view.byteLength) break;

      const naluType = this.view.getUint8(cursor) & 0x1F;
      
      // SEI message
      if (naluType === 6) {
        const nalData = new Uint8Array(this.buffer.slice(cursor, cursor + nalSize));
        // Check if it's the Tesla metadata SEI (User Data Unregistered + specific magic)
        if (nalData[1] === 5) { // Payload type 5
            const payload = this.decodeSeiToRaw(nalData);
            if (payload) {
                metadata.push({
                    time: currentTimeMs / 1000, // in seconds
                    data: payload
                });
            }
        }
      } else if (naluType === 1 || naluType === 5) {
        // Frame boundary (VCL NAL)
        if (frameIndex < config.durations.length) {
          currentTimeMs += config.durations[frameIndex];
        }
        frameIndex++;
      }

      cursor += nalSize;
    }
    return metadata;
  }

  /** Decode SEI NAL unit to raw protobuf bytes */
  decodeSeiToRaw(nal) {
    if (nal.length < 4) return null;

    let i = 3; // Skip NAL header and payload type/size (approx)
    // Tesla metadata SEI starts with a UUID-like prefix or magic
    // Based on the provided algorithm: skip 0x42 bytes then 0x69
    while (i < nal.length && nal[i] === 0x42) i++;
    if (i <= 3 || i + 1 >= nal.length || nal[i] !== 0x69) return null;

    // The rest is the protobuf data (with emulation prevention bytes)
    return this.stripEmulationBytes(nal.subarray(i + 1, nal.length - 1));
  }

  /** Extract all SEI messages for CSV export */

  extractSeiMessages(SeiMetadata) {
    const mdat = this.findMdat();
    const messages = [];
    let cursor = mdat.offset;
    const end = mdat.offset + mdat.size;

    while (cursor + 4 <= end) {
      const nalSize = this.view.getUint32(cursor);
      cursor += 4;

      if (nalSize < 2 || cursor + nalSize > this.view.byteLength) {
        cursor += Math.max(nalSize, 0);
        continue;
      }

      // NAL type 6 = SEI, payload type 5 = user data unregistered
      if ((this.view.getUint8(cursor) & 0x1F) === 6 && this.view.getUint8(cursor + 1) === 5) {
        const sei = this.decodeSei(new Uint8Array(this.buffer.slice(cursor, cursor + nalSize)), SeiMetadata);
        if (sei) messages.push(sei);
      }
      cursor += nalSize;
    }
    return messages;
  }

  /** Decode SEI NAL unit to protobuf message */
  decodeSei(nal, SeiMetadata) {
    if (!SeiMetadata || nal.length < 4) return null;

    let i = 3;
    while (i < nal.length && nal[i] === 0x42) i++;
    if (i <= 3 || i + 1 >= nal.length || nal[i] !== 0x69) return null;

    try {
      return SeiMetadata.decode(this.stripEmulationBytes(nal.subarray(i + 1, nal.length - 1)));
    } catch {
      return null;
    }
  }

  /** Strip H.264 emulation prevention bytes */
  stripEmulationBytes(data) {
    const out = [];
    let zeros = 0;
    for (const byte of data) {
      if (zeros >= 2 && byte === 0x03) { zeros = 0; continue; }
      out.push(byte);
      zeros = byte === 0 ? zeros + 1 : 0;
    }
    return Uint8Array.from(out);
  }

  // -------------------------------------------------------------
  // Utilities
  // -------------------------------------------------------------

  readAscii(start, len) {
    let s = '';
    for (let i = 0; i < len; i++) s += String.fromCharCode(this.view.getUint8(start + i));
    return s;
  }

  hex(n) { return n.toString(16).padStart(2, '0'); }

  /** Concatenate Uint8Arrays */
  static concat(...arrays) {
    const result = new Uint8Array(arrays.reduce((sum, a) => sum + a.length, 0));
    let offset = 0;
    for (const arr of arrays) { result.set(arr, offset); offset += arr.length; }
    return result;
  }
}

// -------------------------------------------------------------
// Tesla Dashcam Helpers
// Protobuf initialization, field formatting, and CSV export utilities.
// -------------------------------------------------------------

const DashcamHelpers = (function () {
  let SeiMetadata = null;
  let enumFields = null;

  // Gear state enum values
  const GearState = {
    0: 'GEAR_PARK',
    1: 'GEAR_DRIVE',
    2: 'GEAR_REVERSE',
    3: 'GEAR_NEUTRAL'
  };

  // Autopilot state enum values
  const AutopilotState = {
    0: 'NONE',
    1: 'SELF_DRIVING',
    2: 'AUTOSTEER',
    3: 'TACC'
  };

  // Field definitions for SEI metadata
  const fieldDefinitions = [
    { propName: 'version', label: 'Version', labelZh: '版本' },
    { propName: 'gearState', label: 'Gear State', labelZh: '档位状态', enumMap: GearState },
    { propName: 'frameSeqNo', label: 'Frame Seq No', labelZh: '帧序号' },
    { propName: 'vehicleSpeedMps', label: 'Vehicle Speed (m/s)', labelZh: '车速 (m/s)', format: 'float' },
    { propName: 'acceleratorPedalPosition', label: 'Accelerator Pedal Position', labelZh: '油门踏板位置', format: 'float' },
    { propName: 'steeringWheelAngle', label: 'Steering Wheel Angle', labelZh: '方向盘角度', format: 'float' },
    { propName: 'blinkerOnLeft', label: 'Blinker On Left', labelZh: '左转向灯', format: 'boolean' },
    { propName: 'blinkerOnRight', label: 'Blinker On Right', labelZh: '右转向灯', format: 'boolean' },
    { propName: 'brakeApplied', label: 'Brake Applied', labelZh: '刹车', format: 'boolean' },
    { propName: 'autopilotState', label: 'Autopilot State', labelZh: '自动驾驶状态', enumMap: AutopilotState },
    { propName: 'latitudeDeg', label: 'Latitude (°)', labelZh: '纬度 (°)', format: 'coordinate' },
    { propName: 'longitudeDeg', label: 'Longitude (°)', labelZh: '经度 (°)', format: 'coordinate' },
    { propName: 'headingDeg', label: 'Heading (°)', labelZh: '航向 (°)', format: 'float' },
    { propName: 'linearAccelerationMps2X', label: 'Linear Acceleration X (m/s²)', labelZh: '线性加速度 X (m/s²)', format: 'float' },
    { propName: 'linearAccelerationMps2Y', label: 'Linear Acceleration Y (m/s²)', labelZh: '线性加速度 Y (m/s²)', format: 'float' },
    { propName: 'linearAccelerationMps2Z', label: 'Linear Acceleration Z (m/s²)', labelZh: '线性加速度 Z (m/s²)', format: 'float' }
  ];

  /** Initialize protobuf by loading the .proto file */
  async function initProtobuf(protoPath = 'dashcam.proto') {
    if (SeiMetadata) return { SeiMetadata, enumFields };

    try {
      const response = await fetch(protoPath);
      const root = protobuf.parse(await response.text()).root;
      SeiMetadata = root.lookupType('SeiMetadata');
      enumFields = {
        gearState: SeiMetadata.lookup('Gear'),
        autopilotState: SeiMetadata.lookup('AutopilotState'),
        gear_state: SeiMetadata.lookup('Gear'),
        autopilot_state: SeiMetadata.lookup('AutopilotState')
      };
      return { SeiMetadata, enumFields };
    } catch (err) {
      console.error('Failed to initialize protobuf:', err);
      throw err;
    }
  }

  function getProtobuf() {
    return SeiMetadata ? { SeiMetadata, enumFields } : null;
  }

  function getFieldDefinitions() {
    return fieldDefinitions;
  }

  /** Format a value for display */
  function formatValue(value, fieldDef) {
    if (value === undefined || value === null) return '—';

    if (fieldDef.enumMap) {
      return fieldDef.enumMap[value] || value;
    }

    if (fieldDef.format === 'boolean') {
      return value ? 'true' : 'false';
    }

    if (fieldDef.format === 'float') {
      if (typeof value === 'number') {
        return Number.isInteger(value) ? value.toString() : value.toFixed(2);
      }
    }

    if (fieldDef.format === 'coordinate') {
      if (typeof value === 'number') {
        return value === 0 ? '0' : value.toFixed(6);
      }
    }

    if (typeof value === 'object' && value?.toString) {
      return value.toString();
    }

    return String(value);
  }

  /** Build CSV from SEI messages */
  function buildCsv(messages) {
    const headers = fieldDefinitions.map(f => f.propName);
    const lines = [headers.join(',')];

    for (const msg of messages) {
      const values = fieldDefinitions.map(({ propName, enumMap }) => {
        let val = msg[propName];
        if (val === undefined || val === null) return '';
        if (enumMap) val = enumMap[val] ?? val;
        const text = String(val);
        return /[",\n]/.test(text) ? '"' + text.replace(/"/g, '""') + '"' : text;
      });
      lines.push(values.join(','));
    }
    return lines.join('\n');
  }

  /** Download a blob as a file */
  function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = Object.assign(document.createElement('a'), { href: url, download: filename });
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  return {
    initProtobuf,
    getProtobuf,
    getFieldDefinitions,
    formatValue,
    buildCsv,
    downloadBlob,
    GearState,
    AutopilotState
  };
})();

// Export for use in other modules
if (typeof window !== 'undefined') {
  window.DashcamMP4 = DashcamMP4;
  window.DashcamHelpers = DashcamHelpers;
}

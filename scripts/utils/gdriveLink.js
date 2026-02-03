/**
 * Converts various Google Drive URLs to the direct image format:
 * https://drive.google.com/uc?id=FILE_ID
 *
 * Supported input formats:
 * - https://drive.google.com/file/d/FILE_ID/view?...
 * - https://drive.google.com/open?id=FILE_ID
 * - https://drive.google.com/uc?id=FILE_ID
 * - https://drive.google.com/thumbnail?id=FILE_ID&sz=...
 */

const DRIVE_FILE_D_REGEX = /drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/
const DRIVE_OPEN_ID_REGEX = /drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/
const DRIVE_UC_ID_REGEX = /drive\.google\.com\/uc\?id=([a-zA-Z0-9_-]+)/
const DRIVE_THUMBNAIL_ID_REGEX = /drive\.google\.com\/thumbnail\?id=([a-zA-Z0-9_-]+)/

const DIRECT_PREFIX = 'https://drive.google.com/uc?id='

/**
 * @param {string} url - Any Google Drive URL or plain string
 * @returns {string} - https://drive.google.com/uc?id=FILE_ID or original string if no match
 */
function toDirectDriveUrl(url) {
  if (!url || typeof url !== 'string') return url
  const trimmed = url.trim()
  let fileId = null

  const m1 = trimmed.match(DRIVE_FILE_D_REGEX)
  if (m1) fileId = m1[1]
  if (!fileId) {
    const m2 = trimmed.match(DRIVE_OPEN_ID_REGEX)
    if (m2) fileId = m2[1]
  }
  if (!fileId) {
    const m3 = trimmed.match(DRIVE_UC_ID_REGEX)
    if (m3) fileId = m3[1]
  }
  if (!fileId) {
    const m4 = trimmed.match(DRIVE_THUMBNAIL_ID_REGEX)
    if (m4) fileId = m4[1]
  }

  if (fileId) return `${DIRECT_PREFIX}${fileId}`
  return trimmed
}

/**
 * Recursively convert any GDrive links in an object or array.
 * @param {object|array|string} obj
 * @returns {object|array|string}
 */
function convertDriveLinksInObject(obj) {
  if (obj === null || obj === undefined) return obj
  if (typeof obj === 'string') return toDirectDriveUrl(obj)
  if (Array.isArray(obj)) return obj.map((item) => convertDriveLinksInObject(item))
  if (typeof obj === 'object') {
    const out = {}
    for (const [k, v] of Object.entries(obj)) {
      out[k] = convertDriveLinksInObject(v)
    }
    return out
  }
  return obj
}

export { toDirectDriveUrl, convertDriveLinksInObject }

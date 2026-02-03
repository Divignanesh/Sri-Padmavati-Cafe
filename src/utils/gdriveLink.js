/**
 * Converts Google Drive URLs to https://drive.google.com/uc?id=FILE_ID
 */
const DRIVE_FILE_D_REGEX = /drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/
const DRIVE_OPEN_ID_REGEX = /drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/
const DRIVE_UC_ID_REGEX = /drive\.google\.com\/uc\?id=([a-zA-Z0-9_-]+)/
const DRIVE_THUMBNAIL_ID_REGEX = /drive\.google\.com\/thumbnail\?id=([a-zA-Z0-9_-]+)/
const DIRECT_PREFIX = 'https://drive.google.com/uc?id='

function toDirectDriveUrl(url) {
  if (!url || typeof url !== 'string') return url
  const trimmed = url.trim()
  let fileId =
    trimmed.match(DRIVE_FILE_D_REGEX)?.[1] ||
    trimmed.match(DRIVE_OPEN_ID_REGEX)?.[1] ||
    trimmed.match(DRIVE_UC_ID_REGEX)?.[1] ||
    trimmed.match(DRIVE_THUMBNAIL_ID_REGEX)?.[1]
  if (fileId) return `${DIRECT_PREFIX}${fileId}`
  return trimmed
}

export function convertDriveLinksInObject(obj) {
  if (obj === null || obj === undefined) return obj
  if (typeof obj === 'string') return toDirectDriveUrl(obj)
  if (Array.isArray(obj)) return obj.map(convertDriveLinksInObject)
  if (typeof obj === 'object') {
    const out = {}
    for (const [k, v] of Object.entries(obj)) {
      out[k] = convertDriveLinksInObject(v)
    }
    return out
  }
  return obj
}

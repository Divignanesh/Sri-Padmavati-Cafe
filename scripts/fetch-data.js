/**
 * Fetches data from Google Sheets (public CSV export), converts GDrive links,
 * and writes public/data.json for the app to consume.
 * Sheet must be "Anyone with the link can view".
 */

import https from 'https'
import http from 'http'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { csvToObjects } from './parseCsv.js'
import { convertDriveLinksInObject } from './utils/gdriveLink.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const PUBLIC_DIR = path.join(ROOT, 'public')
const DATA_JSON = path.join(PUBLIC_DIR, 'data.json')

const SPREADSHEET_ID = '1caX4ZO29BRmy_XUh-Vm7RQgGJ-6zF3_wQz9nrlGAw_U'
const GIDS = {
  transformation: '1819444701',
  thousandsGained: '151674308',
  testimonials: '409592819',
  faq: '308847142',
  global: '0',
}

function fetchUrl(url, redirectCount = 0) {
  const maxRedirects = 5
  return new Promise((resolve, reject) => {
    const u = new URL(url)
    const opts = {
      hostname: u.hostname,
      path: u.pathname + u.search,
      method: 'GET',
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; fetch-data/1.0)' },
    }
    const protocol = u.protocol === 'https:' ? https : http
    const req = protocol.get(opts, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location && redirectCount < maxRedirects) {
        const next = res.headers.location.startsWith('http') ? res.headers.location : new URL(res.headers.location, url).href
        return resolve(fetchUrl(next, redirectCount + 1))
      }
      if (res.statusCode !== 200) {
        reject(new Error(`Fetch failed: ${res.statusCode}`))
        return
      }
      const chunks = []
      res.on('data', (chunk) => chunks.push(chunk))
      res.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')))
    })
    req.on('error', reject)
  })
}

function fetchCsv(gid) {
  const url = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=csv&gid=${gid}`
  return fetchUrl(url)
}

function mapTransformation(rows) {
  return rows
    .filter((r) => r.label || r.beforeImage || r.afterImage)
    .map((r) => ({
      label: r.label || '',
      before: r.beforeImage || r.before || '',
      after: r.afterImage || r.after || '',
      stats: [
        { value: r.stat1Value || '', label: r.stat1Label || '' },
        { value: r.stat2Value || '', label: r.stat2Label || '' },
        { value: r.stat3Value || '', label: r.stat3Label || '' },
      ].filter((s) => s.value || s.label),
    }))
}

function mapThousandsGained(rows) {
  return rows
    .filter((r) => r.image || r.renovation || r.location)
    .map((r) => ({
      image: r.image || '',
      renovation: r.renovation || '',
      profit: r.profit || '',
      location: r.location || '',
    }))
}

function mapTestimonials(rows) {
  return rows
    .filter((r) => r.quote || r.name)
    .map((r, i) => ({
      id: i + 1,
      quote: r.quote || '',
      name: r.name || '',
      location: r.location || '',
      image: r.image || '',
    }))
}

function mapFaq(rows) {
  return rows
    .filter((r) => r.question || r.answer)
    .map((r) => ({
      q: r.question || r.q || '',
      a: r.answer || r.a || '',
    }))
}

function mapGlobal(rows) {
  const obj = {}
  rows.forEach((r) => {
    const key = (r.key || '').trim()
    if (key) obj[key] = (r.value || '').trim()
  })
  return obj
}

async function main() {
  const data = {}
  const sheets = [
    { key: 'transformation', gid: GIDS.transformation, map: mapTransformation },
    { key: 'thousandsGained', gid: GIDS.thousandsGained, map: mapThousandsGained },
    { key: 'testimonials', gid: GIDS.testimonials, map: mapTestimonials },
    { key: 'faq', gid: GIDS.faq, map: mapFaq },
    { key: 'global', gid: GIDS.global, map: mapGlobal },
  ]

  for (const { key, gid, map } of sheets) {
    try {
      const csv = await fetchCsv(gid)
      const rows = csvToObjects(csv)
      data[key] = map(rows)
    } catch (err) {
      console.warn(`Sheet ${key} (gid=${gid}):`, err.message)
      if (key === 'global') data[key] = {}
      else data[key] = []
    }
  }

  const withDriveLinks = convertDriveLinksInObject(data)
  if (!fs.existsSync(PUBLIC_DIR)) fs.mkdirSync(PUBLIC_DIR, { recursive: true })
  fs.writeFileSync(DATA_JSON, JSON.stringify(withDriveLinks, null, 2), 'utf8')
  console.log('Wrote', DATA_JSON)
  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

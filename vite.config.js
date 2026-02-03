import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { spawnSync } from 'child_process'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REFRESH_SECRET = 'fix2sell_refresh'

function refreshApiPlugin() {
  return {
    name: 'refresh-api',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url !== '/api/refresh' || req.method !== 'POST') {
          return next()
        }
        const secret = req.headers['x-refresh-secret'] || req.headers.authorization?.replace(/^Bearer\s+/i, '')
        if (secret !== REFRESH_SECRET) {
          res.statusCode = 404
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ ok: false }))
          return
        }
        const root = path.resolve(__dirname)
        const result = spawnSync('node', ['scripts/fetch-data.js'], {
          cwd: root,
          stdio: 'pipe',
          encoding: 'utf8',
        })
        res.setHeader('Content-Type', 'application/json')
        if (result.status !== 0) {
          res.statusCode = 502
          res.end(JSON.stringify({ ok: false, error: 'Fetch script failed', stderr: result.stderr }))
          return
        }
        res.statusCode = 200
        res.end(JSON.stringify({ ok: true, message: 'Data refreshed' }))
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), refreshApiPlugin()],
  server: {
    host: true,
    allowedHosts: ['e64cc8c8bde5.ngrok-free.app'],
  },
})

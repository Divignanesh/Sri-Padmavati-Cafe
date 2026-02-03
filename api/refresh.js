/**
 * /api/refresh – No UI. Call with secret header to trigger a new deployment
 * (Deploy Hook), which runs the build and refreshes data from Google Sheets.
 * Only the secret header is checked (no host restriction).
 *
 * Secret: fix2sell_refresh (header: x-refresh-secret or Authorization: Bearer)
 * Env: VERCEL_DEPLOY_HOOK_URL
 */

const REFRESH_SECRET = 'fix2sell_refresh'

export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json')

  const deployHookUrl = process.env.VERCEL_DEPLOY_HOOK_URL

  if (!deployHookUrl) {
    res.status(500).json({ ok: false, error: 'Refresh not configured' })
    return
  }

  const providedSecret = req.headers['x-refresh-secret'] || req.headers.authorization?.replace(/^Bearer\s+/i, '')
  if (providedSecret !== REFRESH_SECRET) {
    res.status(404).json({ ok: false })
    return
  }

  fetch(deployHookUrl, { method: 'POST' })
    .then((hookRes) => {
      if (!hookRes.ok) {
        res.status(502).json({ ok: false, error: 'Deploy hook failed', status: hookRes.status })
        return
      }
      res.status(200).json({ ok: true, message: 'Deploy triggered' })
    })
    .catch((err) => {
      res.status(502).json({ ok: false, error: 'Deploy hook error', message: err.message })
    })
}

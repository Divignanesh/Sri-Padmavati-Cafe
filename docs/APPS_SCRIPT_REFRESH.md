# Google Apps Script – Refresh Website

Use the custom menu in your Google Sheet to trigger a website data refresh (from the sheet menu, no need to open the site).

---

## 1. Add the script in Google Sheets

1. Open your Google Sheet (the one with tabs: transformation, thousandsGained, testimonials, faq, global).
2. **Extensions → Apps Script**.
3. Delete any placeholder code and paste your script (the one with `onOpen`, `refreshWebsite`, `showAbout`).
4. **File → Save** (name the project e.g. "Fix2Sell CMS").
5. Run **onOpen** once: select `onOpen` in the dropdown, click **Run**. Authorize if asked. This adds the **Fix2Sell** menu next to Help.
6. Close the Apps Script tab; the menu stays in the sheet.

---

## 2. Set the refresh URL in the script

In `refreshWebsite()`, set `url` to the correct endpoint:

### Option A – Dev (ngrok / localhost tunnel)

When you run the app with `npm run dev` and expose it with ngrok:

```javascript
const url = "https://e64cc8c8bde5.ngrok-free.app/api/refresh";

const options = {
  method: "post",
  headers: {
    "x-refresh-secret": "fix2sell_refresh",
    "ngrok-skip-browser-warning": "true"
  },
  muteHttpExceptions: true
};
```

- Use your **current ngrok URL** (it changes if you restart ngrok).
- **x-refresh-secret** must be `fix2sell_refresh`.
- **ngrok-skip-browser-warning** is required so ngrok doesn’t block the request.

What happens: POST /api/refresh is handled by the Vite dev server, which runs `node scripts/fetch-data.js` and updates `public/data.json`. Reload the site to see new data.

### Option B – Production (Vercel)

When the site is deployed on Vercel:

```javascript
const url = "https://YOUR_VERCEL_APP.vercel.app/api/refresh";

const options = {
  method: "post",
  headers: {
    "x-refresh-secret": "fix2sell_refresh"
  },
  muteHttpExceptions: true
};
```

- Replace `YOUR_VERCEL_APP` with your real Vercel project URL.
- In Vercel, set **VERCEL_DEPLOY_HOOK_URL** (Deploy Hook) in project env. The serverless function will call that hook and trigger a new build, which runs the fetch script and updates data.

You can keep both versions and switch the `url` (and optional `ngrok-skip-browser-warning`) depending on whether you’re testing with ngrok or using production.

---

## 3. Use the menu

1. In the sheet, click **Fix2Sell → Refresh Website Images**.
2. The script sends POST /api/refresh with the secret.
3. You’ll get an alert: success (200) or failure (status + response).

---

## 4. Wrong or missing secret

If the secret is wrong or missing, the server responds with **404** (not 401), so the script will show “Failed” with status 404. No hint about the secret is returned.

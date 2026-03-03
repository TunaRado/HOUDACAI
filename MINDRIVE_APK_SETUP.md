## Mindrive APK download setup (Cloudflare + R2)

This is how the Mindrive APK download flow works and how to update it without breaking anything (or re‑living the pain).

### 1. What the pieces are

- **Frontend page**: `mindrive.html`
  - Shows the **Download APK** button
  - Opens a password modal
  - Sends a POST to `/api/apk-download` with `{ password: "..." }`
  - If the server says OK, it downloads the APK as `Mindrive.apk`

- **Cloudflare Pages Function**: `functions/api/apk-download.js`
  - Path: `/api/apk-download`
  - Checks the password against `env.APK_PASSWORD`
  - If it matches, streams the APK from R2 using `env.APK_BUCKET`

- **Cloudflare R2 bucket**: `mindrive-apk`
  - Contains the file `app-prod-release.apk`
  - Is bound to the project as `APK_BUCKET`

- **Environment variable / secret**: `APK_PASSWORD`
  - Set in Cloudflare Pages **Settings → Variables and Secrets**
  - Used only server‑side, never stored in the repo

### 2. How to change the APK (new build)

1. Build a new Android APK.
2. Go to **Cloudflare dashboard → R2 object storage → mindrive-apk**.
3. Click **Upload** and upload your new APK as:
   - **File name:** `app-prod-release.apk`
   - (overwrite the existing one)
4. That’s it. No code change or redeploy needed — the next download uses the new APK.

### 3. How to change the password

1. Cloudflare dashboard → **Workers & Pages → houdacai → Settings**.
2. Make sure **Environment = Production** at the top.
3. Under **Variables and Secrets**:
   - Edit `APK_PASSWORD` (or add it if it doesn’t exist).
   - **Name:** `APK_PASSWORD`
   - **Value:** your new password (case‑sensitive).
4. Click **Save**.
5. Go to the **Deployments** tab and **Retry deployment** (or wait for the next push).
6. Use that exact value on the Mindrive page.

### 4. How the R2 binding is wired

In the Cloudflare dashboard for `houdacai`:

1. **Settings → Bindings**.
2. There should be an R2 binding:
   - **Type:** R2 bucket
   - **Variable name:** `APK_BUCKET`
   - **Bucket:** `mindrive-apk`

This is what makes `env.APK_BUCKET.get('app-prod-release.apk')` work in `apk-download.js`.

### 5. How the function works (quick brain reminder)

File: `functions/api/apk-download.js`

- Reads the POST body and pulls out `password`.
- Compares it to `env.APK_PASSWORD`.
- If it doesn’t match → returns `401` JSON `{ error: "Unauthorized" }`.
- If it matches:
  - Calls `env.APK_BUCKET.get('app-prod-release.apk')`.
  - Returns the object as a binary response with:
    - `Content-Type: application/vnd.android.package-archive`
    - `Content-Disposition: attachment; filename="Mindrive.apk"`

### 6. Frontend flow (Mindrive page)

On `mindrive.html`:

- The **Download APK** button opens the modal (`apkModal`).
- On submit, `checkApkPassword`:
  - Sends a POST to `/api/apk-download` with `{ password: <what user typed> }`.
  - If the response is OK (status 200), it:
    - Turns the response into a `Blob`
    - Creates a temporary `<a download="Mindrive.apk">` link
    - Triggers click → browser downloads `Mindrive.apk`
  - If response is not OK, it shows **“Incorrect password.”**

### 7. What *not* to change

- Don’t rename the R2 object unless you also update the key in `apk-download.js`:
  - `env.APK_BUCKET.get('app-prod-release.apk')`
- Don’t change the binding name `APK_BUCKET` unless you also update the code.
- Don’t hard‑code passwords in the repo. Always set them via `APK_PASSWORD` in Cloudflare.

If something breaks:

1. Check **Workers & Pages → houdacai → Deployments** for errors.
2. Make sure `APK_PASSWORD` and `APK_BUCKET` exist under **Settings → Variables and Secrets / Bindings**.
3. Confirm the R2 bucket `mindrive-apk` still has `app-prod-release.apk`.


# Deploying Houdacai Website to Cloudflare Pages

## Method 1: Cloudflare Pages (Recommended)

### Step 1: Prepare Your Files
Your website files are ready in this directory:
- `index.html` (main page)
- `HOUDACAI.svg` (logo)

### Step 2: Create Cloudflare Account
1. Go to https://cloudflare.com
2. Sign up for a free account (or log in if you have one)

### Step 3: Upload to Cloudflare Pages
1. Go to **Cloudflare Dashboard**
2. Click **Pages** in the left sidebar
3. Click **Create a project**
4. Choose **Upload assets** (Direct Upload)
5. **Drag and drop** or select your website files:
   - `index.html`
   - `HOUDACAI.svg`
6. Set project name: `houdacai-website`
7. Click **Deploy site**

### Step 4: Configure Custom Domain
1. After deployment, go to **Custom domains** tab
2. Click **Set up a custom domain**
3. Enter: `houdacai.com`
4. Follow Cloudflare's DNS instructions

### Step 5: DNS Setup
If you bought your domain elsewhere, update your DNS to point to Cloudflare:
- **Type**: CNAME
- **Name**: www
- **Value**: your-site.pages.dev (provided by Cloudflare)
- **Type**: A record
- **Name**: @
- **Value**: (Cloudflare will provide IP addresses)

## Alternative: GitHub + Cloudflare Pages

### Option A: GitHub Repository
1. Create a GitHub account (if you don't have one)
2. Create a new repository called `houdacai-website`
3. Upload your files to the repository
4. Connect Cloudflare Pages to your GitHub repo

## Expected Results
- Your website will be live at: `your-project-name.pages.dev`
- Once domain is configured: `houdacai.com`
- Free SSL certificate included
- Global CDN for fast loading worldwide

## Benefits of Cloudflare Pages
- ✅ Free hosting
- ✅ Automatic SSL/HTTPS
- ✅ Global CDN (fast worldwide)
- ✅ Custom domains
- ✅ Automatic deployments
- ✅ 99.99% uptime

## Need Help?
The deployment process typically takes 5-10 minutes. If you need help with any step, Cloudflare has excellent documentation and support.
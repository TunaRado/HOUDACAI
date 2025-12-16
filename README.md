# Italy 2026 - Trip Planning Website

A comprehensive trip planning website featuring 5 different 2-week Italy and European itineraries.

## 🌍 The Five Adventures

1. **🌊 Coastal Paradise** - Rome → Florence → Naples → Amalfi → Rome ($6,000-7,500)
2. **🎭 Classic Italy** - Venice → Milan → Florence → Rome ($6,800-8,200)
3. **⛰️ Alpine to Ancient** - Switzerland (Zurich/Lucerne) → Milan → Florence → Rome ($7,200-8,800)
4. **💎 Hidden Gems** - Slovenia (Ljubljana/Bled) → Venice → Florence → Rome ($6,200-7,800) *Best Value!*
5. **🍷 Central Italy Intensive** - Rome → Tuscany → Umbria → Rome ($6,500-8,000)

## 📁 Project Structure

### Main Pages
- `index.html` - Adventure selection landing page
- `coastal-paradise.html` - Southern Italy coastal route
- `classic-italy.html` - North-to-south Italy classic route
- `alpine-ancient.html` - Switzerland to Italy route
- `hidden-gems.html` - Slovenia to Italy route  
- `central-italy.html` - Deep dive into Tuscany & Umbria

### City/Region Guides
- `rome.html` - Rome city guide
- `florence.html` - Florence city guide
- `venice.html` - Venice city guide
- `milan.html` - Milan city guide
- `naples.html` - Naples city guide
- `amalfi.html` - Amalfi Coast guide

### Support Pages
- `flights-outbound.html` - Flight options
- `flights-return.html` - Return flight details
- `trains.html` - Train connections
- `day01.html` through `day16.html` - Old day-by-day files (can be archived/removed)

### Planning Documents
- `TRIP-REQUIREMENTS.md` - Complete requirements and decision criteria
- `.txt files` - Original planning notes from different itinerary options

### Styling
- `styles.css` - Complete CSS with color schemes for all destinations

## 🚀 Deployment to Cloudflare Pages

### Step 1: Create GitHub Repository (if not done)
```bash
# If you want to use GitHub (recommended for Cloudflare Pages)
# Go to github.com and create a new repository called "italy2026"
# Then run:
git remote add origin https://github.com/YOUR-USERNAME/italy2026.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Cloudflare Pages
1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Go to **Workers & Pages** → **Create Application** → **Pages** → **Connect to Git**
3. Authorize Cloudflare to access your GitHub account
4. Select the `italy2026` repository
5. Configure build settings:
   - **Project name**: `italy2026` (or whatever you want)
   - **Production branch**: `main`
   - **Build command**: Leave blank (static HTML)
   - **Build output directory**: `/` (root directory)
6. Click **Save and Deploy**

Your site will be live at: `https://italy2026.pages.dev` (or your custom domain)

### Step 3: Automatic Deployments
Every time you push to the `main` branch, Cloudflare Pages will automatically rebuild and deploy your site!

```bash
# Make changes, then:
git add .
git commit -m "Your change description"
git push origin main
```

## 🎨 Color Scheme

Each destination has its own color:
- **Venice**: Blue `#4A90E2`
- **Milan**: Red `#E74C3C`
- **Florence**: Orange `#F39C12`
- **Rome**: Purple `#9B59B6`
- **Naples**: Teal `#1abc9c`
- **Amalfi**: Blue `#3498db`
- **Switzerland**: Dark Red `#c0392b`
- **Slovenia**: Green `#27ae60`
- **Tuscany**: Gold `#d68910`
- **Umbria**: Teal `#16a085`

## 📝 To-Do (Optional Enhancements)

### Still To Create (if desired):
- [ ] `switzerland.html` - Detailed Switzerland city guide (Zurich/Lucerne)
- [ ] `slovenia.html` - Detailed Slovenia guide (Ljubljana/Bled/Postojna)
- [ ] `tuscany-umbria.html` - Deep dive into hill towns and wine country

### Future Enhancements:
- [ ] Add image gallery for each destination
- [ ] Create interactive budget calculator
- [ ] Add packing list generator
- [ ] Include restaurant reservation links
- [ ] Add Google Analytics to track which adventures are most popular
- [ ] Create printable PDF versions of each itinerary

## 🛠️ Quick Updates

### To change dates/prices:
Edit the specific itinerary HTML file (e.g., `classic-italy.html`) and update the budget tables.

### To add a new destination:
1. Create new HTML file (e.g., `newcity.html`)
2. Add color variable to `styles.css` `:root` section
3. Add `.newcity-bg` class in styles.css
4. Link from relevant itinerary pages

### To modify the adventure selection page:
Edit `index.html` - the main landing page with all 5 options.

## 📱 Mobile Responsive
All pages are fully responsive and work great on phones, tablets, and desktop!

## 🌐 Browser Compatibility
Works on all modern browsers (Chrome, Firefox, Safari, Edge).

## 📄 License
Personal project - do whatever you want with it!

---

**Built with**: HTML, CSS, and lots of Italy research ❤️  
**Last Updated**: December 16, 2025

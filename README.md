# Vishok Shukla — Portfolio

A production-grade React portfolio built with Vite + CSS Modules.

## Tech Stack
- React 18
- Vite 5
- CSS Modules (zero external UI libraries)
- Google Fonts (Instrument Serif + Geist)

---

## Local Development

### Prerequisites
- Node.js 18+ (https://nodejs.org)
- npm 9+ (comes with Node)

### Steps

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (live reload)
npm run dev
# Opens at http://localhost:5173

# 3. Build for production
npm run build
# Output goes to /dist folder

# 4. Preview the production build locally
npm run preview
```

---

## Customisation

All your resume content lives in **one file only**: `src/data.js`

Edit that file to update:
- Your name, title, summary, contact links
- Work experience entries and bullet points
- Skills and skill groups
- Education details

No need to touch any component files.

---

## Free Hosting Options

### Option 1: Vercel (Recommended — fastest, easiest)

1. Push your project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   # Create a new repo on github.com, then:
   git remote add origin https://github.com/YOUR_USERNAME/vishok-portfolio.git
   git push -u origin main
   ```

2. Go to https://vercel.com and sign up with GitHub

3. Click **"Add New Project"** → Import your repo

4. Leave all settings as default (Vercel auto-detects Vite)

5. Click **Deploy** — your site is live in ~30 seconds

6. You get a free URL like: `vishok-portfolio.vercel.app`

7. **Custom domain** (optional): Add your own domain free in Vercel dashboard → Settings → Domains

---

### Option 2: Netlify

1. Push to GitHub (same steps as above)

2. Go to https://netlify.com → Sign up with GitHub

3. Click **"Add new site"** → Import from Git → Select your repo

4. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

5. Click **Deploy site**

6. Free URL: `vishok-portfolio.netlify.app`

---

### Option 3: GitHub Pages (no external service)

1. Install the gh-pages package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. Add to `vite.config.js`:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/vishok-portfolio/', // your repo name
   })
   ```

4. Run:
   ```bash
   npm run deploy
   ```

5. Go to your GitHub repo → Settings → Pages → Source: `gh-pages` branch

6. Live at: `https://YOUR_USERNAME.github.io/vishok-portfolio/`

---

## Project Structure

```
vishok-portfolio/
├── index.html
├── vite.config.js
├── package.json
├── src/
│   ├── main.jsx          ← React entry point
│   ├── App.jsx           ← Root component
│   ├── index.css         ← Global styles + design tokens
│   ├── data.js           ← ALL your resume content (edit this)
│   ├── hooks/
│   │   └── useReveal.js  ← Scroll animation hook
│   └── components/
│       ├── Navbar.jsx / .module.css
│       ├── Hero.jsx / .module.css
│       ├── Stats.jsx / .module.css
│       ├── Experience.jsx / .module.css
│       ├── Skills.jsx / .module.css
│       ├── Education.jsx / .module.css
│       ├── Contact.jsx / .module.css
│       └── Footer.jsx / .module.css
```

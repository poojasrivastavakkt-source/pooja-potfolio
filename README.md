# Pooja Srivastava – Portfolio

A static single-page portfolio built with **HTML5 + CSS3 + Vanilla JavaScript**. No framework, no build step, no npm.

```
pooja-portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── profile-photo.jpg
    └── Pooja-Srivastava-Resume.pdf
```

## 1. Run locally
- Simple: double-click `index.html`.
- Better: open the folder in VS Code, install the **Live Server** extension, right-click `index.html` → *Open with Live Server*.

## 2. Upload to GitHub
1. Sign in at github.com → **New repository** (e.g. `pooja-portfolio`), keep it Public, click **Create repository**.
2. Click **uploading an existing file**.
3. Drag in `index.html`, `style.css`, `script.js`, `README.md` **and the whole `assets` folder** (check that both asset files appear in the list).
4. Click **Commit changes**.

## 3. Deploy on Vercel
1. Sign in at vercel.com with GitHub.
2. **Add New… → Project** → select your `pooja-portfolio` repository → **Import**.
3. Settings: Framework Preset **Other**; Build Command, Output Directory and Install Command stay **empty**. Root Directory stays `./`.
4. Click **Deploy**, then open the link Vercel gives you and check every section.

## 4. Redeploy after changes
Edit the file on GitHub (pencil icon) or upload a new version → **Commit changes**. Vercel redeploys automatically within a minute.

## 5. Update content
| What | Where |
|---|---|
| Profile photo | Replace `assets/profile-photo.jpg` (keep the name, square image works best) |
| Resume PDF | Replace `assets/Pooja-Srivastava-Resume.pdf` (keep the name) |
| About Me | `index.html` → `<section id="about">` |
| Experience | `index.html` → `<section id="experience">` (one `<article class="card">` per job) |
| Skills | `index.html` → `<section id="skills">` (one `<li>` per skill) |
| Education / certification | `index.html` → `<section id="education">` |
| Career highlights | `index.html` → `<section id="achievements">` |
| Contact details | `index.html` → `<section id="contact">`; form recipient is `TO` at the top of the form code in `script.js` |
| Colours | `style.css` → variables at the top (`:root` = dark, `:root[data-theme="light"]` = light) |

## Notes
- The contact form has no backend. It opens a Gmail compose window with your details filled in, or your default mail app if the popup is blocked.
- The site opens in dark mode by default; a visitor's theme choice is kept for that browsing session only.

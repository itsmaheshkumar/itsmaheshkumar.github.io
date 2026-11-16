# Mahesh Kumar A — Data & Business Analytics Portfolio

A responsive portfolio website, personalized using a November 2026 resume. It includes a reserved profile-photo frame, professional summary, skills, practical experience, education, certifications, and two detailed project case studies.

## What is included

- `index.html` — portfolio home: About + optional photo, Skills, Projects, Approach, Experience, Education & Certifications, Contact.
- `smartretail-ai.html` — SmartRetail AI case study, with clearly labeled offline model results and synthetic public demo.
- `mcdonalds-financial-analytics.html` — McDonald's Financial Analytics case study, with a transparent description of the illustrative forecasts.
- `styles.css` — responsive dark theme and portrait-photo placeholder styles.
- `script.js` — menu behavior, configurable links, portrait fallback and animations.
- `site-config.js` — name, summary, professional email and LinkedIn, project links, optional resume and optional photo.
- `assets/ADD_PHOTO_HERE.txt` — quick instructions for adding your photograph later.
- `PERSONALIZE_ME.md` — detailed instructions for editing and publishing.
- `.nojekyll` and `favicon.svg` — GitHub Pages helper and tab icon.

## Publish / update on GitHub Pages

1. Extract the ZIP file and open the `portfolio-website` folder.
2. Review `index.html` and `site-config.js` to confirm you're comfortable publishing the professional email/LinkedIn listed on the resume.
3. Open `index.html` locally to preview (or launch a simple local web server in this folder: `py -m http.server 8000` and visit `http://localhost:8000`).
4. Open your **portfolio website GitHub repository**. This is separate from the McDonald's financial analytics repository.
5. Upload **all files and subfolders from inside `portfolio-website/`** into your portfolio repository root. Keep `assets/` and the two project HTML pages.
6. Commit changes to the branch that GitHub Pages deploys (typically `main`). Under **Settings → Pages**, choose `Deploy from a branch`, `main`, `/(root)` if not already configured.
7. Open the public portfolio site, navigate all sections and case studies, and test on mobile.

## Add your portrait later

1. Place a portrait image at `assets/profile-photo.jpg`.
2. In `site-config.js`, change `photo: ""` to `photo: "assets/profile-photo.jpg"`.
3. Commit both changes; the image automatically replaces the placeholder if it loads successfully. An image roughly 4:5 in ratio works well.

## Review external demo links

The older McDonald's Streamlit URL displayed an access/not-found error following redevelopment. Until you replace it, `mcdonaldsDemo: ""` hides the Live Dashboard button to avoid broken links. Paste your **verified, publicly accessible** Streamlit URL into `site-config.js` after finding it under Streamlit Community Cloud → My apps. The GitHub repository and project case study links remain available.

SmartRetail AI demo and repository links were retained from your prior website; verify they are still publicly accessible before publishing.

## Personal information and sources

The home page was populated from the uploaded *Mahesh Kumar A resume*: name, professional summary, city/region, education, certifications, Tata/Forage virtual experience, TLM Creations internship, and skills. Reliance Smart Bazaar retail experience was retained from the prior portfolio and **does not appear in the uploaded resume**. Project-specific details were retained from the prior website and code, not inferred from the new resume.

For privacy, the resume's phone number was intentionally **not posted** on the website, and the actual PDF was not included in the public folder. To offer a public resume download, create a separate phone-free PDF, place it at `assets/resume.pdf`, and change `resume: ""` to `resume: "assets/resume.pdf"` in `site-config.js`. Contact email and LinkedIn **are published** by default and can be hidden by blanking the matching values in `site-config.js`.

No professional headshot was generated or included. The photo area stays reserved until the user adds one.

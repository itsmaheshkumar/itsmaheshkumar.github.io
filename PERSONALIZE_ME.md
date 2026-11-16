# Update your portfolio (resume-based edition)

Your `index.html` now includes the details extracted from the provided **Mahesh Kumar A resume**: full name, Tirupur location, MBA/B.Com education, Tata/Forage virtual experience, TLM Creations internship, skills, certifications, email and LinkedIn. Your previous SmartRetail AI and McDonald's case-study pages are retained. The Reliance Smart Bazaar entry was retained from the earlier site; it is **not** in the uploaded resume.

## Add your portrait when ready

1. Place a photo named `profile-photo.jpg` in the `assets/` folder.
2. Open `site-config.js`. Change `photo: ""` to `photo: "assets/profile-photo.jpg"`.
3. Save and republish. The About page currently shows an elegant reserved photo frame until your image loads. Recommended image ratio 4:5 (e.g., 800×1000).

## Update your McDonald's live demo URL

Your previous Streamlit link showed an access/not-found message. For now the website **hides** the Live Dashboard button so recruiters don't hit a broken link. Open Streamlit Community Cloud → My apps; copy the current working public app URL, then paste it in `site-config.js` as the `mcdonaldsDemo` value. The case study page and GitHub link remain available.

## Details taken from your resume

- **Name:** Mahesh Kumar A
- **Location:** Tirupur, Tamil Nadu
- **Email/LinkedIn:** included in public Contact section
- **Education:** MBA Business Analytics, Anna University Regional Campus, Coimbatore (2025–2027); B.Com Information Technology, RVS College of Arts and Science, Sulur (2022–2025)
- **Virtual experience:** Tata – GenAI Powered Data Analytics Virtual Experience (Forage), June 2026
- **Internship:** Logistics & Distribution Operations Intern, TLM Creations, Tiruppur, one month
- **Certifications:** IBM/Coursera Data Analysis with Python (2026); Udemy Financial Analytics with Excel & Tableau (2025); Udemy Complete MySQL Bootcamp (2025)

## Public-site privacy choices

The resume has a telephone number, but **it is not published** to the public website. The original resume PDF was also **not embedded**, because that would publish your phone number. To add a download later, prepare a public-safe resume, place it in `assets/resume.pdf` and set `resume: "assets/resume.pdf"` in `site-config.js`.

Email and LinkedIn from the resume are public in the site. You can blank either value in `site-config.js` to hide its button.

## Publish / update the site

Open `index.html` locally first. To publish, upload **all contents of the `portfolio-website/` folder** to your existing portfolio GitHub repository's root, retaining the `assets/` folder. Do not upload the ZIP itself. If deployed through GitHub Pages, it should rebuild when `main` changes. Check links in an incognito browser window.

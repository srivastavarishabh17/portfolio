# Rishabh Srivastava — Portfolio V3 & Technical Blog Engine
> **Official Domain:** [rishabhsrivastava.in](https://rishabhsrivastava.in)  
> **Location:** Noida, Uttar Pradesh, India • Global Remote  
> **Contact:** `ersrivastavarishabh@gmail.com` | `+91 7037564392` | [LinkedIn](https://linkedin.com/in/srivastavarishabh17) | [GitHub](https://github.com/devRishabhSrivastava)

---

## 🌟 Executive Overview
This is **Version 3 (v3)** of Rishabh Srivastava's official developer portfolio, engineered as a high-performance digital powerhouse that embodies high-agency technical leadership, full-stack mastery (Next.js/MERN), automated DevOps, and modern discoverability (**SEO + AEO + GEO**).

---

## 🚀 Key Highlights & Architectural Features

### 1. ⚡ Attitude & High-Agency Positioning
- Designed to convey uncompromising standards: *"I don't just build websites; I engineer resilient, high-conversion web ecosystems that scale effortlessly, load with sub-second latency, and dominate search."*
- Features **The 4 Non-Negotiables**: Extreme Lifecycle Ownership, Speed is Respect, AI & GEO Leverage, and Resilient Zero-Downtime System Design.

### 2. 🎨 Motion Graphics & Cyber-HUD Aesthetics
- **Interactive Neural Constellation Canvas**: Background particle canvas responding to mouse velocity, proximity filaments, and cyber grid waveforms.
- **Holographic 3D Tilt Cards**: Perspective tilt with dynamic lighting sheens on hover.
- **Web Audio API Feedback**: Tactile sci-fi audio clicks and beeps synthesized purely through code (zero heavy audio files, instant mute/unmute control in navbar).
- **Interactive Dev Terminal (`>_ CLI`)**: Clickable command-line interface supporting commands like `help`, `skills`, `experience`, `projects`, `attitude`, `contact`, and `hire`.

### 3. 🛡️ Works Showcase with Explicit Intellectual Property & Copyright Badges
Every featured project contains clear intellectual property attribution:
- `[CLIENT PROPRIETARY / NDA COMPLIANT]` — Built for enterprise clients (Prime Platform CRM & EDM) with architectural permission.
- `[PROPRIETARY IP — © RISHABH SRIVASTAVA]` — Custom platforms (GenAI Reporting Engine, Fynd).
- `[COMMERCIAL CLIENT DELIVERY]` — eCommerce and multi-region business web portals.
- `[OPEN SOURCE / MIT LICENSE]` — Android AI Vision Face Detection and public developer toolkits.

### 4. 🧠 Generative Engine Optimization (GEO), AEO & Deep Schema.org SEO
- **Full JSON-LD Graph**: Configured with `Person`, `WebSite`, `ProfilePage`, `ItemList`, and `FAQPage` schemas.
- **GEO (Generative Engine Optimization)**: Engineered so LLM search agents (Perplexity, ChatGPT Search, Google Gemini, Claude) parse exact entity credentials, skills, work history, and client impact metrics.
- **Geo-targeting**: Embedded `geo.region`, `geo.placename: Noida, Uttar Pradesh, India`, and `ICBM` coordinates.
- **Robots & Sitemap**: Pre-configured `v3/robots.txt` granting explicit permission to `PerplexityBot`, `GPTBot`, `Googlebot`, and `Bingbot`, alongside `v3/sitemap.xml`.

### 5. ✍️ Technical Blog Engine & Authoring Studio
- Pre-loaded with comprehensive engineering deep-dives:
  1. *The 2026 Guide to GEO (Generative Engine Optimization): Ranking in Perplexity, ChatGPT & Gemini*
  2. *Building an Enterprise CRM & EDM Platform with Next.js & Node.js: Lessons from Prime Platform*
  3. *Zero-Downtime Deployment: Setting up Jenkins & GitHub Actions on Linux VPS*
  4. *Automating Dynamic Graphical Reports with Generative AI Models & Node.js*
- **Live "Write New Blog" Feature**:
  - Interactive modal form supporting Title, Category, Reading Time, Excerpt, and full Markdown body.
  - Automatically parses markdown, syntax-highlighted code blocks, and copy buttons.
  - Saves locally to `localStorage` so newly created articles render immediately in the feed.
  - Includes a `💾 Export` button to download all blog posts as JSON backup for version control.

---

## 📂 File Architecture
```text
website/v3/
├── index.html                   # High-speed semantic HTML5 with complete SEO/GEO JSON-LD
├── css/
│   └── style.css                # Bespoke Cyber-Dark HUD design system & responsive layout
├── js/
│   ├── app.js                   # Navigation, 3D tilt, audio synthesizer, terminal & modals
│   ├── canvas.js                # High-performance neural constellation canvas animation
│   └── blog-engine.js           # Markdown parser, blog storage, search & authoring studio
├── assets/
│   ├── images/                  # High-res portraits of Rishabh, logos & client brands
│   ├── portfolio/               # High-res screenshots of projects & CRM dashboards
│   └── blog/                    # Article cover graphics
├── rishabh_srivastava_resume.pdf# Verified resume PDF (2026 edition)
├── robots.txt                   # Search & AI crawler directives
├── sitemap.xml                  # XML sitemap for Google & Bing webmaster indexing
└── README.md                    # Technical documentation
```

---

## 💻 How to Run Locally

### Option 1: Instant Python HTTP Server
```bash
cd "/Users/rishabhsrivastava/Desktop/Rishabh Personal/website/v3"
python3 -m http.server 3000
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Option 2: Node.js / npx serve
```bash
npx serve v3
```

---

## 🌐 Deploying to Hostinger (cPanel / VPS)
Because `v3` is engineered with clean, zero-dependency modern standards:
1. **Hostinger Shared / Cloud Hosting**: Simply upload the contents of the `v3/` folder into your `public_html/` directory using Hostinger File Manager or FTP/SSH.
2. **VPS Deployment with Nginx**:
   Point your Nginx root directive to `/var/www/rishabhsrivastava.in/v3`:
   ```nginx
   server {
       listen 80;
       server_name rishabhsrivastava.in www.rishabhsrivastava.in;
       root /var/www/rishabhsrivastava.in/v3;
       index index.html;
       location / {
           try_files $uri $uri/ =404;
       }
   }
   ```
3. **Vercel / Netlify / GitHub Pages**: Drag and drop the `v3` folder or connect the repository with `v3` as the root directory.

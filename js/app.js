/**
 * RISHABH SRIVASTAVA - CORE INTERACTION & APP CONTROLLER
 * Domain: rishabhsrivastava.in
 */

// Sound FX Controller via Web Audio API (No external sound files required)
class AudioFX {
  constructor() {
    this.ctx = null;
    this.muted = localStorage.getItem('rishabh_audio_muted') === 'true';
    this.updateIcon();
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
  }

  toggle() {
    this.muted = !this.muted;
    localStorage.setItem('rishabh_audio_muted', this.muted);
    this.updateIcon();
    if (!this.muted) {
      this.playBeep(440, 'sine', 0.08);
      if (window.showToast) window.showToast('Audio Feedback Enabled');
    } else {
      if (window.showToast) window.showToast('Audio Feedback Muted');
    }
  }

  updateIcon() {
    const btn = document.getElementById('sound-toggle-btn');
    if (btn) {
      btn.innerHTML = this.muted
        ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>'
        : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>';
      btn.title = this.muted ? "Unmute Audio FX" : "Mute Audio FX";
    }
  }

  playBeep(freq = 600, type = 'sine', duration = 0.05, gainLevel = 0.04) {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, this.ctx.currentTime + duration);

      gain.gain.setValueAtTime(gainLevel, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }

  playClick() {
    this.playBeep(880, 'sine', 0.04, 0.05);
  }

  playHover() {
    this.playBeep(420, 'triangle', 0.03, 0.02);
  }
}

const sfx = new AudioFX();

// Toast helper
window.showToast = function (message, duration = 3500) {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>⚡</span> <span>${message}</span>`;
  toast.classList.add('show');
  sfx.playBeep(700, 'sine', 0.08);

  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
};

// Interactive Terminal Data
const TERMINAL_COMMANDS = {
  help: `Available commands:
  - bio          : Who is Rishabh Srivastava & what drives him
  - skills       : Production technical arsenal
  - experience   : Verified work history & metrics
  - projects     : Architecture & platforms built
  - attitude     : Engineering philosophy & non-negotiables
  - contact      : Direct communication coordinates
  - hire         : Value proposition for teams & clients
  - clear        : Clear terminal output`,

  bio: `RISHABH SRIVASTAVA [Full Stack Architect & GenAI Specialist]
---------------------------------------------------------------
Location : Greater Noida / NCR, India (Global Remote Capable)
Education: B.Tech in Electrical & Electronics Engineering (AKTU)
Experience: 4+ Years across Enterprise Platforms, Startups & High-Scale Systems
Mission  : Building mission-critical web applications that scale seamlessly, load instantly, and dominate both traditional and generative search (GEO).`,

  skills: `FRONTEND   : Next.js (App Router, RSC), React.js, TypeScript, ES6+, TailwindCSS, Canvas/WebGL
BACKEND    : Node.js, Express.js, Laravel (PHP), REST Microservices, WebSockets, Python
DATABASES  : PostgreSQL, MySQL, MongoDB, Redis Caching, Schema Tuning
DEVOPS     : Jenkins, GitHub Actions, Docker, AWS (EC2/S3), VPS, Linux, Nginx
INTEGRATION: Generative AI (Gemini/OpenAI), Chart Automation, Payment Gateways
GROWTH     : SEO, AEO, GEO (Generative Engine Optimization), Core Web Vitals 100/100`,

  experience: `1. SRC Cyber Solutions LLP — Associate Software Developer [May 2023 - Present]
   • Scaled enterprise CRM & EDM platform on Prime Platform using Node.js & Next.js.
   • Boosted website discoverability by 350% across US & India via SEO/AEO/GEO.
   • Implemented automated CI/CD pipelines via Jenkins & GitHub Actions on VPS.
   • Integrated GenAI model inference for dynamic automated client reporting.

2. Full Stack Developer (Freelance) [Dec 2021 - Apr 2023]
   • Architected end-to-end eCommerce portals, admin dashboards & APIs for global clients.
   • Shipped hybrid mobile applications using React Native and Flutter.
   • Full DevOps ownership on AWS, DigitalOcean and VPS.`,

  projects: `FEATURED ARCHITECTURES:
1. Prime Platform CRM/EDM  -> [Client Proprietary / NDA Compliant]
2. GenAI Graphical Engine   -> [© Rishabh Srivastava - All Rights Reserved]
3. SEO/AEO/GEO Suite       -> [Commercial Architecture]
4. High-Scale eCommerce     -> [Commercial Delivery]
5. AI Vision & Face Suite  -> [Open Source / MIT License]
Type 'projects' on GUI to view interactive case studies!`,

  attitude: `THE 4 NON-NEGOTIABLES OF MY ENGINEERING ATTITUDE:
1. EXTREME OWNERSHIP   : From architecture diagram to Docker container on AWS, I own the outcome.
2. SPEED IS RESPECT    : Sub-second page loads. Clean code. 100/100 Core Web Vitals standard.
3. AI-FIRST LEVERAGE   : I engineer structured semantic data so LLMs cite your business first.
4. RESILIENT SYSTEMS   : Zero-downtime CI/CD pipelines and microservices that never panic at 3 AM.`,

  contact: `DIRECT CONTACT COORDINATES:
• Email    : ersrivastavarishabh@gmail.com
• Phone    : +91 7037564392
• WhatsApp : https://wa.me/917037564392
• LinkedIn : https://linkedin.com/in/srivastavarishabh17
• GitHub   : https://github.com/devRishabhSrivastava
• Website  : https://rishabhsrivastava.in`,

  hire: `WHY HIRE RISHABH?
Because you aren't just buying lines of syntax; you are acquiring high-agency engineering horsepower.
Whether you need an enterprise CRM built from scratch, high-conversion Next.js applications, or GenAI-driven data automation, I deliver on-time with zero excuses.
Let's talk: email ersrivastavarishabh@gmail.com or WhatsApp +917037564392`
};

// Detailed Case Studies Data (With Copyright Details)
const CASE_STUDIES = {
  'prime-crm': {
    title: 'Prime Platform: Enterprise CRM & Automated EDM Engine',
    subtitle: 'High-concurrency business platform powering real client communications, lead lifecycle tracking, and analytics.',
    category: 'Enterprise CRM & Full Stack',
    copyright: 'CLIENT PROPRIETARY / NDA COMPLIANT',
    copyrightClass: 'nda',
    copyrightNotice: 'Architectural overview displayed with permission. Codebase remains the exclusive intellectual property of SRC Cyber Solutions LLP. Core concepts demonstrate enterprise design mastery.',
    client: 'SRC Cyber Solutions LLP',
    role: 'Associate Software Developer (Core Architecture & Platform Lead)',
    timeline: 'May 2023 - Present',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Jenkins', 'GitHub Actions', 'TailwindCSS'],
    metrics: [
      { label: 'Release Cycle Time', val: '-60%' },
      { label: 'Active Business Users', val: 'Enterprise Scale' },
      { label: 'Uptime Reliability', val: '99.98%' }
    ],
    overview: 'The Prime Platform is an enterprise-grade Customer Relationship Management (CRM) and Electronic Direct Mail (EDM) ecosystem. It centralizes client communication, tracking, and campaign analytics into one cohesive, ultra-fast interface.',
    challenges: [
      'Processing high volumes of outgoing campaigns without UI latency or request timeouts.',
      'Unifying multiple third-party telemetry data streams into a single client-facing dashboard.',
      'Maintaining zero-downtime during multi-tenant database migrations and continuous releases.'
    ],
    solutions: [
      'Migrated legacy views to Next.js App Router with server-side rendered components, slashing First Contentful Paint (FCP) to under 700ms.',
      'Constructed asynchronous message queuing using Redis and background worker threads for mass EDM dispatches.',
      'Instituted automated Jenkins & GitHub Actions pipelines that run tests and trigger rolling VPS deployments on every approved PR.'
    ]
  },
  'genai-reporting': {
    title: 'GenAI Dynamic Graphical Reporting & Analytics Engine',
    subtitle: 'Automated executive insights pipeline combining LLMs with programmatic chart generation.',
    category: 'AI & Data Engineering',
    copyright: 'PROPRIETARY IP — © RISHABH SRIVASTAVA',
    copyrightClass: 'author',
    copyrightNotice: 'Copyright © Rishabh Srivastava. All rights reserved. Proprietary design architecture created for intelligent data storytelling.',
    client: 'Enterprise Client Architecture',
    role: 'Full Stack & AI Engineer',
    timeline: '2024 - 2025',
    stack: ['Node.js', 'Gemini API / OpenAI', 'Chart.js / SVG Canvas', 'Express.js', 'PostgreSQL'],
    metrics: [
      { label: 'Report Prep Time', val: '-85%' },
      { label: 'Automated Insights', val: '10,000+ Monthly' },
      { label: 'Stakeholder Clarity', val: '10x Improvement' }
    ],
    overview: 'An automated analytics generation engine that ingests raw transactional metrics, evaluates anomalies, prompts structured Generative AI models, and synthesizes downloadable, presentation-ready infographics.',
    challenges: [
      'Eliminating LLM hallucinations when generating numerical summaries and financial charts.',
      'Generating high-resolution charts on headless server environments with sub-second response times.'
    ],
    solutions: [
      'Enforced strict JSON schema verification and Zod validation on all LLM responses prior to chart rendering.',
      'Implemented server-side Node.js canvas rendering for vector charts, generating vector PDFs and WebP graphical cards in parallel.'
    ]
  },
  'seo-aeo-geo': {
    title: 'Multi-Region SEO, AEO & Generative Engine Optimization (GEO) Suite',
    subtitle: 'Advanced discoverability framework engineered for Google, Perplexity, SearchGPT & Gemini.',
    category: 'SEO, AEO & GEO Engineering',
    copyright: 'COMMERCIAL ARCHITECTURE — ALL RIGHTS RESERVED',
    copyrightClass: 'commercial',
    copyrightNotice: 'Commercial SEO/GEO infrastructure developed for international discoverability. Methodology and implementation rights reserved.',
    client: 'Cross-Border Platforms (India & US)',
    role: 'Lead Growth & Discoverability Architect',
    timeline: '2023 - Present',
    stack: ['Schema.org JSON-LD', 'Next.js SSR', 'Knowledge Graph Tuning', 'Core Web Vitals', 'Geo-Targeting'],
    metrics: [
      { label: 'Organic Search Growth', val: '+350%' },
      { label: 'AI Citations (Perplexity/ChatGPT)', val: 'Top 3 Sources' },
      { label: 'Lighthouse SEO & Perf', val: '100 / 100' }
    ],
    overview: 'A complete modernization of web discoverability, transitioning platforms from outdated keyword-stuffing to semantic entity mapping, structured JSON-LD graphs, and localized Geo meta-attribution.',
    challenges: [
      'Ranking competitively in both the US and Indian markets across distinct search intents and geographical parameters.',
      'Ensuring AI answer engines cite the brand as the primary reference in conversational searches.'
    ],
    solutions: [
      'Structured full multi-level JSON-LD schemas covering Organization, ItemList, FAQPage, and Person entities.',
      'Optimized Core Web Vitals to achieve flat 100s across LCP, INP, and CLS, dramatically lowering bot crawl timeouts.'
    ]
  },
  'ecommerce-portal': {
    title: 'Scalable eCommerce & Custom Admin Control Center',
    subtitle: 'Full-stack online retail platform with custom inventory, checkout pipelines, and CRM.',
    category: 'Full Stack Web & Commerce',
    copyright: 'COMMERCIAL CLIENT DELIVERY',
    copyrightClass: 'commercial',
    copyrightNotice: 'Delivered to commercial clients with proprietary business rights reserved.',
    client: 'Global Retail Clients',
    role: 'Independent Full Stack Engineer',
    timeline: '2022 - 2023',
    stack: ['React.js', 'Node.js', 'MongoDB', 'Razorpay & Stripe API', 'AWS EC2', 'Nginx'],
    metrics: [
      { label: 'Checkout Conversion', val: '+28%' },
      { label: 'Avg Latency', val: '< 95ms' },
      { label: 'Transactions Processed', val: '$500K+' }
    ],
    overview: 'Engineered a modern eCommerce shopping experience with real-time stock allocation, automated invoice dispatching, and a high-security administrative portal for orders and inventory control.',
    challenges: [
      'Handling flash-sale concurrency without race conditions on stock decrements.',
      'Integrating multi-currency payment gateways with webhook failure safety.'
    ],
    solutions: [
      'Engineered atomic database transactions and Redis optimistic locking to prevent overselling during peak traffic spikes.',
      'Built a webhook retry queue with idempotency keys to guarantee 100% accurate financial reconciliation.'
    ]
  },
  'ai-face-detector': {
    title: 'AI Computer Vision & Face Detection Mobile Suite',
    subtitle: 'Native Android application utilizing on-device machine learning for facial feature mapping & augmented faces.',
    category: 'Mobile & Computer Vision',
    copyright: 'OPEN SOURCE / MIT LICENSE',
    copyrightClass: 'opensource',
    copyrightNotice: 'Open source codebase under the MIT License. Available on GitHub for community educational exploration.',
    client: 'LetsGrowMore / Innovation Lab',
    role: 'Android Developer Intern',
    timeline: 'Feb 2022 - Mar 2022',
    stack: ['Android Java', 'XML UI', 'ML Kit / OpenCV', 'Firebase Firestore', 'ARCore'],
    metrics: [
      { label: 'Frame Rate', val: '60 FPS Real-time' },
      { label: 'Inference Latency', val: '< 18ms' },
      { label: 'Firebase Sync', val: 'Instant' }
    ],
    overview: 'High-speed computer vision Android application detecting 468 facial contour landmarks in real-time, mapping 3D textures, and synchronizing user metrics with Cloud Firebase.',
    challenges: [
      'Minimizing battery drain and heat during prolonged on-device GPU machine learning inference.',
      'Rendering smooth AR facial overlays without frame drops on budget hardware.'
    ],
    solutions: [
      'Employed Google ML Kit face mesh pipelines running asynchronously on background Neural Networks API (NNAPI) threads.',
      'Created custom lightweight OpenGL rendering pipeline for zero-jitter AR texture rendering.'
    ]
  },
  'fynd-platform': {
    title: 'Fynd: Real-Time Geo-Discovery Web Portal',
    subtitle: 'Location-based services portal connecting users with nearby providers and verified listings.',
    category: 'Full Stack & Geo-Location',
    copyright: 'PROPRIETARY IP — © RISHABH SRIVASTAVA',
    copyrightClass: 'author',
    copyrightNotice: 'Copyright © Rishabh Srivastava. Built as a demonstration of location-aware full stack scalability.',
    client: 'Internal Portfolio Project',
    role: 'Lead Architect',
    timeline: '2023',
    stack: ['React', 'Express.js', 'MongoDB Geospatial Indexes', 'Google Maps API', 'CSS Grid'],
    metrics: [
      { label: 'Geo-Query Speed', val: '< 35ms' },
      { label: 'Spatial Radius Accuracy', val: 'Within 5m' }
    ],
    overview: 'A full stack discovery engine using MongoDB 2dsphere indexes to provide instantaneous proximity queries for local businesses, navigation routes, and reviews.',
    challenges: ['Minimizing expensive Maps API calls while maintaining real-time coordinates.'],
    solutions: ['Implemented aggressive client-side caching and debounced bounding-box queries.']
  }
};

// Document Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Navigation scroll behavior
  const nav = document.querySelector('.site-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-menu-drawer');
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
      sfx.playClick();
    });
    // Close on link click
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }

  // Sound toggle button
  const soundBtn = document.getElementById('sound-toggle-btn');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      sfx.toggle();
    });
  }

  // Interactive Typewriter in Hero
  const typewriterElement = document.getElementById('hero-typewriter');
  if (typewriterElement) {
    const words = [
      'Full Stack Architect.',
      'Enterprise CRM & EDM Specialist.',
      'Generative AI Systems Engineer.',
      'SEO, AEO & GEO Growth Optimizer.',
      'Automated CI/CD & DevOps Engineer.'
    ];
    let wordIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let typeSpeed = 80;

    function type() {
      const currentWord = words[wordIdx];
      if (isDeleting) {
        typewriterElement.textContent = currentWord.substring(0, charIdx - 1);
        charIdx--;
        typeSpeed = 40;
      } else {
        typewriterElement.textContent = currentWord.substring(0, charIdx + 1);
        charIdx++;
        typeSpeed = 85;
      }

      if (!isDeleting && charIdx === currentWord.length) {
        isDeleting = true;
        typeSpeed = 2000; // Hold full word
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        wordIdx = (wordIdx + 1) % words.length;
        typeSpeed = 500;
      }

      setTimeout(type, typeSpeed);
    }
    type();
  }

  // 3D Card Tilt Effect on Cards
  const tiltCards = document.querySelectorAll('.glass-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;

      card.style.transform = `perspective(1000px) rotateX(${deltaY * -4}deg) rotateY(${deltaX * 4}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });

    card.addEventListener('mouseenter', () => {
      sfx.playHover();
    });
  });

  // Custom Cursor
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorFollower = document.querySelector('.cursor-follower');
  if (cursorDot && cursorFollower) {
    window.addEventListener('mousemove', (e) => {
      cursorDot.style.left = `${e.clientX}px`;
      cursorDot.style.top = `${e.clientY}px`;
      cursorFollower.style.left = `${e.clientX}px`;
      cursorFollower.style.top = `${e.clientY}px`;
    });

    document.querySelectorAll('a, button, .glass-card, input, select, textarea').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.6)';
        cursorFollower.style.borderColor = 'var(--accent-cyan)';
        cursorDot.style.transform = 'translate(-50%, -50%) scale(1.4)';
      });
      el.addEventListener('mouseleave', () => {
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorFollower.style.borderColor = 'rgba(0, 240, 255, 0.4)';
        cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
      });
    });
  }

  // Portfolio Filters
  const portfolioFilterBtns = document.querySelectorAll('.portfolio-filter-btn');
  const projectCards = document.querySelectorAll('.project-card-item');

  portfolioFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      portfolioFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      sfx.playClick();

      const filter = btn.dataset.filter;
      projectCards.forEach(card => {
        if (filter === 'all' || card.dataset.category.includes(filter)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Case Study Modal
  const caseStudyModal = document.getElementById('case-study-modal');
  const closeCaseStudyBtn = document.getElementById('close-case-study-btn');
  const caseStudyBody = document.getElementById('case-study-body');

  document.querySelectorAll('.open-case-study-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.project;
      const data = CASE_STUDIES[key];
      if (data && caseStudyModal && caseStudyBody) {
        sfx.playClick();
        caseStudyBody.innerHTML = `
          <div style="margin-bottom: 24px;">
            <div style="display: flex; gap: 10px; align-items: center; margin-bottom: 12px; flex-wrap: wrap;">
              <span class="section-tag" style="margin-bottom: 0;">${data.category}</span>
              <span class="copyright-pill ${data.copyrightClass}">${data.copyright}</span>
            </div>
            <h2 style="font-size: clamp(1.8rem, 3vw, 2.4rem); margin-bottom: 12px; line-height: 1.2;">${data.title}</h2>
            <p style="color: var(--text-secondary); font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;">${data.subtitle}</p>

            <div style="background: rgba(245, 158, 11, 0.08); border-left: 3px solid var(--accent-amber); padding: 12px 18px; border-radius: 0 var(--radius-sm) var(--radius-sm) 0; margin-bottom: 24px;">
              <div style="font-family: var(--font-mono); font-size: 0.78rem; color: #fbbf24; font-weight: 700; text-transform: uppercase;">🛡️ Intellectual Property & Copyright Notice</div>
              <p style="color: #fde68a; font-size: 0.88rem; margin-top: 4px; line-height: 1.5;">${data.copyrightNotice}</p>
            </div>

            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 28px;">
              ${data.metrics.map(m => `
                <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); padding: 14px; border-radius: var(--radius-sm); text-align: center;">
                  <div style="font-family: var(--font-heading); font-size: 1.6rem; font-weight: 800; color: var(--accent-cyan);">${m.val}</div>
                  <div style="font-size: 0.78rem; color: var(--text-muted); text-transform: uppercase; margin-top: 4px;">${m.label}</div>
                </div>
              `).join('')}
            </div>

            <div style="margin-bottom: 24px;">
              <h3 style="font-size: 1.3rem; margin-bottom: 10px; color: var(--text-primary);">Architecture & Impact Overview</h3>
              <p style="color: var(--text-secondary); line-height: 1.7; font-size: 1rem;">${data.overview}</p>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 28px;">
              <div style="background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); padding: 18px; border-radius: var(--radius-sm);">
                <h4 style="color: #fca5a5; font-size: 1rem; margin-bottom: 10px; font-family: var(--font-mono);">⚡ Key Engineering Challenges</h4>
                <ul style="padding-left: 18px; color: #cbd5e1; font-size: 0.9rem; line-height: 1.6;">
                  ${data.challenges.map(c => `<li style="margin-bottom: 8px;">${c}</li>`).join('')}
                </ul>
              </div>

              <div style="background: rgba(16, 185, 129, 0.05); border: 1px solid rgba(16, 185, 129, 0.2); padding: 18px; border-radius: var(--radius-sm);">
                <h4 style="color: #6ee7b7; font-size: 1rem; margin-bottom: 10px; font-family: var(--font-mono);">✓ Technical Solutions Implemented</h4>
                <ul style="padding-left: 18px; color: #cbd5e1; font-size: 0.9rem; line-height: 1.6;">
                  ${data.solutions.map(s => `<li style="margin-bottom: 8px;">${s}</li>`).join('')}
                </ul>
              </div>
            </div>

            <div>
              <h4 style="font-size: 0.85rem; font-family: var(--font-mono); color: var(--text-muted); text-transform: uppercase; margin-bottom: 10px;">Production Tech Stack</h4>
              <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                ${data.stack.map(st => `<span class="tech-tag">${st}</span>`).join('')}
              </div>
            </div>
          </div>
        `;
        caseStudyModal.classList.add('active');
      }
    });
  });

  if (closeCaseStudyBtn && caseStudyModal) {
    closeCaseStudyBtn.addEventListener('click', () => {
      caseStudyModal.classList.remove('active');
    });
  }

  // Interactive Dev Terminal Modal
  const terminalModal = document.getElementById('terminal-modal');
  const openTerminalBtns = document.querySelectorAll('.open-terminal-btn');
  const closeTerminalBtn = document.getElementById('close-terminal-btn');
  const terminalInput = document.getElementById('terminal-input');
  const terminalOutput = document.getElementById('terminal-output');

  openTerminalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sfx.playClick();
      if (terminalModal) {
        terminalModal.classList.add('active');
        if (terminalInput) terminalInput.focus();
      }
    });
  });

  if (closeTerminalBtn && terminalModal) {
    closeTerminalBtn.addEventListener('click', () => {
      terminalModal.classList.remove('active');
    });
  }

  if (terminalInput && terminalOutput) {
    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = terminalInput.value.trim().toLowerCase();
        terminalInput.value = '';
        sfx.playClick();

        if (cmd === 'clear') {
          terminalOutput.innerHTML = `
            <div class="terminal-line" style="color: var(--accent-cyan);">RishabhOS v3.8 [ARM64 - Darwin Kernel]</div>
            <div class="terminal-line" style="color: var(--text-muted);">Type <span style="color: var(--accent-emerald);">help</span> to view available commands.</div>
          `;
          return;
        }

        // Echo command
        const line = document.createElement('div');
        line.className = 'terminal-line';
        line.innerHTML = `<span style="color: var(--accent-cyan);">visitor@rishabh.dev:~$</span> <span>${cmd}</span>`;
        terminalOutput.appendChild(line);

        // Result
        const responseLine = document.createElement('div');
        responseLine.className = 'terminal-line';
        responseLine.style.color = '#cbd5e1';
        responseLine.style.whiteSpace = 'pre-wrap';

        if (TERMINAL_COMMANDS[cmd]) {
          responseLine.textContent = TERMINAL_COMMANDS[cmd];
        } else if (cmd === '') {
          // empty enter
        } else {
          responseLine.innerHTML = `<span style="color: #ef4444;">command not found: ${cmd}</span>. Type <span style="color: var(--accent-cyan);">'help'</span> for documentation.`;
        }

        terminalOutput.appendChild(responseLine);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
      }
    });
  }

  // Copy email button helper
  document.querySelectorAll('.copy-email-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText('ersrivastavarishabh@gmail.com').then(() => {
        window.showToast('Copied: ersrivastavarishabh@gmail.com');
      });
    });
  });

  // Contact Form Submission
  const contactForm = document.getElementById('portfolio-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.name.value;
      const email = contactForm.email.value;
      const service = contactForm.service.value;
      const message = contactForm.message.value;

      // Compose mailto as fallback and WhatsApp link
      const encodedMsg = encodeURIComponent(`Hi Rishabh, my name is ${name} (${email}). Project Scope: ${service}. Details: ${message}`);
      window.showToast('✓ Message Received! Launching direct channel...');

      setTimeout(() => {
        window.open(`https://wa.me/917037564392?text=${encodedMsg}`, '_blank');
      }, 1000);

      contactForm.reset();
    });
  }

  // Close modals on clicking backdrop
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });

  // Global ESC key listener to close modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach(m => m.classList.remove('active'));
    }
  });
});

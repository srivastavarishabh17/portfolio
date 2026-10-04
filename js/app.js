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

  projects: `ACTIVE PRODUCTION ECOSYSTEMS & WORKING PLATFORMS:
=============================================================
1. AOZO ENTERPRISE CLOUD SUITE [aozo.in]
   • app.aozo.in       : Unified Cloud Business OS
   • crm.aozo.in       : Enterprise CRM & Lead Funnels
   • mailapi.aozo.in   : High-Throughput Mail Dispatch Engine
   • chatapi.aozo.in   : Real-time Enterprise Chat Microservices
   • accounting.aozo.in: Financial Accounting & Billing Engine
   • desk.aozo.in      : Customer Support Desk & Ticket API

2. PRIME PLATFORM CRM & EDM ENGINE [SRC Cyber Solutions]
   • Next.js + Node.js Enterprise Scale | +350% Discoverability | CI/CD Pipelines

3. MESSEGY OMNICHANNEL PLATFORM [messegy.com]
   • portal.messegy.com  : Customer Communication Portal
   • helpdesk.messegy.com: Omnichannel Helpdesk & Ticket Flow
   • auth.messegy.com    : Centralized OAuth2/SSO Microservice
   • mcp.messegy.com     : Model Context Protocol (AI API)
   • shopify.messegy.com : Shopify Omnichannel Connector
   • campaign engine     : Automated Bulk Campaign Microservices

4. ECOMIFY.IO MULTI-TENANT ECOMMERCE [ecomify.io]
   • app.ecomify.io    : Next-gen eCommerce Builder & Storefront
   • backend.ecomify.io: Distributed Transaction & Order Microservices

5. ALPHAZON ENTERPRISE LMS [alphazon.in]
   • lms.alphazon.in   : Video Course & Interactive Student Portal
   • lmsbackend        : Streaming API & Assessment Engine

6. MYAYUSHCLINIC HEALTHTECH SUITE [myayushclinic.com]
   • myayushclinic.com        : Clinic Web Platform & Appointment Engine
   • backend.myayushclinic.com: Health Telemetry & Records API
   • mobile.myayushclinic.com : Cross-Platform Patient Mobile App

7. AUTONOMOUS AI & AUTOMATION ENGINES:
   • tallyprime-agent  : Autonomous AI Accounting Agent for TallyPrime
   • ai-buddy / heybuddy: Multi-Modal Conversational AI Assistant
   • GenAI Reporting   : Automated Graphical Infographic Synthesizer

8. DIRECT-TO-CONSUMER & WEB PORTALS:
   • saattviknatural.com: Ayurvedic Direct-to-Consumer Store
   • Fynd Platform      : Real-Time Geo-Discovery (<35ms Latency)
   • TinDog SaaS        : Modern High-Conversion Web Portal

Click any project card in the 'All Working Projects' section to inspect architecture!`,

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
  'aozo-suite': {
    title: 'Aozo Cloud Enterprise Operating Suite',
    subtitle: 'Unified cloud business suite spanning CRM, project tracking, high-throughput mail gateways, real-time chat, and accounting.',
    category: 'Enterprise SaaS & Cloud Platform',
    copyright: 'PROPRIETARY IP — ACTIVE ENTERPRISE SYSTEM',
    copyrightClass: 'commercial',
    copyrightNotice: 'Commercial Enterprise Architecture powering business operations across aozo.in sub-services.',
    client: 'Aozo Technologies (aozo.in)',
    role: 'Lead Architect & Core Systems Engineer',
    timeline: '2024 - Present',
    stack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'WebSockets', 'TailwindCSS', 'VPS Nginx'],
    metrics: [
      { label: 'Ecosystem Subdomains', val: '8+ Active' },
      { label: 'Mail Dispatch Rate', val: '50K+/hr' },
      { label: 'Chat WebSocket Latency', val: '<25ms' }
    ],
    overview: 'A complete multi-tenant cloud enterprise OS featuring crm.aozo.in, app.aozo.in, mailapi.aozo.in, chatapi.aozo.in, accounting.aozo.in, and deskapi.aozo.in.',
    challenges: [
      'Orchestrating synchronized session states and authentication across 8 independent subdomains.',
      'Achieving high deliverability on outgoing enterprise transactional mail streams without blacklisting risks.',
      'Maintaining bi-directional low-latency real-time chat microservices under heavy concurrency.'
    ],
    solutions: [
      'Engineered cross-subdomain unified token-based SSO authentication with Redis token validation.',
      'Built custom queue worker pipelines using BullMQ with automated IP rotation and throttling algorithms.',
      'Designed clustered WebSocket servers with Redis pub/sub backplanes for zero-drop messaging.'
    ]
  },
  'messegy-suite': {
    title: 'Messegy: Omnichannel Communication & Campaign Platform',
    subtitle: 'High-throughput omnichannel messaging infrastructure, support helpdesk, Shopify integrations, and AI MCP agents.',
    category: 'Omnichannel & Developer Tooling',
    copyright: 'COMMERCIAL ENTERPRISE ECOSYSTEM',
    copyrightClass: 'commercial',
    copyrightNotice: 'Active enterprise communication software powering messegy.com ecosystems.',
    client: 'Messegy (messegy.com)',
    role: 'Full Stack Infrastructure Architect',
    timeline: '2024 - Present',
    stack: ['JavaScript', 'Node.js', 'OAuth 2.0', 'WebSockets', 'Shopify API', 'Model Context Protocol (MCP)'],
    metrics: [
      { label: 'Omnichannel Routing', val: 'Multi-Channel' },
      { label: 'AI Agent Integrations', val: 'MCP Protocol' },
      { label: 'Shopify Sync', val: 'Real-Time' }
    ],
    overview: 'An omnichannel messaging and support suite spanning portal.messegy.com, helpdesk.messegy.com, auth.messegy.com, mcp.messegy.com, and shopify.messegy.com.',
    challenges: [
      'Unifying multiple third-party messaging streams (WhatsApp, email, SMS, webhooks) into a single agent ticketing inbox.',
      'Building robust Shopify webhook reconciliation for automated order notifications and customer broadcasts.'
    ],
    solutions: [
      'Architected event-driven microservices normalizing heterogeneous incoming webhook payloads into standard event queues.',
      'Integrated Model Context Protocol (MCP) servers enabling automated AI agent resolution for common support inquiries.'
    ]
  },
  'ecomify-platform': {
    title: 'Ecomify.io Multi-Tenant eCommerce Builder',
    subtitle: 'Scalable cloud commerce builder enabling merchants to launch bespoke storefronts with custom plugins and checkout pipelines.',
    category: 'eCommerce SaaS & Cloud Platform',
    copyright: 'PROPRIETARY SAAS ARCHITECTURE',
    copyrightClass: 'author',
    copyrightNotice: 'Engineered for ecomify.io ecosystem. All architectural rights reserved.',
    client: 'Ecomify Technologies (ecomify.io)',
    role: 'Full Stack Architect & Backend Lead',
    timeline: '2024 - Present',
    stack: ['Next.js', 'Node.js', 'Express', 'Stripe / Razorpay', 'Redis', 'Docker'],
    metrics: [
      { label: 'Storefront Latency', val: '<80ms TTFB' },
      { label: 'Multi-Tenant Isolation', val: '100% Secure' },
      { label: 'Plugin Extensibility', val: 'Modular SDK' }
    ],
    overview: 'A modern cloud commerce builder (app.ecomify.io & backend.ecomify.io) offering customizable storefronts, plugin SDKs, dynamic catalog indexing, and atomic inventory checkout pipelines.',
    challenges: [
      'Allowing custom plugin injection without introducing security vulnerabilities or cross-tenant data leaks.',
      'Managing high-concurrency checkout bursts during flash sales with zero inventory overselling.'
    ],
    solutions: [
      'Implemented isolated sandboxed plugin execution with scoped API keys.',
      'Built Redis distributed locks with atomic decrement operations for all transactional cart reservations.'
    ]
  },
  'alphazon-lms': {
    title: 'Alphazon Enterprise Learning Management System',
    subtitle: 'Comprehensive educational platform delivering streaming video curricula, live exams, and automated certificate generation.',
    category: 'EdTech & Video Streaming Platform',
    copyright: 'ACTIVE PRODUCTION CLIENT SYSTEM',
    copyrightClass: 'commercial',
    copyrightNotice: 'Deployed to production across lms.alphazon.in and backend microservices.',
    client: 'Alphazon Learning Systems (alphazon.in)',
    role: 'Full Stack Lead Developer',
    timeline: '2024',
    stack: ['React', 'Node.js', 'HLS Video Streaming', 'PostgreSQL', 'AWS S3 / CloudFront'],
    metrics: [
      { label: 'Active Students', val: 'Thousands' },
      { label: 'Streaming Latency', val: 'Adaptive HLS' },
      { label: 'Exam Evaluation', val: 'Instantaneous' }
    ],
    overview: 'An enterprise Learning Management System featuring interactive video playback, course progression tracking, proctored examinations, and automated grade card synthesis.',
    challenges: ['Delivering smooth, buffer-free video streaming across variable mobile bandwidth connections.'],
    solutions: ['Implemented adaptive bitrate HLS video transcode pipelines stored in AWS S3 and distributed via CloudFront edge caches.']
  },
  'myayushclinic': {
    title: 'MyAyushClinic: Tele-Consultation & Healthcare Suite',
    subtitle: 'Integrated healthcare web portal, clinical records backend, and native patient mobile application.',
    category: 'HealthTech & Cross-Platform Mobile',
    copyright: 'COMMERCIAL HEALTHTECH DELIVERY',
    copyrightClass: 'commercial',
    copyrightNotice: 'Operating healthcare system for myayushclinic.com.',
    client: 'MyAyushClinic (myayushclinic.com)',
    role: 'Lead Healthcare Systems Architect',
    timeline: '2024',
    stack: ['TypeScript', 'React Native Mobile', 'Node.js', 'PostgreSQL', 'WebRTC Video'],
    metrics: [
      { label: 'Patient Consultations', val: 'Daily Active' },
      { label: 'Mobile Platforms', val: 'iOS & Android' },
      { label: 'HIPAA/Security Standards', val: 'Compliant' }
    ],
    overview: 'A digital clinical ecosystem encompassing myayushclinic.com, backend telemetry, and mobile.myayushclinic.com for real-time doctor appointments and prescription generation.',
    challenges: ['Securing patient diagnostic records and providing zero-lag video tele-consultations.'],
    solutions: ['Constructed end-to-end encrypted WebRTC peer video tunnels and encrypted patient health records (EHR) with strict access control audits.']
  },
  'tallyprime-agent': {
    title: 'TallyPrime Autonomous AI Telemetry Agent',
    subtitle: 'Autonomous intelligence agent bridging TallyPrime desktop accounting with cloud telemetry and predictive cashflow analytics.',
    category: 'AI Agents & FinTech Automation',
    copyright: 'PROPRIETARY AI AGENT ARCHITECTURE',
    copyrightClass: 'author',
    copyrightNotice: 'Copyright © Rishabh Srivastava. Autonomous accounting connector.',
    client: 'FinTech Innovation Suite',
    role: 'Lead AI Engineer',
    timeline: '2024',
    stack: ['TypeScript', 'Node.js', 'Tally XML / ODBC', 'LLM Function Calling', 'PostgreSQL'],
    metrics: [
      { label: 'Reconciliation Time', val: '-90%' },
      { label: 'Data Accuracy', val: '100% Validated' },
      { label: 'Automated Ledger Sync', val: 'Instant' }
    ],
    overview: 'An autonomous background agent that interfaces with TallyPrime accounting databases via XML/ODBC protocols, translates accounting events, and generates predictive cash flow reports using LLM function calling.',
    challenges: ['Parsing proprietary, deeply nested Tally XML ledger structures in real time.'],
    solutions: ['Developed a robust streaming XML parser that normalizes financial transactions into strongly typed TypeScript schemas for immediate AI evaluation.']
  },
  'saattviknatural': {
    title: 'Saattvik Natural: Direct-to-Consumer eCommerce Store',
    subtitle: 'High-conversion online retail store for Ayurvedic wellness products, featuring automated shipping label generation and payment reconciliation.',
    category: 'eCommerce & Direct-to-Consumer',
    copyright: 'COMMERCIAL CLIENT PLATFORM',
    copyrightClass: 'commercial',
    copyrightNotice: 'Active production retail storefront at saattviknatural.com.',
    client: 'Saattvik Natural (saattviknatural.com)',
    role: 'Full Stack Engineer',
    timeline: '2024',
    stack: ['Laravel', 'PHP Blade', 'MySQL', 'Razorpay Gateway', 'Logistics API Integration'],
    metrics: [
      { label: 'Storefront Speed', val: '<1s Load' },
      { label: 'Payment Success Rate', val: '99.4%' },
      { label: 'Automated Dispatch', val: 'Integrated' }
    ],
    overview: 'Direct-to-consumer online shopping experience with automated inventory management, payment gateway webhooks, and courier API dispatch syncing.',
    challenges: ['Optimizing product catalog load times on mobile devices and managing shipping tier calculations.'],
    solutions: ['Implemented aggressive database query caching and automatic postal code serviceability lookups via courier API integrations.']
  },
  'fynd-platform': {
    title: 'Fynd: Real-Time Geo-Discovery Web Portal',
    subtitle: 'High-speed proximity discovery engine utilizing MongoDB 2dsphere spatial indexes to deliver instant location queries.',
    category: 'Spatial Engineering & Geo-Discovery',
    copyright: 'PROPRIETARY GEOSPATIAL ARCHITECTURE',
    copyrightClass: 'author',
    copyrightNotice: 'Copyright © Rishabh Srivastava. Geospatial engine architecture.',
    client: 'Spatial Tech Client Delivery',
    role: 'Backend & Spatial Database Architect',
    timeline: '2023',
    stack: ['Node.js', 'Express.js', 'MongoDB 2dsphere', 'Leaflet.js', 'GeoJSON'],
    metrics: [
      { label: 'Geo-Query Latency', val: '<35ms' },
      { label: 'Spatial Precision', val: '5 meters' },
      { label: 'Concurrent Users', val: '5,000+' }
    ],
    overview: 'Engineered a real-time geo-discovery web portal that enables users to query local services, verified vendors, and optimal routes with sub-35ms search latencies.',
    challenges: [
      'Performing complex spatial polygon calculations and radius queries without database bottlenecks.',
      'Rendering dynamic interactive maps on low-powered mobile devices without UI stutter.'
    ],
    solutions: [
      'Built compound geospatial indexes using MongoDB 2dsphere and memory-cached nearest neighbor lookups.',
      'Implemented vector tile clustering and dynamic bounding-box queries to limit frontend DOM nodes.'
    ]
  }
};

// Document Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Page Navigation for vCard Layout
  window.navigateToPage = function(targetPage) {
    if (!targetPage) return;
    const cleanTarget = targetPage.replace('#', '').trim().toLowerCase();
    const pages = document.querySelectorAll('[data-page]');
    const navLinks = document.querySelectorAll('[data-nav-link]');
    let found = false;

    pages.forEach(page => {
      if (page.dataset.page === cleanTarget) {
        page.classList.add('active');
        found = true;
      } else {
        page.classList.remove('active');
      }
    });

    navLinks.forEach(link => {
      const linkTarget = (link.dataset.navLink || link.innerText.trim()).toLowerCase();
      if (linkTarget === cleanTarget) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    if (found) {
      if (history.replaceState) {
        history.replaceState(null, null, `#${cleanTarget}`);
      } else {
        window.location.hash = cleanTarget;
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.sfx) window.sfx.playClick();
    }
  };

  // Wire up navbar buttons
  document.querySelectorAll('[data-nav-link]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.navLink || btn.innerText.trim().toLowerCase();
      window.navigateToPage(target);
    });
  });

  // Check URL hash on load
  const initialHash = window.location.hash.replace('#', '').toLowerCase();
  if (initialHash && document.querySelector(`[data-page="${initialHash}"]`)) {
    window.navigateToPage(initialHash);
  }

  // Handle browser back/forward buttons
  window.addEventListener('popstate', () => {
    const curHash = window.location.hash.replace('#', '').toLowerCase();
    if (curHash && document.querySelector(`[data-page="${curHash}"]`)) {
      window.navigateToPage(curHash);
    }
  });

  // Mobile sidebar toggle
  const sidebar = document.querySelector('[data-sidebar]');
  const sidebarBtn = document.querySelector('[data-sidebar-btn]');
  if (sidebar && sidebarBtn) {
    sidebarBtn.addEventListener('click', () => {
      sidebar.classList.toggle('active');
      if (window.sfx) window.sfx.playClick();
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

  // 3D Card Tilt & Interactive Spotlight Sheen on Cards
  const tiltCards = document.querySelectorAll('.glass-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Spotlight coordinates
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      // Gentle perspective tilt
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;

      card.style.transform = `perspective(1000px) rotateX(${deltaY * -3}deg) rotateY(${deltaX * 3}deg) translateY(-2px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });

    card.addEventListener('mouseenter', () => {
      sfx.playHover();
    });
  });

  // Single High-Resolution Executive Portrait Initialized
  const heroPortrait = document.getElementById('hero-portrait-img');
  if (heroPortrait) {
    heroPortrait.style.opacity = '1';
  }

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

  // Active Working Projects Catalog Filter
  const workingProjFilterBtns = document.querySelectorAll('.working-proj-filter');
  const workingProjCards = document.querySelectorAll('.working-project-card');

  if (workingProjFilterBtns.length > 0) {
    workingProjFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        workingProjFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        sfx.playClick();

        const filter = btn.dataset.filter;
        workingProjCards.forEach(card => {
          const category = card.dataset.projCategory || '';
          if (filter === 'all' || category.includes(filter)) {
            card.classList.remove('is-hidden');
            card.style.display = 'flex';
          } else {
            card.classList.add('is-hidden');
            card.style.display = 'none';
          }
        });
      });
    });
  }

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

  // Embedded Terminal in Terminal Tab
  const embeddedInput = document.getElementById('embedded-terminal-input');
  const embeddedOutput = document.getElementById('embedded-terminal-output');

  if (embeddedInput && embeddedOutput) {
    embeddedInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = embeddedInput.value.trim().toLowerCase();
        embeddedInput.value = '';

        if (!cmd) return;
        if (window.sfx) window.sfx.playClick();

        if (cmd === 'clear') {
          embeddedOutput.innerHTML = `
            <div style="color: var(--accent-cyan); font-weight: 700;">RishabhOS v3.8 [ARM64 - Darwin Kernel]</div>
            <div style="color: var(--text-secondary);">Direct terminal interface initialized. High-agency developer console active.</div>
            <div style="color: var(--text-muted); margin-bottom: 14px;">Type <span style="color: #6ee7b7; font-weight: 700;">help</span> to inspect available commands.</div>
          `;
          return;
        }

        const promptRow = document.createElement('div');
        promptRow.style.color = '#38bdf8';
        promptRow.style.marginTop = '8px';
        promptRow.textContent = `visitor@rishabh.dev:~$ ${cmd}`;
        embeddedOutput.appendChild(promptRow);

        const responseRow = document.createElement('div');
        responseRow.style.color = '#f1f5f9';
        responseRow.style.whiteSpace = 'pre-wrap';
        responseRow.style.marginBottom = '12px';

        if (TERMINAL_COMMANDS[cmd]) {
          responseRow.textContent = TERMINAL_COMMANDS[cmd];
        } else {
          responseRow.textContent = `zsh: command not found: ${cmd}. Type 'help' for available commands.`;
          responseRow.style.color = '#f87171';
        }

        embeddedOutput.appendChild(responseRow);
        embeddedOutput.scrollTop = embeddedOutput.scrollHeight;
      }
    });
  }

  // =========================================================================
  // KNOWLEDGE CHATOPS STUDIO & BLUEPRINT THEME CONTROLLER
  // =========================================================================

  // Theme Toggle: Technical Blueprint Dark (Default) / Light Mode
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const savedTheme = localStorage.getItem('rishabh_theme') || 'dark';
  if (savedTheme === 'light') {
    document.body.classList.add('light-canvas');
    if (themeToggleBtn) themeToggleBtn.innerHTML = '<span>🌙 Dark Mode</span>';
  } else {
    document.body.classList.remove('light-canvas');
    if (themeToggleBtn) themeToggleBtn.innerHTML = '<span>☀️ Light Mode</span>';
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-canvas');
      const isLight = document.body.classList.contains('light-canvas');
      localStorage.setItem('rishabh_theme', isLight ? 'light' : 'dark');
      themeToggleBtn.innerHTML = isLight ? '<span>🌙 Dark Mode</span>' : '<span>☀️ Light Mode</span>';
      if (window.sfx) window.sfx.playClick();
      if (window.showToast) window.showToast(isLight ? 'Light Blueprint Canvas Active' : 'Dark Obsidian Theme Active');
    });
  }

  // ChatOps Q&A Knowledge Engine
  const CHATOPS_KNOWLEDGE = {
    'architecture': {
      prompt: "How does Rishabh architect high-concurrency systems?",
      answer: "Rishabh architectures services using decoupled Next.js 14 edge SSR frontends, asynchronous Node.js/FastAPI gateways, BullMQ + Redis pub-sub message queues, and partitioned PostgreSQL databases. At SRC Cyber Solutions and Aozo, this stack processes 50,000+ operations/hr with 99.98% uptime SLA.",
      citations: [
        { name: "Aozo_Architecture_Spec.pdf", type: "pdf", pages: "pp. 14-22" },
        { name: "PostgreSQL_Sharding_Plan.docx", type: "docx", pages: "Section 4.2" }
      ]
    },
    'rag': {
      prompt: "Explain the Knowledge ChatOps RAG pipeline.",
      answer: "The pipeline ingests enterprise documents (PDF, DOCX, TXT) into Azure Blob Storage, triggers automated chunking and embeddings via Azure OpenAI (text-embedding-3-small), stores vectors in Azure AI Search with hybrid semantic reranking, and streams answers through FastAPI with strict schema validation and sub-80ms p95 latency.",
      citations: [
        { name: "Azure_RAG_Architecture.pdf", type: "pdf", pages: "Arch Diagram v2.1" },
        { name: "FastAPI_Vector_Search.txt", type: "txt", pages: "Endpoints" }
      ]
    },
    'seo': {
      prompt: "What are Rishabh's SEO, AEO & GEO achievements?",
      answer: "Engineered full-stack Semantic Schema.org JSON-LD knowledge graphs, dynamic server-side OpenGraph generators, and 100/100 Core Web Vitals optimization. Slashed release cycle times by 60% and achieved a +350% surge in organic enterprise discoverability across the US and India.",
      citations: [
        { name: "GEO_Whitepaper_2026.pdf", type: "pdf", pages: "Audit Report" }
      ]
    },
    'stack': {
      prompt: "What is Rishabh's verified core tech stack?",
      answer: "Core: Next.js 14, React 19, TypeScript, Node.js, Express, FastAPI, Python. Cloud & Infra: Docker, Kubernetes, Jenkins CI/CD, AWS (ECS, S3, CloudFront), Azure Container Apps. Databases: PostgreSQL, MongoDB, Redis, pgvector. AI: OpenAI API, Google Gemini, LangChain, MCP (Model Context Protocol).",
      citations: [
        { name: "Verified_Stack_Matrix.pdf", type: "pdf", pages: "Core Skills" }
      ]
    }
  };

  const chatStream = document.getElementById('chatops-stream');
  const chatInput = document.getElementById('chatops-input');
  const chatSendBtn = document.getElementById('chatops-send-btn');
  const citationsContainer = document.getElementById('chatops-citations-list');

  function renderChatOpsExchange(promptText, answerText, citations = []) {
    if (!chatStream) return;

    // User Message
    const userMsg = document.createElement('div');
    userMsg.className = 'chat-msg-user';
    userMsg.innerHTML = `
      <div class="chat-avatar-box">RS</div>
      <div class="chat-content-area">
        <div class="chat-prompt-text">${promptText}</div>
        <div style="font-size: 0.72rem; color: var(--ink-muted); font-family: var(--font-mono);">Client Query • Authenticated Session</div>
      </div>
    `;
    chatStream.appendChild(userMsg);

    // Bot Response
    const botMsg = document.createElement('div');
    botMsg.className = 'chat-msg-bot';
    botMsg.innerHTML = `
      <div class="bot-avatar-box">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"></path><rect x="4" y="8" width="16" height="12" rx="2"></rect><circle cx="9" cy="13" r="1.5"></circle><circle cx="15" cy="13" r="1.5"></circle><line x1="8" y1="17" x2="16" y2="17"></line></svg>
      </div>
      <div class="chat-content-area">
        <div class="bot-response-text">${answerText}</div>
        <div style="font-size: 0.72rem; color: #15803d; font-family: var(--font-mono); margin-top: 6px; font-weight: 700;">🟢 Grounded via Vector Hybrid Search • 0.04s latency</div>
      </div>
    `;
    chatStream.appendChild(botMsg);
    chatStream.scrollTop = chatStream.scrollHeight;

    // Update Citations Panel if available
    if (citationsContainer && citations.length > 0) {
      citationsContainer.innerHTML = citations.map(c => `
        <div class="citation-item">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span class="citation-badge ${c.type}">${c.type.toUpperCase()}</span>
            <span style="font-weight: 700; color: var(--ink-primary);">${c.name}</span>
          </div>
          <span style="color: var(--ink-muted); font-size: 0.72rem;">${c.pages} ↗</span>
        </div>
      `).join('');
    }

    if (window.sfx) window.sfx.playClick();
  }

  // Quick prompt chip triggers
  document.querySelectorAll('.quick-chip-btn').forEach(chip => {
    chip.addEventListener('click', () => {
      const topic = chip.getAttribute('data-topic');
      if (CHATOPS_KNOWLEDGE[topic]) {
        renderChatOpsExchange(CHATOPS_KNOWLEDGE[topic].prompt, CHATOPS_KNOWLEDGE[topic].answer, CHATOPS_KNOWLEDGE[topic].citations);
      }
    });
  });

  // Direct Input Submit
  function handleChatOpsSubmit() {
    if (!chatInput) return;
    const query = chatInput.value.trim();
    if (!query) return;
    chatInput.value = '';

    const lower = query.toLowerCase();
    let answer = "Rishabh has engineered 16+ production architectures including Aozo Enterprise Cloud Suite, Prime CRM (SRC Cyber Solutions), Messegy Omnichannel, and Ecomify.io. Reach out directly via WhatsApp at +91 7037564392 to discuss contracts, architecture reviews, or full-time engagements.";
    let citations = [{ name: "Rishabh_Master_Portfolio_2026.pdf", type: "pdf", pages: "All 16 Projects" }];

    if (lower.includes('rag') || lower.includes('ai') || lower.includes('llm') || lower.includes('search')) {
      answer = CHATOPS_KNOWLEDGE['rag'].answer;
      citations = CHATOPS_KNOWLEDGE['rag'].citations;
    } else if (lower.includes('scale') || lower.includes('database') || lower.includes('backend') || lower.includes('arch')) {
      answer = CHATOPS_KNOWLEDGE['architecture'].answer;
      citations = CHATOPS_KNOWLEDGE['architecture'].citations;
    } else if (lower.includes('seo') || lower.includes('geo') || lower.includes('google')) {
      answer = CHATOPS_KNOWLEDGE['seo'].answer;
      citations = CHATOPS_KNOWLEDGE['seo'].citations;
    } else if (lower.includes('skills') || lower.includes('stack') || lower.includes('tech')) {
      answer = CHATOPS_KNOWLEDGE['stack'].answer;
      citations = CHATOPS_KNOWLEDGE['stack'].citations;
    }

    renderChatOpsExchange(query, answer, citations);
  }

  if (chatSendBtn) chatSendBtn.addEventListener('click', handleChatOpsSubmit);
  if (chatInput) {
    chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleChatOpsSubmit();
    });
  }

  // Simulated Document Upload Ingestion
  const uploadTrigger = document.getElementById('chatops-upload-trigger');
  const indexedDocsList = document.getElementById('chatops-indexed-docs');

  if (uploadTrigger && indexedDocsList) {
    uploadTrigger.addEventListener('click', () => {
      if (window.sfx) window.sfx.playClick();
      if (window.showToast) window.showToast('Indexing new document into Azure AI Search...');

      setTimeout(() => {
        const sampleDocs = [
          { name: "Enterprise_SaaS_Blueprint_v4.pdf", type: "pdf" },
          { name: "Microservices_Kafka_Spec.docx", type: "docx" },
          { name: "RAG_Vector_Embeddings_Log.txt", type: "txt" }
        ];
        const randomDoc = sampleDocs[Math.floor(Math.random() * sampleDocs.length)];

        const newRow = document.createElement('div');
        newRow.className = 'doc-row';
        newRow.innerHTML = `
          <div class="doc-name-group">
            <span class="citation-badge ${randomDoc.type}">${randomDoc.type.toUpperCase()}</span>
            <span style="font-weight: 700; color: var(--ink-primary);">${randomDoc.name}</span>
          </div>
          <span class="trash-btn" title="Delete Index Node" onclick="this.closest('.doc-row').remove(); if(window.showToast) window.showToast('Document removed from index.');">🗑️</span>
        `;
        indexedDocsList.prepend(newRow);
        if (window.showToast) window.showToast(`✓ Ingested ${randomDoc.name} into Knowledge Base!`);
      }, 700);
    });
  }

  // ChatOps Subnav Switcher
  document.querySelectorAll('.chatops-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.chatops-nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const tab = btn.getAttribute('data-chatops-tab');
      if (window.sfx) window.sfx.playClick();
      if (window.showToast) window.showToast(`Navigated to ${tab.toUpperCase()} module`);
    });
  });

  // Copy email button helper
  document.querySelectorAll('.copy-email-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText('ersrivastavarishabh@gmail.com').then(() => {
        window.showToast('Copied: ersrivastavarishabh@gmail.com');
      });
    });
  });

  // Contact Form Submission (Both ID variants)
  const contactForm = document.getElementById('contact-form') || document.getElementById('portfolio-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.querySelector('[name="fullname"]')?.value || contactForm.querySelector('[name="name"]')?.value || 'Client';
      const email = contactForm.querySelector('[name="email"]')?.value || '';
      const subject = contactForm.querySelector('[name="subject"]')?.value || 'New Project Engagement';
      const message = contactForm.querySelector('[name="message"]')?.value || '';

      const encodedMsg = encodeURIComponent(`Hi Rishabh, my name is ${name} (${email}). Subject: ${subject}. Message: ${message}`);
      window.showToast('✓ Transmission Sent! Launching direct WhatsApp connect...');

      setTimeout(() => {
        window.open(`https://api.whatsapp.com/send/?phone=917037564392&text=${encodedMsg}`, '_blank');
      }, 1000);

      contactForm.reset();
    });
  }

  // Close modals on clicking backdrop or close buttons
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });

  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const modal = btn.closest('.modal-overlay');
      if (modal) modal.classList.remove('active');
    });
  });

  // Global ESC key listener to close modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach(m => m.classList.remove('active'));
    }
  });
});


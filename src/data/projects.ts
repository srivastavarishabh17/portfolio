import { ProjectCaseStudy } from '@/types';

export const PROJECTS_DATA: ProjectCaseStudy[] = [
  {
    id: 'aozo-suite',
    title: 'Aozo Cloud Enterprise Operating Suite',
    subtitle: 'Unified cloud business suite spanning CRM, project tracking, high-throughput mail gateways, real-time chat, and accounting.',
    category: 'enterprise',
    copyright: 'PROPRIETARY IP — ACTIVE ENTERPRISE SYSTEM',
    copyrightClass: 'commercial',
    copyrightNotice: 'Commercial Enterprise Architecture powering business operations across aozo.in sub-services.',
    client: 'Aozo Technologies (aozo.in)',
    role: 'Lead Architect & Core Systems Engineer',
    timeline: '2024 - Present',
    stack: ['TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'BullMQ', 'WebSockets', 'TailwindCSS'],
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
    ],
    liveUrl: 'https://aozo.in',
    badge: 'ACTIVE SAAS',
    bannerTag: 'Commercial Platform',
    macTitle: 'aozo.in • production-suite'
  },
  {
    id: 'prime-crm',
    title: 'Prime Platform: Enterprise CRM & EDM Dispatch Engine',
    subtitle: 'High-concurrency business platform powering real client communications, lead lifecycle tracking, and analytics.',
    category: 'enterprise',
    copyright: 'CLIENT PROPRIETARY / COMMERCIAL SUITE',
    copyrightClass: 'commercial',
    copyrightNotice: 'Enterprise CRM & Electronic Direct Mail dispatch architecture designed for high-concurrency transactional pipelines.',
    client: 'Enterprise Commercial Suite',
    role: 'Principal Architecture & Platform Lead',
    timeline: '2023 - Present',
    stack: ['Next.js SSR', 'Node.js', 'PostgreSQL', 'Redis', 'BullMQ', 'Jenkins', 'GitHub Actions', 'TailwindCSS'],
    metrics: [
      { label: 'Release Cycle Time', val: '-60%' },
      { label: 'Active Business Users', val: 'Enterprise Scale' },
      { label: 'Uptime Reliability', val: '99.98%' }
    ],
    overview: 'The Prime Platform is an enterprise-grade Customer Relationship Management (CRM) and Electronic Direct Mail (EDM) ecosystem. It centralizes client communication, tracking, and campaign analytics into one cohesive, ultra-fast interface.',
    challenges: [
      'Processing high volumes of outgoing campaigns without UI latency or request timeouts.',
      'Unifying multiple telemetry data streams into a single client-facing dashboard.',
      'Maintaining zero-downtime during multi-tenant database migrations and continuous releases.'
    ],
    solutions: [
      'Migrated legacy views to Next.js App Router with server-side rendered components, slashing First Contentful Paint (FCP) to under 700ms.',
      'Constructed asynchronous message queuing using Redis and background worker threads for mass EDM dispatches.',
      'Instituted automated Jenkins & GitHub Actions pipelines that run tests and trigger rolling deployments on every approved PR.'
    ],
    badge: 'ENTERPRISE SUITE',
    bannerTag: 'Commercial Suite',
    macTitle: 'prime-crm • enterprise-dispatch'
  },
  {
    id: 'messegy-suite',
    title: 'Messegy: Omnichannel Communication & Campaign Platform',
    subtitle: 'High-throughput omnichannel messaging infrastructure, support helpdesk, Shopify integrations, and AI MCP agents.',
    category: 'enterprise ai',
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
    ],
    liveUrl: 'https://messegy.com',
    badge: 'ACTIVE SAAS',
    bannerTag: 'Omnichannel Cloud',
    macTitle: 'messegy.com • omnichannel'
  },
  {
    id: 'ecomify-platform',
    title: 'Ecomify.io Multi-Tenant eCommerce Builder',
    subtitle: 'Scalable cloud commerce builder enabling merchants to launch bespoke storefronts with custom plugins and checkout pipelines.',
    category: 'ecommerce',
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
    ],
    liveUrl: 'https://ecomify.io',
    badge: 'ACTIVE SAAS',
    bannerTag: 'Headless Commerce',
    macTitle: 'ecomify.io • cloud-builder'
  },
  {
    id: 'alphazon-lms',
    title: 'Alphazon Enterprise Learning Management System',
    subtitle: 'Comprehensive educational platform delivering streaming video curricula, live exams, and automated certificate generation.',
    category: 'enterprise',
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
    solutions: ['Implemented adaptive bitrate HLS video transcode pipelines stored in AWS S3 and distributed via CloudFront edge caches.'],
    liveUrl: 'https://alphazon.in',
    badge: 'EDTECH PLATFORM',
    bannerTag: 'Streaming LMS',
    macTitle: 'alphazon.in • lms-cloud'
  },
  {
    id: 'myayushclinic',
    title: 'MyAyushClinic: Tele-Consultation & Healthcare Suite',
    subtitle: 'Integrated healthcare web portal, clinical records backend, and native patient mobile application.',
    category: 'api',
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
    overview: 'A digital clinical ecosystem encompassing myayushclinic.com, backend telemetry, and mobile apps for real-time doctor appointments and prescription generation.',
    challenges: ['Securing patient diagnostic records and providing zero-lag video tele-consultations.'],
    solutions: ['Constructed end-to-end encrypted WebRTC peer video tunnels and encrypted patient health records (EHR) with strict access control audits.'],
    liveUrl: 'https://myayushclinic.com',
    badge: 'HEALTHCARE CLOUD',
    bannerTag: 'Telemedicine',
    macTitle: 'myayushclinic.com • portal'
  },
  {
    id: 'genai-reporting',
    title: 'GenAI Dynamic Graphical Reporting & Analytics Engine',
    subtitle: 'Automated executive insights pipeline combining LLMs with programmatic chart generation.',
    category: 'ai',
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
    ],
    badge: 'AUTONOMOUS AI',
    bannerTag: 'Data Synthesis',
    macTitle: 'genai • reporting-engine'
  },
  {
    id: 'seo-aeo-geo',
    title: 'Multi-Region SEO, AEO & Generative Engine Optimization (GEO) Suite',
    subtitle: 'Advanced discoverability framework engineered for Google, Perplexity, SearchGPT & Gemini.',
    category: 'enterprise',
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
    ],
    badge: 'ORGANIC GROWTH',
    bannerTag: 'GEO & Entity SEO',
    macTitle: 'geo-suite • semantic-engine'
  },
  {
    id: 'tallyprime-agent',
    title: 'TallyPrime Autonomous AI Telemetry Agent',
    subtitle: 'Autonomous intelligence agent bridging TallyPrime desktop accounting with cloud telemetry and predictive cashflow analytics.',
    category: 'ai api',
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
    solutions: ['Developed a robust streaming XML parser that normalizes financial transactions into strongly typed TypeScript schemas for immediate AI evaluation.'],
    badge: 'AI AGENT',
    bannerTag: 'FinTech Automation',
    macTitle: 'tally • ai-agent'
  },
  {
    id: 'saattviknatural',
    title: 'Saattvik Natural: Direct-to-Consumer eCommerce Store',
    subtitle: 'High-conversion online retail store for Ayurvedic wellness products, featuring automated shipping label generation and payment reconciliation.',
    category: 'ecommerce',
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
    solutions: ['Implemented aggressive database query caching and automatic postal code serviceability lookups via courier API integrations.'],
    liveUrl: 'https://saattviknatural.com',
    badge: 'LIVE STORE',
    bannerTag: 'D2C Commerce',
    macTitle: 'saattviknatural.com • store'
  },
  {
    id: 'fynd-platform',
    title: 'Fynd: Real-Time Geo-Discovery Web Portal',
    subtitle: 'High-speed proximity discovery engine utilizing MongoDB 2dsphere spatial indexes to deliver instant location queries.',
    category: 'api',
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
    ],
    badge: 'GEOSPATIAL',
    bannerTag: 'Spatial Discovery',
    macTitle: 'fynd • geo-proximity'
  },
  {
    id: 'ai-face-detector',
    title: 'AI Computer Vision & Face Detection Mobile Suite',
    subtitle: 'Native Android application utilizing on-device machine learning for facial feature mapping & augmented faces.',
    category: 'ai',
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
    ],
    badge: 'OPEN SOURCE',
    bannerTag: 'Computer Vision',
    macTitle: 'android • cv-mesh'
  }
];

'use client';

import React, { useState } from 'react';
import { playClickSound } from '@/utils/audio';

interface PortfolioTabProps {
  isActive: boolean;
  onOpenCaseStudy: (projectId: string) => void;
}

interface ProjectCardData {
  id: string;
  category: string;
  headerBg: string;
  macTitle: string;
  badge: string;
  badgeClass: string;
  title: string;
  tagline: string;
  desc: string;
  tech: { name: string; highlight?: boolean }[];
  actionLabel?: string;
  actionUrl?: string;
  actionBtnClass?: string;
  caseStudyBtnClass: string;
  bannerType?: string;
}

const PROJECTS_LIST: ProjectCardData[] = [
  {
    id: 'aozo-suite',
    category: 'enterprise',
    headerBg: 'var(--pastel-blue)',
    macTitle: 'aozo.in • production-suite',
    badge: 'ACTIVE PRODUCTION',
    badgeClass: 'mint',
    title: 'Aozo Enterprise Cloud Suite',
    tagline: 'Multi-tenant enterprise cloud OS unifying operations, CRM, 50k/hr email relay, and real-time WebSockets.',
    desc: 'High-availability business cloud infrastructure powering verified subdomains: app.aozo.in, crm.aozo.in, mailapi.aozo.in, chatapi.aozo.in, accounting.aozo.in, and desk.aozo.in. Built for distributed fault-tolerance.',
    tech: [
      { name: 'React', highlight: true },
      { name: 'Node.js', highlight: true },
      { name: 'PostgreSQL', highlight: true },
      { name: 'Redis' },
      { name: 'WebSockets' },
      { name: 'Docker' }
    ],
    actionLabel: 'Visit aozo.in ↗',
    actionUrl: 'https://aozo.in',
    actionBtnClass: 'blue',
    caseStudyBtnClass: 'mint'
  },
  {
    id: 'prime-crm',
    category: 'enterprise',
    headerBg: 'var(--pastel-yellow)',
    macTitle: 'prime-crm • enterprise-dispatch',
    badge: 'ENTERPRISE SUITE',
    badgeClass: 'yellow',
    title: 'Prime Platform CRM & EDM',
    tagline: 'Enterprise CRM & Electronic Direct Mail dispatching system powering business funnels.',
    desc: 'High-concurrency portal handling partner integrations, automated CI/CD releases with Jenkins, and +350% SEO/GEO surge. Release cycles slashed by 60%.',
    tech: [
      { name: 'Next.js SSR', highlight: true },
      { name: 'Node.js' },
      { name: 'PostgreSQL' },
      { name: 'Redis' },
      { name: 'Jenkins' }
    ],
    bannerType: 'Commercial Platform',
    caseStudyBtnClass: 'yellow'
  },
  {
    id: 'messegy-suite',
    category: 'enterprise ai',
    headerBg: 'var(--pastel-mint)',
    macTitle: 'messegy.com • omnichannel',
    badge: 'ACTIVE SAAS',
    badgeClass: 'mint',
    title: 'Messegy Omnichannel Platform',
    tagline: 'Enterprise messaging suite unifying WhatsApp, SMS, webhooks, and MCP AI servers.',
    desc: 'Verified subdomains: portal.messegy.com, helpdesk.messegy.com, auth.messegy.com, mcp.messegy.com, and shopify.messegy.com.',
    tech: [
      { name: 'Next.js', highlight: true },
      { name: 'Node.js' },
      { name: 'BullMQ' },
      { name: 'Meta Cloud API' },
      { name: 'MCP AI' }
    ],
    actionLabel: 'Visit messegy.com ↗',
    actionUrl: 'https://messegy.com',
    actionBtnClass: 'mint',
    caseStudyBtnClass: 'lavender'
  },
  {
    id: 'ecomify-platform',
    category: 'ecommerce enterprise',
    headerBg: 'var(--pastel-lavender)',
    macTitle: 'ecomify.io • headless',
    badge: 'ACTIVE D2C',
    badgeClass: 'lavender',
    title: 'Ecomify.io Commerce Platform',
    tagline: 'Multi-tenant cloud eCommerce with atomic inventory locking & custom plugin SDKs.',
    desc: 'Verified subdomains: app.ecomify.io and backend.ecomify.io. Sub-second headless checkout APIs with Razorpay & Stripe integration.',
    tech: [
      { name: 'Next.js', highlight: true },
      { name: 'MongoDB' },
      { name: 'Redis Locks' },
      { name: 'Stripe' },
      { name: 'Razorpay' }
    ],
    actionLabel: 'Visit ecomify.io ↗',
    actionUrl: 'https://ecomify.io',
    actionBtnClass: 'lavender',
    caseStudyBtnClass: 'blue'
  },
  {
    id: 'tallyprime-agent',
    category: 'ai enterprise',
    headerBg: 'var(--pastel-peach)',
    macTitle: 'tallyprime.daemon • fintech',
    badge: 'AUTONOMOUS AI',
    badgeClass: 'peach',
    title: 'TallyPrime Autonomous AI Agent',
    tagline: 'Windows daemon & XML/ODBC parser connecting ERP data to cloud Gemini LLMs.',
    desc: 'Autonomous ledger sync and automated P&L audit reports with zero human latency. Slashed manual auditing time by 90%.',
    tech: [
      { name: 'TypeScript', highlight: true },
      { name: 'Node.js' },
      { name: 'XML/ODBC' },
      { name: 'Gemini LLM' },
      { name: 'PostgreSQL' }
    ],
    bannerType: 'Background Daemon',
    caseStudyBtnClass: 'peach'
  },
  {
    id: 'alphazon-lms',
    category: 'enterprise',
    headerBg: 'var(--pastel-blue)',
    macTitle: 'alphazon.in • lms',
    badge: 'PRODUCTION',
    badgeClass: 'blue',
    title: 'Alphazon Enterprise LMS',
    tagline: 'High-capacity LMS with adaptive HLS video streaming & auto-grading exams.',
    desc: 'Verified subdomain: lms.alphazon.in. Integrated video playback curricula, instant digital certificates, and student analytics dashboards.',
    tech: [
      { name: 'React', highlight: true },
      { name: 'Node.js' },
      { name: 'HLS Streaming' },
      { name: 'PostgreSQL' },
      { name: 'AWS CloudFront' }
    ],
    actionLabel: 'Visit alphazon.in ↗',
    actionUrl: 'https://alphazon.in',
    actionBtnClass: 'blue',
    caseStudyBtnClass: 'yellow'
  },
  {
    id: 'myayushclinic',
    category: 'health mobile',
    headerBg: 'var(--pastel-mint)',
    macTitle: 'myayushclinic • healthtech',
    badge: 'HEALTHTECH',
    badgeClass: 'mint',
    title: 'MyAyushClinic HealthTech Suite',
    tagline: 'Telemedicine platform with real-time WebRTC consultations & digital prescriptions.',
    desc: 'Doctor consultation booking, encrypted electronic health records, medication schedules, and payment gateway integration.',
    tech: [
      { name: 'React Native', highlight: true },
      { name: 'Node.js' },
      { name: 'WebRTC' },
      { name: 'PostgreSQL' }
    ],
    bannerType: 'Telemedicine Suite',
    caseStudyBtnClass: 'mint'
  },
  {
    id: 'saattvik-store',
    category: 'ecommerce',
    headerBg: 'var(--pastel-yellow)',
    macTitle: 'saattvik.store • d2c',
    badge: 'ECOMMERCE',
    badgeClass: 'yellow',
    title: 'Saattvik Natural D2C Store',
    tagline: 'Organic Ayurvedic wellness storefront with sub-second page loads and Razorpay.',
    desc: 'High-converting headless D2C storefront with dynamic cart drawers, instant checkout flows, and automated inventory sync.',
    tech: [
      { name: 'Next.js', highlight: true },
      { name: 'Tailwind' },
      { name: 'Razorpay' },
      { name: 'Node.js' }
    ],
    bannerType: 'D2C Storefront',
    caseStudyBtnClass: 'yellow'
  },
  {
    id: 'smart-qr',
    category: 'enterprise',
    headerBg: 'var(--pastel-coral)',
    macTitle: 'smartqr.engine • routing',
    badge: 'ROUTING',
    badgeClass: 'coral',
    title: 'Smart QR Dynamic Engine',
    tagline: 'Enterprise routing system with real-time scan analytics and UTM attribution.',
    desc: 'High-throughput redirection router processing millions of scans with sub-10ms latency using Redis in-memory lookup.',
    tech: [
      { name: 'Fastify', highlight: true },
      { name: 'Redis' },
      { name: 'PostgreSQL' },
      { name: 'Docker' }
    ],
    bannerType: 'Dynamic Router',
    caseStudyBtnClass: 'coral'
  },
  {
    id: 'realtime-vision',
    category: 'mobile ai',
    headerBg: 'var(--pastel-lavender)',
    macTitle: 'vision.ar • 60fps',
    badge: 'COMPUTER VISION',
    badgeClass: 'lavender',
    title: 'Real-Time Computer Vision AR',
    tagline: 'On-device 60 FPS face mesh tracking & virtual try-on engine using Google ML Kit.',
    desc: 'Android & React Native AR engine performing 468-point 3D facial landmark detection on-device with zero server latency.',
    tech: [
      { name: 'React Native', highlight: true },
      { name: 'Google ML Kit' },
      { name: 'OpenGL' },
      { name: 'WebRTC' }
    ],
    bannerType: 'On-Device AI',
    caseStudyBtnClass: 'lavender'
  },
  {
    id: 'event-microservices',
    category: 'enterprise',
    headerBg: 'var(--pastel-blue)',
    macTitle: 'event.mesh • bullmq',
    badge: 'DISTRIBUTED',
    badgeClass: 'blue',
    title: 'Event-Driven Microservices Engine',
    tagline: 'Distributed pub-sub event topology orchestrating transactional tasks across services.',
    desc: 'Engineered with BullMQ, Redis clusters, and idempotency keys to ensure exactly-once delivery and zero data loss during traffic surges.',
    tech: [
      { name: 'Node.js', highlight: true },
      { name: 'BullMQ' },
      { name: 'Redis' },
      { name: 'PostgreSQL' },
      { name: 'Docker' }
    ],
    bannerType: 'Event Mesh',
    caseStudyBtnClass: 'blue'
  },
  {
    id: 'nextjs-geo',
    category: 'enterprise ai',
    headerBg: 'var(--pastel-mint)',
    macTitle: 'geo.engine • aeo',
    badge: 'SEO & GEO',
    badgeClass: 'mint',
    title: 'Next.js 14 GEO Architecture',
    tagline: 'Generative Engine Optimization framework for LLM knowledge graph indexing.',
    desc: 'Automated Schema.org semantic JSON-LD injection, server-rendered open-graph cards, and edge caching delivering 100/100 Core Web Vitals.',
    tech: [
      { name: 'Next.js 14', highlight: true },
      { name: 'Schema.org' },
      { name: 'Edge Cache' },
      { name: 'TypeScript' }
    ],
    bannerType: 'GEO Framework',
    caseStudyBtnClass: 'mint'
  },
  {
    id: 'llm-agent',
    category: 'ai',
    headerBg: 'var(--pastel-yellow)',
    macTitle: 'llm.agent • mcp',
    badge: 'AI AGENT',
    badgeClass: 'yellow',
    title: 'LLM Autonomous Agent',
    tagline: 'Multi-tool autonomous agent executing API workflows via Model Context Protocol.',
    desc: 'Leverages OpenAI and Gemini function calling with strict JSON schema validation, vector search retrieval, and safe sandboxed execution.',
    tech: [
      { name: 'FastAPI', highlight: true },
      { name: 'OpenAI' },
      { name: 'pgvector' },
      { name: 'MCP' }
    ],
    bannerType: 'Autonomous Agent',
    caseStudyBtnClass: 'yellow'
  },
  {
    id: 'jenkins-pipeline',
    category: 'enterprise',
    headerBg: 'var(--pastel-coral)',
    macTitle: 'jenkins.cicd • devops',
    badge: 'DEVOPS',
    badgeClass: 'coral',
    title: 'Automated Jenkins CI/CD Pipeline',
    tagline: 'Zero-downtime rolling container deployments with automated unit & regression tests.',
    desc: 'Automated multi-stage Docker build caching, linting, security audits, and zero-downtime rolling updates slashing manual overhead by 60%.',
    tech: [
      { name: 'Jenkins', highlight: true },
      { name: 'Docker' },
      { name: 'GitHub Actions' },
      { name: 'Bash' }
    ],
    bannerType: 'DevOps Automation',
    caseStudyBtnClass: 'coral'
  },
  {
    id: 'redis-cache',
    category: 'enterprise',
    headerBg: 'var(--pastel-blue)',
    macTitle: 'redis.cache • sub-ms',
    badge: 'HIGH SPEED',
    badgeClass: 'blue',
    title: 'Redis High-Throughput Cache',
    tagline: 'Sub-millisecond session state and optimistic locking cluster for 100k+ users.',
    desc: 'Atomic increments, distributed locks (Redlock), and sliding-window rate limiters protecting upstream database clusters.',
    tech: [
      { name: 'Redis', highlight: true },
      { name: 'Node.js' },
      { name: 'Redlock' },
      { name: 'Express' }
    ],
    bannerType: 'Cache Topology',
    caseStudyBtnClass: 'blue'
  },
  {
    id: 'shopify-headless',
    category: 'ecommerce',
    headerBg: 'var(--pastel-peach)',
    macTitle: 'shopify.headless • payment',
    badge: 'FINTECH',
    badgeClass: 'peach',
    title: 'Headless Shopify & Razorpay Suite',
    tagline: 'GraphQL storefront API integration with custom checkout and automated tax calculation.',
    desc: 'Blazing fast shopping experience with webhook order confirmations, SMS dispatch via Twilio/Gupshup, and Razorpay standard checkout.',
    tech: [
      { name: 'Shopify GraphQL', highlight: true },
      { name: 'Next.js' },
      { name: 'Razorpay' },
      { name: 'Node.js' }
    ],
    bannerType: 'eCommerce Engine',
    caseStudyBtnClass: 'peach'
  }
];

export const PortfolioTab: React.FC<PortfolioTabProps> = ({ isActive, onOpenCaseStudy }) => {
  const [filter, setFilter] = useState<string>('all');

  const filterButtons = [
    { key: 'all', label: 'All Systems (16)' },
    { key: 'enterprise', label: 'Enterprise & SaaS (6)' },
    { key: 'ecommerce', label: 'eCommerce & D2C (4)' },
    { key: 'ai', label: 'GenAI & Automation (5)' },
    { key: 'health', label: 'HealthTech (2)' },
    { key: 'mobile', label: 'Mobile & Vision (3)' }
  ];

  const filteredProjects = PROJECTS_LIST.filter((p) => {
    if (filter === 'all') return true;
    return p.category.includes(filter);
  });

  return (
    <article className={`portfolio ${isActive ? 'active' : ''}`} data-page="portfolio">
      <h2 className="section-headline">Portfolio &amp; Production Architectures (16)</h2>

      {/* Category Filters */}
      <div className="portfolio-filter-strip">
        {filterButtons.map((btn) => (
          <button
            key={btn.key}
            className={`filter-btn ${filter === btn.key ? 'active' : ''}`}
            data-filter={btn.key}
            onClick={() => {
              playClickSound();
              setFilter(btn.key);
            }}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* 16 Working Projects Bento Grid */}
      <div className="portfolio-bento-grid">
        {filteredProjects.map((p) => (
          <div
            key={p.id}
            className={`project-mac-card ${p.id === 'aozo-suite' ? 'featured' : ''}`}
            data-proj-category={p.category}
          >
            <div className="project-card-header" style={{ background: p.headerBg }}>
              <div className="mac-dots">
                <span className="mac-dot red"></span>
                <span className="mac-dot yellow"></span>
                <span className="mac-dot green"></span>
              </div>
              <span className="mac-window-title">{p.macTitle}</span>
              <span className={`neo-pill ${p.badgeClass}`} style={{ fontSize: '0.68rem' }}>
                {p.badge}
              </span>
            </div>
            <div className="project-banner-info">
              <h3 className="project-title">{p.title}</h3>
              <p className="project-tagline">{p.tagline}</p>
            </div>
            <div className="project-card-body">
              <p className="project-desc">{p.desc}</p>
              <div className="project-tech-strip">
                {p.tech.map((t, idx) => (
                  <span key={idx} className={`tech-chip ${t.highlight ? 'highlight' : ''}`}>
                    {t.name}
                  </span>
                ))}
              </div>
              <div className="project-actions-strip">
                {p.actionUrl ? (
                  <a
                    href={p.actionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`neo-btn ${p.actionBtnClass || 'blue'} neo-btn-sm`}
                  >
                    {p.actionLabel}
                  </a>
                ) : (
                  <span style={{ fontSize: '0.76rem', color: 'var(--ink-muted)', fontFamily: 'var(--font-mono)' }}>
                    {p.bannerType}
                  </span>
                )}
                <button
                  className={`neo-btn ${p.caseStudyBtnClass} neo-btn-sm open-case-study-btn`}
                  data-project={p.id}
                  onClick={() => {
                    playClickSound();
                    onOpenCaseStudy(p.id);
                  }}
                >
                  View Architecture →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

import { TimelineRole, SkillCategory } from '@/types';

export const TIMELINE_ROLES: TimelineRole[] = [
  {
    role: 'Principal Product Architect & Core Engineer',
    company: 'Proprietary SaaS & Cloud Products',
    locationOrEcosystem: '• Aozo Ecosystem & Messegy',
    period: '2022 — Present',
    pillColor: 'mint',
    bullets: [
      'Architected and engineered enterprise SaaS suites including Aozo Cloud (6 integrated business micro-frontends) and Messegy Omnichannel messaging platform.',
      'Built asynchronous Redis + BullMQ message relays handling 50,000+ transactional dispatches per hour with sub-25ms sync latency.',
      'Implemented automated CI/CD deployment pipelines with GitHub Actions and Docker, slashing release cycles by 60%.',
      'Maintained 99.98% uptime SLA across high-throughput transactional database clusters and caching layers.'
    ]
  },
  {
    role: 'Enterprise Consultant & Solutions Architect',
    company: 'Client Collaborations (D2C, HealthTech & FinTech)',
    locationOrEcosystem: '• Remote / Global Clients',
    period: '2021 — 2023',
    pillColor: 'yellow',
    bullets: [
      'Delivered headless eCommerce engines for clients including Saattvik Natural and Ecomify.io with sub-second checkout speeds and atomic inventory locking.',
      'Engineered HIPAA-compliant telemedicine platform MyAyushClinic connecting practitioners and patients with encrypted real-time consultations.',
      'Built high-converting Web & Mobile architectures, custom API gateways, and payment gateway integrations for emerging startups.'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'FRONTEND ARCHITECTURE',
    headerColor: 'var(--pastel-blue)',
    skills: [
      { name: 'Next.js 14 / SSR', isHighlight: true },
      { name: 'React 19', isHighlight: true },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'Zustand / Redux' },
      { name: 'Web Audio API' },
      { name: 'Core Web Vitals 100' }
    ]
  },
  {
    title: 'BACKEND & CLOUD',
    headerColor: 'var(--pastel-mint)',
    skills: [
      { name: 'Node.js / Express', isHighlight: true },
      { name: 'FastAPI / Python', isHighlight: true },
      { name: 'BullMQ Queues' },
      { name: 'WebSockets' },
      { name: 'Docker Containers' },
      { name: 'AWS ECS / S3' },
      { name: 'VPS Linux / Nginx' }
    ]
  },
  {
    title: 'DATABASES & CACHING',
    headerColor: 'var(--pastel-yellow)',
    skills: [
      { name: 'PostgreSQL Partitioning', isHighlight: true },
      { name: 'Redis Pub/Sub', isHighlight: true },
      { name: 'MongoDB Spatial' },
      { name: 'MySQL Relational' },
      { name: 'Vector Embeddings' },
      { name: 'Prisma / Drizzle ORM' }
    ]
  },
  {
    title: 'AI & SYSTEM DESIGN',
    headerColor: 'var(--pastel-lavender)',
    skills: [
      { name: 'Decoupled Microservices', isHighlight: true },
      { name: 'Model Context Protocol (MCP)', isHighlight: true },
      { name: 'LLM Function Calling' },
      { name: 'Retrieval Augmented Generation (RAG)' },
      { name: 'Event-Driven Systems' },
      { name: 'Schema.org JSON-LD' }
    ]
  }
];

export const EDUCATION_DATA = [
  {
    institution: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU)',
    degree: 'Bachelor of Technology — Computer Science & Engineering',
    period: '2020 — 2024',
    location: 'Uttar Pradesh, India',
    pill: 'COMPLETED'
  }
];

export const CERTIFICATIONS_DATA = [
  {
    title: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Meta / Coursera',
    year: '2023',
    credentialId: 'VERIFIED'
  },
  {
    title: 'Modern Distributed Systems Architecture',
    issuer: 'Cloud & System Design Institute',
    year: '2024',
    credentialId: 'VERIFIED'
  },
  {
    title: 'Generative AI & LLM Systems Engineering',
    issuer: 'Deep Learning & AI Systems',
    year: '2024',
    credentialId: 'VERIFIED'
  }
];

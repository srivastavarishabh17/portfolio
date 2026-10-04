import { BlogArticle } from '@/types';

export const INITIAL_ARTICLES: BlogArticle[] = [
  {
    id: 'geo-seo-2026-guide',
    title: 'The 2026 Guide to GEO (Generative Engine Optimization): How to Rank in Perplexity, ChatGPT & Gemini',
    slug: 'geo-generative-engine-optimization-guide',
    category: 'SEO & GEO',
    date: 'March 28, 2026',
    readTime: '7 min read',
    cover: '/assets/blog/blog-1.jpg',
    excerpt: 'Traditional Google blue links are no longer enough. Learn how to architect Schema.org entities, high-density factual citations, and JSON-LD graphs so AI Answer Engines cite you as the authoritative source.',
    content: `## The Paradigm Shift: From SERPs to Generative Answer Engines

For two decades, Search Engine Optimization revolved around indexing keywords, meta descriptions, and backlink velocity. In 2026, the landscape has radically pivoted towards **GEO (Generative Engine Optimization)** and **AEO (Answer Engine Optimization)**.

Large Language Models (LLMs) such as Perplexity, Google Gemini, SearchGPT, and Claude do not browse web pages the way traditional Googlebot used to. Instead, they synthesize direct factual responses using Retrieval-Augmented Generation (RAG).

### 1. High-Density Knowledge Graphs & Semantic Entities

To get cited by AI engines, your content must be parsed as distinct entities:
- **Direct Definitional Anchors**: Provide concise, self-contained definitions within the first 120 words of each section.
- **Deep JSON-LD Graph Linking**: Connect your \`Person\`, \`Article\`, and \`Organization\` schemas to canonical Wikidata and Wikipedia URIs.
- **Statistical Citations**: AI models strongly prefer authoritative assertions backed by metrics (e.g., *"350% increase in discoverability"* over *"significant growth"*).

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Generative Engine Optimization Architecture",
  "author": {
    "@type": "Person",
    "name": "Rishabh Srivastava",
    "url": "https://rishabhsrivastava.in"
  },
  "keywords": ["GEO", "AEO", "AI Overviews", "Perplexity Citation Optimization"]
}
\`\`\`

### 2. Core Web Vitals Still Dictate Crawl Budget

If your server takes 800ms to respond or shifts layout (CLS > 0.1), AI agents with aggressive timeout thresholds will bypass your domain in favor of faster cached sources. 
Sub-second Time-to-First-Byte (TTFB) and Next.js SSR / SSG are non-negotiable.

### Conclusion

GEO is not about tricking an algorithm. It is about engineering structured, verifiable, and lightning-fast digital sources that AI engines cannot afford to ignore.`
  },
  {
    id: 'enterprise-crm-nextjs-nodejs',
    title: 'Building an Enterprise CRM & EDM Platform with Next.js & Node.js: Lessons from Prime Platform',
    slug: 'enterprise-crm-nextjs-nodejs-prime-platform',
    category: 'Architecture',
    date: 'February 14, 2026',
    readTime: '9 min read',
    cover: '/assets/blog/blog-2.jpg',
    excerpt: 'Behind the scenes of building high-concurrency client dashboards, multi-tenant database partitioning, automated EDM pipelines, and third-party API orchestration.',
    content: `## Scaling Client Dashboards to Enterprise Demands

When designing the Prime Platform CRM & EDM infrastructure, our core challenge was maintaining sub-100ms UI responsiveness while processing thousands of marketing triggers, customer data records, and third-party API payloads simultaneously.

### The Stack: Next.js + Node.js + Micro-services

1. **Frontend Architecture**: Next.js App Router with React Server Components (RSC) to minimize clientside bundle weight.
2. **Backend Services**: Node.js & Express microservices paired with Redis for token caching and BullMQ for asynchronous EDM email delivery queues.
3. **Database Layer**: Optimized PostgreSQL relational tables with composite indexing on tenant IDs and event timestamps.

### Key Architectural Learnings

- **Zero-Downtime Releases**: Deployed via automated GitHub Actions & Jenkins pipelines directly to resilient VPS infrastructure.
- **API Aggregation**: Created a unified gateway pattern in Node.js to normalize fragmented third-party partner data into a single client-facing dashboard.
- **Strict Role-Based Access Control (RBAC)**: Secure multi-tenancy enforced at the database query level.`
  },
  {
    id: 'automated-cicd-jenkins-vps',
    title: 'Zero-Downtime Deployment: Setting up Jenkins & GitHub Actions on Linux VPS',
    slug: 'automated-cicd-jenkins-github-actions-vps',
    category: 'DevOps',
    date: 'January 19, 2026',
    readTime: '6 min read',
    cover: '/assets/blog/blog-3.jpg',
    excerpt: 'Stop manual SSH and SCP deployments. Step-by-step breakdown of implementing automated testing, Docker container orchestration, and instant rollback on cost-effective VPS nodes.',
    content: `## The Problem with Manual Deployments

Manual deployments via FTP, cPanel file managers, or ad-hoc SSH commands introduce human error, inconsistent environment variables, and inevitable downtime during server reboots.

### The Automated Solution: GitHub Actions + Jenkins

By combining GitHub Actions for PR linting/testing and an on-premise Jenkins runner on our production VPS:
- Every push to \`main\` triggers an automated build and unit test run.
- Jenkins pulls the verified image, performs container health checks, and switches Nginx reverse-proxy upstream traffic seamlessly with zero dropped connections.
- Deployment duration slashed from 35 minutes of manual toil to under 90 seconds fully automated.`
  },
  {
    id: 'genai-automated-reporting-chartjs',
    title: 'Automating Dynamic Graphical Reports with Generative AI Models & Node.js',
    slug: 'genai-automated-graphical-reports-nodejs',
    category: 'AI & Data',
    date: 'December 28, 2025',
    readTime: '8 min read',
    cover: '/assets/blog/blog-4.jpg',
    excerpt: 'How to bypass LLM hallucinations in reporting pipelines using structured JSON schemas and headless server-side canvas rendering with Chart.js.',
    content: `## The Challenge of Hallucination in Automated Reporting

Executives demand automated summaries, but giving an LLM direct access to generate numbers risks hallucinated data that can mislead strategic decisions.

### The Solution: Decoupled Data Pipeline

1. **Calculate Deterministically**: Run standard SQL aggregations on PostgreSQL to compute exact figures.
2. **Constrained Prompting**: Pass verified numbers into Gemini / OpenAI models with a strict JSON schema that only permits contextual explanations, not number generation.
3. **Headless Graphic Generation**: Use Node.js canvas with Chart.js to render pixel-perfect infographics server-side.`
  },
  {
    id: 'headless-ecommerce-nextjs-performance',
    title: 'Sub-Second Checkout: Architecting High-Conversion Headless Storefronts with Next.js',
    slug: 'headless-ecommerce-nextjs-subsecond-checkout',
    category: 'eCommerce',
    date: 'November 12, 2025',
    readTime: '7 min read',
    cover: '/assets/blog/blog-5.jpg',
    excerpt: 'Every 100ms delay costs 1% in eCommerce conversion. How we built atomic inventory locking, edge cart hydration, and lightning-fast checkout flows.',
    content: `## The Latency Tax on Online Stores

Standard monolithic eCommerce platforms carry enormous frontend bloat, resulting in 3 to 5 second load times on mobile devices.

### Architecture for Sub-Second Speeds

- **Edge Hydration**: Cart state is cached in Redis at the edge, allowing instant updates without round-trips to the primary database.
- **Optimistic Inventory Locking**: Redis atomic increments prevent race conditions during flash sales.
- **Result**: +28% increase in checkout conversions and 99.4% payment success rate.`
  }
];

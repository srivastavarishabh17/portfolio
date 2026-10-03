/**
 * RISHABH SRIVASTAVA - TECHNICAL BLOG ENGINE & WRITER STUDIO
 * LocalStorage persistent blogging system with markdown preview, search, tag filters, and reader modal.
 */

const INITIAL_BLOGS = [
  {
    id: "geo-seo-2026-guide",
    title: "The 2026 Guide to GEO (Generative Engine Optimization): How to Rank in Perplexity, ChatGPT & Gemini",
    slug: "geo-generative-engine-optimization-guide",
    category: "SEO & GEO",
    date: "March 28, 2026",
    readTime: "7 min read",
    cover: "assets/blog/blog-1.jpg",
    excerpt: "Traditional Google blue links are no longer enough. Learn how to architect Schema.org entities, high-density factual citations, and JSON-LD graphs so AI Answer Engines cite you as the authoritative source.",
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
    id: "enterprise-crm-nextjs-nodejs",
    title: "Building an Enterprise CRM & EDM Platform with Next.js & Node.js: Lessons from Prime Platform",
    slug: "enterprise-crm-nextjs-nodejs-prime-platform",
    category: "Architecture",
    date: "February 14, 2026",
    readTime: "9 min read",
    cover: "assets/blog/blog-2.jpg",
    excerpt: "Behind the scenes of building high-concurrency client dashboards, multi-tenant database partitioning, automated EDM pipelines, and third-party API orchestration.",
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
    id: "automated-cicd-jenkins-vps",
    title: "Zero-Downtime Deployment: Setting up Jenkins & GitHub Actions on Linux VPS",
    slug: "automated-cicd-jenkins-github-actions-vps",
    category: "DevOps",
    date: "January 19, 2026",
    readTime: "6 min read",
    cover: "assets/blog/blog-3.jpg",
    excerpt: "Stop manual SSH and SCP deployments. Step-by-step breakdown of implementing automated testing, Docker container orchestration, and instant rollback on cost-effective VPS nodes.",
    content: `## The Problem with Manual Deployments

Manual deployments via FTP, cPanel file managers, or ad-hoc SSH commands introduce human error, inconsistent environment variables, and inevitable downtime during server reboots.

### The Automated Solution: GitHub Actions + Jenkins

By combining GitHub Actions for PR linting/testing and an on-premise Jenkins runner on our production VPS:
- Every push to \`main\` triggers an automated build and unit test run.
- Jenkins pulls the verified image, performs container health checks, and switches Nginx reverse-proxy upstream traffic seamlessly with zero dropped connections.
- Deployment duration slashed from 35 minutes of manual toil to under 90 seconds fully automated.`
  },
  {
    id: "genai-automated-reporting-chartjs",
    title: "Automating Dynamic Graphical Reports with Generative AI Models & Node.js",
    slug: "genai-automated-graphical-reports-nodejs",
    category: "GenAI",
    date: "December 05, 2025",
    readTime: "8 min read",
    cover: "assets/blog/blog-4.jpg",
    excerpt: "How we leveraged LLM prompt engineering, structured JSON outputs, and automated chart rendering engines to deliver personalized executive insights on autopilot.",
    content: `## Transforming Raw Telemetry into Executive Narrative

Raw numbers on a dashboard often overwhelm non-technical stakeholders. By integrating Generative AI into our reporting pipeline, we converted millions of monthly data points into crisp graphical summaries and actionable executive recommendations.

### Implementation Workflow

1. **Aggregation & Anomaly Detection**: Node.js workers aggregate weekly trends and extract statistical outliers.
2. **Structured LLM Inference**: Prompting the model with strict JSON schema constraints to generate concise bullet summaries and strategic recommendations.
3. **Automated Vector Graphics**: Feeding structured metrics directly into automated Chart.js / SVG generation scripts to produce downloadable, publication-ready PDF and interactive graphical dashboards.`
  }
];

class BlogEngine {
  constructor() {
    this.storageKey = 'rishabh_portfolio_blogs_v3';
    this.blogs = this.loadBlogs();
    this.activeFilter = 'All';
    this.searchQuery = '';
    this.init();
  }

  loadBlogs() {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Merge initial with stored to keep updates fresh
          const existingIds = new Set(parsed.map(b => b.id));
          const merged = [...parsed];
          INITIAL_BLOGS.forEach(b => {
            if (!existingIds.has(b.id)) merged.push(b);
          });
          return merged;
        }
      }
    } catch (e) {
      console.warn('LocalStorage error reading blogs:', e);
    }
    return [...INITIAL_BLOGS];
  }

  saveBlogs() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.blogs));
    } catch (e) {
      console.warn('LocalStorage error saving blogs:', e);
    }
  }

  init() {
    this.renderBlogGrid();
    this.setupListeners();
  }

  setupListeners() {
    // Filter tags
    const filterBtns = document.querySelectorAll('.blog-filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.activeFilter = btn.dataset.filter || 'All';
        this.renderBlogGrid();
      });
    });

    // Search Input
    const searchInput = document.getElementById('blog-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.renderBlogGrid();
      });
    }

    // Write New Blog Modal Open
    const writeBtn = document.getElementById('open-write-modal-btn');
    const writeModal = document.getElementById('blog-write-modal');
    const closeWriteBtn = document.getElementById('close-write-modal-btn');

    if (writeBtn && writeModal) {
      writeBtn.addEventListener('click', () => {
        writeModal.classList.add('active');
      });
    }
    if (closeWriteBtn && writeModal) {
      closeWriteBtn.addEventListener('click', () => {
        writeModal.classList.remove('active');
      });
    }

    // Blog Form Submit
    const blogForm = document.getElementById('new-blog-form');
    if (blogForm) {
      blogForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleNewBlogSubmit(blogForm);
      });
    }

    // Close reader modal
    const readerModal = document.getElementById('blog-reader-modal');
    const closeReaderBtn = document.getElementById('close-reader-modal-btn');
    if (closeReaderBtn && readerModal) {
      closeReaderBtn.addEventListener('click', () => {
        readerModal.classList.remove('active');
      });
    }

    // Export blogs button
    const exportBtn = document.getElementById('export-blogs-btn');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => this.exportBlogsJSON());
    }
  }

  getFilteredBlogs() {
    return this.blogs.filter(blog => {
      const matchFilter = this.activeFilter === 'All' || blog.category.toLowerCase() === this.activeFilter.toLowerCase();
      const matchSearch = !this.searchQuery ||
        blog.title.toLowerCase().includes(this.searchQuery) ||
        blog.excerpt.toLowerCase().includes(this.searchQuery) ||
        blog.content.toLowerCase().includes(this.searchQuery);
      return matchFilter && matchSearch;
    });
  }

  renderBlogGrid() {
    const grid = document.getElementById('blog-cards-grid');
    if (!grid) return;

    const items = this.getFilteredBlogs();
    if (items.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;" class="glass-card">
          <p style="font-family: var(--font-mono); color: var(--accent-cyan); font-size: 1.1rem; margin-bottom: 8px;">[NO_ARTICLES_FOUND]</p>
          <p style="color: var(--text-secondary);">No technical articles match your current search query or filter.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = items.map(blog => `
      <article class="glass-card glare-effect blog-card" data-blog-id="${blog.id}">
        <div class="blog-card-thumb">
          <img src="${blog.cover}" alt="${this.escapeHtml(blog.title)}" loading="lazy">
          <div class="project-overlay"></div>
        </div>
        <div class="blog-card-body">
          <div class="blog-meta-top">
            <span class="blog-cat-badge">${blog.category}</span>
            <span>${blog.readTime}</span>
          </div>
          <h3 class="blog-card-title">${this.escapeHtml(blog.title)}</h3>
          <p class="blog-card-excerpt">${this.escapeHtml(blog.excerpt)}</p>
          <div class="blog-read-link">
            <span>Read Deep Dive</span>
            <span>→</span>
          </div>
        </div>
      </article>
    `).join('');

    // Attach click events to open reader
    grid.querySelectorAll('.blog-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.dataset.blogId;
        this.openReader(id);
      });
    });
  }

  openReader(blogId) {
    const blog = this.blogs.find(b => b.id === blogId);
    if (!blog) return;

    const modal = document.getElementById('blog-reader-modal');
    const container = document.getElementById('blog-reader-body');
    if (!modal || !container) return;

    container.innerHTML = `
      <div style="margin-bottom: 24px;">
        <div style="display: flex; gap: 12px; align-items: center; margin-bottom: 12px;">
          <span class="section-tag" style="margin-bottom: 0;">${blog.category}</span>
          <span style="font-family: var(--font-mono); color: var(--text-muted); font-size: 0.85rem;">${blog.date} • ${blog.readTime}</span>
        </div>
        <h1 style="font-size: clamp(1.8rem, 3.5vw, 2.6rem); line-height: 1.2; margin-bottom: 16px;">${this.escapeHtml(blog.title)}</h1>
        <div style="display: flex; align-items: center; gap: 12px; padding: 12px 0; border-top: 1px solid rgba(255,255,255,0.08); border-bottom: 1px solid rgba(255,255,255,0.08);">
          <img src="assets/images/rishabh-avatar.png" alt="Rishabh Srivastava" style="width: 40px; height: 40px; border-radius: 50%; border: 2px solid var(--accent-cyan);">
          <div>
            <div style="font-weight: 700; font-size: 0.95rem;">Rishabh Srivastava</div>
            <div style="font-size: 0.8rem; color: var(--accent-cyan); font-family: var(--font-mono);">Full Stack Developer & GenAI Specialist</div>
          </div>
        </div>
      </div>
      <div class="blog-markdown-content" style="line-height: 1.8; color: #cbd5e1;">
        ${this.parseMarkdown(blog.content)}
      </div>
      <div style="margin-top: 40px; padding: 24px; background: rgba(0,240,255,0.05); border: 1px solid rgba(0,240,255,0.2); border-radius: var(--radius-md); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
        <div>
          <h4 style="color: var(--text-primary); margin-bottom: 4px;">Liked this technical breakdown?</h4>
          <p style="font-size: 0.85rem; color: var(--text-secondary);">Connect with Rishabh to implement high-throughput architectures.</p>
        </div>
        <a href="#contact" class="btn btn-primary btn-sm" onclick="document.getElementById('blog-reader-modal').classList.remove('active')">Discuss Project</a>
      </div>
    `;

    modal.classList.add('active');
  }

  handleNewBlogSubmit(form) {
    const title = form.title.value.trim();
    const category = form.category.value;
    const excerpt = form.excerpt.value.trim();
    const content = form.content.value.trim();

    if (!title || !content || !excerpt) {
      alert('Please fill out all required fields.');
      return;
    }

    // Estimate read time (avg 200 words/min)
    const wordCount = content.split(/\\s+/).length;
    const readMinutes = Math.max(1, Math.ceil(wordCount / 200));

    // Choose cover image dynamically or use default
    const defaultCovers = [
      'assets/blog/blog-1.jpg',
      'assets/blog/blog-2.jpg',
      'assets/blog/blog-3.jpg',
      'assets/blog/blog-4.jpg',
      'assets/blog/blog-5.jpg',
      'assets/blog/blog-6.jpg'
    ];
    const cover = defaultCovers[Math.floor(Math.random() * defaultCovers.length)];

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = new Date().toLocaleDateString('en-US', options);

    const newBlog = {
      id: 'custom-' + Date.now(),
      title,
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      category,
      date: dateStr,
      readTime: `${readMinutes} min read`,
      cover,
      excerpt,
      content
    };

    this.blogs.unshift(newBlog);
    this.saveBlogs();
    this.renderBlogGrid();

    form.reset();
    document.getElementById('blog-write-modal').classList.remove('active');

    // Show toast
    if (window.showToast) {
      window.showToast('✓ Technical Blog Published Successfully!');
    }
  }

  exportBlogsJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.blogs, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `rishabh-srivastava-technical-blogs-${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  }

  parseMarkdown(md) {
    if (!md) return '';
    let html = md
      // Escaping html tags inside code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Code blocks with syntax box
    html = html.replace(/```([a-z0-9_-]*)\n([\s\S]*?)```/g, (match, lang, code) => {
      return `
        <div style="position: relative; margin: 24px 0; border-radius: var(--radius-sm); overflow: hidden; border: 1px solid rgba(0,240,255,0.2); background: #070b12;">
          <div style="background: rgba(255,255,255,0.05); padding: 8px 16px; display: flex; justify-content: space-between; align-items: center; font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-cyan); border-bottom: 1px solid rgba(255,255,255,0.06);">
            <span>${lang || 'code'}</span>
            <button onclick="navigator.clipboard.writeText(this.parentElement.nextElementSibling.innerText); alert('Copied code snippet!');" style="background: none; border: none; color: var(--text-secondary); cursor: pointer; font-family: var(--font-mono); font-size: 0.75rem;">Copy</button>
          </div>
          <pre style="padding: 16px; margin: 0; overflow-x: auto; font-family: var(--font-mono); font-size: 0.88rem; line-height: 1.5; color: #a5f3fc;"><code>${code}</code></pre>
        </div>
      `;
    });

    // Inline code
    html = html.replace(/\`([^`]+)\`/g, '<code style="background: rgba(0,240,255,0.1); color: var(--accent-cyan); padding: 2px 6px; border-radius: 4px; font-family: var(--font-mono); font-size: 0.88em;">$1</code>');

    // Headings
    html = html.replace(/^### (.*$)/gim, '<h3 style="font-size: 1.35rem; margin: 28px 0 12px; color: var(--text-primary);">$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2 style="font-size: 1.7rem; margin: 34px 0 14px; color: var(--text-primary); border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 8px;">$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1 style="font-size: 2.1rem; margin: 38px 0 16px; color: var(--text-primary);">$1</h1>');

    // Bold & Italics
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong style="color: #f1f5f9; font-weight: 700;">$1</strong>');
    html = html.replace(/\*([^*]+)\*/g, '<em style="color: #cbd5e1;">$1</em>');

    // Blockquote
    html = html.replace(/^\> (.*$)/gim, '<blockquote style="border-left: 3px solid var(--accent-cyan); padding-left: 16px; margin: 18px 0; color: #94a3b8; font-style: italic;">$1</blockquote>');

    // Unordered lists
    html = html.replace(/^\- (.*$)/gim, '<li style="margin-left: 20px; margin-bottom: 8px;">$1</li>');

    // Paragraphs
    html = html.split('\n\n').map(paragraph => {
      if (paragraph.trim().startsWith('<h') ||
          paragraph.trim().startsWith('<div') ||
          paragraph.trim().startsWith('<li') ||
          paragraph.trim().startsWith('<blockquote')) {
        return paragraph;
      }
      return `<p style="margin-bottom: 16px;">${paragraph.trim()}</p>`;
    }).join('\n');

    return html;
  }

  escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
  window.blogEngine = new BlogEngine();
});

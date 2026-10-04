'use client';

import React from 'react';

interface ResumeTabProps {
  isActive: boolean;
}

export const ResumeTab: React.FC<ResumeTabProps> = ({ isActive }) => {
  return (
    <article className={`resume ${isActive ? 'active' : ''}`} data-page="resume">
      <h2 className="section-headline">Resume &amp; Track Record</h2>

      {/* Experience Timeline */}
      <div className="timeline-neo-container">
        {/* Role 1: Principal Product Architect */}
        <div className="timeline-neo-card">
          <div className="timeline-card-header" style={{ background: 'var(--pastel-mint)' }}>
            <span className="timeline-role">Principal Product Architect &amp; Core Engineer</span>
            <span className="timeline-period-pill">2022 — Present</span>
          </div>
          <div className="timeline-card-body">
            <div className="timeline-company-row">
              <span className="neo-pill mint">Proprietary SaaS &amp; Cloud Products</span>
              <span>• Aozo Ecosystem &amp; Messegy</span>
            </div>
            <ul className="timeline-bullet-list">
              <li className="timeline-bullet">
                Architected and engineered enterprise SaaS suites including Aozo Cloud (6 integrated business micro-frontends) and Messegy Omnichannel messaging platform.
              </li>
              <li className="timeline-bullet">
                Built asynchronous Redis + BullMQ message relays handling 50,000+ transactional dispatches per hour with sub-25ms sync latency.
              </li>
              <li className="timeline-bullet">
                Implemented automated CI/CD deployment pipelines with GitHub Actions and Docker, slashing release cycles by 60%.
              </li>
              <li className="timeline-bullet">
                Maintained 99.98% uptime SLA across high-throughput transactional database clusters and caching layers.
              </li>
            </ul>
          </div>
        </div>

        {/* Role 2: Independent Architect */}
        <div className="timeline-neo-card">
          <div className="timeline-card-header" style={{ background: 'var(--pastel-yellow)' }}>
            <span className="timeline-role">Enterprise Consultant &amp; Freelance Engineer</span>
            <span className="timeline-period-pill">2021 — 2022</span>
          </div>
          <div className="timeline-card-body">
            <div className="timeline-company-row">
              <span className="neo-pill yellow">Global D2C, FinTech &amp; HealthTech</span>
              <span>• Remote</span>
            </div>
            <ul className="timeline-bullet-list">
              <li className="timeline-bullet">
                Delivered headless eCommerce platforms for Ecomify.io and Saattvik Natural with sub-second checkout speeds and atomic stock locking.
              </li>
              <li className="timeline-bullet">
                Built HIPAA-compliant telemedicine platform MyAyushClinic connecting practitioners and patients with encrypted consultations.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Skills Bento Grid */}
      <h3 className="section-headline">Verified Core Competencies</h3>
      <div className="skills-bento-grid">
        <div className="skill-category-card">
          <div className="skill-header" style={{ background: 'var(--pastel-blue)' }}>
            FRONTEND ARCHITECTURE
          </div>
          <div className="skill-chips-body">
            <span className="tech-chip highlight">Next.js 14 / SSR</span>
            <span className="tech-chip highlight">React 19</span>
            <span className="tech-chip">TypeScript</span>
            <span className="tech-chip">Tailwind CSS</span>
            <span className="tech-chip">Zustand / Redux</span>
            <span className="tech-chip">Web Audio API</span>
            <span className="tech-chip">Core Web Vitals 100</span>
          </div>
        </div>

        <div className="skill-category-card">
          <div className="skill-header" style={{ background: 'var(--pastel-mint)' }}>
            BACKEND &amp; CLOUD
          </div>
          <div className="skill-chips-body">
            <span className="tech-chip highlight">Node.js / Express</span>
            <span className="tech-chip highlight">FastAPI / Python</span>
            <span className="tech-chip">BullMQ Queues</span>
            <span className="tech-chip">WebSockets</span>
            <span className="tech-chip">Docker Containers</span>
            <span className="tech-chip">AWS ECS / S3</span>
            <span className="tech-chip">Azure Container Apps</span>
          </div>
        </div>

        <div className="skill-category-card">
          <div className="skill-header" style={{ background: 'var(--pastel-lavender)' }}>
            DATABASES &amp; AI
          </div>
          <div className="skill-chips-body">
            <span className="tech-chip highlight">PostgreSQL</span>
            <span className="tech-chip highlight">Redis / In-Memory</span>
            <span className="tech-chip">MongoDB</span>
            <span className="tech-chip">Azure AI Search</span>
            <span className="tech-chip">Azure OpenAI / Gemini</span>
            <span className="tech-chip">RAG Pipelines</span>
            <span className="tech-chip">Vector Embeddings</span>
          </div>
        </div>
      </div>

      {/* Education & Certifications */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '24px' }}>
        <div className="timeline-neo-card">
          <div className="timeline-card-header" style={{ background: 'var(--pastel-yellow)' }}>
            <span className="timeline-role" style={{ fontSize: '1rem' }}>Education</span>
            <span className="timeline-period-pill">B.Tech (EEE)</span>
          </div>
          <div className="timeline-card-body">
            <p style={{ fontWeight: 700, color: 'var(--ink-primary)', marginBottom: '4px' }}>
              Dr. A.P.J. Abdul Kalam Technical University (AKTU)
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--ink-secondary)' }}>
              Bachelor of Technology in Electrical and Electronics &amp; Engineering. Strong foundation in distributed systems, algorithms, and database design.
            </p>
          </div>
        </div>

        <div className="timeline-neo-card">
          <div className="timeline-card-header" style={{ background: 'var(--pastel-coral)' }}>
            <span className="timeline-role" style={{ fontSize: '1rem' }}>Certifications</span>
            <span className="timeline-period-pill">Verified</span>
          </div>
          <div className="timeline-card-body">
            <ul className="timeline-bullet-list">
              <li className="timeline-bullet">Full Stack Web Architecture &amp; Microservices</li>
              <li className="timeline-bullet">Generative AI Integration &amp; Function Calling (OpenAI &amp; Google)</li>
              <li className="timeline-bullet">Advanced PostgreSQL Indexing &amp; Query Optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

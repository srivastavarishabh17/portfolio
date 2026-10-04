'use client';

import React from 'react';
import { TabType } from '@/types';
import { playClickSound } from '@/utils/audio';

interface AboutTabProps {
  isActive: boolean;
  onNavigate: (tab: TabType) => void;
  onShowToast?: (msg: string) => void;
}

export const AboutTab: React.FC<AboutTabProps> = ({ isActive, onNavigate }) => {
  return (
    <article className={`about ${isActive ? 'active' : ''}`} data-page="about">
      {/* =================================================================
           VISUAL ARCHITECTURE & ENTERPRISE TECH STACK SHOWCASE
           ================================================================= */}
      <section className="architecture-showcase-container" style={{ marginBottom: '32px' }}>
        <div
          className="architecture-showcase-card"
          style={{
            background: 'var(--canvas-surface)',
            border: 'var(--border-ink)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-hard)',
            overflow: 'hidden'
          }}
        >
          {/* Header Bar */}
          <div className="mac-window-bar" style={{ background: 'var(--pastel-blue)' }}>
            <div className="mac-dots">
              <span className="mac-dot red"></span>
              <span className="mac-dot yellow"></span>
              <span className="mac-dot green"></span>
            </div>
            <span className="mac-window-title" style={{ color: '#18181b', fontWeight: 800 }}>
              SYSTEM TOPOLOGY // HIGH-CONCURRENCY ENTERPRISE ARCHITECTURE
            </span>
            <span className="neo-pill mint" style={{ padding: '2px 8px', fontSize: '0.65rem' }}>
              ⚡ LIVE BLUEPRINT
            </span>
          </div>

          <div style={{ padding: '24px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
                marginBottom: '20px'
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.4rem',
                    fontWeight: 900,
                    color: 'var(--ink-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <span>✦</span> Distributed Cloud &amp; AI Data Flow <span>✦</span>
                </h3>
                <p style={{ color: 'var(--ink-secondary)', fontSize: '0.88rem', marginTop: '2px' }}>
                  Engineered for sub-25ms synchronization, automated failover, and zero single points of failure.
                </p>
              </div>

              {/* Verified Metrics Badges */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span className="neo-pill yellow" style={{ fontWeight: 700 }}>
                  50K+/hr Relays
                </span>
                <span className="neo-pill mint" style={{ fontWeight: 700 }}>
                  &lt; 25ms WebSockets
                </span>
                <span className="neo-pill lavender" style={{ fontWeight: 700 }}>
                  99.98% SLA
                </span>
              </div>
            </div>

            {/* 4-Tier Architecture Flow Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '14px',
                position: 'relative'
              }}
            >
              {/* Tier 1: Client & Edge Experience */}
              <div
                style={{
                  background: 'var(--canvas-panel)',
                  border: 'var(--border-ink)',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="neo-pill blue" style={{ fontSize: '0.68rem', fontWeight: 800 }}>
                    TIER 01 // EDGE &amp; UI
                  </span>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      color: '#0284c7',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700
                    }}
                  >
                    100/100 CWV
                  </span>
                </div>
                <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--ink-primary)', margin: 0 }}>
                  Client &amp; CDN Gateway
                </h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--ink-muted)', lineHeight: '1.5', margin: 0 }}>
                  Next.js 14 SSR frontends deployed with edge caching, Web Audio synthesizer, and responsive adaptive state.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto' }}>
                  <span className="tech-chip highlight">Next.js 14</span>
                  <span className="tech-chip">React 19</span>
                  <span className="tech-chip">TypeScript</span>
                  <span className="tech-chip">Cloudflare Edge</span>
                </div>
              </div>

              {/* Tier 2: Real-Time Services & Asynchronous Queues */}
              <div
                style={{
                  background: 'var(--canvas-panel)',
                  border: 'var(--border-ink)',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="neo-pill mint" style={{ fontSize: '0.68rem', fontWeight: 800 }}>
                    TIER 02 // SERVICES
                  </span>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      color: '#16a34a',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700
                    }}
                  >
                    &lt; 25ms Latency
                  </span>
                </div>
                <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--ink-primary)', margin: 0 }}>
                  API Relays &amp; BullMQ
                </h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--ink-muted)', lineHeight: '1.5', margin: 0 }}>
                  Node.js &amp; FastAPI microservices, bi-directional WebSocket pipelines, and automated BullMQ job dispatchers.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto' }}>
                  <span className="tech-chip highlight">Node.js</span>
                  <span className="tech-chip highlight">BullMQ</span>
                  <span className="tech-chip">FastAPI</span>
                  <span className="tech-chip">WebSockets</span>
                </div>
              </div>

              {/* Tier 3: High-Throughput Data & Caching */}
              <div
                style={{
                  background: 'var(--canvas-panel)',
                  border: 'var(--border-ink)',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="neo-pill yellow" style={{ fontSize: '0.68rem', fontWeight: 800 }}>
                    TIER 03 // PERSISTENCE
                  </span>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      color: '#ca8a04',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700
                    }}
                  >
                    Sub-ms Cache
                  </span>
                </div>
                <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--ink-primary)', margin: 0 }}>
                  PostgreSQL &amp; Redis Cluster
                </h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--ink-muted)', lineHeight: '1.5', margin: 0 }}>
                  Partitioned PostgreSQL with composite index tuning, Redis in-memory locks, and high-speed session management.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto' }}>
                  <span className="tech-chip highlight">PostgreSQL</span>
                  <span className="tech-chip highlight">Redis</span>
                  <span className="tech-chip">MongoDB</span>
                  <span className="tech-chip">Redlock</span>
                </div>
              </div>

              {/* Tier 4: Generative AI & Autonomous Cloud */}
              <div
                style={{
                  background: 'var(--canvas-panel)',
                  border: 'var(--border-ink)',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="neo-pill lavender" style={{ fontSize: '0.68rem', fontWeight: 800 }}>
                    TIER 04 // AI &amp; CLOUD
                  </span>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      color: '#9333ea',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700
                    }}
                  >
                    Vector Grounded
                  </span>
                </div>
                <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--ink-primary)', margin: 0 }}>
                  GenAI &amp; Container Ops
                </h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--ink-muted)', lineHeight: '1.5', margin: 0 }}>
                  Gemini &amp; OpenAI LLMs with strict JSON schema validation, Azure AI Search vector RAG, and Docker CI/CD on Linux VPS.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto' }}>
                  <span className="tech-chip highlight">OpenAI / Gemini</span>
                  <span className="tech-chip">Docker</span>
                  <span className="tech-chip">Azure AI Search</span>
                  <span className="tech-chip">Jenkins CI/CD</span>
                </div>
              </div>
            </div>

            {/* Bottom Flow Architecture Bar */}
            <div
              style={{
                marginTop: '16px',
                padding: '12px 18px',
                background: 'rgba(0, 240, 255, 0.05)',
                border: '1px solid rgba(0, 240, 255, 0.2)',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    display: 'inline-block',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#00f0ff',
                    boxShadow: '0 0 8px #00f0ff'
                  }}
                ></span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.76rem',
                    color: 'var(--ink-primary)',
                    fontWeight: 700
                  }}
                >
                  DATA PIPELINE FLOW: Client Request → Cloudflare Edge → Next.js 14 SSR → Node.js / BullMQ → Redis / Postgres → AI Inference
                </span>
              </div>
              <button
                className="neo-btn mint neo-btn-sm"
                onClick={() => {
                  playClickSound();
                  onNavigate('portfolio');
                }}
              >
                <span>Explore 16+ Production Architectures</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
           ABOUT LEAD & VERIFIED KEY METRICS
           ================================================================= */}
      <div className="about-intro-card">
        <h3 className="section-headline">
          <span>Engineering Leadership &amp; High-Agency Architecture</span>
        </h3>

        <p className="about-lead-p">
          I am a <strong>Senior Full Stack Architect &amp; Generative AI Specialist</strong> based in Greater Noida /
          Delhi NCR, India. Over the past 4+ years, I have architected and scaled mission-critical enterprise platforms,
          distributed microservices, multi-tenant cloud ecosystems, and generative search engines (GEO) that run
          reliably under high production concurrency.
        </p>

        <p className="about-sub-p">
          As a <strong>Product Architect &amp; Core Engineer</strong>, I build, own, and scale high-volume SaaS
          ecosystems and business engines with Next.js and Node.js. My architectures slash release cycle times by 60%
          with automated CI/CD pipelines while boosting global discoverability and organic traction by 350%.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
          <button
            className="neo-btn mint"
            onClick={() => {
              playClickSound();
              onNavigate('portfolio');
            }}
          >
            <span>Inspect 16+ Production Architectures</span>
            <span>→</span>
          </button>
          <button
            className="neo-btn yellow"
            onClick={() => {
              playClickSound();
              onNavigate('terminal');
            }}
          >
            <span>&gt;_ Launch Hacker CLI</span>
          </button>
          <a
            href="https://api.whatsapp.com/send/?phone=917037564392&text=Hi+Rishabh%2C+I+reviewed+your+portfolio+and+would+like+to+discuss+an+engagement."
            target="_blank"
            rel="noopener noreferrer"
            className="neo-btn blue"
            onClick={playClickSound}
          >
            <span>Message on WhatsApp</span>
          </a>
        </div>

        {/* Verified Key Metrics Bento */}
        <div className="metrics-bento-strip">
          <div className="metric-bento-box mint">
            <div className="metric-val">4+</div>
            <div className="metric-lbl">Years Experience</div>
          </div>
          <div className="metric-bento-box blue">
            <div className="metric-val">16+</div>
            <div className="metric-lbl">Live Ecosystems</div>
          </div>
          <div className="metric-bento-box yellow">
            <div className="metric-val">+350%</div>
            <div className="metric-lbl">SEO/GEO Surge</div>
          </div>
          <div className="metric-bento-box lavender">
            <div className="metric-val">99.98%</div>
            <div className="metric-lbl">Uptime SLA</div>
          </div>
        </div>
      </div>

      {/* =================================================================
           CORE CAPABILITIES (6-GRID)
           ================================================================= */}
      <section style={{ marginBottom: '36px' }}>
        <h3 className="section-headline">
          <span>What I'm Doing // Core Specializations</span>
        </h3>

        <div className="capabilities-grid">
          {/* 1. Enterprise SaaS */}
          <div className="capability-card">
            <div className="capability-header" style={{ background: 'var(--pastel-blue)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
              <span>Enterprise SaaS &amp; Cloud Platforms</span>
            </div>
            <div className="capability-body">
              Architecting multi-tenant business OS ecosystems with distributed data isolation, Redis session states,
              and high-throughput transactional gateways.
            </div>
          </div>

          {/* 2. GenAI & Autonomous Agents */}
          <div className="capability-card">
            <div className="capability-header" style={{ background: 'var(--pastel-mint)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
              </svg>
              <span>Generative AI &amp; Autonomous Agents</span>
            </div>
            <div className="capability-body">
              Integrating Google Gemini and OpenAI with strict JSON schemas, function calling, vector memory stores,
              and Model Context Protocol (MCP) servers.
            </div>
          </div>

          {/* 3. Headless Commerce */}
          <div className="capability-card">
            <div className="capability-header" style={{ background: 'var(--pastel-yellow)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span>Scalable Headless Commerce &amp; D2C</span>
            </div>
            <div className="capability-body">
              Sub-second storefronts with atomic inventory locking, webhook failure retries, multi-gateway payments
              (Razorpay/Stripe), and logistics integrations.
            </div>
          </div>

          {/* 4. Mobile Apps & Vision */}
          <div className="capability-card">
            <div className="capability-header" style={{ background: 'var(--pastel-lavender)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
              <span>Mobile Apps &amp; Real-Time Vision</span>
            </div>
            <div className="capability-body">
              Cross-platform React Native and native Android applications featuring on-device Google ML Kit, ARCore
              face mesh tracking at 60 FPS, and WebRTC video.
            </div>
          </div>

          {/* 5. Microservices & Queues */}
          <div className="capability-card">
            <div className="capability-header" style={{ background: 'var(--pastel-coral)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
              <span>Microservices &amp; Event Queues</span>
            </div>
            <div className="capability-body">
              High-throughput BullMQ queues, clustered WebSocket relays, automated email dispatching (50k/hr), and
              rolling zero-downtime CI/CD deployments.
            </div>
          </div>

          {/* 6. SEO, AEO & GEO Growth */}
          <div className="capability-card">
            <div className="capability-header" style={{ background: 'var(--pastel-peach)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span>SEO, AEO &amp; GEO Growth Engine</span>
            </div>
            <div className="capability-body">
              Semantic Schema.org JSON-LD knowledge graphs, Generative Engine Optimization, and Core Web Vitals
              100/100 tuning to dominate search and AI answers.
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
           THE ATTITUDE MANIFESTO
           ================================================================= */}
      <section style={{ marginBottom: '36px' }}>
        <h3 className="section-headline">
          <span>The Attitude Manifesto // Engineering Principles</span>
        </h3>

        <div className="manifesto-neo-grid">
          <div className="manifesto-neo-card">
            <span className="manifesto-idx-pill">01 // VELOCITY &amp; RIGOR</span>
            <h4 className="manifesto-title">Velocity with Rigor</h4>
            <p className="manifesto-desc">
              Speed without discipline produces technical bankruptcy. I deliver rapid execution with automated testing,
              clean architectures, and strict typing.
            </p>
            <div className="manifesto-quote-pill">"Ship fast. Never break production."</div>
          </div>

          <div className="manifesto-neo-card">
            <span className="manifesto-idx-pill" style={{ background: 'var(--pastel-blue)' }}>
              02 // SCALABILITY
            </span>
            <h4 className="manifesto-title">Scalability is Non-Negotiable</h4>
            <p className="manifesto-desc">
              Every API route, caching strategy, and database index is engineered for 100x traffic spikes with Redis
              optimistic locks and connection pooling.
            </p>
            <div className="manifesto-quote-pill">"Engineered so soundly nobody wakes up at 3 AM."</div>
          </div>

          <div className="manifesto-neo-card">
            <span className="manifesto-idx-pill" style={{ background: 'var(--pastel-mint)' }}>
              03 // SOVEREIGN AI
            </span>
            <h4 className="manifesto-title">Sovereign AI Integration</h4>
            <p className="manifesto-desc">
              AI is not a novelty; it is high-leverage infrastructure. I build LLM pipelines grounded with strict
              validation, vector context, and automated chart synthesis.
            </p>
            <div className="manifesto-quote-pill">"Zero hallucinations. Pure actionable utility."</div>
          </div>

          <div className="manifesto-neo-card">
            <span className="manifesto-idx-pill" style={{ background: 'var(--pastel-lavender)' }}>
              04 // ZERO DOWNTIME
            </span>
            <h4 className="manifesto-title">Zero-Downtime Reliability</h4>
            <p className="manifesto-desc">
              Strict type safety, unit coverage, and automated GitHub Actions with Jenkins triggers ensure releases
              happen without sweating a rollback.
            </p>
            <div className="manifesto-quote-pill">"Untested code is broken code."</div>
          </div>
        </div>
      </section>

      {/* Products Owned & My Clients: 2 Separate Neobrutalist Cards */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '16px',
          marginTop: '10px'
        }}
      >
        {/* 1. Products I Have Worked On & Owned */}
        <div
          style={{
            padding: '22px',
            background: 'var(--canvas-surface)',
            border: 'var(--border-ink)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-hard)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: 800,
                color: 'var(--ink-primary)',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: '9px',
                  height: '9px',
                  borderRadius: '50%',
                  background: '#00f0ff',
                  boxShadow: '0 0 10px #00f0ff'
                }}
              ></span>
              PRODUCTS I HAVE WORKED ON &amp; OWNED
            </div>
            <span className="neo-pill mint" style={{ fontSize: '0.65rem', padding: '2px 8px' }}>
              SAAS &amp; PLATFORMS
            </span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <span className="neo-pill mint" style={{ fontWeight: 700 }}>Aozo Technologies (aozo.in)</span>
            <span className="neo-pill yellow" style={{ fontWeight: 700 }}>Messegy (messegy.com)</span>
            <span className="neo-pill lavender" style={{ fontWeight: 700 }}>Ecomify.io (Headless OS)</span>
            <span className="neo-pill peach" style={{ fontWeight: 700 }}>Alphazon LMS (alphazon.in)</span>
          </div>
        </div>

        {/* 2. My Clients */}
        <div
          style={{
            padding: '22px',
            background: 'var(--canvas-surface)',
            border: 'var(--border-ink)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-hard)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: 800,
                color: 'var(--ink-primary)',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: '9px',
                  height: '9px',
                  borderRadius: '50%',
                  background: '#a78bfa',
                  boxShadow: '0 0 10px #a78bfa'
                }}
              ></span>
              MY CLIENTS &amp; ENTERPRISE ENGAGEMENTS
            </div>
            <span className="neo-pill lavender" style={{ fontSize: '0.65rem', padding: '2px 8px' }}>
              CLIENT COLLABORATIONS
            </span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <span className="neo-pill coral" style={{ fontWeight: 700 }}>MyAyushClinic (HealthTech)</span>
            <span className="neo-pill mint" style={{ fontWeight: 700 }}>Saattvik Natural (D2C Commerce)</span>
            <span className="neo-pill blue" style={{ fontWeight: 700 }}>Global D2C Brands</span>
            <span className="neo-pill yellow" style={{ fontWeight: 700 }}>FinTech &amp; Web Ventures</span>
          </div>
        </div>
      </section>
    </article>
  );
};

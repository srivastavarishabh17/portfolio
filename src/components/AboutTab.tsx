'use client';

import React from 'react';
import { TabType } from '@/types';
import { Terminal, Layers, ArrowRight, ShieldCheck, Zap, Database, GitBranch } from 'lucide-react';
import { playClickSound } from '@/utils/audio';

interface AboutTabProps {
  onNavigate: (tab: TabType) => void;
}

export const AboutTab: React.FC<AboutTabProps> = ({ onNavigate }) => {
  return (
    <article className="about-article animate-fade-in">
      <h2 className="section-headline">Engineering Philosophy &amp; Architecture</h2>

      {/* Main Intro Lead */}
      <section className="about-hero-box" style={{ marginBottom: '24px' }}>
        <p className="about-lead-p" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--ink-primary)', marginBottom: '16px' }}>
          I am a <strong>Senior Full Stack Architect &amp; Generative AI Specialist</strong> based in Greater Noida / Delhi NCR, India. Over the past 4+ years, I have architected, scaled, and maintained mission-critical enterprise platforms, distributed microservices, multi-tenant cloud SaaS ecosystems, and Generative Engine Optimization (GEO) pipelines that sustain high production concurrency.
        </p>

        <p className="about-sub-p" style={{ fontSize: '0.95rem', lineHeight: '1.65', color: 'var(--ink-secondary)', marginBottom: '20px' }}>
          As a <strong>Product Architect &amp; Core Engineer</strong>, I build, own, and scale high-volume SaaS ecosystems and business engines using modern Next.js, Node.js, and Redis pipelines. My architectures slash release cycle times by 60% with automated CI/CD pipelines while boosting global discoverability and organic search traction by 350%.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          <button
            className="neo-btn mint"
            onClick={() => {
              playClickSound();
              onNavigate('portfolio');
            }}
          >
            <Layers size={16} />
            <span>Inspect 16+ Production Architectures</span>
            <ArrowRight size={14} />
          </button>

          <button
            className="neo-btn yellow"
            onClick={() => {
              playClickSound();
              onNavigate('terminal');
            }}
          >
            <Terminal size={16} />
            <span>Launch Interactive CLI Terminal</span>
          </button>
        </div>
      </section>

      {/* Products Owned vs Clients: 2 Separate Neobrutalist Cards */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px', marginBottom: '28px' }}>
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
          <div style={{ display: 'flex', alignItems: 'center', justifySelf: 'stretch', justifyContent: 'space-between', marginBottom: '14px' }}>
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
              <span style={{ display: 'inline-block', width: '9px', height: '9px', borderRadius: '50%', background: '#00f0ff', boxShadow: '0 0 10px #00f0ff' }}></span>
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

        {/* 2. My Clients & Enterprise Engagements */}
        <div
          style={{
            padding: '22px',
            background: 'var(--canvas-surface)',
            border: 'var(--border-ink)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-hard)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifySelf: 'stretch', justifyContent: 'space-between', marginBottom: '14px' }}>
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
              <span style={{ display: 'inline-block', width: '9px', height: '9px', borderRadius: '50%', background: '#a78bfa', boxShadow: '0 0 10px #a78bfa' }}></span>
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

      {/* Architecture Manifesto Bento Grid */}
      <h3 className="section-headline">Architectural Axioms &amp; Principles</h3>
      <div className="manifesto-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '24px' }}>
        <div className="manifesto-card" style={{ padding: '20px', background: 'var(--canvas-surface)', border: 'var(--border-ink)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-hard)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <Zap size={18} color="#38bdf8" />
            <span className="manifesto-idx-pill" style={{ background: 'var(--pastel-blue)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#000000' }}>
              01 // DECOUPLING
            </span>
          </div>
          <h4 className="manifesto-title" style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '8px' }}>Decoupled Micro-Frontends</h4>
          <p className="manifesto-desc" style={{ fontSize: '0.85rem', color: 'var(--ink-secondary)', lineHeight: '1.6' }}>
            Never let a broken checkout pipeline crash customer support. Every service in Aozo and Messegy operates with isolated build pipelines and scoped state.
          </p>
          <div className="manifesto-quote-pill" style={{ marginTop: '12px', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--ink-muted)' }}>
            &quot;Fail locally, survive globally.&quot;
          </div>
        </div>

        <div className="manifesto-card" style={{ padding: '20px', background: 'var(--canvas-surface)', border: 'var(--border-ink)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-hard)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <GitBranch size={18} color="#34d399" />
            <span className="manifesto-idx-pill" style={{ background: 'var(--pastel-mint)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#000000' }}>
              02 // ASYNC RELAY
            </span>
          </div>
          <h4 className="manifesto-title" style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '8px' }}>Asynchronous Workflows</h4>
          <p className="manifesto-desc" style={{ fontSize: '0.85rem', color: 'var(--ink-secondary)', lineHeight: '1.6' }}>
            Transactional emails, WebSockets broadcasting, and analytics processing never block HTTP request threads. Handled smoothly via Redis + BullMQ workers.
          </p>
          <div className="manifesto-quote-pill" style={{ marginTop: '12px', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--ink-muted)' }}>
            &quot;Queues absorb traffic spikes.&quot;
          </div>
        </div>

        <div className="manifesto-card" style={{ padding: '20px', background: 'var(--canvas-surface)', border: 'var(--border-ink)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-hard)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <Database size={18} color="#facc15" />
            <span className="manifesto-idx-pill" style={{ background: 'var(--pastel-yellow)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#000000' }}>
              03 // DATA MODELING
            </span>
          </div>
          <h4 className="manifesto-title" style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '8px' }}>Strict Schema Isolation</h4>
          <p className="manifesto-desc" style={{ fontSize: '0.85rem', color: 'var(--ink-secondary)', lineHeight: '1.6' }}>
            Compound indexes on tenant IDs and timestamps guarantee queries execute in sub-10ms, even as production tables grow to millions of rows.
          </p>
          <div className="manifesto-quote-pill" style={{ marginTop: '12px', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--ink-muted)' }}>
            &quot;Index by query patterns.&quot;
          </div>
        </div>

        <div className="manifesto-card" style={{ padding: '20px', background: 'var(--canvas-surface)', border: 'var(--border-ink)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-hard)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <ShieldCheck size={18} color="#c084fc" />
            <span className="manifesto-idx-pill" style={{ background: 'var(--pastel-lavender)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#000000' }}>
              04 // ZERO DOWNTIME
            </span>
          </div>
          <h4 className="manifesto-title" style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '8px' }}>Zero-Downtime Releases</h4>
          <p className="manifesto-desc" style={{ fontSize: '0.85rem', color: 'var(--ink-secondary)', lineHeight: '1.6' }}>
            Strict type safety, unit test coverage, and automated GitHub Actions with Jenkins triggers ensure releases happen without sweating a rollback.
          </p>
          <div className="manifesto-quote-pill" style={{ marginTop: '12px', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--ink-muted)' }}>
            &quot;Untested code is broken code.&quot;
          </div>
        </div>
      </div>
    </article>
  );
};

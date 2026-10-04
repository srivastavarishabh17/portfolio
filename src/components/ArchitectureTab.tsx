'use client';

import React from 'react';
import { Cpu, Server, Network, ShieldCheck, Zap } from 'lucide-react';

export const ArchitectureTab: React.FC = () => {
  return (
    <article className="architecture-article animate-fade-in">
      <h2 className="section-headline">Distributed Architecture &amp; System Specs</h2>

      <p style={{ fontSize: '0.96rem', color: 'var(--ink-secondary)', lineHeight: '1.65', marginBottom: '24px' }}>
        Here are production-tested blueprints of the core distributed systems, asynchronous message relays, and micro-frontend isolation patterns designed by Rishabh.
      </p>

      {/* Blueprint 1: Aozo Cloud Micro-Frontends Topology */}
      <section style={{ border: 'var(--border-ink)', borderRadius: 'var(--radius-lg)', background: 'var(--canvas-surface)', boxShadow: 'var(--shadow-hard)', padding: '24px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
          <Network size={20} color="#00f0ff" />
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--ink-primary)' }}>
            1. Multi-Tenant Decoupled Micro-Frontends Topology
          </h3>
        </div>

        <p style={{ fontSize: '0.88rem', color: 'var(--ink-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
          Demonstrates how the Aozo Enterprise Suite isolates 6+ sub-applications across subdomains (<code>crm.aozo.in</code>, <code>app.aozo.in</code>, <code>mailapi.aozo.in</code>, <code>desk.aozo.in</code>) with unified token-based Single Sign-On (SSO) and isolated deployment pipelines.
        </p>

        {/* Visual Architecture Diagram Box */}
        <div style={{ padding: '20px', background: '#04070e', border: '1px solid #1e293b', borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#94a3b8', lineHeight: '1.7', overflowX: 'auto' }}>
          <pre style={{ margin: 0, color: '#38bdf8' }}>
{`[ Client Browser / WAF Edge: Cloudflare DNS ]
                │
    ┌───────────┴───────────────────────────────┐
    ▼                                           ▼
[ crm.aozo.in (Next.js 14) ]        [ app.aozo.in (React 19) ]
    │                                           │
    └───────────────────┬───────────────────────┘
                        ▼
           [ API Gateway: Node.js / Nginx ]
                        │
    ┌───────────────────┼───────────────────────┐
    ▼                   ▼                       ▼
[ Mail Relay Engine ]   [ Realtime WebSockets ] [ Multi-Tenant DB ]
(BullMQ + Redis)        (sub-25ms cluster)      (PostgreSQL Shards)
 50K+ emails/hr         Zero-drop events        Tenant-isolated rows`}
          </pre>
        </div>
      </section>

      {/* Blueprint 2: Asynchronous BullMQ + Redis Relay */}
      <section style={{ border: 'var(--border-ink)', borderRadius: 'var(--radius-lg)', background: 'var(--canvas-surface)', boxShadow: 'var(--shadow-hard)', padding: '24px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
          <Zap size={20} color="#facc15" />
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--ink-primary)' }}>
            2. High-Throughput Async Message Dispatch Relay
          </h3>
        </div>

        <p style={{ fontSize: '0.88rem', color: 'var(--ink-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
          How high-frequency transactional payloads are buffered in memory and processed with zero HTTP thread blocking, delivering over 50,000 dispatches per hour with automated backoff retries.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
          <div style={{ padding: '16px', background: 'var(--canvas-panel)', border: 'var(--border-ink-thin)', borderRadius: 'var(--radius-md)' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#38bdf8', fontWeight: 800 }}>STEP 1</span>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, margin: '6px 0 4px', color: 'var(--ink-primary)' }}>Fast HTTP Ingestion</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--ink-secondary)' }}>
              Producer pushes campaign event to Redis buffer. Client receives <code>202 Accepted</code> in under 12ms.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--canvas-panel)', border: 'var(--border-ink-thin)', borderRadius: 'var(--radius-md)' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#34d399', fontWeight: 800 }}>STEP 2</span>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, margin: '6px 0 4px', color: 'var(--ink-primary)' }}>Worker Pool Processing</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--ink-secondary)' }}>
              Parallel BullMQ worker cluster fetches batches, applies IP rotation, and signs DKIM/SPF headers.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--canvas-panel)', border: 'var(--border-ink-thin)', borderRadius: 'var(--radius-md)' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#facc15', fontWeight: 800 }}>STEP 3</span>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, margin: '6px 0 4px', color: 'var(--ink-primary)' }}>Telemetry Sync</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--ink-secondary)' }}>
              Webhook callbacks update database state with open/click telemetry and write delivery confirmations.
            </p>
          </div>
        </div>
      </section>

      {/* Blueprint 3: MCP AI Server Architecture */}
      <section style={{ border: 'var(--border-ink)', borderRadius: 'var(--radius-lg)', background: 'var(--canvas-surface)', boxShadow: 'var(--shadow-hard)', padding: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
          <Cpu size={20} color="#c084fc" />
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--ink-primary)' }}>
            3. Model Context Protocol (MCP) AI Tool Integration
          </h3>
        </div>

        <p style={{ fontSize: '0.88rem', color: 'var(--ink-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
          Implemented across Messegy and internal AI tooling to safely expose database schemas, ticket resolution APIs, and product telemetry to autonomous reasoning agents with strict sandboxing.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          <span className="neo-pill lavender">Zod Input Validation</span>
          <span className="neo-pill mint">Deterministic Fallbacks</span>
          <span className="neo-pill blue">Sub-second Vector Lookup</span>
          <span className="neo-pill yellow">Audit-Logged Function Calling</span>
        </div>
      </section>
    </article>
  );
};

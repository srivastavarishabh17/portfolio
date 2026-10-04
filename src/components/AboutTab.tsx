'use client';

import React, { useState } from 'react';
import { TabType } from '@/types';
import { playClickSound } from '@/utils/audio';

interface AboutTabProps {
  isActive: boolean;
  onNavigate: (tab: TabType) => void;
  onShowToast: (msg: string) => void;
}

interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
  meta: string;
  isBot?: boolean;
}

const CHAT_ANSWERS: Record<string, { answer: string; citations: { title: string; type: string; page: string }[] }> = {
  architecture: {
    answer:
      'Rishabh builds decoupled event-driven systems using Next.js 14 SSR frontends, asynchronous Node.js & FastAPI microservices, BullMQ + Redis message queues, and partitioned PostgreSQL clusters. In active production, this architecture handles 50,000+ operations/hr with sub-25ms WebSocket latency and 99.98% SLA.',
    citations: [
      { title: 'Aozo_Architecture_Spec.pdf', type: 'pdf', page: 'pp. 14-22 ↗' },
      { title: 'PostgreSQL_Sharding_Plan.docx', type: 'docx', page: 'Section 4.2 ↗' }
    ]
  },
  rag: {
    answer:
      'The RAG architecture utilizes Azure AI Search for hybrid dense-sparse vector indexing paired with Azure OpenAI GPT-4o and Google Gemini 1.5 Pro. Documents are chunked with semantic boundaries, indexed with text-embedding-3-large, and synthesized with strict JSON schemas and groundness verification.',
    citations: [
      { title: 'FastAPI_Vector_Search_Config.txt', type: 'txt', page: 'Line 45 ↗' },
      { title: 'Azure_Search_Schema.json', type: 'json', page: 'Index Node ↗' }
    ]
  },
  seo: {
    answer:
      'The GEO & AEO engine leverages automated Schema.org JSON-LD knowledge graphs, high-density definitional entities, edge-rendered metadata, and 100/100 Core Web Vitals optimization. This methodology yielded a +350% surge in organic traffic and consistent high-relevance citations in Perplexity and Gemini.',
    citations: [
      { title: 'GEO_Optimization_Protocol.pdf', type: 'pdf', page: 'pp. 1-8 ↗' }
    ]
  },
  stack: {
    answer:
      'Production-tested technical arsenal: Next.js 14, React 19, TypeScript, Node.js, FastAPI, PostgreSQL, Redis, BullMQ, Docker, AWS ECS/S3, Azure Container Apps, WebSockets, Web Audio API, and Jenkins CI/CD.',
    citations: [
      { title: 'Production_Arsenal_Verified.pdf', type: 'pdf', page: 'Verified Stack ↗' }
    ]
  }
};

export const AboutTab: React.FC<AboutTabProps> = ({ isActive, onNavigate, onShowToast }) => {
  const [chatopsSubTab, setChatopsSubTab] = useState<string>('chat');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'user',
      text: 'What architecture does Rishabh build for high-throughput enterprise SaaS?',
      meta: 'Client Query • Authenticated Session'
    },
    {
      sender: 'bot',
      text: 'Rishabh architects decoupled systems with Next.js 14 SSR frontends, asynchronous Node.js & FastAPI microservices, BullMQ + Redis message queues, and partitioned PostgreSQL databases. In production across high-scale distributed platforms, this stack sustains 50,000+ operations/hr with 99.98% uptime SLA.',
      meta: '🟢 Grounded via Vector Hybrid Search • 0.04s latency',
      isBot: true
    }
  ]);
  const [inputVal, setInputVal] = useState<string>('');
  const [citations, setCitations] = useState([
    { title: 'Aozo_Architecture_Spec.pdf', type: 'pdf', page: 'pp. 14-22 ↗' },
    { title: 'PostgreSQL_Sharding_Plan.docx', type: 'docx', page: 'Section 4.2 ↗' },
    { title: 'FastAPI_Vector_Search_Config.txt', type: 'txt', page: 'Line 45 ↗' }
  ]);
  const [indexedDocs, setIndexedDocs] = useState([
    { title: 'Enterprise_CRM_Spec.pdf', type: 'pdf' },
    { title: 'Microservices_SLAs.docx', type: 'docx' },
    { title: 'Redis_Cluster_Topology.txt', type: 'txt' }
  ]);

  const handleSendQuery = (textToSend?: string) => {
    const q = (textToSend || inputVal).trim();
    if (!q) return;

    playClickSound();
    const newMsg: ChatMessage = {
      sender: 'user',
      text: q,
      meta: 'Client Query • Authenticated Session'
    };

    let reply = CHAT_ANSWERS.architecture;
    const lower = q.toLowerCase();
    if (lower.includes('rag') || lower.includes('ai') || lower.includes('azure') || lower.includes('openai')) {
      reply = CHAT_ANSWERS.rag;
    } else if (lower.includes('seo') || lower.includes('geo') || lower.includes('traffic')) {
      reply = CHAT_ANSWERS.seo;
    } else if (lower.includes('stack') || lower.includes('skills') || lower.includes('tech')) {
      reply = CHAT_ANSWERS.stack;
    }

    setMessages((prev) => [
      ...prev,
      newMsg,
      {
        sender: 'bot',
        text: reply.answer,
        meta: '🟢 Grounded via Vector Hybrid Search • 0.04s latency',
        isBot: true
      }
    ]);
    setCitations(reply.citations);
    setInputVal('');
  };

  const handleUploadSim = () => {
    playClickSound();
    const newDoc = { title: `Ingested_Vector_Chunk_${Date.now().toString().slice(-4)}.pdf`, type: 'pdf' };
    setIndexedDocs((prev) => [newDoc, ...prev]);
    onShowToast(`Simulated ingestion complete: ${newDoc.title} indexed.`);
  };

  const handleDeleteDoc = (index: number) => {
    playClickSound();
    setIndexedDocs((prev) => prev.filter((_, i) => i !== index));
    onShowToast('Document removed from vector index.');
  };

  return (
    <article className={`about ${isActive ? 'active' : ''}`} data-page="about">
      {/* =================================================================
           FLAGSHIP SHOWCASE: KNOWLEDGE CHATOPS & CLOUD ARCHITECTURE
           ================================================================= */}
      <section className="chatops-showcase-container">
        <div className="chatops-header-area">
          <h2 className="chatops-main-title">
            <span className="chatops-deco-sparkle">✦</span>
            Knowledge ChatOps
            <span className="chatops-deco-sparkle">✦</span>
          </h2>
          <div>
            <span className="chatops-subtitle-badge">FastAPI + Azure AI Search + Azure OpenAI</span>
          </div>
        </div>

        {/* Architecture Canvas Wrapper with Flanking Nodes */}
        <div className="architecture-diagram-wrapper">
          {/* Flanking Cloud Node: Left Top */}
          <div className="cloud-node node-container-apps">
            <div className="cloud-node-icon" style={{ background: 'var(--pastel-blue)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
            <div className="cloud-node-text">Azure Container Apps</div>
          </div>

          {/* Flanking Cloud Node: Left Bottom */}
          <div className="cloud-node node-blob-storage">
            <div className="cloud-node-icon" style={{ background: 'var(--pastel-yellow)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <div className="cloud-node-text">Blob Storage</div>
          </div>

          {/* Flanking Cloud Node: Right Top */}
          <div className="cloud-node node-ai-search">
            <div className="cloud-node-icon" style={{ background: 'var(--pastel-mint)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <div className="cloud-node-text">AI Search</div>
          </div>

          {/* Flanking Cloud Node: Right Bottom */}
          <div className="cloud-node node-azure-openai">
            <div className="cloud-node-icon" style={{ background: 'var(--pastel-lavender)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z"></path>
                <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z"></path>
              </svg>
            </div>
            <div className="cloud-node-text">Azure OpenAI</div>
          </div>

          {/* Main Interactive Studio Window */}
          <div className="chatops-window">
            {/* Window Chrome Bar */}
            <div className="mac-window-bar">
              <div className="mac-dots">
                <span className="mac-dot red"></span>
                <span className="mac-dot yellow"></span>
                <span className="mac-dot green"></span>
              </div>
              <div className="mac-window-title">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="9" y1="3" x2="9" y2="21"></line>
                </svg>
                <span>knowledge-chatops.internal.azure.mesh</span>
              </div>
              <div className="mac-window-actions">
                <span className="neo-pill mint" style={{ padding: '2px 8px', fontSize: '0.7rem' }}>
                  🟢 LIVE AGENT
                </span>
              </div>
            </div>

            {/* 3-Column Studio Grid */}
            <div className="chatops-grid">
              {/* Column 1: Sub-Sidebar */}
              <div className="chatops-subnav">
                {['chat', 'documents', 'index', 'dependencies', 'health', 'settings'].map((tab) => (
                  <button
                    key={tab}
                    className={`chatops-nav-btn ${chatopsSubTab === tab ? 'active' : ''}`}
                    data-chatops-tab={tab}
                    onClick={() => {
                      playClickSound();
                      setChatopsSubTab(tab);
                    }}
                  >
                    <span>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
                  </button>
                ))}
              </div>

              {/* Column 2: Central Chat / Q&A Area */}
              <div className="chatops-main-panel">
                <div className="panel-header-banner blue">
                  <span>Ask internal knowledge</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#1e3a8a' }}>
                    RAG Pipeline v3.8
                  </span>
                </div>

                {/* Conversation Stream */}
                <div id="chatops-stream" className="chatops-conversation-stream">
                  {messages.map((m, idx) => (
                    <div key={idx} className={m.sender === 'user' ? 'chat-msg-user' : 'chat-msg-bot'}>
                      {m.sender === 'user' ? (
                        <div className="chat-avatar-box">RS</div>
                      ) : (
                        <div className="bot-avatar-box">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"></path>
                            <rect x="4" y="8" width="16" height="12" rx="2"></rect>
                            <circle cx="9" cy="13" r="1.5"></circle>
                            <circle cx="15" cy="13" r="1.5"></circle>
                            <line x1="8" y1="17" x2="16" y2="17"></line>
                          </svg>
                        </div>
                      )}
                      <div className="chat-content-area">
                        <div className={m.sender === 'user' ? 'chat-prompt-text' : 'bot-response-text'}>
                          {m.text}
                        </div>
                        <div
                          style={{
                            fontSize: '0.72rem',
                            color: m.isBot ? '#15803d' : 'var(--ink-muted)',
                            fontFamily: 'var(--font-mono)',
                            marginTop: '4px',
                            fontWeight: m.isBot ? 700 : 400
                          }}
                        >
                          {m.meta}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Topic Chips */}
                <div style={{ padding: '10px 16px', background: 'var(--canvas-panel)', borderTop: 'var(--border-ink-thin)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--ink-muted)', marginBottom: '6px' }}>
                    QUICK ARCHITECTURE QUERIES:
                  </div>
                  <div className="quick-prompt-chips">
                    <button className="quick-chip-btn" onClick={() => handleSendQuery('Explain high concurrency and scaling architecture')}>
                      ⚡ Concurrency &amp; Scale
                    </button>
                    <button className="quick-chip-btn" onClick={() => handleSendQuery('Explain RAG pipeline with Azure AI Search')}>
                      🤖 RAG &amp; Azure AI
                    </button>
                    <button className="quick-chip-btn" onClick={() => handleSendQuery('How does the GEO / SEO engine work?')}>
                      🚀 SEO/GEO Engine
                    </button>
                    <button className="quick-chip-btn" onClick={() => handleSendQuery('What is your verified production stack?')}>
                      🛠️ Verified Tech Stack
                    </button>
                  </div>
                </div>

                {/* Prompt Input Field */}
                <div style={{ padding: '12px 16px', background: 'var(--canvas-surface)', borderTop: 'var(--border-ink)', display: 'flex', gap: '8px' }}>
                  <input
                    type="text"
                    id="chatops-input"
                    className="neo-input"
                    placeholder="Ask about Rishabh's production architecture, RAG pipelines, or cloud systems..."
                    style={{ borderRadius: 'var(--radius-sm)', fontSize: '0.85rem' }}
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSendQuery();
                    }}
                  />
                  <button
                    id="chatops-send-btn"
                    className="neo-btn mint neo-btn-sm"
                    style={{ padding: '0 16px' }}
                    onClick={() => handleSendQuery()}
                  >
                    <span>Send</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </button>
                </div>

                {/* Citations Panel */}
                <div className="citations-box">
                  <div className="panel-header-banner mint">
                    <span>Citations &amp; Source Artifacts</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#166534' }}>
                      Verified Vector Nodes
                    </span>
                  </div>
                  <div id="chatops-citations-list" className="citations-list">
                    {citations.map((c, idx) => (
                      <div key={idx} className="citation-item">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span className={`citation-badge ${c.type}`}>{c.type.toUpperCase()}</span>
                          <span style={{ fontWeight: 700, color: 'var(--ink-primary)' }}>{c.title}</span>
                        </div>
                        <span style={{ color: 'var(--ink-muted)', fontSize: '0.72rem' }}>{c.page}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Column 3: Right Telemetry & Operations Column */}
              <div className="chatops-right-panel">
                {/* Box 1: Upload Documents */}
                <div className="right-section-box">
                  <div className="panel-header-banner yellow">
                    <span>Upload documents</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="17 8 12 3 7 8"></polyline>
                      <line x1="12" y1="3" x2="12" y2="15"></line>
                    </svg>
                  </div>
                  <div className="upload-dropzone">
                    <div
                      id="chatops-upload-trigger"
                      className="dropzone-circle"
                      title="Click to test document ingestion simulation"
                      onClick={handleUploadSim}
                    >
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--ink-muted)', fontFamily: 'var(--font-mono)' }}>
                      Drop PDF/DOCX or click plus to ingest
                    </p>
                    <button id="sim-upload-btn" className="neo-btn yellow neo-btn-sm" onClick={handleUploadSim} style={{ width: '100%' }}>
                      <span>Upload &amp; Index</span>
                    </button>
                  </div>
                </div>

                {/* Box 2: Indexed Documents */}
                <div className="right-section-box">
                  <div className="panel-header-banner mint">
                    <span>Indexed documents</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#166534' }}>
                      Vector Embeddings
                    </span>
                  </div>
                  <div id="chatops-indexed-docs" className="indexed-docs-list">
                    {indexedDocs.map((doc, idx) => (
                      <div key={idx} className="doc-row">
                        <div className="doc-name-group">
                          <span className={`citation-badge ${doc.type}`}>{doc.type.toUpperCase()}</span>
                          <span style={{ fontWeight: 700, color: 'var(--ink-primary)' }}>{doc.title}</span>
                        </div>
                        <span className="trash-btn" title="Delete Index Node" onClick={() => handleDeleteDoc(idx)}>
                          🗑️
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Box 3: Health Status Indicators */}
                <div className="right-section-box">
                  <div className="panel-header-banner blue">
                    <span>Health &amp; Telemetry</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#1e3a8a' }}>
                      SLA 99.98%
                    </span>
                  </div>
                  <div className="health-metrics-list">
                    <div className="health-row">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                        </svg>
                        <span>PostgreSQL Core</span>
                      </div>
                      <div className="health-status-badge">
                        <span>✓ 12ms</span>
                      </div>
                    </div>

                    <div className="health-row">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="11" cy="11" r="8"></circle>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                        <span>Azure AI Search</span>
                      </div>
                      <div className="health-status-badge">
                        <span>✓ Synced</span>
                      </div>
                    </div>

                    <div className="health-row">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                        </svg>
                        <span>Azure OpenAI LLM</span>
                      </div>
                      <div className="health-status-badge">
                        <span>✓ Ready</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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

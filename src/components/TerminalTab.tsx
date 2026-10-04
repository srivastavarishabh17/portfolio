'use client';

import React, { useState, useRef, useEffect } from 'react';
import { playClickSound } from '@/utils/audio';

interface TerminalTabProps {
  isActive: boolean;
}

interface CommandHistory {
  cmd: string;
  output: string;
}

const TERMINAL_COMMANDS: Record<string, string> = {
  help: `Available commands:
  - bio          : Who is Rishabh Srivastava & what drives him
  - skills       : Production technical arsenal
  - experience   : Verified work history & metrics
  - projects     : Architecture & platforms built
  - attitude     : Engineering philosophy & non-negotiables
  - contact      : Direct communication coordinates
  - hire         : Value proposition for teams & clients
  - clear        : Clear terminal output`,

  bio: `RISHABH SRIVASTAVA [Full Stack Architect & GenAI Specialist]
---------------------------------------------------------------
Location : Greater Noida / NCR, India (Global Remote Capable)
Education: B.Tech in Electrical & Electronics Engineering (AKTU)
Experience: 4+ Years across Enterprise Platforms, Startups & High-Scale Systems
Mission  : Building mission-critical web applications that scale seamlessly, load instantly, and dominate both traditional and generative search (GEO).`,

  skills: `FRONTEND   : Next.js (App Router, RSC), React.js, TypeScript, ES6+, TailwindCSS, Canvas/WebGL
BACKEND    : Node.js, Express.js, FastAPI, REST Microservices, WebSockets, Python
DATABASES  : PostgreSQL, MongoDB, Redis Caching, Schema Tuning
DEVOPS     : Jenkins, GitHub Actions, Docker, AWS (ECS/S3), Azure Container Apps, Linux, Nginx
INTEGRATION: Generative AI (Gemini/OpenAI), Azure AI Search, Chart Automation, Payment Gateways
GROWTH     : SEO, AEO, GEO (Generative Engine Optimization), Core Web Vitals 100/100`,

  experience: `1. Principal Product Architect & Core Engineer [2022 - Present]
   • Scaled enterprise CRM, EDM & cloud communication suites on Node.js & Next.js.
   • Boosted website discoverability by 350% across US & India via SEO/AEO/GEO.
   • Implemented automated CI/CD pipelines via Jenkins & GitHub Actions on VPS.
   • Integrated GenAI model inference for dynamic automated client reporting.

2. Enterprise Consultant & Freelance Engineer [2021 - 2022]
   • Architected end-to-end eCommerce portals, admin dashboards & APIs for global clients.
   • Shipped hybrid mobile applications using React Native and Flutter.
   • Full DevOps ownership on AWS, DigitalOcean and VPS.`,

  projects: `ACTIVE PRODUCTION ECOSYSTEMS & WORKING PLATFORMS:
=============================================================
1. AOZO ENTERPRISE CLOUD SUITE [aozo.in]
   • app.aozo.in       : Unified Cloud Business OS
   • crm.aozo.in       : Enterprise CRM & Lead Funnels
   • mailapi.aozo.in   : High-Throughput Mail Dispatch Engine
   • chatapi.aozo.in   : Real-time Enterprise Chat Microservices
   • accounting.aozo.in: Financial Accounting & Billing Engine
   • desk.aozo.in      : Customer Support Desk & Ticket API

2. PRIME PLATFORM CRM & EDM ENGINE [Enterprise Product]
   • Next.js + Node.js Enterprise Scale | +350% Discoverability | CI/CD Pipelines

3. MESSEGY OMNICHANNEL PLATFORM [messegy.com]
   • portal.messegy.com  : Customer Communication Portal
   • helpdesk.messegy.com: Omnichannel Helpdesk & Ticket Flow
   • auth.messegy.com    : Centralized OAuth2/SSO Microservice
   • mcp.messegy.com     : Model Context Protocol (AI API)
   • shopify.messegy.com : Shopify Omnichannel Connector

4. ECOMIFY.IO MULTI-TENANT ECOMMERCE [ecomify.io]
   • app.ecomify.io    : Next-gen eCommerce Builder & Storefront
   • backend.ecomify.io: Distributed Transaction & Order Microservices

5. ALPHAZON ENTERPRISE LMS [alphazon.in]
   • lms.alphazon.in   : Video Course & Interactive Student Portal

6. MYAYUSHCLINIC HEALTHTECH SUITE [myayushclinic.com]
   • Clinic Web Platform, Real-time WebRTC Consultations & Telemetry API

Click any project card in the 'Portfolio' section to inspect full architecture!`,

  attitude: `THE 4 NON-NEGOTIABLES OF MY ENGINEERING ATTITUDE:
1. EXTREME OWNERSHIP   : From architecture diagram to Docker container on AWS, I own the outcome.
2. SPEED IS RESPECT    : Sub-second page loads. Clean code. 100/100 Core Web Vitals standard.
3. AI-FIRST LEVERAGE   : I engineer structured semantic data so LLMs cite your business first.
4. RESILIENT SYSTEMS   : Zero-downtime CI/CD pipelines and microservices that never panic at 3 AM.`,

  contact: `DIRECT CONTACT COORDINATES:
• Email    : ersrivastavarishabh@gmail.com
• Phone    : +91 7037564392
• WhatsApp : https://wa.me/917037564392
• LinkedIn : https://linkedin.com/in/srivastavarishabh17
• GitHub   : https://github.com/srivastavarishabh17
• Website  : https://rishabhsrivastava.in`,

  hire: `WHY HIRE RISHABH?
Because you aren't just buying lines of syntax; you are acquiring high-agency engineering horsepower.
Whether you need an enterprise CRM built from scratch, high-conversion Next.js applications, or GenAI-driven data automation, I deliver on-time with zero excuses.
Let's talk: email ersrivastavarishabh@gmail.com or WhatsApp +917037564392`
};

export const TerminalTab: React.FC<TerminalTabProps> = ({ isActive }) => {
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const [inputVal, setInputVal] = useState<string>('');
  const screenRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (screenRef.current) {
      screenRef.current.scrollTop = screenRef.current.scrollHeight;
    }
  }, [history]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const trimmed = inputVal.trim().toLowerCase();
      playClickSound();
      if (trimmed === 'clear') {
        setHistory([]);
        setInputVal('');
        return;
      }
      const output = TERMINAL_COMMANDS[trimmed] || `zsh: command not found: ${trimmed}. Type 'help' to inspect available commands.`;
      setHistory((prev) => [...prev, { cmd: inputVal, output }]);
      setInputVal('');
    }
  };

  return (
    <article className={`terminal ${isActive ? 'active' : ''}`} data-page="terminal">
      <h2 className="section-headline">Interactive Terminal CLI</h2>
      <p style={{ color: 'var(--ink-secondary)', marginBottom: '20px', fontSize: '0.95rem' }}>
        Direct command-line emulator accessing system coordinates, verified metrics, and architectural summaries.
      </p>

      <div className="terminal-window">
        <div className="terminal-header">
          <div className="mac-dots">
            <span className="mac-dot red"></span>
            <span className="mac-dot yellow"></span>
            <span className="mac-dot green"></span>
          </div>
          <div className="terminal-title">visitor@rishabh.dev — zsh (ARM64)</div>
          <span className="neo-pill mint" style={{ padding: '2px 8px', fontSize: '0.68rem' }}>
            ACTIVE SESSION
          </span>
        </div>

        <div id="embedded-terminal-output" className="terminal-screen" ref={screenRef}>
          <div style={{ color: '#58a6ff', fontWeight: 700 }}>RishabhOS v3.8 [ARM64 - Darwin Kernel]</div>
          <div style={{ color: '#8b949e' }}>
            Direct terminal interface initialized. High-agency developer console active.
          </div>
          <div style={{ color: '#7ee787', marginBottom: '14px' }}>
            Type <span style={{ color: '#f2cc60', fontWeight: 700 }}>help</span> to inspect available commands, or try{' '}
            <span style={{ color: '#79c0ff' }}>projects</span>, <span style={{ color: '#79c0ff' }}>skills</span>,{' '}
            <span style={{ color: '#79c0ff' }}>experience</span>, <span style={{ color: '#79c0ff' }}>contact</span>.
          </div>

          {history.map((h, idx) => (
            <div key={idx} style={{ marginBottom: '12px' }}>
              <div style={{ color: '#79c0ff', fontWeight: 700 }}>
                visitor@rishabh.dev:~$ <span style={{ color: '#ffffff' }}>{h.cmd}</span>
              </div>
              <pre
                style={{
                  fontFamily: 'inherit',
                  color: '#c9d1d9',
                  whiteSpace: 'pre-wrap',
                  margin: '4px 0 0',
                  lineHeight: '1.5'
                }}
              >
                {h.output}
              </pre>
            </div>
          ))}
        </div>

        <div style={{ padding: '12px 18px', background: '#07090e', borderTop: '1px solid #30363d' }}>
          <div className="term-input-row">
            <span className="term-prompt-symbol">visitor@rishabh.dev:~$</span>
            <input
              type="text"
              id="embedded-terminal-input"
              className="terminal-real-input"
              autoComplete="off"
              spellCheck="false"
              placeholder="type 'help', 'projects', 'skills', 'contact'..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
      </div>
    </article>
  );
};

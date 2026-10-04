'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send, Trash2 } from 'lucide-react';
import { playClickSound, playTerminalBeep } from '@/utils/audio';

interface TerminalEntry {
  command: string;
  output: string;
  isError?: boolean;
}

export const TerminalTab: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<TerminalEntry[]>([
    {
      command: 'neofetch',
      output: `       _,met$$$$$gg.          USER     : rishabh@architect-node-01
    ,g$$$$$$$$$$$$$$$P.       OS       : Darwin x86_64 / macOS Sonoma
  ,g$$P"''       '""Y$$.".    UPTIME   : 4+ Years Continuous Production
 ,$$P'              '$$$.     SHELL    : zsh 5.9 (x86_64-apple-darwin)
',$$P       ,ggs.     '$$b:   ROLE     : Senior Full Stack & GenAI Architect
'd$$'     ,$P"'   .    $$$    PRODUCTS : Aozo Cloud, Prime CRM, Messegy, Ecomify
 $$P      d$'     ,    $$$P   STACK    : Next.js 14, Node.js, BullMQ, Redis, PostgreSQL
 $$:      $$.   -    ,d$$'    ENGINE   : Generative Engine Optimization (GEO)
 $$;      Y$b._   _,d$P'      STATUS   : Open for Advisory, Contracts & Senior Roles
 Y$$.    '.'"Y$$$$P"'
  '$$b      "-.__
   'Y$$b
     'Y$$.
       '$$b.
         'Y$$b.
           '"Y$b.`
    }
  ]);

  const [cmdIndex, setCmdIndex] = useState<number>(-1);
  const [cmdList, setCmdList] = useState<string[]>(['neofetch']);
  const terminalBottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    terminalBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const COMMANDS: Record<string, string> = {
    help: `AVAILABLE SYSTEM COMMANDS:
==============================================================
  about       : Overview of engineering background & philosophy
  skills      : Verified core competencies & production stack
  projects    : Active production ecosystems & architectures
  experience  : Full-stack career history & milestones
  contact     : Direct contact coordinates (Email/WhatsApp)
  neofetch    : System specs, stack breakdown & environment
  clear       : Wipe current terminal buffer
  date        : Return current synchronized UTC / IST timestamp
  whoami      : Display active authenticated identity
==============================================================`,

    about: `RISHABH SRIVASTAVA — SENIOR FULL STACK & GENAI ARCHITECT
==============================================================
Location    : Greater Noida / Delhi NCR, India
Focus       : Decoupled SaaS Systems, High-Concurrency Queues, GEO
Experience  : 4+ Years designing resilient distributed web architectures
Philosophy  : "Untested code is broken code. Queues absorb traffic spikes."`,

    skills: `CORE PRODUCTION COMPETENCIES:
==============================================================
[FRONTEND]  : Next.js 14 (SSR/SSG), React 19, TypeScript, TailwindCSS, Web Audio API
[BACKEND]   : Node.js, Express, FastAPI (Python), BullMQ Queues, WebSockets
[DATABASES] : PostgreSQL Partitioning, Redis Caching, MongoDB Spatial Indexes
[DEVOPS]    : Docker Containers, Jenkins CI/CD, GitHub Actions, AWS ECS/S3, Linux VPS
[AI / GEO]  : Gemini API, OpenAI, Model Context Protocol (MCP), Schema.org JSON-LD`,

    projects: `ACTIVE PRODUCTION ECOSYSTEMS & PRODUCTS:
==============================================================
1. Aozo Enterprise Cloud Suite   [aozo.in]
   • app, crm, mailapi, chatapi, accounting, desk micro-frontends
2. Prime Platform CRM & EDM      [Commercial Suite]
   • High-concurrency enterprise EDM dispatch engine, Next.js + Redis
3. Messegy Omnichannel Platform  [messegy.com]
   • Unified WhatsApp, SMS, Webhooks & MCP AI agent support
4. Ecomify.io Cloud Commerce     [ecomify.io]
   • Headless multi-tenant eCommerce engine with atomic stock locks
5. Alphazon EdTech LMS           [alphazon.in]
   • High-bitrate adaptive HLS video streaming & proctored exams`,

    experience: `PRODUCTION CAREER TRACK RECORD:
==============================================================
1. Principal Product Architect & Core Engineer [2022 - Present]
   • Proprietary SaaS & Cloud Products (Aozo Ecosystem & Messegy)
   • 50,000+ dispatches/hr via BullMQ & Redis queues with sub-25ms latency
   • Automated CI/CD pipelines slashing release cycles by 60%
   • Sustained 99.98% uptime SLA across distributed clusters

2. Enterprise Consultant & Solutions Architect [2021 - 2023]
   • Client Collaborations (D2C, HealthTech & FinTech)
   • Delivered sub-second checkout speeds for Ecomify.io & Saattvik Natural
   • Engineered HIPAA-compliant telemedicine platform MyAyushClinic`,

    contact: `DIRECT CONTACT COORDINATES:
==============================================================
Email       : ersrivastavarishabh@gmail.com
Phone       : +91 7037564392
WhatsApp    : https://wa.me/917037564392
LinkedIn    : https://linkedin.com/in/srivastavarishabh17
GitHub      : https://github.com/srivastavarishabh17`,

    whoami: `identity: rishabh_srivastava [UID: 1001, GID: 1001 (architect)]`,

    date: new Date().toUTCString()
  };

  const handleRunCommand = (cmdText: string) => {
    const raw = cmdText.trim();
    if (!raw) return;

    playTerminalBeep();
    const clean = raw.toLowerCase();

    if (clean === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    setCmdList((prev) => [...prev, raw]);
    setCmdIndex(-1);

    if (COMMANDS[clean]) {
      setHistory((prev) => [...prev, { command: raw, output: COMMANDS[clean] }]);
    } else {
      setHistory((prev) => [
        ...prev,
        {
          command: raw,
          output: `zsh: command not found: ${raw}. Type 'help' for available system commands.`,
          isError: true
        }
      ]);
    }

    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleRunCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdList.length === 0) return;
      const nextIdx = cmdIndex === -1 ? cmdList.length - 1 : Math.max(0, cmdIndex - 1);
      setCmdIndex(nextIdx);
      setInputVal(cmdList[nextIdx] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (cmdIndex === -1) return;
      const nextIdx = cmdIndex + 1;
      if (nextIdx >= cmdList.length) {
        setCmdIndex(-1);
        setInputVal('');
      } else {
        setCmdIndex(nextIdx);
        setInputVal(cmdList[nextIdx] || '');
      }
    }
  };

  return (
    <article className="terminal-article animate-fade-in">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
        <h2 className="section-headline" style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Terminal size={20} color="#00f0ff" />
          <span>Interactive Linux Terminal CLI</span>
        </h2>
        <button
          onClick={() => {
            playClickSound();
            setHistory([]);
          }}
          className="neo-btn"
          style={{ padding: '5px 12px', fontSize: '0.74rem', gap: '6px', background: 'var(--canvas-surface)', color: 'var(--ink-secondary)' }}
        >
          <Trash2 size={13} />
          <span>Clear Buffer</span>
        </button>
      </div>

      {/* Suggested Command Chips */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--ink-muted)', alignSelf: 'center', marginRight: '4px' }}>
          Quick Exec:
        </span>
        {['help', 'about', 'skills', 'projects', 'experience', 'contact', 'neofetch', 'clear'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleRunCommand(cmd)}
            style={{
              padding: '3px 9px',
              borderRadius: 'var(--radius-pill)',
              border: 'var(--border-ink-thin)',
              background: 'var(--canvas-panel)',
              color: 'var(--ink-primary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              cursor: 'pointer'
            }}
          >
            ${cmd}
          </button>
        ))}
      </div>

      {/* Terminal Shell Window */}
      <div
        className="terminal-shell-box"
        style={{
          border: 'var(--border-ink)',
          borderRadius: 'var(--radius-lg)',
          background: '#04070e',
          boxShadow: 'var(--shadow-hard)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Terminal Header */}
        <div
          style={{
            padding: '10px 14px',
            background: '#0d131f',
            borderBottom: 'var(--border-ink)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <div style={{ display: 'flex', gap: '5px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }}></span>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#eab308' }}></span>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }}></span>
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: '#64748b', marginLeft: '6px' }}>
            bash — rishabh@architect-node-01: ~ (zsh)
          </span>
        </div>

        {/* Terminal History Output */}
        <div
          style={{
            padding: '18px',
            minHeight: '380px',
            maxHeight: '520px',
            overflowY: 'auto',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.84rem',
            lineHeight: '1.6',
            color: '#f8fafc',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px'
          }}
        >
          {history.map((entry, idx) => (
            <div key={idx}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00f0ff' }}>
                <span style={{ color: '#34d399' }}>rishabh@architect:~$</span>
                <span>{entry.command}</span>
              </div>
              <pre
                style={{
                  marginTop: '4px',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                  color: entry.isError ? '#f87171' : '#cbd5e1'
                }}
              >
                {entry.output}
              </pre>
            </div>
          ))}
          <div ref={terminalBottomRef} />
        </div>

        {/* Input Line */}
        <div
          style={{
            padding: '12px 16px',
            background: '#0a0f1a',
            borderTop: '1px solid #1e293b',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', color: '#34d399', fontSize: '0.85rem' }}>
            rishabh@architect:~$
          </span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help' and press Enter..."
            autoFocus
            style={{
              flexGrow: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#f8fafc',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem'
            }}
          />
          <button
            onClick={() => handleRunCommand(inputVal)}
            className="neo-btn mint"
            style={{ padding: '4px 10px', fontSize: '0.72rem' }}
          >
            <Send size={13} />
          </button>
        </div>
      </div>
    </article>
  );
};

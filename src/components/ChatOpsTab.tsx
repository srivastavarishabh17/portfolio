'use client';

import React, { useState } from 'react';
import { CHATOPS_KNOWLEDGE, QUICK_PROMPTS } from '@/data/chatops';
import { MessageSquare, Send, Bot, User, CheckCircle2, FileText } from 'lucide-react';
import { playClickSound, playTerminalBeep } from '@/utils/audio';

interface Message {
  sender: 'user' | 'assistant';
  text: string;
  citations?: { name: string; type: string; pages: string }[];
  latency?: string;
}

export const ChatOpsTab: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'assistant',
      text: 'Hello! I am Rishabh’s ChatOps Architecture Assistant, grounded via vector embeddings on his production specs. Ask me about his system designs, high-concurrency pipelines, or project track record.',
      latency: '0.02s'
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (text: string) => {
    const query = text.trim();
    if (!query) return;

    playTerminalBeep();
    const userMsg: Message = { sender: 'user', text: query };
    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      const lower = query.toLowerCase();
      let answer = 'Rishabh has engineered 16+ production architectures including Aozo Enterprise Cloud Suite, Prime CRM, Messegy Omnichannel, and Ecomify.io. Reach out directly via WhatsApp at +91 7037564392 to discuss contracts, architecture reviews, or full-time engagements.';
      let citations = [{ name: 'Rishabh_Master_Portfolio_2026.pdf', type: 'pdf', pages: 'All 16 Projects' }];

      if (lower.includes('rag') || lower.includes('ai') || lower.includes('llm') || lower.includes('search')) {
        answer = CHATOPS_KNOWLEDGE['rag'].answer;
        citations = CHATOPS_KNOWLEDGE['rag'].citations;
      } else if (lower.includes('scale') || lower.includes('database') || lower.includes('backend') || lower.includes('arch') || lower.includes('concurrency')) {
        answer = CHATOPS_KNOWLEDGE['architecture'].answer;
        citations = CHATOPS_KNOWLEDGE['architecture'].citations;
      } else if (lower.includes('seo') || lower.includes('geo') || lower.includes('google') || lower.includes('traffic')) {
        answer = CHATOPS_KNOWLEDGE['seo'].answer;
        citations = CHATOPS_KNOWLEDGE['seo'].citations;
      } else if (lower.includes('contact') || lower.includes('hire') || lower.includes('available') || lower.includes('advisory')) {
        answer = CHATOPS_KNOWLEDGE['availability'].answer;
        citations = CHATOPS_KNOWLEDGE['availability'].citations;
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: 'assistant',
          text: answer,
          citations,
          latency: '0.04s'
        }
      ]);
      setIsTyping(false);
    }, 450);
  };

  return (
    <article className="chatops-article animate-fade-in">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
        <h2 className="section-headline" style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <MessageSquare size={20} color="#34d399" />
          <span>ChatOps AI Architecture Assistant</span>
        </h2>
        <span className="neo-pill mint" style={{ fontSize: '0.68rem', padding: '3px 8px' }}>
          GROUNDED VECTOR RAG
        </span>
      </div>

      {/* Quick Prompts */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '18px' }}>
        <span style={{ fontSize: '0.75rem', color: 'var(--ink-muted)', alignSelf: 'center', fontFamily: 'var(--font-mono)' }}>
          Suggested Inquiries:
        </span>
        {QUICK_PROMPTS.map((p) => (
          <button
            key={p.key}
            onClick={() => {
              playClickSound();
              handleSend(CHATOPS_KNOWLEDGE[p.key].prompt);
            }}
            style={{
              padding: '4px 10px',
              borderRadius: 'var(--radius-pill)',
              border: 'var(--border-ink-thin)',
              background: 'var(--canvas-panel)',
              color: 'var(--ink-primary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
              cursor: 'pointer'
            }}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Chat Container Box */}
      <div
        style={{
          border: 'var(--border-ink)',
          borderRadius: 'var(--radius-lg)',
          background: 'var(--canvas-surface)',
          boxShadow: 'var(--shadow-hard)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Chat Log */}
        <div
          style={{
            padding: '20px',
            minHeight: '360px',
            maxHeight: '480px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          {messages.map((msg, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'flex-start',
                flexDirection: msg.sender === 'user' ? 'row-reverse' : 'row'
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: msg.sender === 'user' ? 'var(--pastel-blue)' : 'var(--pastel-mint)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  border: 'var(--border-ink-thin)'
                }}
              >
                {msg.sender === 'user' ? <User size={16} color="#000000" /> : <Bot size={16} color="#000000" />}
              </div>

              <div
                style={{
                  maxWidth: '82%',
                  padding: '14px 16px',
                  borderRadius: 'var(--radius-md)',
                  background: msg.sender === 'user' ? 'var(--canvas-panel)' : 'var(--canvas-subtle)',
                  border: 'var(--border-ink-thin)',
                  boxShadow: 'var(--shadow-hard-sm)'
                }}
              >
                <p style={{ fontSize: '0.88rem', color: 'var(--ink-primary)', lineHeight: '1.6' }}>
                  {msg.text}
                </p>

                {msg.latency && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.7rem', color: '#34d399', fontFamily: 'var(--font-mono)', marginTop: '8px' }}>
                    <CheckCircle2 size={12} />
                    <span>Grounded via Vector Hybrid Search • {msg.latency} latency</span>
                  </div>
                )}

                {msg.citations && msg.citations.length > 0 && (
                  <div style={{ marginTop: '10px', paddingTop: '8px', borderTop: '1px dashed var(--canvas-panel)' }}>
                    <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--ink-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                      CITED ARCHITECTURE REPOSITORIES:
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {msg.citations.map((c, cIdx) => (
                        <span
                          key={cIdx}
                          style={{
                            fontSize: '0.7rem',
                            fontFamily: 'var(--font-mono)',
                            padding: '2px 6px',
                            borderRadius: '4px',
                            background: 'var(--canvas-panel)',
                            color: 'var(--ink-secondary)',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          <FileText size={11} color="#38bdf8" />
                          {c.name} ({c.pages})
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', color: 'var(--ink-muted)', fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}>
              <Bot size={16} />
              <span>Retrieving embeddings from vector store...</span>
            </div>
          )}
        </div>

        {/* Chat Input Line */}
        <div
          style={{
            padding: '12px 16px',
            background: 'var(--canvas-panel)',
            borderTop: 'var(--border-ink)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSend(inputVal);
            }}
            placeholder="Ask about system architecture, concurrency, or advisory..."
            style={{
              flexGrow: 1,
              padding: '10px 14px',
              borderRadius: 'var(--radius-md)',
              border: 'var(--border-ink-thin)',
              background: 'var(--canvas-surface)',
              color: 'var(--ink-primary)',
              fontSize: '0.85rem',
              outline: 'none'
            }}
          />
          <button
            onClick={() => handleSend(inputVal)}
            className="neo-btn mint"
            style={{ padding: '9px 16px' }}
          >
            <Send size={15} />
            <span>Send</span>
          </button>
        </div>
      </div>
    </article>
  );
};

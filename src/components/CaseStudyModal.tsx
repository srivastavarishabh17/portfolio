'use client';

import React, { useEffect } from 'react';
import { ProjectCaseStudy } from '@/types';
import { X, ExternalLink, ShieldAlert, Cpu, CheckCircle2, AlertTriangle } from 'lucide-react';
import { playClickSound } from '@/utils/audio';

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="case-study-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(9, 13, 22, 0.85)',
        backdropFilter: 'blur(8px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          playClickSound();
          onClose();
        }
      }}
    >
      <div
        className="case-study-modal-box animate-scale-up"
        style={{
          width: '100%',
          maxWidth: '820px',
          maxHeight: '90vh',
          background: 'var(--canvas-surface)',
          border: 'var(--border-ink)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-hard-lg)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '16px 22px',
            background: 'var(--canvas-panel)',
            borderBottom: 'var(--border-ink)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="mac-dot red" style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }}></span>
            <span className="mac-dot yellow" style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#eab308' }}></span>
            <span className="mac-dot green" style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }}></span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--ink-muted)', marginLeft: '6px' }}>
              architecture-spec // {project.id}
            </span>
          </div>

          <button
            onClick={() => {
              playClickSound();
              onClose();
            }}
            className="neo-btn"
            style={{ padding: '4px 8px', border: 'var(--border-ink)', borderRadius: 'var(--radius-sm)' }}
            aria-label="Close Case Study"
          >
            <X size={16} />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div style={{ padding: '24px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Title & Client Banner */}
          <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
              <span className="neo-pill mint" style={{ fontWeight: 700 }}>{project.client}</span>
              <span className="neo-pill blue">{project.role}</span>
              <span className="neo-pill yellow">{project.timeline}</span>
            </div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--ink-primary)', marginBottom: '6px' }}>
              {project.title}
            </h2>
            <p style={{ fontSize: '0.92rem', color: 'var(--ink-secondary)', lineHeight: '1.5' }}>
              {project.subtitle}
            </p>
          </div>

          {/* Copyright & Commercial Notice */}
          <div
            style={{
              padding: '12px 16px',
              borderRadius: 'var(--radius-md)',
              border: 'var(--border-ink-thin)',
              background: 'var(--canvas-panel)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px'
            }}
          >
            <ShieldAlert size={18} color="#38bdf8" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div style={{ fontSize: '0.8rem', color: 'var(--ink-secondary)', lineHeight: '1.4' }}>
              <strong style={{ color: 'var(--ink-primary)', display: 'block', marginBottom: '2px' }}>
                {project.copyright}
              </strong>
              {project.copyrightNotice}
            </div>
          </div>

          {/* Production Metrics Strip */}
          {project.metrics && project.metrics.length > 0 && (
            <div>
              <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--ink-muted)', textTransform: 'uppercase', marginBottom: '10px' }}>
                VERIFIED ARCHITECTURAL METRICS
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
                {project.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '14px',
                      background: 'var(--canvas-subtle)',
                      border: 'var(--border-ink-thin)',
                      borderRadius: 'var(--radius-md)',
                      boxShadow: 'var(--shadow-hard-sm)'
                    }}
                  >
                    <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#00f0ff', fontFamily: 'var(--font-mono)' }}>
                      {m.val}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--ink-secondary)', marginTop: '4px' }}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* System Overview */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--ink-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>
              SYSTEM ARCHITECTURE OVERVIEW
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--ink-primary)', lineHeight: '1.65' }}>
              {project.overview}
            </p>
          </div>

          {/* Challenges & Solutions */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
            <div style={{ padding: '16px', background: 'var(--canvas-panel)', border: 'var(--border-ink-thin)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#f87171', fontWeight: 800, fontSize: '0.85rem', marginBottom: '10px', fontFamily: 'var(--font-mono)' }}>
                <AlertTriangle size={16} />
                ENGINEERING CHALLENGES
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {project.challenges.map((c, idx) => (
                  <li key={idx} style={{ fontSize: '0.82rem', color: 'var(--ink-secondary)', lineHeight: '1.5', paddingLeft: '14px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#f87171' }}>•</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ padding: '16px', background: 'var(--canvas-panel)', border: 'var(--border-ink-thin)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#34d399', fontWeight: 800, fontSize: '0.85rem', marginBottom: '10px', fontFamily: 'var(--font-mono)' }}>
                <CheckCircle2 size={16} />
                ARCHITECTURAL SOLUTIONS
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {project.solutions.map((s, idx) => (
                  <li key={idx} style={{ fontSize: '0.82rem', color: 'var(--ink-secondary)', lineHeight: '1.5', paddingLeft: '14px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#34d399' }}>•</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Full Tech Stack */}
          <div>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--ink-muted)', textTransform: 'uppercase', marginBottom: '10px' }}>
              <Cpu size={15} />
              PRODUCTION TECHNOLOGY STACK
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.stack.map((t, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-pill)',
                    border: 'var(--border-ink-thin)',
                    background: 'var(--canvas-panel)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: 'var(--ink-primary)'
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div
          style={{
            padding: '14px 24px',
            background: 'var(--canvas-panel)',
            borderTop: 'var(--border-ink)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px'
          }}
        >
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn mint"
              onClick={playClickSound}
            >
              <span>Visit Live Production System</span>
              <ExternalLink size={14} />
            </a>
          ) : (
            <span style={{ fontSize: '0.76rem', color: 'var(--ink-muted)', fontFamily: 'var(--font-mono)' }}>
              Commercial Architecture Spec
            </span>
          )}

          <button
            onClick={() => {
              playClickSound();
              onClose();
            }}
            className="neo-btn"
            style={{ padding: '6px 16px', background: 'var(--canvas-surface)', color: 'var(--ink-primary)' }}
          >
            Close Spec
          </button>
        </div>
      </div>
    </div>
  );
};

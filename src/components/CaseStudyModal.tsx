'use client';

import React, { useEffect } from 'react';
import { ProjectCaseStudy } from '@/types';
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
      id="case-study-modal"
      className="modal-overlay active"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          playClickSound();
          onClose();
        }
      }}
    >
      <div className="modal-content">
        <div className="modal-header">
          <div
            style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', fontWeight: 800, color: '#18181b' }}
            id="case-study-title"
          >
            [ARCHITECTURE_CASE_STUDY] // {project.id}
          </div>
          <button
            id="close-case-study-btn"
            className="modal-close-btn"
            aria-label="Close dialog"
            onClick={() => {
              playClickSound();
              onClose();
            }}
          >
            ✕
          </button>
        </div>

        <div id="case-study-body" className="modal-body">
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap' }}>
              <span className="neo-pill blue">{project.category}</span>
              <span className={`copyright-pill ${project.copyrightClass}`}>{project.copyright}</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '8px', lineHeight: '1.2' }}>
              {project.title}
            </h2>
            <p style={{ color: 'var(--ink-secondary)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '18px' }}>
              {project.subtitle}
            </p>

            <div
              style={{
                background: 'rgba(245, 158, 11, 0.1)',
                borderLeft: '4px solid #f59e0b',
                padding: '12px 18px',
                borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                marginBottom: '24px'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: '#b45309',
                  fontWeight: 700,
                  textTransform: 'uppercase'
                }}
              >
                🛡️ Intellectual Property &amp; Copyright Notice
              </div>
              <p style={{ color: 'var(--ink-primary)', fontSize: '0.86rem', marginTop: '4px', lineHeight: '1.5' }}>
                {project.copyrightNotice}
              </p>
            </div>

            {/* Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px', marginBottom: '24px' }}>
              {project.metrics.map((m, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'var(--canvas-panel)',
                    border: 'var(--border-ink)',
                    padding: '14px',
                    borderRadius: 'var(--radius-sm)',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--ink-primary)' }}>
                    {m.val}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--ink-muted)', textTransform: 'uppercase', marginTop: '4px' }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Overview */}
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--ink-primary)' }}>
                Architecture &amp; Impact Overview
              </h3>
              <p style={{ color: 'var(--ink-secondary)', lineHeight: '1.7', fontSize: '0.95rem' }}>
                {project.overview}
              </p>
            </div>

            {/* Challenges & Solutions */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px', marginBottom: '24px' }}>
              <div
                style={{
                  background: 'var(--canvas-panel)',
                  border: 'var(--border-ink)',
                  padding: '16px',
                  borderRadius: 'var(--radius-sm)'
                }}
              >
                <h4 style={{ color: '#ef4444', fontSize: '0.95rem', marginBottom: '10px', fontFamily: 'var(--font-mono)' }}>
                  ⚡ Key Engineering Challenges
                </h4>
                <ul style={{ paddingLeft: '18px', color: 'var(--ink-secondary)', fontSize: '0.88rem', lineHeight: '1.6' }}>
                  {project.challenges.map((c, idx) => (
                    <li key={idx} style={{ marginBottom: '6px' }}>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                style={{
                  background: 'var(--canvas-panel)',
                  border: 'var(--border-ink)',
                  padding: '16px',
                  borderRadius: 'var(--radius-sm)'
                }}
              >
                <h4 style={{ color: '#10b981', fontSize: '0.95rem', marginBottom: '10px', fontFamily: 'var(--font-mono)' }}>
                  ✓ Deployed Architecture Solutions
                </h4>
                <ul style={{ paddingLeft: '18px', color: 'var(--ink-secondary)', fontSize: '0.88rem', lineHeight: '1.6' }}>
                  {project.solutions.map((s, idx) => (
                    <li key={idx} style={{ marginBottom: '6px' }}>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 style={{ fontSize: '0.95rem', marginBottom: '10px', color: 'var(--ink-primary)' }}>
                Verified Technologies Deployed
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.stack.map((item, idx) => (
                  <span key={idx} className="tech-chip highlight">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

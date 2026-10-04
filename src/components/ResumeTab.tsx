'use client';

import React from 'react';
import { TIMELINE_ROLES, SKILL_CATEGORIES, EDUCATION_DATA, CERTIFICATIONS_DATA } from '@/data/resume';
import { Download, Award, GraduationCap, Briefcase } from 'lucide-react';
import { playClickSound } from '@/utils/audio';

export const ResumeTab: React.FC = () => {
  return (
    <article className="resume-article animate-fade-in">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
        <h2 className="section-headline" style={{ margin: 0 }}>Resume &amp; Track Record</h2>
        <a
          href="/rishabh_srivastava_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="neo-btn blue"
          onClick={playClickSound}
        >
          <Download size={15} />
          <span>Download PDF Resume</span>
        </a>
      </div>

      {/* Experience Timeline */}
      <h3 className="section-headline" style={{ fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Briefcase size={18} color="#38bdf8" />
        <span>Production Experience Timeline</span>
      </h3>

      <div className="timeline-neo-container" style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
        {TIMELINE_ROLES.map((item, idx) => (
          <div key={idx} className="timeline-neo-card" style={{ border: 'var(--border-ink)', borderRadius: 'var(--radius-lg)', background: 'var(--canvas-surface)', boxShadow: 'var(--shadow-hard)', overflow: 'hidden' }}>
            <div
              className="timeline-card-header"
              style={{
                background: item.pillColor === 'mint' ? 'var(--pastel-mint)' : 'var(--pastel-yellow)',
                padding: '12px 18px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: 'var(--border-ink)'
              }}
            >
              <span className="timeline-role" style={{ fontWeight: 800, color: '#000000', fontSize: '0.92rem' }}>
                {item.role}
              </span>
              <span className="timeline-period-pill" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 800, background: '#000000', color: '#ffffff', padding: '3px 10px', borderRadius: 'var(--radius-pill)' }}>
                {item.period}
              </span>
            </div>

            <div className="timeline-card-body" style={{ padding: '18px' }}>
              <div className="timeline-company-row" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <span className={`neo-pill ${item.pillColor}`} style={{ fontWeight: 700 }}>
                  {item.company}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--ink-muted)', fontFamily: 'var(--font-mono)' }}>
                  {item.locationOrEcosystem}
                </span>
              </div>

              <ul className="timeline-bullet-list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {item.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="timeline-bullet" style={{ fontSize: '0.88rem', color: 'var(--ink-secondary)', lineHeight: '1.6', position: 'relative', paddingLeft: '18px' }}>
                    <span style={{ position: 'absolute', left: 0, top: '2px', color: '#00f0ff', fontWeight: 800 }}>•</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Verified Core Competencies */}
      <h3 className="section-headline">Verified Core Competencies</h3>
      <div className="skills-bento-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginBottom: '32px' }}>
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div key={idx} className="skill-category-card" style={{ border: 'var(--border-ink)', borderRadius: 'var(--radius-lg)', background: 'var(--canvas-surface)', boxShadow: 'var(--shadow-hard)', overflow: 'hidden' }}>
            <div
              className="skill-header"
              style={{
                background: cat.headerColor,
                padding: '10px 16px',
                fontFamily: 'var(--font-mono)',
                fontWeight: 800,
                fontSize: '0.75rem',
                color: '#000000',
                letterSpacing: '0.05em',
                borderBottom: 'var(--border-ink)'
              }}
            >
              {cat.title}
            </div>

            <div className="skill-chips-body" style={{ padding: '16px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {cat.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className={`tech-chip ${skill.isHighlight ? 'highlight' : ''}`}
                  style={{
                    padding: '5px 10px',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '0.78rem',
                    fontWeight: skill.isHighlight ? 700 : 500,
                    border: 'var(--border-ink)',
                    background: skill.isHighlight ? 'var(--pastel-blue)' : 'var(--canvas-panel)',
                    color: skill.isHighlight ? '#000000' : 'var(--ink-primary)',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Education & Certifications */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
        {/* Education */}
        <div style={{ border: 'var(--border-ink)', borderRadius: 'var(--radius-lg)', background: 'var(--canvas-surface)', padding: '20px', boxShadow: 'var(--shadow-hard)' }}>
          <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', fontWeight: 800, color: 'var(--ink-primary)', marginBottom: '14px', fontFamily: 'var(--font-mono)' }}>
            <GraduationCap size={18} color="#38bdf8" />
            ACADEMIC QUALIFICATIONS
          </h4>
          {EDUCATION_DATA.map((edu, idx) => (
            <div key={idx}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--ink-primary)' }}>{edu.degree}</span>
                <span className="neo-pill mint" style={{ fontSize: '0.68rem', padding: '2px 8px' }}>{edu.pill}</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--ink-secondary)', marginBottom: '4px' }}>{edu.institution}</p>
              <p style={{ fontSize: '0.78rem', color: 'var(--ink-muted)', fontFamily: 'var(--font-mono)' }}>{edu.period} • {edu.location}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div style={{ border: 'var(--border-ink)', borderRadius: 'var(--radius-lg)', background: 'var(--canvas-surface)', padding: '20px', boxShadow: 'var(--shadow-hard)' }}>
          <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', fontWeight: 800, color: 'var(--ink-primary)', marginBottom: '14px', fontFamily: 'var(--font-mono)' }}>
            <Award size={18} color="#facc15" />
            PROFESSIONAL CREDENTIALS
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {CERTIFICATIONS_DATA.map((cert, idx) => (
              <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: idx < CERTIFICATIONS_DATA.length - 1 ? '1px dashed var(--canvas-subtle)' : 'none', paddingBottom: '8px' }}>
                <div>
                  <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--ink-primary)' }}>{cert.title}</p>
                  <p style={{ fontSize: '0.76rem', color: 'var(--ink-muted)', fontFamily: 'var(--font-mono)' }}>{cert.issuer} • {cert.year}</p>
                </div>
                <span className="neo-pill blue" style={{ fontSize: '0.65rem', padding: '2px 8px' }}>{cert.credentialId}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

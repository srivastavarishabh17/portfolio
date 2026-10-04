'use client';

import React, { useState, useMemo } from 'react';
import { ProjectCaseStudy } from '@/types';
import { ExternalLink, Eye } from 'lucide-react';
import { playClickSound } from '@/utils/audio';

interface PortfolioTabProps {
  projects: ProjectCaseStudy[];
  onOpenCaseStudy: (project: ProjectCaseStudy) => void;
}

export const PortfolioTab: React.FC<PortfolioTabProps> = ({ projects, onOpenCaseStudy }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { key: 'all', label: 'All Projects (16+)' },
    { key: 'enterprise', label: 'Enterprise SaaS' },
    { key: 'ecommerce', label: 'Headless E-Com' },
    { key: 'ai', label: 'AI & Machine Learning' },
    { key: 'api', label: 'Cloud & APIs' }
  ];

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter((p) => p.category.includes(activeCategory));
  }, [projects, activeCategory]);

  return (
    <article className="portfolio-article animate-fade-in">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
        <h2 className="section-headline" style={{ margin: 0 }}>16+ Production Architectures</h2>
        <span style={{ fontSize: '0.78rem', color: 'var(--ink-muted)', fontFamily: 'var(--font-mono)' }}>
          Showing {filteredProjects.length} systems
        </span>
      </div>

      {/* Category Filter Bar */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
        {categories.map((cat) => {
          const isActive = activeCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => {
                playClickSound();
                setActiveCategory(cat.key);
              }}
              className="filter-pill-btn"
              style={{
                padding: '6px 14px',
                borderRadius: 'var(--radius-pill)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: 700,
                border: 'var(--border-ink)',
                cursor: 'pointer',
                background: isActive ? 'var(--pastel-yellow)' : 'var(--canvas-surface)',
                color: isActive ? '#000000' : 'var(--ink-secondary)',
                boxShadow: isActive ? 'var(--shadow-hard-sm)' : 'none',
                transform: isActive ? 'translate(-1px, -1px)' : 'none',
                transition: 'all var(--transition-fast)'
              }}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Projects Bento Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '20px' }}>
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="project-mac-card"
            style={{
              border: 'var(--border-ink)',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--canvas-surface)',
              boxShadow: 'var(--shadow-hard)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)'
            }}
          >
            {/* Mac Window Header */}
            <div
              className="project-card-header"
              style={{
                background: 'var(--canvas-panel)',
                padding: '10px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                borderBottom: 'var(--border-ink)'
              }}
            >
              <div className="mac-dots" style={{ display: 'flex', gap: '5px' }}>
                <span className="mac-dot red"></span>
                <span className="mac-dot yellow"></span>
                <span className="mac-dot green"></span>
              </div>
              <span className="mac-window-title" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--ink-muted)' }}>
                {project.macTitle || project.id}
              </span>
              {project.badge && (
                <span className="neo-pill mint" style={{ marginLeft: 'auto', fontSize: '0.65rem', padding: '2px 8px' }}>
                  {project.badge}
                </span>
              )}
            </div>

            {/* Banner Info */}
            <div style={{ padding: '16px 18px 10px', borderBottom: '1px dashed var(--canvas-subtle)' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--ink-primary)', marginBottom: '4px' }}>
                {project.title}
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--ink-muted)', lineHeight: '1.4' }}>
                {project.subtitle}
              </p>
            </div>

            {/* Body */}
            <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
              <p style={{ fontSize: '0.86rem', color: 'var(--ink-secondary)', lineHeight: '1.6', marginBottom: '14px' }}>
                {project.overview}
              </p>

              {/* Tech Stack Chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                {project.stack.slice(0, 5).map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="tech-chip"
                    style={{
                      fontSize: '0.72rem',
                      padding: '3px 8px',
                      borderRadius: 'var(--radius-pill)',
                      border: 'var(--border-ink-thin)',
                      background: 'var(--canvas-panel)',
                      color: 'var(--ink-primary)',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', paddingTop: '10px', borderTop: '1px solid var(--canvas-subtle)' }}>
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-btn blue"
                    style={{ padding: '5px 12px', fontSize: '0.75rem', gap: '5px' }}
                    onClick={playClickSound}
                  >
                    <span>Visit Live</span>
                    <ExternalLink size={13} />
                  </a>
                ) : (
                  <span style={{ fontSize: '0.74rem', color: 'var(--ink-muted)', fontFamily: 'var(--font-mono)' }}>
                    {project.bannerTag || 'Enterprise Cloud'}
                  </span>
                )}

                <button
                  className="neo-btn mint"
                  style={{ padding: '5px 12px', fontSize: '0.75rem', gap: '5px', marginLeft: 'auto' }}
                  onClick={() => {
                    playClickSound();
                    onOpenCaseStudy(project);
                  }}
                >
                  <Eye size={13} />
                  <span>View Architecture →</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

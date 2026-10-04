'use client';

import React from 'react';
import Image from 'next/image';
import { BlogArticle } from '@/types';
import { playClickSound } from '@/utils/audio';

interface BlogTabProps {
  isActive: boolean;
  articles: BlogArticle[];
  onOpenReader: (article: BlogArticle) => void;
  onOpenWriter: () => void;
}

export const BlogTab: React.FC<BlogTabProps> = ({
  isActive,
  articles,
  onOpenReader,
  onOpenWriter
}) => {
  return (
    <article className={`blog ${isActive ? 'active' : ''}`} data-page="blog">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '20px'
        }}
      >
        <h2 className="section-headline" style={{ marginBottom: 0 }}>
          Technical Articles &amp; Whitepapers
        </h2>
        <button
          id="open-write-modal-btn"
          className="neo-btn mint neo-btn-sm"
          onClick={() => {
            playClickSound();
            onOpenWriter();
          }}
        >
          <span>✍️ Write Technical Article</span>
        </button>
      </div>

      <p style={{ color: 'var(--ink-secondary)', marginBottom: '24px', fontSize: '0.95rem' }}>
        In-depth technical memos, architectural post-mortems, and performance benchmarks authored by Rishabh Srivastava.
      </p>

      {/* Dynamic Blog Container */}
      <div id="blog-posts-container" className="blog-memos-grid">
        {articles.map((item) => (
          <div key={item.id} className="blog-memo-card" onClick={() => onOpenReader(item)}>
            <div className="blog-memo-cover-wrap">
              <Image
                src={item.cover.startsWith('/') ? item.cover : `/${item.cover}`}
                alt={item.title}
                className="blog-memo-cover"
                width={400}
                height={220}
                style={{ width: '100%', height: '180px', objectFit: 'cover' }}
              />
              <span className="blog-memo-badge">{item.category}</span>
            </div>
            <div className="blog-memo-content">
              <div className="blog-memo-meta">
                <span>{item.date}</span>
                <span>•</span>
                <span>{item.readTime}</span>
              </div>
              <h3 className="blog-memo-title">{item.title}</h3>
              <p className="blog-memo-excerpt">{item.excerpt}</p>
              <div className="blog-memo-action">
                <span className="read-more-link">Read Engineering Memo →</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

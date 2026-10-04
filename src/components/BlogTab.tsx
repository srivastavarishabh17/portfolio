'use client';

import React, { useState } from 'react';
import { INITIAL_ARTICLES } from '@/data/articles';
import { BlogArticle } from '@/types';
import { BookOpen, Search, Clock, Calendar, ArrowRight, X } from 'lucide-react';
import { playClickSound } from '@/utils/audio';

export const BlogTab: React.FC = () => {
  const [articles] = useState<BlogArticle[]>(INITIAL_ARTICLES);
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'SEO & GEO', 'Architecture', 'DevOps', 'AI & Data', 'eCommerce'];

  const filteredArticles = articles.filter((a) => {
    const matchesCat = activeCategory === 'all' || a.category.toLowerCase().includes(activeCategory.toLowerCase());
    const matchesSearch =
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <article className="blog-article animate-fade-in">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
        <h2 className="section-headline" style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <BookOpen size={20} color="#38bdf8" />
          <span>Engineering Journal &amp; Technical Notes</span>
        </h2>
        <span style={{ fontSize: '0.78rem', color: 'var(--ink-muted)', fontFamily: 'var(--font-mono)' }}>
          {filteredArticles.length} publications
        </span>
      </div>

      {/* Search & Category Filter */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
        <div style={{ position: 'relative', width: '100%', maxWidth: '420px' }}>
          <Search size={16} color="var(--ink-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search architecture notes, GEO, DevOps..."
            style={{
              width: '100%',
              padding: '9px 12px 9px 36px',
              borderRadius: 'var(--radius-pill)',
              border: 'var(--border-ink)',
              background: 'var(--canvas-surface)',
              color: 'var(--ink-primary)',
              fontSize: '0.84rem',
              outline: 'none'
            }}
          />
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                playClickSound();
                setActiveCategory(cat);
              }}
              style={{
                padding: '4px 12px',
                borderRadius: 'var(--radius-pill)',
                border: 'var(--border-ink-thin)',
                background: activeCategory === cat ? 'var(--pastel-blue)' : 'var(--canvas-panel)',
                color: activeCategory === cat ? '#000000' : 'var(--ink-secondary)',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            style={{
              border: 'var(--border-ink)',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--canvas-surface)',
              boxShadow: 'var(--shadow-hard)',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '10px' }}>
                <span className="neo-pill blue" style={{ fontSize: '0.68rem', padding: '2px 8px' }}>
                  {article.category}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.72rem', color: 'var(--ink-muted)', fontFamily: 'var(--font-mono)' }}>
                  <Clock size={12} />
                  {article.readTime}
                </span>
              </div>

              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--ink-primary)', lineHeight: '1.4', marginBottom: '8px' }}>
                {article.title}
              </h3>

              <p style={{ fontSize: '0.86rem', color: 'var(--ink-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
                {article.excerpt}
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid var(--canvas-subtle)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.72rem', color: 'var(--ink-muted)', fontFamily: 'var(--font-mono)' }}>
                <Calendar size={12} />
                {article.date}
              </span>

              <button
                onClick={() => {
                  playClickSound();
                  setSelectedArticle(article);
                }}
                className="neo-btn mint"
                style={{ padding: '4px 10px', fontSize: '0.74rem', gap: '4px' }}
              >
                <span>Read Full Note</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Reader Modal */}
      {selectedArticle && (
        <div
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
              setSelectedArticle(null);
            }
          }}
        >
          <div
            className="animate-scale-up"
            style={{
              width: '100%',
              maxWidth: '780px',
              maxHeight: '85vh',
              background: 'var(--canvas-surface)',
              border: 'var(--border-ink)',
              borderRadius: 'var(--radius-xl)',
              boxShadow: 'var(--shadow-hard-lg)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                padding: '14px 20px',
                background: 'var(--canvas-panel)',
                borderBottom: 'var(--border-ink)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="neo-pill mint" style={{ fontSize: '0.68rem', padding: '2px 8px' }}>
                  {selectedArticle.category}
                </span>
                <span style={{ fontSize: '0.74rem', color: 'var(--ink-muted)', fontFamily: 'var(--font-mono)' }}>
                  {selectedArticle.date} • {selectedArticle.readTime}
                </span>
              </div>

              <button
                onClick={() => {
                  playClickSound();
                  setSelectedArticle(null);
                }}
                className="neo-btn"
                style={{ padding: '4px 8px' }}
              >
                <X size={16} />
              </button>
            </div>

            <div style={{ padding: '24px', overflowY: 'auto' }}>
              <h1 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--ink-primary)', marginBottom: '18px', lineHeight: '1.3' }}>
                {selectedArticle.title}
              </h1>

              <div
                style={{
                  fontSize: '0.92rem',
                  lineHeight: '1.8',
                  color: 'var(--ink-secondary)',
                  whiteSpace: 'pre-wrap'
                }}
              >
                {selectedArticle.content}
              </div>
            </div>

            <div
              style={{
                padding: '12px 20px',
                background: 'var(--canvas-panel)',
                borderTop: 'var(--border-ink)',
                display: 'flex',
                justifyContent: 'flex-end'
              }}
            >
              <button
                onClick={() => {
                  playClickSound();
                  setSelectedArticle(null);
                }}
                className="neo-btn"
                style={{ padding: '6px 14px', background: 'var(--canvas-surface)', color: 'var(--ink-primary)' }}
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

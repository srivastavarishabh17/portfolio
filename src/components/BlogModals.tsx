'use client';

import React, { useState } from 'react';
import { BlogArticle } from '@/types';
import { playClickSound } from '@/utils/audio';

interface BlogModalsProps {
  readingArticle: BlogArticle | null;
  onCloseReader: () => void;
  isWriting: boolean;
  onCloseWriter: () => void;
  onPublishArticle: (article: BlogArticle) => void;
}

export const BlogModals: React.FC<BlogModalsProps> = ({
  readingArticle,
  onCloseReader,
  isWriting,
  onCloseWriter,
  onPublishArticle
}) => {
  const [formData, setFormData] = useState({
    title: '',
    category: 'Architecture',
    author: 'Rishabh Srivastava',
    excerpt: '',
    content: ''
  });

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    playClickSound();
    const newArticle: BlogArticle = {
      id: `custom-blog-${Date.now()}`,
      title: formData.title,
      slug: formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      category: formData.category,
      date: 'Just Now',
      readTime: '5 min read',
      cover: 'assets/blog/blog-1.jpg',
      excerpt: formData.excerpt,
      content: formData.content
    };
    onPublishArticle(newArticle);
    setFormData({
      title: '',
      category: 'Architecture',
      author: 'Rishabh Srivastava',
      excerpt: '',
      content: ''
    });
    onCloseWriter();
  };

  return (
    <>
      {/* Modal 2: Technical Blog Reader */}
      {readingArticle && (
        <div
          id="blog-reader-modal"
          className="modal-overlay active"
          role="dialog"
          aria-modal="true"
          aria-label="Technical Article Reader"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              playClickSound();
              onCloseReader();
            }
          }}
        >
          <div className="modal-content" style={{ maxWidth: '860px' }}>
            <div className="modal-header" style={{ background: 'var(--pastel-blue)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', fontWeight: 800, color: '#18181b' }}>
                [TECHNICAL_ENGINEERING_MEMO]
              </div>
              <button
                id="close-reader-modal-btn"
                className="modal-close-btn"
                aria-label="Close reader"
                onClick={() => {
                  playClickSound();
                  onCloseReader();
                }}
              >
                ✕
              </button>
            </div>
            <div id="blog-reader-body" className="modal-body">
              <span className="neo-pill blue" style={{ marginBottom: '12px', display: 'inline-block' }}>
                {readingArticle.category}
              </span>
              <h1 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', marginBottom: '8px', lineHeight: 1.25 }}>
                {readingArticle.title}
              </h1>
              <div style={{ color: 'var(--ink-muted)', fontSize: '0.85rem', marginBottom: '20px' }}>
                Published {readingArticle.date} • {readingArticle.readTime} • Authored by Rishabh Srivastava
              </div>
              <div
                style={{
                  background: 'var(--canvas-panel)',
                  border: 'var(--border-ink)',
                  padding: '16px',
                  borderRadius: 'var(--radius-sm)',
                  marginBottom: '24px',
                  fontStyle: 'italic',
                  color: 'var(--ink-secondary)'
                }}
              >
                {readingArticle.excerpt}
              </div>
              <div
                style={{
                  lineHeight: '1.8',
                  fontSize: '0.96rem',
                  color: 'var(--ink-primary)',
                  whiteSpace: 'pre-wrap'
                }}
              >
                {readingArticle.content}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal 3: Technical Blog Writer Studio */}
      {isWriting && (
        <div
          id="blog-write-modal"
          className="modal-overlay active"
          role="dialog"
          aria-modal="true"
          aria-label="Write New Technical Article"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              playClickSound();
              onCloseWriter();
            }
          }}
        >
          <div className="modal-content" style={{ maxWidth: '840px' }}>
            <div className="modal-header" style={{ background: 'var(--pastel-mint)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', fontWeight: 800, color: '#18181b' }}>
                [AUTHOR_TECHNICAL_ARTICLE]
              </div>
              <button
                id="close-write-modal-btn"
                className="modal-close-btn"
                aria-label="Close writer"
                onClick={() => {
                  playClickSound();
                  onCloseWriter();
                }}
              >
                ✕
              </button>
            </div>
            <div className="modal-body">
              <form id="new-blog-form" onSubmit={handlePublish} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div className="neo-input-group">
                  <label className="neo-label" htmlFor="blog-title">
                    ARTICLE TITLE *
                  </label>
                  <input
                    type="text"
                    id="blog-title"
                    name="title"
                    className="neo-input"
                    placeholder="e.g. Architecting High-Concurrency Microservices with FastAPI & Redis"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div className="neo-input-group">
                    <label className="neo-label" htmlFor="blog-category">
                      CATEGORY / TOPIC *
                    </label>
                    <select
                      id="blog-category"
                      name="category"
                      className="neo-input"
                      style={{ background: 'var(--canvas-panel)' }}
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    >
                      <option value="Architecture">Architecture</option>
                      <option value="SEO &amp; GEO">SEO &amp; GEO</option>
                      <option value="DevOps">DevOps</option>
                      <option value="GenAI">GenAI</option>
                      <option value="Full Stack Web">Full Stack Web</option>
                    </select>
                  </div>
                  <div className="neo-input-group">
                    <label className="neo-label" htmlFor="blog-author">
                      AUTHOR
                    </label>
                    <input
                      type="text"
                      id="blog-author"
                      className="neo-input"
                      value="Rishabh Srivastava"
                      readOnly
                      style={{ opacity: 0.8 }}
                    />
                  </div>
                </div>

                <div className="neo-input-group">
                  <label className="neo-label" htmlFor="blog-excerpt">
                    BRIEF SUMMARY / EXCERPT *
                  </label>
                  <input
                    type="text"
                    id="blog-excerpt"
                    name="excerpt"
                    className="neo-input"
                    placeholder="High-impact synopsis for cards and search snippets..."
                    required
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  />
                </div>

                <div className="neo-input-group">
                  <label className="neo-label" htmlFor="blog-content">
                    ARTICLE BODY (MARKDOWN SUPPORTED) *
                  </label>
                  <textarea
                    id="blog-content"
                    name="content"
                    className="neo-textarea"
                    placeholder="Write your deep dive using markdown with code blocks and bullet points..."
                    style={{ minHeight: '220px' }}
                    required
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  ></textarea>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '10px' }}>
                  <button
                    type="button"
                    className="neo-btn neo-btn-sm"
                    onClick={() => {
                      playClickSound();
                      onCloseWriter();
                    }}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="neo-btn mint">
                    <span>Publish Article Live</span>
                    <span>🚀</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

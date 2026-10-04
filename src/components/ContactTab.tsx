'use client';

import React, { useState } from 'react';
import { playClickSound } from '@/utils/audio';

interface ContactTabProps {
  isActive: boolean;
  onShowToast: (msg: string) => void;
}

export const ContactTab: React.FC<ContactTabProps> = ({ isActive, onShowToast }) => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playClickSound();
    onShowToast(`Transmission received from ${formData.fullname}. Rishabh will respond under 4 hrs.`);
    setFormData({ fullname: '', email: '', subject: '', message: '' });
  };

  const handleCopyEmail = () => {
    playClickSound();
    if (navigator.clipboard) {
      navigator.clipboard.writeText('ersrivastavarishabh@gmail.com');
      onShowToast('Copied: ersrivastavarishabh@gmail.com');
    }
  };

  return (
    <article className={`contact ${isActive ? 'active' : ''}`} data-page="contact">
      <h2 className="section-headline">Contact &amp; Engagement</h2>

      {/* Location Headquarter Box */}
      <div
        style={{
          padding: '20px',
          background: 'var(--canvas-surface)',
          border: 'var(--border-ink)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-hard)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '24px'
        }}
      >
        <div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              fontWeight: 800,
              color: 'var(--ink-muted)',
              textTransform: 'uppercase'
            }}
          >
            PRIMARY HEADQUARTERS
          </div>
          <h4
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.2rem',
              fontWeight: 800,
              color: 'var(--ink-primary)',
              marginTop: '2px'
            }}
          >
            Greater Noida / Delhi NCR, India
          </h4>
          <p style={{ color: 'var(--ink-secondary)', fontSize: '0.86rem', marginTop: '2px' }}>
            Available for remote contracts, hybrid technical leadership, and global consultation.
          </p>
        </div>
        <a
          href="https://maps.google.com/?q=Greater+Noida+NCR+India"
          target="_blank"
          rel="noopener noreferrer"
          className="neo-btn blue neo-btn-sm"
          onClick={playClickSound}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>View Map</span>
        </a>
      </div>

      {/* Contact Grid */}
      <div className="contact-container-grid">
        {/* Form Card */}
        <div className="contact-card">
          <div className="mac-window-bar">
            <div className="mac-dots">
              <span className="mac-dot red"></span>
              <span className="mac-dot yellow"></span>
              <span className="mac-dot green"></span>
            </div>
            <span className="mac-window-title">direct-transmission.form</span>
            <span className="neo-pill mint" style={{ padding: '2px 6px', fontSize: '0.65rem' }}>
              ENCRYPTED
            </span>
          </div>
          <form id="contact-form" className="contact-form-body" onSubmit={handleSubmit}>
            <div className="neo-input-group">
              <label className="neo-label" htmlFor="contact-name">
                FULL NAME *
              </label>
              <input
                type="text"
                id="contact-name"
                name="fullname"
                className="neo-input"
                placeholder="e.g. Alex Mercer"
                required
                value={formData.fullname}
                onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
              />
            </div>

            <div className="neo-input-group">
              <label className="neo-label" htmlFor="contact-email">
                EMAIL ADDRESS *
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                className="neo-input"
                placeholder="e.g. alex@company.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="neo-input-group">
              <label className="neo-label" htmlFor="contact-subject">
                ENGAGEMENT TYPE / SUBJECT *
              </label>
              <input
                type="text"
                id="contact-subject"
                name="subject"
                className="neo-input"
                placeholder="e.g. Architecture Review / Full Stack Contract"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>

            <div className="neo-input-group">
              <label className="neo-label" htmlFor="contact-message">
                DETAILS &amp; PROJECT SCOPE *
              </label>
              <textarea
                id="contact-message"
                name="message"
                className="neo-textarea"
                placeholder="Describe scope, system scale, timelines..."
                style={{ minHeight: '120px' }}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <button className="neo-btn mint" type="submit" id="contact-submit-btn">
              <span>Transmit Message</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>

        {/* Direct Channels & WhatsApp Card */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div className="contact-card" style={{ background: 'var(--pastel-mint)' }}>
            <div className="mac-window-bar" style={{ background: '#a7f3d0' }}>
              <div className="mac-dots">
                <span className="mac-dot red"></span>
                <span className="mac-dot yellow"></span>
                <span className="mac-dot green"></span>
              </div>
              <span className="mac-window-title" style={{ color: '#065f46' }}>
                instant-reach.sh
              </span>
              <span className="neo-pill mint" style={{ padding: '2px 6px', fontSize: '0.65rem' }}>
                HIGH SPEED
              </span>
            </div>
            <div style={{ padding: '20px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.15rem',
                  fontWeight: 800,
                  color: '#065f46',
                  marginBottom: '8px'
                }}
              >
                ⚡ Instant WhatsApp Dispatch
              </div>
              <p style={{ fontSize: '0.88rem', color: '#166534', lineHeight: 1.6, marginBottom: '16px' }}>
                Need high-velocity answers? Connect directly via WhatsApp for project inquiries and CTO advisory.
              </p>
              <a
                href="https://api.whatsapp.com/send/?phone=917037564392&text=Hi+Rishabh%2C+I+reviewed+your+portfolio+and+would+like+to+discuss+a+project."
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn mint"
                style={{ width: '100%', justifyContent: 'center', background: '#ffffff' }}
                onClick={playClickSound}
              >
                <span>Launch WhatsApp (+91 7037564392)</span>
              </a>
            </div>
          </div>

          <div className="contact-card">
            <div className="mac-window-bar">
              <div className="mac-dots">
                <span className="mac-dot red"></span>
                <span className="mac-dot yellow"></span>
                <span className="mac-dot green"></span>
              </div>
              <span className="mac-window-title">service-sla.spec</span>
            </div>
            <div style={{ padding: '20px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--ink-muted)',
                  textTransform: 'uppercase'
                }}
              >
                RESPONSE SLA
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  color: '#15803d',
                  marginTop: '4px'
                }}
              >
                &lt; 4 Hours Guaranteed
              </div>
              <p style={{ fontSize: '0.84rem', color: 'var(--ink-secondary)', marginTop: '4px' }}>
                Priority turnaround for engineering leadership, contract architectural scopes, and talent acquisition.
              </p>
              <button
                type="button"
                className="neo-btn yellow neo-btn-sm copy-email-btn"
                style={{ marginTop: '14px', width: '100%' }}
                onClick={handleCopyEmail}
              >
                <span>📋 Copy Email (ersrivastavarishabh@gmail.com)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

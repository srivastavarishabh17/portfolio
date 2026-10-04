'use client';

import React from 'react';
import Image from 'next/image';

interface SidebarProps {
  soundActive: boolean;
  onToggleSound: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ soundActive, onToggleSound }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-card">
        {/* Mac Window Header */}
        <div className="mac-window-bar">
          <div className="mac-dots">
            <span className="mac-dot red"></span>
            <span className="mac-dot yellow"></span>
            <span className="mac-dot green"></span>
          </div>
          <span className="mac-window-title">rishabh.profile</span>
          <span className="neo-pill mint" style={{ padding: '2px 8px', fontSize: '0.65rem' }}>
            v3.8
          </span>
        </div>

        <div className="sidebar-content">
          {/* Avatar Frame & Studio Backdrop */}
          <div className="avatar-wrapper">
            <div className="avatar-frame">
              {/* High-Tech Cyber Blueprint Studio Backdrop */}
              <div className="avatar-tech-backdrop">
                <div className="avatar-mesh-grid"></div>
                <div className="avatar-spotlight"></div>
                <div className="avatar-radar-ring ring-1"></div>
                <div className="avatar-radar-ring ring-2"></div>
                <div className="avatar-radar-ring ring-3"></div>
                <div className="avatar-corner-cross top-left">+</div>
                <div className="avatar-corner-cross top-right">+</div>
                <div className="avatar-corner-cross bottom-left">+</div>
                <div className="avatar-corner-cross bottom-right">+</div>
                <div className="avatar-code-tag">DEV // 0x7F</div>
              </div>
              <Image
                id="hero-portrait-img"
                src="/assets/images/rishabh-executive-navy-headshot.jpg"
                alt="Rishabh Srivastava"
                className="avatar-img"
                width={165}
                height={165}
                priority
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>
          </div>

          <h1 className="sidebar-name">Rishabh Srivastava</h1>
          <span className="sidebar-badge">Senior Full Stack &amp; GenAI Architect</span>
          <p className="sidebar-company">Product Architect &amp; Full Stack Engineer</p>

          <div className="sidebar-status-chip">
            <span className="sidebar-status-dot"></span>
            <span>OPEN FOR ADVISORY &amp; CONTRACTS</span>
          </div>

          <div className="sidebar-divider"></div>

          {/* Contact Coordinates */}
          <ul className="sidebar-contact-list">
            <li className="sidebar-contact-item">
              <div className="contact-icon-box">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="contact-meta">
                <span className="contact-label">EMAIL ADDRESS</span>
                <a
                  href="mailto:ersrivastavarishabh@gmail.com"
                  className="contact-value"
                  title="ersrivastavarishabh@gmail.com"
                >
                  ersrivastavarishabh@gmail.com
                </a>
              </div>
            </li>

            <li className="sidebar-contact-item">
              <div className="contact-icon-box" style={{ background: 'var(--pastel-mint)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="contact-meta">
                <span className="contact-label">PHONE / WHATSAPP</span>
                <a href="tel:+917037564392" className="contact-value">
                  +91 7037564392
                </a>
              </div>
            </li>

            <li className="sidebar-contact-item">
              <div className="contact-icon-box" style={{ background: 'var(--pastel-blue)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="contact-meta">
                <span className="contact-label">LOCATION</span>
                <span className="contact-value">Greater Noida / NCR, India</span>
              </div>
            </li>

            <li className="sidebar-contact-item">
              <div className="contact-icon-box" style={{ background: 'var(--pastel-lavender)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className="contact-meta">
                <span className="contact-label">RESPONSE SLA</span>
                <span className="contact-value" style={{ color: '#15803d', fontWeight: 700 }}>
                  &lt; 4 Hours Guaranteed
                </span>
              </div>
            </li>
          </ul>

          <div className="sidebar-divider"></div>

          {/* Social Neo-Buttons */}
          <div className="sidebar-social-strip">
            <a
              href="https://github.com/srivastavarishabh17"
              target="_blank"
              rel="noopener noreferrer"
              className="social-neo-btn"
              title="GitHub"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/srivastavarishabh17"
              target="_blank"
              rel="noopener noreferrer"
              className="social-neo-btn"
              title="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=917037564392&text=Hi+Rishabh%2C+I+reviewed+your+portfolio+and+would+like+to+discuss+an+engagement."
              target="_blank"
              rel="noopener noreferrer"
              className="social-neo-btn"
              title="WhatsApp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/rishabh..__/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-neo-btn"
              title="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>

          {/* Quick Tools */}
          <div className="sidebar-tools">
            <button
              id="sound-toggle-btn"
              className="sidebar-tool-btn"
              title="Toggle Sound FX"
              onClick={onToggleSound}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              </svg>
              <span>{soundActive ? 'SFX ON' : 'SFX MUTED'}</span>
            </button>
            <a
              href="/rishabh_srivastava_resume.pdf"
              target="_blank"
              className="sidebar-tool-btn"
              title="Download Verified CV"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>CV PDF</span>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

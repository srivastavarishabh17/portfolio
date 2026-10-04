'use client';

import React from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Download, MessageCircle, ExternalLink } from 'lucide-react';
import { playClickSound } from '@/utils/audio';

export const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar-neo">
      {/* Window Controls */}
      <div className="mac-window-controls">
        <span className="mac-dot red"></span>
        <span className="mac-dot yellow"></span>
        <span className="mac-dot green"></span>
        <span className="mac-window-title" style={{ marginLeft: 'auto', fontSize: '0.72rem', color: 'var(--ink-muted)' }}>
          node: rishabh-prod-01
        </span>
      </div>

      {/* Profile Section */}
      <div className="sidebar-profile-block">
        <div className="avatar-frame">
          <div className="avatar-cyber-grid">
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
          <li className="contact-item">
            <div className="contact-icon-box" style={{ background: 'var(--pastel-blue)' }}>
              <Mail size={16} color="#38bdf8" />
            </div>
            <div className="contact-info">
              <span className="contact-label">EMAIL DIRECT</span>
              <a
                href="mailto:ersrivastavarishabh@gmail.com"
                className="contact-value"
                onClick={playClickSound}
              >
                ersrivastavarishabh@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="contact-icon-box" style={{ background: 'var(--pastel-mint)' }}>
              <Phone size={16} color="#34d399" />
            </div>
            <div className="contact-info">
              <span className="contact-label">PHONE / WHATSAPP</span>
              <a
                href="tel:+917037564392"
                className="contact-value"
                onClick={playClickSound}
              >
                +91 7037564392
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="contact-icon-box" style={{ background: 'var(--pastel-yellow)' }}>
              <MapPin size={16} color="#facc15" />
            </div>
            <div className="contact-info">
              <span className="contact-label">LOCATION COORDINATES</span>
              <span className="contact-value">Greater Noida / Delhi NCR, India</span>
            </div>
          </li>
        </ul>

        <div className="sidebar-divider"></div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
          <a
            href="/rishabh_srivastava_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="neo-btn blue"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={playClickSound}
          >
            <Download size={16} />
            <span>Download Official Resume</span>
          </a>

          <a
            href="https://wa.me/917037564392?text=Hi%20Rishabh,%20I%20reviewed%20your%20architecture%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="neo-btn mint"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={playClickSound}
          >
            <MessageCircle size={16} />
            <span>Fast WhatsApp Ping</span>
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Social Badges */}
        <div className="sidebar-socials">
          <a
            href="https://github.com/srivastavarishabh17"
            target="_blank"
            rel="noopener noreferrer"
            className="social-neo-btn"
            title="GitHub Repositories"
            onClick={playClickSound}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/srivastavarishabh17"
            target="_blank"
            rel="noopener noreferrer"
            className="social-neo-btn"
            title="LinkedIn Profile"
            onClick={playClickSound}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="https://wa.me/917037564392"
            target="_blank"
            rel="noopener noreferrer"
            className="social-neo-btn"
            title="WhatsApp Direct"
            onClick={playClickSound}
          >
            <MessageCircle size={18} />
          </a>
        </div>
      </div>
    </aside>
  );
};

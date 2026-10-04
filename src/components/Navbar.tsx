'use client';

import React from 'react';
import { TabType, ThemeType } from '@/types';

interface NavbarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  theme: ThemeType;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onTabChange,
  theme,
  onToggleTheme
}) => {
  const tabs: { key: TabType; label: string }[] = [
    { key: 'about', label: 'About' },
    { key: 'resume', label: 'Resume' },
    { key: 'portfolio', label: 'Portfolio (16)' },
    { key: 'blog', label: 'Blog' },
    { key: 'terminal', label: 'Terminal' },
    { key: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="neo-navbar">
      <div className="nav-links-list">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`nav-tab-btn ${activeTab === tab.key ? 'active' : ''}`}
            data-nav-link={tab.key}
            onClick={() => onTabChange(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* System Status & Dark/Light Switch */}
      <button
        id="theme-toggle-btn"
        className="nav-theme-toggle"
        title="Toggle Theme"
        onClick={onToggleTheme}
      >
        <span id="theme-icon">{theme === 'dark' ? '☀️' : '🌙'}</span>
        <span
          id="theme-label"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 700 }}
        >
          {theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}
        </span>
      </button>
    </nav>
  );
};

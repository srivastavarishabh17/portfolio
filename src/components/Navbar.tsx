'use client';

import React, { useState } from 'react';
import { TabType, ThemeType } from '@/types';
import { Volume2, VolumeX, Moon, Sun, Menu, X, User, FileText, Layers, Terminal as TerminalIcon, Cpu, MessageSquare, BookOpen } from 'lucide-react';
import { playClickSound, playSwitchSound } from '@/utils/audio';

interface NavbarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  theme: ThemeType;
  onThemeToggle: () => void;
  soundEnabled: boolean;
  onSoundToggle: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onTabChange,
  theme,
  onThemeToggle,
  soundEnabled,
  onSoundToggle,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs: { key: TabType; label: string; icon: React.ReactNode; color: string }[] = [
    { key: 'about', label: 'About', icon: <User size={15} />, color: 'var(--pastel-blue)' },
    { key: 'resume', label: 'Resume', icon: <FileText size={15} />, color: 'var(--pastel-mint)' },
    { key: 'portfolio', label: 'Portfolio', icon: <Layers size={15} />, color: 'var(--pastel-yellow)' },
    { key: 'terminal', label: 'Terminal', icon: <TerminalIcon size={15} />, color: 'var(--pastel-lavender)' },
    { key: 'architecture', label: 'Architecture', icon: <Cpu size={15} />, color: 'var(--pastel-coral)' },
    { key: 'chatops', label: 'ChatOps AI', icon: <MessageSquare size={15} />, color: 'var(--pastel-peach)' },
    { key: 'blog', label: 'Blog', icon: <BookOpen size={15} />, color: 'var(--pastel-blue)' }
  ];

  const handleTabClick = (tabKey: TabType) => {
    playClickSound();
    onTabChange(tabKey);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar-neo" style={{ position: 'sticky', top: '16px', zIndex: 50, marginBottom: '24px' }}>
      <div className="navbar-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
        {/* Navigation Tabs (Desktop) */}
        <div className="navbar-tabs-group" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => handleTabClick(tab.key)}
                className={`neo-nav-btn ${isActive ? 'active' : ''}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '7px 14px',
                  borderRadius: 'var(--radius-pill)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  border: 'var(--border-ink)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                  background: isActive ? tab.color : 'var(--canvas-surface)',
                  color: isActive ? '#000000' : 'var(--ink-secondary)',
                  boxShadow: isActive ? 'var(--shadow-hard-sm)' : 'none',
                  transform: isActive ? 'translate(-1px, -1px)' : 'none'
                }}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Action Controls (Audio & Theme) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto' }}>
          {/* Audio Synthesizer Toggle */}
          <button
            onClick={() => {
              playSwitchSound();
              onSoundToggle();
            }}
            className="neo-btn"
            style={{
              padding: '6px 12px',
              fontSize: '0.72rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: soundEnabled ? 'var(--pastel-mint)' : 'var(--canvas-surface)',
              color: soundEnabled ? '#000000' : 'var(--ink-muted)',
              border: 'var(--border-ink)'
            }}
            title={soundEnabled ? 'Disable Tactile Sound FX' : 'Enable Tactile Sound FX'}
          >
            {soundEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
            <span style={{ fontFamily: 'var(--font-mono)' }}>{soundEnabled ? 'SFX: ON' : 'SFX: OFF'}</span>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={() => {
              playSwitchSound();
              onThemeToggle();
            }}
            className="neo-btn"
            style={{
              padding: '6px 12px',
              fontSize: '0.72rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: theme === 'dark' ? 'var(--pastel-yellow)' : 'var(--canvas-surface)',
              color: theme === 'dark' ? '#000000' : 'var(--ink-primary)',
              border: 'var(--border-ink)'
            }}
            title={`Active Theme: ${theme.toUpperCase()} (Click to toggle)`}
          >
            {theme === 'dark' ? <Moon size={15} /> : <Sun size={15} />}
            <span style={{ fontFamily: 'var(--font-mono)' }}>
              {theme === 'dark' ? 'OBSIDIAN' : 'LIGHT'}
            </span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="neo-btn mobile-menu-btn"
            style={{
              display: 'none',
              padding: '6px 10px',
              border: 'var(--border-ink)'
            }}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (visible on mobile screens when toggled) */}
      {mobileMenuOpen && (
        <div
          className="mobile-drawer"
          style={{
            marginTop: '12px',
            padding: '16px',
            background: 'var(--canvas-surface)',
            border: 'var(--border-ink)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-hard)',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => handleTabClick(tab.key)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-md)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  border: 'var(--border-ink)',
                  background: isActive ? tab.color : 'transparent',
                  color: isActive ? '#000000' : 'var(--ink-primary)',
                  textAlign: 'left'
                }}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
};

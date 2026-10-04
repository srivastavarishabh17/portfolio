'use client';

import React, { useState, useEffect } from 'react';
import { TabType, ThemeType, ProjectCaseStudy } from '@/types';
import { Sidebar } from '@/components/Sidebar';
import { Navbar } from '@/components/Navbar';
import { AboutTab } from '@/components/AboutTab';
import { ResumeTab } from '@/components/ResumeTab';
import { PortfolioTab } from '@/components/PortfolioTab';
import { TerminalTab } from '@/components/TerminalTab';
import { ArchitectureTab } from '@/components/ArchitectureTab';
import { ChatOpsTab } from '@/components/ChatOpsTab';
import { BlogTab } from '@/components/BlogTab';
import { CaseStudyModal } from '@/components/CaseStudyModal';
import { PROJECTS_DATA } from '@/data/projects';
import { isSoundEnabled, setSoundEnabled } from '@/utils/audio';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<TabType>('about');
  const [theme, setTheme] = useState<ThemeType>('dark');
  const [soundActive, setSoundActive] = useState<boolean>(true);
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

  // Initialize hash navigation and theme from localStorage
  useEffect(() => {
    // 1. Initial Hash
    const hash = window.location.hash.replace('#', '').trim().toLowerCase();
    const validTabs: TabType[] = ['about', 'resume', 'portfolio', 'terminal', 'architecture', 'chatops', 'blog'];
    if (validTabs.includes(hash as TabType)) {
      setActiveTab(hash as TabType);
    }

    // 2. Initial Theme
    const storedTheme = localStorage.getItem('rishabh_portfolio_theme') as ThemeType | null;
    if (storedTheme) {
      setTheme(storedTheme);
      document.body.className = storedTheme === 'light' ? 'light-canvas' : '';
    } else {
      setTheme('dark');
      document.body.className = '';
    }

    // 3. Audio state
    setSoundActive(isSoundEnabled());

    // 4. Hash change listener
    const handleHashChange = () => {
      const newHash = window.location.hash.replace('#', '').trim().toLowerCase();
      if (validTabs.includes(newHash as TabType)) {
        setActiveTab(newHash as TabType);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    if (window.history.replaceState) {
      window.history.replaceState(null, '', `#${tab}`);
    } else {
      window.location.hash = `#${tab}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleThemeToggle = () => {
    const nextTheme: ThemeType = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('rishabh_portfolio_theme', nextTheme);
    document.body.className = nextTheme === 'light' ? 'light-canvas' : '';
  };

  const handleSoundToggle = () => {
    const next = !soundActive;
    setSoundActive(next);
    setSoundEnabled(next);
  };

  return (
    <div className="portfolio-app-root" style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <main
        style={{
          width: '100%',
          maxWidth: '100%',
          margin: 0,
          padding: '24px 32px 60px',
          display: 'grid',
          gridTemplateColumns: 'minmax(280px, 340px) minmax(0, 1fr)',
          gap: '28px',
          alignItems: 'start'
        }}
      >
        {/* Left Profile Sidebar */}
        <Sidebar />

        {/* Right Main Content Area */}
        <div className="main-content-panel" style={{ minWidth: 0, width: '100%' }}>
          {/* Top Sticky Navbar */}
          <Navbar
            activeTab={activeTab}
            onTabChange={handleTabChange}
            theme={theme}
            onThemeToggle={handleThemeToggle}
            soundEnabled={soundActive}
            onSoundToggle={handleSoundToggle}
          />

          {/* Active Tab View */}
          <section className="tab-content-container" style={{ minHeight: '650px' }}>
            {activeTab === 'about' && <AboutTab onNavigate={handleTabChange} />}
            {activeTab === 'resume' && <ResumeTab />}
            {activeTab === 'portfolio' && (
              <PortfolioTab
                projects={PROJECTS_DATA}
                onOpenCaseStudy={(proj) => setSelectedProject(proj)}
              />
            )}
            {activeTab === 'terminal' && <TerminalTab />}
            {activeTab === 'architecture' && <ArchitectureTab />}
            {activeTab === 'chatops' && <ChatOpsTab />}
            {activeTab === 'blog' && <BlogTab />}
          </section>

          {/* Modern Footer */}
          <footer
            style={{
              marginTop: '40px',
              padding: '20px 24px',
              background: 'var(--canvas-surface)',
              border: 'var(--border-ink)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-hard-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: 'var(--ink-muted)'
            }}
          >
            <div>
              <span>© {new Date().getFullYear()} Rishabh Srivastava. Authored with Next.js 14 &amp; TypeScript.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34d399', display: 'inline-block' }}></span>
              <span>NODE: ONLINE • 99.98% SLA</span>
            </div>
          </footer>
        </div>
      </main>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

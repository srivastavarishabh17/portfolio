'use client';

import React, { useState, useEffect } from 'react';
import { TabType, ThemeType, ProjectCaseStudy, BlogArticle } from '@/types';
import { Sidebar } from '@/components/Sidebar';
import { Navbar } from '@/components/Navbar';
import { AboutTab } from '@/components/AboutTab';
import { ResumeTab } from '@/components/ResumeTab';
import { PortfolioTab } from '@/components/PortfolioTab';
import { BlogTab } from '@/components/BlogTab';
import { TerminalTab } from '@/components/TerminalTab';
import { ContactTab } from '@/components/ContactTab';
import { CaseStudyModal } from '@/components/CaseStudyModal';
import { BlogModals } from '@/components/BlogModals';
import { PROJECTS_DATA } from '@/data/projects';
import { INITIAL_ARTICLES } from '@/data/articles';
import { isSoundEnabled, setSoundEnabled, playClickSound, playBeepSound } from '@/utils/audio';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<TabType>('about');
  const [theme, setTheme] = useState<ThemeType>('dark');
  const [soundActive, setSoundActive] = useState<boolean>(true);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [toastTimer, setToastTimer] = useState<NodeJS.Timeout | null>(null);

  // Modals state
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [readingArticle, setReadingArticle] = useState<BlogArticle | null>(null);
  const [isWritingBlog, setIsWritingBlog] = useState<boolean>(false);
  const [blogArticles, setBlogArticles] = useState<BlogArticle[]>(INITIAL_ARTICLES);

  // Initialize hash navigation, theme, sound
  useEffect(() => {
    // 1. Initial Hash
    const hash = window.location.hash.replace('#', '').trim().toLowerCase();
    const validTabs: TabType[] = ['about', 'resume', 'portfolio', 'blog', 'terminal', 'contact'];
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

  const triggerToast = (msg: string) => {
    setToastMsg(msg);
    playBeepSound(700, 'sine', 0.08);
    if (toastTimer) clearTimeout(toastTimer);
    const timer = setTimeout(() => {
      setToastMsg(null);
    }, 3500);
    setToastTimer(timer);
  };

  const handleTabChange = (tab: TabType) => {
    playClickSound();
    setActiveTab(tab);
    if (window.history.replaceState) {
      window.history.replaceState(null, '', `#${tab}`);
    } else {
      window.location.hash = `#${tab}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleThemeToggle = () => {
    playClickSound();
    const nextTheme: ThemeType = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('rishabh_portfolio_theme', nextTheme);
    document.body.className = nextTheme === 'light' ? 'light-canvas' : '';
  };

  const handleSoundToggle = () => {
    const next = !soundActive;
    setSoundActive(next);
    setSoundEnabled(next);
    if (next) {
      playBeepSound(440, 'sine', 0.08);
      triggerToast('Audio Feedback Enabled');
    } else {
      triggerToast('Audio Feedback Muted');
    }
  };

  const handleOpenCaseStudy = (projectId: string) => {
    const found = PROJECTS_DATA.find((p) => p.id === projectId) || null;
    setSelectedProject(found);
  };

  const handlePublishBlog = (newArticle: BlogArticle) => {
    setBlogArticles((prev) => [newArticle, ...prev]);
    triggerToast(`Published live: "${newArticle.title}"`);
  };

  return (
    <>
      <main>
        {/* Left Neo-Brutalist Sidebar */}
        <Sidebar soundActive={soundActive} onToggleSound={handleSoundToggle} />

        {/* Right Main Content */}
        <div className="main-content">
          {/* Top Neo-Navbar */}
          <Navbar
            activeTab={activeTab}
            onTabChange={handleTabChange}
            theme={theme}
            onToggleTheme={handleThemeToggle}
          />

          {/* Tab 1: About (Includes Knowledge ChatOps & Capabilities) */}
          <AboutTab
            isActive={activeTab === 'about'}
            onNavigate={handleTabChange}
            onShowToast={triggerToast}
          />

          {/* Tab 2: Resume */}
          <ResumeTab isActive={activeTab === 'resume'} />

          {/* Tab 3: Portfolio (All 16 Production Architectures) */}
          <PortfolioTab
            isActive={activeTab === 'portfolio'}
            onOpenCaseStudy={handleOpenCaseStudy}
          />

          {/* Tab 4: Blog */}
          <BlogTab
            isActive={activeTab === 'blog'}
            articles={blogArticles}
            onOpenReader={(article) => {
              playClickSound();
              setReadingArticle(article);
            }}
            onOpenWriter={() => {
              playClickSound();
              setIsWritingBlog(true);
            }}
          />

          {/* Tab 5: Terminal */}
          <TerminalTab isActive={activeTab === 'terminal'} />

          {/* Tab 6: Contact */}
          <ContactTab
            isActive={activeTab === 'contact'}
            onShowToast={triggerToast}
          />

          {/* Bespoke Copyright Footer */}
          <footer className="neo-footer">
            <p>
              © 2026 <strong>Rishabh Srivastava</strong>. Built with 100% Bespoke Neo-Brutalist Technical Architecture. All Rights Reserved.
            </p>
            <p style={{ fontSize: '0.72rem', color: 'var(--ink-muted)', marginTop: '4px' }}>
              Domain:{' '}
              <a href="https://rishabhsrivastava.in" style={{ textDecoration: 'underline' }}>
                rishabhsrivastava.in
              </a>{' '}
              •{' '}
            </p>
          </footer>
        </div>
      </main>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Blog Reader & Writer Modals */}
      <BlogModals
        readingArticle={readingArticle}
        onCloseReader={() => setReadingArticle(null)}
        isWriting={isWritingBlog}
        onCloseWriter={() => setIsWritingBlog(false)}
        onPublishArticle={handlePublishBlog}
      />

      {/* Global Toast Notification */}
      <div id="global-toast" className={`toast-msg ${toastMsg ? 'show' : ''}`}>
        <span>⚡</span> <span>{toastMsg}</span>
      </div>
    </>
  );
}

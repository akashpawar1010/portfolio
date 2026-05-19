import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './index.css';

const TABS = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

// Decorative tree SVG for background
function TreeDecoration() {
  return (
    <svg
      className="bg-tree"
      viewBox="0 0 400 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Main trunk */}
      <path d="M200 900 L200 400" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      {/* Branches */}
      <path d="M200 400 L80 150" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M200 400 L320 120" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M200 480 L60 320" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M200 480 L340 280" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M200 560 L100 420" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M200 560 L300 380" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M200 620 L140 520" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <path d="M200 620 L260 500" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      {/* Sub-branches */}
      <path d="M80 150 L40 60" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M80 150 L120 80" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M320 120 L280 50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M320 120 L360 60" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M60 320 L20 240" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <path d="M60 320 L90 250" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <path d="M340 280 L310 210" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <path d="M340 280 L375 230" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      {/* Fine tips */}
      <path d="M40 60 L20 20" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
      <path d="M40 60 L55 20" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
      <path d="M120 80 L105 35" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
      <path d="M120 80 L138 38" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
    </svg>
  );
}

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

export default function App() {
  const [theme, setTheme] = useState('light');
  const [accent, setAccent] = useState('red');
  const [activeTab, setActiveTab] = useState('experience');

  // Apply theme & accent to <html>
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    root.setAttribute('data-accent', accent);
  }, [theme, accent]);

  const renderTab = () => {
    switch (activeTab) {
      case 'experience': return <Experience />;
      case 'projects': return <Projects />;
      case 'skills': return <Skills />;
      case 'contact': return <Contact />;
      default: return <Experience />;
    }
  };

  return (
    <div className="app-layout">
      <Sidebar theme={theme} setTheme={setTheme} accent={accent} setAccent={setAccent} />

      <main className="main-content">
        <TreeDecoration />

        {/* Navigation Tabs */}
        <nav className="nav-tabs" role="tablist" aria-label="Portfolio sections">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`nav-tab${activeTab === tab.id ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {renderTab()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

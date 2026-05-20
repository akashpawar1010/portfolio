import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import PlumTree from './components/PlumTree';
import { portfolioData } from './data/portfolio';
import './index.css';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [accent, setAccent] = useState('red');

  // Apply theme & accent to <html>
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    root.setAttribute('data-accent', accent);
  }, [theme, accent]);

  return (
    <div className="app-layout">
      <Sidebar theme={theme} setTheme={setTheme} accent={accent} setAccent={setAccent} />

      <main className="main-content">
        <PlumTree />

        {/* All sections in a single scrollable page */}
        <Experience />
        <Projects />
        <Education />
        <Skills />

        <footer className="footer">
          <p>Built with ⚡ React + Vite · Designed with ❤️ by {portfolioData.name}</p>
          <p style={{ marginTop: '6px' }}>© {new Date().getFullYear()} All rights reserved</p>
        </footer>
      </main>
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const { name, title, email, avatar, about, socials } = portfolioData;

const ACCENT_OPTIONS = [
  { label: 'Red', value: 'red' },
  { label: 'Orange', value: 'orange' },
  { label: 'Blue', value: 'blue' },
  { label: 'Green', value: 'green' },
];

export default function Sidebar({ theme, setTheme, accent, setAccent }) {
  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  return (
    <aside className="sidebar">
      {/* Avatar */}
      <motion.div
        className="sidebar-avatar-wrap"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src={avatar} alt={name} />
      </motion.div>

      {/* Identity */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="sidebar-name">{name}</div>
        <div className="sidebar-title">{title}</div>
        <a className="sidebar-email" href={`mailto:${email}`}>{email}</a>

        {/* Social links */}
        <div className="sidebar-socials">
          <a className="social-link" href={`mailto:${email}`} title="Email" id="social-email">
            ✉️
          </a>
          <a className="social-link" href={socials.github} target="_blank" rel="noopener noreferrer" title="GitHub" id="social-github">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a className="social-link" href={socials.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" id="social-linkedin">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          {socials.leetcode && (
            <a className="social-link" href={socials.leetcode} target="_blank" rel="noopener noreferrer" title="LeetCode" id="social-leetcode">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.497 2.337-1.497 3.764s.516 2.782 1.497 3.764l4.349 4.381c.981.982 2.338 1.498 3.765 1.498s2.784-.516 3.766-1.498l2.696-2.606c.514-.515.498-1.367-.037-1.901-.536-.535-1.387-.553-1.902-.038z"/>
              </svg>
            </a>
          )}
        </div>
      </motion.div>

      <div className="sidebar-divider" />

      {/* About */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="sidebar-section-title">About</div>
        <p className="sidebar-about-text">{about}</p>
      </motion.div>

      <div className="sidebar-divider" />

      {/* Theme Controls */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="theme-controls">
          <button
            id="theme-toggle"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            title="Toggle dark/light mode"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
          <select
            id="accent-select"
            className="accent-select"
            value={accent}
            onChange={e => setAccent(e.target.value)}
            aria-label="Select accent color"
          >
            {ACCENT_OPTIONS.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </motion.div>
    </aside>
  );
}

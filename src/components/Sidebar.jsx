import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

import luffyImg from '../assets/luffy.jpg';
import zoroImg from '../assets/zoro.jpg';
import sasukeImg from '../assets/sasuke.jpg';

const { name, title, email, avatar, about, socials } = portfolioData;

const avatarMap = {
  red: luffyImg,
  yellow: avatar,
  blue: sasukeImg,
  green: zoroImg,
};

const ACCENT_OPTIONS = [
  { label: 'Red', value: 'red' },
  { label: 'Yellow', value: 'yellow' },
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
        <img src={avatarMap[accent] || avatarMap.blue} alt={name} />
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
            <FaEnvelope size={16} />
          </a>
          <a className="social-link" href={socials.github} target="_blank" rel="noopener noreferrer" title="GitHub" id="social-github">
            <FaGithub size={16} />
          </a>
          <a className="social-link" href={socials.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" id="social-linkedin">
            <FaLinkedin size={16} />
          </a>
          {socials.leetcode && (
            <a className="social-link" href={socials.leetcode} target="_blank" rel="noopener noreferrer" title="LeetCode" id="social-leetcode">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.497 2.337-1.497 3.764s.516 2.782 1.497 3.764l4.349 4.381c.981.982 2.338 1.498 3.765 1.498s2.784-.516 3.766-1.498l2.696-2.606c.514-.515.498-1.367-.037-1.901-.536-.535-1.387-.553-1.902-.038z" />
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

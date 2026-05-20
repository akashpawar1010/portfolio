import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const { skills } = portfolioData;

// Flatten all skills into a single list
const allSkills = Object.values(skills).flat();
// Remove duplicates
const uniqueSkills = [...new Set(allSkills)];

const skillIcons = {
  'React': '⚛',
  'React Native': '⚛',
  'Realm': '🔮',
  'Realm DB': '🔮',
  'React Query': '🔄',
  'GraphQL': '🔗',
  'Firebase': '🔥',
  'Appium': '📱',
  'Selenium': '🧪',
  'JEST': '🃏',
  'Jest': '🃏',
  'HTML': '🔶',
  'HTML5': '🔶',
  'CSS': '🎨',
  'CSS3': '🎨',
  'JavaScript': '🟡',
  'TypeScript': '🔷',
  'Tailwind': '🌊',
  'Node': '🟢',
  'Node.js': '🟢',
  'MongoDB': '🍃',
  'Git': '🌿',
  'GitHub': '🐙',
  'Vite': '⚡',
  'Astro': '🚀',
  'Vercel': '▲',
  'Netlify': '⚡',
  'Expo': '🚀',
  'Redux': '🔄',
  'Detox': '🧪',
  'Bitbucket': '🪣',
  'Jira': '📋',
  'Figma': '🎨',
  'Xcode': '🔨',
  'Android Studio': '🤖',
  'REST APIs': '🔌',
};

export default function Skills() {
  return (
    <section className="section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="tag-list">
        {uniqueSkills.map((skill, i) => (
          <motion.span
            key={skill}
            className="tag"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: i * 0.02 }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            {skillIcons[skill] && <span className="tag-icon">{skillIcons[skill]}</span>}
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}

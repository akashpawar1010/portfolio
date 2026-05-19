import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const { projects } = portfolioData;

const tagColors = {
  'React Native': '#61dafb',
  'React': '#61dafb',
  'TypeScript': '#3178c6',
  'JavaScript': '#f7df1e',
  'MongoDB': '#4db33d',
  'Realm DB': '#39477f',
  'Firebase': '#ffca28',
  'Redux': '#764abc',
  'Vite': '#646cff',
  'CSS': '#e76f00',
};

export default function Projects() {
  return (
    <section className="section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            whileHover={{ y: -6 }}
          >
            <div className="project-number">PROJECT {String(i + 1).padStart(2, '0')}</div>
            <div className="project-name">{project.name}</div>
            <div className="project-desc">{project.desc}</div>
            <div className="project-card-footer">
              <div className="tag-list" style={{ margin: 0 }}>
                {project.tags.map((t) => (
                  <span key={t} className="tag" style={{ fontSize: '0.62rem' }}>
                    {t}
                  </span>
                ))}
              </div>
              <span className="project-link-icon">↗</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

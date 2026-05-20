import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { getSkillIcon } from './TagIcon';

const { experience } = portfolioData;

function Tag({ skill }) {
  const icon = getSkillIcon(skill);
  return (
    <motion.span className="tag">
      <span className="tag-icon">{icon}</span>
      {skill}
    </motion.span>
  );
}

function ExperienceItem({ item, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="exp-item"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <div className="exp-period">{item.period}</div>
      <div className="exp-timeline-dot" />
      <div className="exp-right">
        <div className="exp-title">
          {item.title} @{' '}
          <a className="exp-company-link" href={item.companyUrl} target="_blank" rel="noopener noreferrer">
            {item.company}
          </a>
          <span className="exp-arrow">↗</span>
        </div>
        <div className="exp-location">{item.location}</div>
        <div className="exp-tagline">{item.tagline}</div>
        <div className="exp-responsibilities-label">Responsibilities:</div>
        <AnimatePresence initial={false}>
          <div className={expanded ? '' : 'exp-collapsed'}>
            <ul className="exp-responsibilities">
              {item.responsibilities.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        </AnimatePresence>
        <button className="show-more-btn" onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Show less ▲' : 'Show more ▼'}
        </button>
        <div className="tag-list">
          {item.skills.map((s) => (
            <Tag key={s} skill={s} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section className="section" id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="experience-list">
        {experience.map((item, i) => (
          <ExperienceItem key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { getSkillIcon } from './TagIcon';

const { skills } = portfolioData;

// Flatten all skills into a single list
const allSkills = Object.values(skills).flat();
// Remove duplicates
const uniqueSkills = [...new Set(allSkills)];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="tag-list">
        {uniqueSkills.map((skill, i) => {
          const icon = getSkillIcon(skill);
          return (
            <motion.span
              key={skill}
              className="tag"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: i * 0.02 }}
            >
              <span className="tag-icon">
                {icon}
              </span>
              {skill}
            </motion.span>
          );
        })}
      </div>
    </section>
  );
}

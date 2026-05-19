import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const { skills } = portfolioData;

const categoryIcons = {
  'Mobile': '📱',
  'Frontend': '🖥️',
  'Backend & DB': '🗄️',
  'Testing': '🧪',
  'DevOps & Tools': '⚙️',
  'Architecture': '🏗️',
};

export default function Skills() {
  return (
    <section className="section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div>
        {Object.entries(skills).map(([category, skillList], catIndex) => (
          <motion.div
            key={category}
            className="skills-category"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: catIndex * 0.07 }}
          >
            <div className="skills-cat-title">
              {categoryIcons[category]} {category}
            </div>
            <div className="tag-list">
              {skillList.map((skill) => (
                <motion.span
                  key={skill}
                  className="tag"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

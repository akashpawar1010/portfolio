import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const { education } = portfolioData;

export default function Education() {
  return (
    <section className="section" id="education">
      <h2 className="section-title">Education</h2>
      <div className="education-list">
        {education.map((item, i) => (
          <motion.div
            key={i}
            className="education-item"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <div className="education-icon">🎓</div>
            <div className="education-details">
              <div className="education-degree">{item.degree}</div>
              <div className="education-institution">{item.institution}</div>
            </div>
            <div className="education-period">{item.period}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

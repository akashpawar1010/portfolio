import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { GraduationCap } from 'lucide-react';

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
            <div className="education-icon" style={{ color: 'var(--accent)' }}><GraduationCap size={24} /></div>
            <div className="education-details">
              <div className="education-degree">{item.degree}</div>
              <div className="education-institution">{item.institution}</div>
              {item.cgpa && <div className="education-institution" style={{fontSize: '0.8rem', marginTop: '2px'}}>{item.cgpa}</div>}
            </div>
            <div className="education-period">{item.period}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

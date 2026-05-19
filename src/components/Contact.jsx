import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const { name, email, socials } = portfolioData;

const contactItems = [
  {
    icon: '✉️',
    label: 'Email',
    value: email,
    href: `mailto:${email}`,
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/richasharma',
    href: socials.github,
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/richasharma',
    href: socials.linkedin,
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Bengaluru, India',
    href: null,
  },
];

export default function Contact() {
  return (
    <section className="section" id="contact">
      <h2 className="section-title">Get in Touch</h2>
      <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '28px', lineHeight: 1.7 }}>
        I'm always open to discussing interesting projects, collaborations, or new opportunities.
        Feel free to reach out — I typically respond within 24 hours!
      </p>
      <div className="contact-section">
        {contactItems.map((item, i) => {
          const El = item.href ? 'a' : 'div';
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
            >
              <El
                className="contact-item"
                href={item.href || undefined}
                target={item.href && !item.href.startsWith('mailto') ? '_blank' : undefined}
                rel={item.href && !item.href.startsWith('mailto') ? 'noopener noreferrer' : undefined}
              >
                <div className="contact-icon">{item.icon}</div>
                <div>
                  <span className="contact-label">{item.label}</span>
                  <span className="contact-value">{item.value}</span>
                </div>
              </El>
            </motion.div>
          );
        })}
      </div>
      <div className="footer">
        <p>Built with ⚡ React + Vite · Designed with ❤️ by {name}</p>
        <p style={{ marginTop: '6px' }}>© {new Date().getFullYear()} All rights reserved</p>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Trophy } from 'lucide-react';
import { FiSearch } from 'react-icons/fi';

const { awards } = portfolioData;

export default function Awards() {
  const [viewerImage, setViewerImage] = useState(null);

  if (!awards || awards.length === 0) return null;

  return (
    <section className="section" id="awards">
      <h2 className="section-title">Awards</h2>
      <div className="awards-list">
        {awards.map((item, i) => (
          <motion.div
            key={i}
            className="award-item"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            {item.image && (
              <div
                className="award-image-wrap"
                onClick={() => setViewerImage({ src: item.image, alt: item.title })}
              >
                <img src={item.image} alt={item.title} className="award-image" />
                <div className="project-image-overlay">
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                    <FiSearch size={14} style={{ marginRight: '6px' }} /> View
                  </span>
                </div>
              </div>
            )}
            <div className="award-details">
              <div className="education-icon" style={{ color: 'var(--accent)' }}><Trophy size={20} /></div>
              <div>
                <div className="education-degree">{item.title}</div>
                <div className="education-institution">{item.desc}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Lightbox
        open={!!viewerImage}
        close={() => setViewerImage(null)}
        slides={viewerImage ? [{ src: viewerImage.src, alt: viewerImage.alt }] : []}
        carousel={{ finite: true }}
        render={{ buttonPrev: () => null, buttonNext: () => null }}
        styles={{ 
          container: { backgroundColor: "rgba(0, 0, 0, 0.85)" },
          slide: { padding: "10vh" } // zooms out the certificates a bit
        }}
      />
    </section>
  );
}

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import ImageViewer from './ImageViewer';
import { FiSearch } from 'react-icons/fi';

const { projects } = portfolioData;

export default function Projects() {
  const [viewerImage, setViewerImage] = useState(null);

  return (
    <section className="section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="project-card"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            whileHover={{ y: -6 }}
          >
            {/* Clickable image preview */}
            {project.image && (
              <div
                className="project-image-wrap"
                onClick={() => setViewerImage({ src: project.image, alt: project.name })}
              >
                <img src={project.image} alt={project.name} className="project-image" />
                <div className="project-image-overlay">
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                    <FiSearch size={14} style={{ marginRight: '6px' }} /> View
                  </span>
                </div>
              </div>
            )}

            <div className="project-card-body">
              <div className="project-name" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {project.name}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-icon"
                  title="Open app"
                  onClick={(e) => e.stopPropagation()}
                >
                  ↗
                </a>
              </div>
              <div className="project-desc">{project.desc}</div>
              <div className="project-card-footer">
                <div className="tag-list" style={{ margin: 0 }}>
                  {project.tags.map((t) => (
                    <span key={t} className="tag" style={{ fontSize: '0.62rem' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen image viewer */}
      <ImageViewer
        src={viewerImage?.src}
        alt={viewerImage?.alt}
        isOpen={!!viewerImage}
        onClose={() => setViewerImage(null)}
      />
    </section>
  );
}

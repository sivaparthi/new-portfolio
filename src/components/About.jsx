import React from 'react';
import { motion } from 'framer-motion';
import { highlights } from '../data/content.js';
import SectionHeading from './SectionHeading.jsx';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="01 — About"
          title="What I do"
          subtitle="Designing scalable solutions, driving automation."
        />

        <ul className="rail-list">
          {highlights.map((item, i) => (
            <motion.li
              key={item}
              className="rail-item"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.45, delay: (i % 5) * 0.05, ease: 'easeOut' }}
            >
              <span className="rail-item__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="rail-item__text">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

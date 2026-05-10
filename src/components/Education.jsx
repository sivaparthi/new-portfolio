import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/content.js';
import SectionHeading from './SectionHeading.jsx';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="04 — Education"
          title="Education"
          subtitle="Where it all started."
        />

        <div className="edu__grid">
          {education.map((e, i) => (
            <motion.article
              key={e.school}
              className="edu-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <h3 className="edu-card__school">{e.school}</h3>
              <p className="edu-card__degree">{e.degree}</p>
              <p className="edu-card__period">{e.period}</p>
              <p className="edu-card__desc">{e.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

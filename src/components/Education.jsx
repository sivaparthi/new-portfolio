import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/content.js';
import SectionHeading from './SectionHeading.jsx';
import CompanyLogo from './CompanyLogo.jsx';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="04 — Education"
          title="Education"
          subtitle="Where it all started."
        />

        <div className="edu">
          {education.map((e, i) => (
            <motion.article
              key={e.school}
              className="edu__card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <CompanyLogo company={e.school} />
              <div>
                <p className="edu__period">{e.period}</p>
                <h3 className="edu__school">{e.school}</h3>
                <p className="edu__degree">{e.degree}</p>
                <p className="edu__desc">{e.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

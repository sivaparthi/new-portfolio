import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/content.js';
import SectionHeading from './SectionHeading.jsx';
import CompanyLogo from './CompanyLogo.jsx';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="03 — Experience"
          title="Work experience"
          subtitle="Companies I have built and shipped with."
        />

        <ol className="timeline">
          {experiences.map((exp, i) => (
            <motion.li
              key={`${exp.company}-${exp.period}`}
              className={`timeline__item ${exp.featured ? 'timeline__item--featured' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: 'easeOut' }}
            >
              <div className="timeline__dot" aria-hidden="true" />
              <div className="timeline__card">
                <div className="timeline__head">
                  <div className="timeline__head-left">
                    <CompanyLogo company={exp.company} />
                    <div>
                      {exp.featured && (
                        <span className="timeline__badge">Current role</span>
                      )}
                      <h3 className="timeline__role">{exp.role}</h3>
                      <p className="timeline__company">{exp.company}</p>
                    </div>
                  </div>
                  <span className="timeline__period">{exp.period}</span>
                </div>
                {exp.summary && <p className="timeline__summary">{exp.summary}</p>}
                {exp.bullets.length > 0 && (
                  <ul className="timeline__bullets">
                    {exp.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

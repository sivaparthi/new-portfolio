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

        <ol className="xp">
          {experiences.map((exp, i) => (
            <motion.li
              key={`${exp.company}-${exp.period}`}
              className={`xp__item ${exp.featured ? 'xp__item--featured' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.04, ease: 'easeOut' }}
            >
              <div className="xp__rail" aria-hidden="true">
                <span className="xp__node" />
                <span className="xp__period">{exp.period}</span>
              </div>

              <div className="xp__card">
                <div className="xp__head">
                  <CompanyLogo company={exp.company} />
                  <div className="xp__head-text">
                    {exp.featured && <span className="xp__badge">Current role</span>}
                    <h3 className="xp__role">{exp.role}</h3>
                    <p className="xp__company">{exp.company}</p>
                    <p className="xp__period-inline">{exp.period}</p>
                  </div>
                </div>

                {exp.summary && <p className="xp__summary">{exp.summary}</p>}

                {exp.bullets.length > 0 && (
                  <ul className="xp__bullets">
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

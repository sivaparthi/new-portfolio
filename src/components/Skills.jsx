import React from 'react';
import { motion } from 'framer-motion';
import { skills, proficiencies } from '../data/content.js';
import SectionHeading from './SectionHeading.jsx';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="02 — Skills"
          title="Tools of the trade"
          subtitle="A curated stack I use to ship reliable software."
        />

        <div className="skills__grid">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              className="skill-card"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.03, ease: 'easeOut' }}
            >
              <i className={`skill-card__icon ${s.icon}`} aria-hidden="true" />
              <span className="skill-card__name">{s.name}</span>
            </motion.div>
          ))}
        </div>

        <div className="proficiency">
          <h3 className="proficiency__title">Proficiency</h3>
          <div className="proficiency__list">
            {proficiencies.map((p, i) => (
              <motion.div
                key={p.label}
                className="proficiency__row"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <div className="proficiency__meta">
                  <span>{p.label}</span>
                  <span className="proficiency__pct">{p.level}%</span>
                </div>
                <div className="proficiency__bar">
                  <motion.div
                    className="proficiency__fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${p.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: 0.1 + i * 0.05, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

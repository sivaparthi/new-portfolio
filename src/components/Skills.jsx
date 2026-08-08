import React from 'react';
import { motion } from 'framer-motion';
import { skills, proficiencies } from '../data/content.js';
import SectionHeading from './SectionHeading.jsx';

const SEGMENTS = 20;

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="02 — Skills"
          title="Tools of the trade"
          subtitle="A curated stack I use to ship reliable software."
        />

        <div className="stack__grid">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              className="chip"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: (i % 8) * 0.04, ease: 'easeOut' }}
            >
              <i className={`chip__icon ${s.icon}`} aria-hidden="true" />
              <span className="chip__name">{s.name}</span>
            </motion.div>
          ))}
        </div>

        <div className="meters">
          <div className="meters__head">
            <h3 className="meters__title">Proficiency</h3>
          </div>

          <div className="meters__list">
            {proficiencies.map((p, i) => {
              const filled = Math.round((p.level / 100) * SEGMENTS);
              return (
                <motion.div
                  key={p.label}
                  className="meter"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                >
                  <div className="meter__head">
                    <span className="meter__label">{p.label}</span>
                    <span className="meter__val">{p.level}%</span>
                  </div>
                  <div
                    className="meter__track"
                    role="img"
                    aria-label={`${p.label}: ${p.level}%`}
                  >
                    {Array.from({ length: SEGMENTS }, (_, n) => (
                      <motion.span
                        key={n}
                        className={`meter__seg ${n < filled ? 'is-on' : ''}`}
                        initial={{ scaleY: 0.35, opacity: 0.4 }}
                        whileInView={{ scaleY: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.32,
                          delay: 0.1 + i * 0.05 + n * 0.018,
                          ease: 'easeOut',
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

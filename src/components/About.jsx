import React from 'react';
import { motion } from 'framer-motion';
import { FiZap } from 'react-icons/fi';
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

        <ul className="about__list">
          {highlights.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.04, ease: 'easeOut' }}
              className="about__item"
            >
              <span className="about__icon">
                <FiZap />
              </span>
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

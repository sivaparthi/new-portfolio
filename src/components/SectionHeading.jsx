import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      className="section__heading"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      {eyebrow && <p className="section__eyebrow">{eyebrow}</p>}
      <h2 className="section__title">{title}</h2>
      {subtitle && <p className="section__subtitle">{subtitle}</p>}
    </motion.div>
  );
}

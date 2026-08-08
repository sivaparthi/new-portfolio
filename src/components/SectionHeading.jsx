import React from 'react';
import { motion } from 'framer-motion';

/**
 * Splits eyebrow strings like "01 — About" into an index and a label so the
 * heading can render them as separate typographic elements.
 */
function splitEyebrow(eyebrow = '') {
  const [index, ...rest] = eyebrow.split('—');
  const label = rest.join('—').trim();
  return label ? { index: index.trim(), label } : { index: '', label: eyebrow };
}

export default function SectionHeading({ eyebrow, title, subtitle }) {
  const { index, label } = splitEyebrow(eyebrow);

  return (
    <motion.div
      className="section__head"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div>
        {eyebrow && (
          <p className="section__label">
            {index && <span>{index}</span>}
            {label}
          </p>
        )}
        <h2 className="section__title">{title}</h2>
      </div>
      {subtitle && <p className="section__subtitle">{subtitle}</p>}
    </motion.div>
  );
}

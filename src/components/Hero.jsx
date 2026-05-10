import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import { profile } from '../data/content.js';
import Typewriter from './Typewriter.jsx';

const heroSegments = [
  { text: "I'm " },
  { text: 'Siva', className: 'grad-text' },
  { text: ', a Software Engineer.' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <motion.div
          className="hero__eyebrows"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
        >
          <span className="hero__eyebrow">
            Hello, world <span aria-hidden="true">👋</span>
          </span>
          {profile.currently && (
            <span className="hero__pill">
              <span className="hero__pill-dot" aria-hidden="true" />
              Currently @ {profile.currently.company}
              <span className="hero__pill-meta">{profile.currently.detail}</span>
            </span>
          )}
        </motion.div>

        <motion.h1
          className="hero__title typewriter"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
        >
          <Typewriter segments={heroSegments} speed={75} startDelay={400} />
        </motion.h1>

        <motion.p
          className="hero__lead"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
        >
          {profile.intro}
        </motion.p>

        <motion.div
          className="hero__actions"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
        >
          <a href="#contact" className="btn btn--primary">
            Get in touch
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn--ghost"
          >
            View resume
          </a>
        </motion.div>

        <motion.div
          className="hero__socials"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
        >
          <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href={profile.socials.email} aria-label="Email">
            <FiMail />
          </a>
        </motion.div>

        <a className="hero__scroll" href="#about" aria-label="Scroll to about">
          <FiArrowDown />
        </a>
      </div>
    </section>
  );
}

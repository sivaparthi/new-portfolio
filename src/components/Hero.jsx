import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
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
    transition: { duration: 0.6, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__grid">
        <div className="hero__left">
          {profile.currently && (
            <motion.div
              className="hero__status"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
            >
              <span className="hero__dot" aria-hidden="true" />
              Currently @ {profile.currently.company}
              <span className="hero__status-meta">{profile.currently.detail}</span>
            </motion.div>
          )}

          <motion.h1
            className="hero__title typewriter"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
          >
            <Typewriter segments={heroSegments} speed={70} startDelay={380} />
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
              Get in touch <FiArrowRight />
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn--ghost"
            >
              View resume <FiArrowUpRight />
            </a>
          </motion.div>

          <motion.div
            className="hero__socials"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
          >
            <span className="hero__socials-label" aria-hidden="true">
              Find me
            </span>
            <a
              className="icon-link"
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              className="icon-link"
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a className="icon-link" href={profile.socials.email} aria-label="Email">
              <FiMail />
            </a>
          </motion.div>
        </div>

        <motion.aside
          className="hero__panel"
          initial={{ opacity: 0, y: 30, rotate: -0.6 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__panel-bar">
            <span className="hero__panel-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="hero__panel-path">~/siva</span>
          </div>

          <div className="hero__panel-body">
            <p className="hero__panel-kicker">
              Hello, world <span aria-hidden="true">👋</span>
            </p>
            <h2 className="hero__panel-name">{profile.name}</h2>
            <p className="hero__panel-role">{profile.role}</p>
            <p className="hero__panel-tagline">{profile.tagline}</p>

            <dl className="hero__meta">
              {profile.currently && (
                <>
                  <div className="hero__meta-row">
                    <dt>Company</dt>
                    <dd>{profile.currently.company}</dd>
                  </div>
                  <div className="hero__meta-row">
                    <dt>Focus</dt>
                    <dd>{profile.currently.detail}</dd>
                  </div>
                </>
              )}
              <div className="hero__meta-row">
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </dd>
              </div>
            </dl>
          </div>
        </motion.aside>
      </div>

      <a className="hero__scroll" href="#about">
        Scroll <FiArrowDown />
      </a>
    </section>
  );
}

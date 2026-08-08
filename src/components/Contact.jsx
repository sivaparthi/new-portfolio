import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { profile } from '../data/content.js';
import SectionHeading from './SectionHeading.jsx';

export default function Contact() {
  return (
    <section id="contact" className="section section--contact">
      <div className="container">
        <SectionHeading
          eyebrow="05 — Contact"
          title="Let's build something"
          subtitle="Open to interesting problems and collaborations."
        />

        <motion.div
          className="cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div>
            <p className="cta__lead">
              Got a project in mind, an idea to bounce around, or just want to say hi?
              My inbox is always open.
            </p>
            <a className="cta__email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>

          <div className="cta__socials">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}

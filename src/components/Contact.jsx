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
          className="contact-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="contact-card__lead">
            Got a project in mind, an idea to bounce around, or just want to say hi?
            My inbox is always open.
          </p>

          <a className="contact-card__email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>

          <div className="contact-card__socials">
            <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a href={profile.socials.email} aria-label="Email">
              <FiMail />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { profile } from '../data/content.js';
import ThemeToggle from './ThemeToggle.jsx';
import useTheme from '../hooks/useTheme.js';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the section currently sitting in the middle of the viewport.
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.2, 0.5, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle('is-locked', open);
    return () => document.body.classList.remove('is-locked');
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__brand" onClick={close}>
          <span className="nav__brand-mark" aria-hidden="true">
            S
          </span>
          {profile.shortName}
        </a>

        <nav className="nav__dock" aria-label="Sections">
          {links.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                className={`nav__link ${isActive ? 'is-active' : ''}`}
                aria-current={isActive ? 'true' : undefined}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="nav__link-pill"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                {l.label}
              </a>
            );
          })}
        </nav>

        <div className="nav__right">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="nav__cta"
          >
            Resume <FiArrowUpRight />
          </a>
          <button
            className={`nav__burger ${open ? 'nav__burger--open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`nav__sheet ${open ? 'nav__sheet--open' : ''}`}>
        {links.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            onClick={close}
            className={`nav__sheet-link ${active === l.href.slice(1) ? 'is-active' : ''}`}
          >
            <span className="nav__sheet-index">{String(i + 1).padStart(2, '0')}</span>
            {l.label}
          </a>
        ))}
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="nav__cta nav__sheet-cta"
          onClick={close}
        >
          Resume <FiArrowUpRight />
        </a>
      </div>
    </header>
  );
}

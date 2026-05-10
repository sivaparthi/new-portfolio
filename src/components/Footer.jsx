import React from 'react';
import { profile } from '../data/content.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="footer__meta">Built with React · Designed with care</span>
      </div>
    </footer>
  );
}

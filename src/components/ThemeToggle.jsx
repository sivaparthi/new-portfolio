import React from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';
  return (
    <button
      type="button"
      className="theme-toggle"
      data-theme={theme}
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      aria-pressed={isDark}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      <span className="theme-toggle__thumb" aria-hidden="true" />
      <span className="theme-toggle__icons" aria-hidden="true">
        <FiSun className="theme-toggle__sun" />
        <FiMoon className="theme-toggle__moon" />
      </span>
    </button>
  );
}

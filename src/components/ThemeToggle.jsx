import React from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      aria-pressed={!isDark}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      <span className={`theme-toggle__icon ${isDark ? 'is-dark' : 'is-light'}`}>
        {isDark ? <FiMoon /> : <FiSun />}
      </span>
    </button>
  );
}

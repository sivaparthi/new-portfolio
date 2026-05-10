import { useEffect, useState } from 'react';

const STORAGE_KEY = 'siva-portfolio:theme';

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark';
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    /* ignore */
  }
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light';
  }
  return 'dark';
}

export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    root.style.colorScheme = theme;
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return { theme, toggleTheme };
}

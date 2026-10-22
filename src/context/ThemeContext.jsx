import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    try {
      // 1. Check URL query parameters (supports both hash and search routes)
      const hashQuery = window.location.hash.includes('?') ? window.location.hash.split('?')[1] : '';
      const hashParams = new URLSearchParams(hashQuery);
      const searchParams = new URLSearchParams(window.location.search);
      const themeParam = hashParams.get('theme') || searchParams.get('theme');
      
      if (themeParam === 'dark' || themeParam === 'light') {
        return themeParam;
      }

      // 2. Fallback to localStorage
      const saved = localStorage.getItem('bbc_theme_mode');
      if (saved === 'dark' || saved === 'light') {
        return saved;
      }
    } catch (e) {
      console.error('Failed to read theme state', e);
    }
    // 3. Default to Daylight (light)
    return 'light';
  });

  // Apply .dark class to <html> and sync localStorage
  useEffect(() => {
    try {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('bbc_theme_mode', theme);
    } catch (e) {
      console.error('Failed to sync theme class', e);
    }
  }, [theme]);

  // Listen for hash/URL parameter changes
  useEffect(() => {
    const handleUrlChange = () => {
      try {
        const hashQuery = window.location.hash.includes('?') ? window.location.hash.split('?')[1] : '';
        const hashParams = new URLSearchParams(hashQuery);
        const searchParams = new URLSearchParams(window.location.search);
        const themeParam = hashParams.get('theme') || searchParams.get('theme');
        if (themeParam && (themeParam === 'dark' || themeParam === 'light') && themeParam !== theme) {
          setThemeState(themeParam);
        }
      } catch (e) {
        console.error('URL theme listener error', e);
      }
    };

    window.addEventListener('hashchange', handleUrlChange);
    return () => window.removeEventListener('hashchange', handleUrlChange);
  }, [theme]);

  const setTheme = (newTheme) => {
    if (newTheme === 'dark' || newTheme === 'light') {
      setThemeState(newTheme);
    }
  };

  const toggleTheme = () => {
    setThemeState(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, isDark: theme === 'dark' }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

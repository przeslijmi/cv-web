import { ThemeContext } from '@core/contexts/ThemeContext';
import { setHtmlThemeTo } from '@core/utils/html';
import { useContext, useCallback } from 'react';

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  const { theme, setTheme, isDark, isLight } = context;

  const toggle = useCallback(() => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setHtmlThemeTo(newTheme);
    setTheme(newTheme)
  }, [ theme ]);

  return {
    theme,
    isDark,
    isLight,
    toggle,
  };
}

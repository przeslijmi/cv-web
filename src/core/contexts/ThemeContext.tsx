import { setHtmlThemeTo } from '@core/utils/html';
import { createContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

export interface ThemeContextData {
  theme: Theme;
  isDark: () => boolean;
  isLight: () => boolean;
  setTheme: (newTheme: Theme) => void;
}

interface Props {
  children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextData | undefined>(undefined);

export const ThemeProvider: React.FC<Props> = ({
  children,
}) => {
  const [ theme, setTheme ] = useState<Theme>('light');

  const value: ThemeContextData = {
    theme,
    isDark: (): boolean => theme === 'dark',
    isLight: (): boolean => theme === 'light',
    setTheme,
  };

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      const systemTheme: Theme = e.matches ? 'dark' : 'light';
      if (systemTheme !== theme) {
        setTheme(systemTheme);
        setHtmlThemeTo(systemTheme);
      }
    };
    handler(media);

    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, []);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

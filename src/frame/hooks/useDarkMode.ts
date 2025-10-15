import { useState, useEffect } from 'react';

export function useDarkMode(initial: boolean = false) {
  const [ isDark, setIsDark ] = useState(initial);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [ isDark ]);

  const toggle = () => setIsDark(prev => !prev);

  return { isDark, toggle }
}

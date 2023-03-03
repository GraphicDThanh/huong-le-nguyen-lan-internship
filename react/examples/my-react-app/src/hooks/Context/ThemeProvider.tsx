import React, { createContext, useCallback, useMemo, useState } from 'react';

interface Props {
  theme: string;
  data: string[];
  setData?: (data: string[]) => void;
  toggleTheme?: () => void;
}

const ThemeContext = createContext<Props>({ theme: 'light', data: [] });

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState('dark');
  const [data, setData] = useState(['']);
  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
      data,
      setData,
    }),
    [theme, toggleTheme, data, setData],
  );

  return <ThemeContext.Provider value={value}>{children} </ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };

import React, { createContext, useState } from 'react';

interface Props {
  theme: string;
  data: string[];
  setData: (data: string[]) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<Props>({} as Props);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState('dark');
  const [data, setData] = useState(['']);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const value = {
    theme,
    data,
    setData,
    toggleTheme,
  };

  return <ThemeContext.Provider value={value}>{children} </ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };

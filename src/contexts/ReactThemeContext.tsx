import React, { useCallback, useMemo, useState } from 'react';

import { ThemeProvider as StyledProvider } from 'styled-components';

import { colors } from '@components/bosons/colors';
import { IColors } from '@interfaces/ITheme';

import { themes } from '../styles/themes';

export interface IThemeContext {
  theme: 'dark' | 'light';
  colors: IColors;
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  }, []);

  const value = useMemo(() => {
    return { theme, colors, toggleTheme };
  }, [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>
      <StyledProvider theme={themes[theme]}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };

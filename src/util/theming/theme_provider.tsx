import React, { createContext, useContext, FC, useState } from 'react';
import { getRandomNumInRange } from '../math';
import { ThemeProviderMessages as Messages } from './theme_provider.messages';

const LOCAL_STORAGE_KEY = '_bos_theme';

export enum THEME {
  BASIC = 'basic',
  EIGHT_BIT = '8bit',
}

export const THEMES = [
  {
    theme: THEME.BASIC,
    label: Messages.basic(),
  },
  {
    theme: THEME.EIGHT_BIT,
    label: Messages.eightBit(),
  },
];

const getTheme = (value: string | null | undefined): THEME => {
  switch (value) {
    case 'basic':
      return THEME.BASIC;
    case '8bit':
      return THEME.EIGHT_BIT;
    default:
      return THEMES[getRandomNumInRange(0, THEMES.length - 1)].theme;
  }
};

interface IThemeContext {
  theme: THEME,
  setTheme: React.Dispatch<React.SetStateAction<THEME>>,
}

const ThemeContext = createContext<IThemeContext>(undefined!);

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider: FC = ({ children }) => {

  const [theme, setTheme] = useState<THEME>(getTheme(window.localStorage.getItem(LOCAL_STORAGE_KEY)));

  return (
    <ThemeContext.Provider
        value={{ theme, setTheme }}
    >
      { children }
    </ThemeContext.Provider>
  );
};

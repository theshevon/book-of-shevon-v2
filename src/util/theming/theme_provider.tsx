import React, { createContext, useContext, useState } from 'react';
import type { FC } from 'react';
import { getRandomNumInRange } from '../math';
import { ThemeProviderMessages as Messages } from './theme_provider.messages';

const LOCAL_STORAGE_KEY = '_bos_theme';

export enum Theme {
  BASIC = 'basic',
  EIGHT_BIT = '8bit',
}

export const THEMES = [
  {
    theme: Theme.BASIC,
    label: Messages.basic(),
  },
  {
    theme: Theme.EIGHT_BIT,
    label: Messages.eightBit(),
  },
];

const getTheme = (value: string | null | undefined): Theme => {
  switch (value) {
    case 'basic':
      return Theme.BASIC;
    case '8bit':
      return Theme.EIGHT_BIT;
    default:
      return THEMES[getRandomNumInRange(0, THEMES.length - 1)].theme;
  }
};

interface IThemeContext {
  theme: Theme,
  setTheme: React.Dispatch<React.SetStateAction<Theme>>,
}

const ThemeContext = createContext<IThemeContext>(undefined!);

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider: FC = ({ children }) => {

  const [theme, setTheme] = useState<Theme>(getTheme(window.localStorage.getItem(LOCAL_STORAGE_KEY)));

  return (
    <ThemeContext.Provider
        value={{ theme, setTheme }}
    >
      { children }
    </ThemeContext.Provider>
  );
};

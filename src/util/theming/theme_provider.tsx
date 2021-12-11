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

const ThemeContext = createContext<THEME>(undefined!);
const ThemeUpdateContext = createContext<(_:THEME) => void>(undefined!);

export const useTheme = () => useContext(ThemeContext);
export const useThemeUpdate = () => useContext(ThemeUpdateContext);

export const ThemeProvider: FC = ({ children }) => {

  const [theme, setTheme] = useState<THEME>(getTheme(window.localStorage.getItem(LOCAL_STORAGE_KEY)));

  return (
    <ThemeContext.Provider
        value={theme}
    >
      <ThemeUpdateContext.Provider
          value={setTheme}
      >
        { children }
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

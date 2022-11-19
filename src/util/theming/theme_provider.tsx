import React, { createContext, useContext, useState } from 'react';
import type { FC } from 'react';
import { Locale } from '../localisation/locale_provider';
import { getRandomNumInRange } from '../math';
import { ThemeProviderMessages as Messages } from './theme_provider.messages';

const LOCAL_STORAGE_KEY_THEME = '_bos_theme';
const LOCAL_STORAGE_KEY_APPEARANCE = '_bos_appearance';

export enum Theme {
  BASIC = 'basic',
  EIGHT_BIT = '8bit',
}

export enum Appearance {
  LIGHT = 'light',
  DARK = 'dark',
}

export const THEMES = [
  {
    theme: Theme.BASIC,
    label: (locale: Locale) => Messages.basic[locale],
    icon: '🥛',
  },
  {
    theme: Theme.EIGHT_BIT,
    label: (locale: Locale) => Messages.eightBit[locale],
    icon: '👾',
  },
];

export const APPEARANCES = {
  [Appearance.LIGHT]: {
    label: (locale: Locale) => Messages.light[locale],
    icon: '🌝',
  },
  [Appearance.DARK]: {
    label: (locale: Locale) => Messages.dark[locale],
    icon: '🌚',
  },
};

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

const getAppearance = (value: string | null | undefined): Appearance => {
  switch (value) {
    case 'light':
      return Appearance.LIGHT;
    case 'dark':
      return Appearance.DARK;
    default: {
      const userPrefersDarkMode = window.matchMedia && window.matchMedia('(prefers-colour-scheme: dark)').matches;
      return userPrefersDarkMode ? Appearance.LIGHT : Appearance.DARK;
    }
  }
};

interface IThemeContext {
  theme: Theme,
  setTheme: (theme: Theme) => void,
  appearance: Appearance,
  setAppearance: (appearance: Appearance) => void,
}

const ThemeContext = createContext<IThemeContext>(undefined!);

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider: FC = ({ children }) => {

  const [theme, _setTheme] = useState<Theme>(getTheme(window.localStorage.getItem(LOCAL_STORAGE_KEY_THEME)));
  const [appearance, _setAppearance] = useState<Appearance>(getAppearance(window.localStorage.getItem(LOCAL_STORAGE_KEY_APPEARANCE)));

  const setTheme = (theme: Theme) => {
    _setTheme(theme);
    window.localStorage.setItem(LOCAL_STORAGE_KEY_THEME, theme.toString());
  };

  const setAppearance = (appearance: Appearance) => {
    _setAppearance(appearance);
    window.localStorage.setItem(LOCAL_STORAGE_KEY_APPEARANCE, appearance.toString());
  };

  return (
    <ThemeContext.Provider
        value={{ theme, setTheme, appearance, setAppearance }}
    >
      { children }
    </ThemeContext.Provider>
  );
};

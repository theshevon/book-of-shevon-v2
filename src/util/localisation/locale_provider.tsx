import React, { createContext, useContext, useState } from 'react';
import type { FC } from 'react';

const LOCAL_STORAGE_KEY_LOCALE = '_bos_locale';

export enum Locale {
  ENGLISH = 'en',
  KOREAN = 'kr',
}

export const LOCALES = [
  {
    id: Locale.ENGLISH,
    label: 'ENG',
  },
  {
    id: Locale.KOREAN,
    // TODO: replace with korean symbol for hangul
    label: 'KR',
  },
];

const getLocale = (value: string | null | undefined): Locale => {
  switch (value) {
    case 'en':
      return Locale.ENGLISH;
    case 'kr':
      return Locale.KOREAN;
    default:
      return Locale.ENGLISH;
  }
};

interface ILocale {
  locale: Locale,
  setLocale: (locale: Locale) => void,
}

const LocaleContext = createContext<ILocale>(undefined!);

export const useLocaleContext = () => useContext(LocaleContext);

export const LocaleProvider: FC = ({ children }) => {

  const [locale, _setLocale] = useState<Locale>(getLocale(window.localStorage.getItem(LOCAL_STORAGE_KEY_LOCALE)));

  const setLocale = (locale: Locale) => {
    _setLocale(locale);
    window.localStorage.setItem(LOCAL_STORAGE_KEY_LOCALE, locale.toString());
  };

  return (
    <LocaleContext.Provider
        value={{ locale, setLocale }}
    >
      { children }
    </LocaleContext.Provider>
  );
};

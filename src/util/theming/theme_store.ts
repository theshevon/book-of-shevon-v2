import { action, observable } from 'mobx';
import { getRandomNumInRange } from '../math';

// exported for testing
export const LOCAL_STORAGE_KEY = '_bos_theme';

export enum THEME {
  DEFAULT = 'default',
  EIGHT_BIT = '8bit',
  BREAD = 'bread',
}

const THEMES = Object.values(THEME);

const getTheme = (value: string | null | undefined): THEME => {
  switch (value) {
    case 'default':
      return THEME.DEFAULT;
    case '8bit':
      return THEME.EIGHT_BIT;
    case 'bread':
      return THEME.BREAD;
    default:
      return THEMES[getRandomNumInRange(0, THEMES.length - 1)];
  }
};

const ThemeStoreFactory = (() => {
  let instance: ThemeStore;

  class ThemeStore {

    private localStorage: Storage | undefined;

    @observable.ref
    theme: THEME;

    constructor(localStorage: Storage | undefined) {
      this.localStorage = localStorage;
      const storedTheme = this.localStorage?.getItem(LOCAL_STORAGE_KEY);
      this.theme = getTheme(storedTheme);
    }

    @action
    setTheme(theme: THEME) {
      this.theme = theme;
      this.localStorage?.setItem(LOCAL_STORAGE_KEY, this.theme);
    }

  }

  return {
    getInstance: () => {
      if (!instance) {
        instance = new ThemeStore(localStorage);
      }
      return instance;
    },
  };
})();

export const ThemeStore = ThemeStoreFactory.getInstance();

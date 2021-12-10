import { action, observable } from 'mobx';
import { getRandomNumInRange } from '../math';
import { ThemeStoreMessages as Messages } from './theme_store.messages';

// exported for testing
export const LOCAL_STORAGE_KEY = '_bos_theme';

export enum THEME {
  BASIC = 'basic',
  // TODO: add support for the themes below
  // EIGHT_BIT = '8bit',
  // BREAD = 'bread',
}

export const THEMES = [
  {
    theme: THEME.BASIC,
    icon: '🌊',
    label: Messages.basic(),
  },
  // TODO: add support for the themes below
  // {
  //   theme: THEME.EIGHT_BIT,
  //   icon: '👾',
  //   label: Messages.eightBit(),
  // },
  // {
  //   theme: THEME.BREAD,
  //   icon: '🍞',
  //   label: Messages.bread(),
  // },
];

const getTheme = (value: string | null | undefined): THEME => {
  switch (value) {
    case 'basic':
      return THEME.BASIC;
    // TODO: add support for the themes below
    // case '8bit':
    //   return THEME.EIGHT_BIT;
    // case 'bread':
    //   return THEME.BREAD;
    default:
      return THEMES[getRandomNumInRange(0, THEMES.length - 1)].theme;
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

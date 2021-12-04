import { action, observable } from 'mobx';
import { getRandomNumInRange } from '../math';

const LOCAL_STORAGE_KEY = '_bos_theme';

export enum THEME {
  DEFAULT = 'default',
  EIGHT_BIT = '8bit',
  BREAD = 'bread',
}

const THEMES = Object.values(THEME);

const getTheme = (value: string | null): THEME => {
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
}

export class ThemingService {

  @observable.ref
  theme: THEME;

  constructor() {
    const storedTheme = localStorage.getItem(LOCAL_STORAGE_KEY);
    this.theme = getTheme(storedTheme);
  }

  @action
  setTheme(theme: THEME) {
    this.theme = theme;
    localStorage.setItem(LOCAL_STORAGE_KEY, this.theme);
  }
  
}

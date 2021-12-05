import { THEME, ThemeStore } from '../theme_store';

describe('ThemeStore', () => {

  it('Gets a random theme when no theme has been set', () => {
    expect(Object.values(THEME).includes(ThemeStore.theme)).toBe(true);
  });

  it('Sets the theme to a specific one', () => {
    ThemeStore.setTheme(THEME.BREAD);
    expect(ThemeStore.theme).toBe(THEME.BREAD);
    ThemeStore.setTheme(THEME.EIGHT_BIT);
    expect(ThemeStore.theme).toBe(THEME.EIGHT_BIT);
  });
});

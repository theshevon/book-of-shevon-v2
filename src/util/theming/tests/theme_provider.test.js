import { THEME, ThemeProvider } from '../theme_provider';

describe('ThemeProvider', () => {

  it('Gets a random theme when no theme has been set', () => {
    expect(Object.values(THEME).includes(ThemeProvider.theme)).toBe(true);
  });

  it('Sets the theme to a specific one', () => {
    ThemeProvider.setTheme(THEME.BASIC);
    expect(ThemeProvider.theme).toBe(THEME.BASIC);
  });
});

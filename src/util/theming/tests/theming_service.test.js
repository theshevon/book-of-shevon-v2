import { THEME, ThemingService } from '../theming_service';

describe('ThemingService', () => {

  it('Gets a random theme when no theme has been set', () => {
    const themingService = new ThemingService(localStorage);
    expect(Object.values(THEME).includes(themingService.theme)).toBe(true);
  });

  it('Sets the theme to a specific one', () => {
    const themingService = new ThemingService(localStorage);
    themingService.setTheme(THEME.BREAD);
    expect(themingService.theme).toBe(THEME.BREAD);
  });
});

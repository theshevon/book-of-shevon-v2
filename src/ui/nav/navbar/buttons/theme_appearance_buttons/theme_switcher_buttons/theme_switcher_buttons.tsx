import React from 'react';
import { THEMES, useThemeContext } from '../../../../../../util/theming/theme_provider';
import { ThemeAppearanceButton } from '../theme_appearance_button';
import styles from './theme_switcher_buttons.module.css';

export const ThemeSwitcherButtons = ({
  activeRoute,
}: {
  activeRoute: string,
}) => {
  const { theme, setTheme } = useThemeContext();
  return (
    <div
        className={styles.themeSwitcherButtons}
    >
      { THEMES.map(themeOption => (
        <div
            className={styles.themeSwitcherButtonContainer}
            key={themeOption.theme.toString()}
        >
          <ThemeAppearanceButton
              // title={themeOption.label(locale)}
              onClick={() => setTheme(themeOption.theme)}
              inActive={themeOption.theme !== theme}
              label={themeOption.icon}
              activeRoute={activeRoute}
          />
        </div>
      )) }
    </div>
  );
};

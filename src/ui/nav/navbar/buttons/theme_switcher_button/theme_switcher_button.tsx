import classNames from 'classnames';
import React from 'react';
import { THEMES, Theme, useThemeContext } from '../../../../../util/theming/theme_provider';
import baseStyles from './../navbar_button.module.css';
import themeSwitcherButtonStyles from './theme_switcher_button.module.css';

export const ThemeSwitcherButton = () => {
  const { theme, setTheme } = useThemeContext();
  return (
    <div
        className={classNames(baseStyles.navbarButton, themeSwitcherButtonStyles.themeSwitcherButton, {
          [themeSwitcherButtonStyles.eightBit]: theme === Theme.EIGHT_BIT,
          [baseStyles.eightBit]: theme === Theme.EIGHT_BIT,
        })}
    >
      <div
          className={themeSwitcherButtonStyles.themeOptions}
      >
        { THEMES.map(themeOption => (
          <button
              key={themeOption.theme.toString()}
              title={themeOption.label}
              onClick={() => setTheme(themeOption.theme)}
              className={classNames(themeSwitcherButtonStyles.themeOption, {
                [themeSwitcherButtonStyles.active]: themeOption.theme === theme,
              })}
          >
            { themeOption.icon }
          </button>
        )) }
      </div>
    </div>
  );
};

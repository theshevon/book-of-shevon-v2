import classNames from 'classnames';
import React from 'react';
import { THEMES, Theme, useThemeContext } from '../../../../../util/theming/theme_provider';
import { Button } from '../../../../button/button';
import navbarButtonStyles from './../navbar_button.module.css';
import themeSwitcherButtonStyles from './theme_switcher_button.module.css';

export const ThemeSwitcherButton = () => {
  const { theme, setTheme } = useThemeContext();
  return (
    <Button
        onClick={() => {}}
        className={classNames(navbarButtonStyles.navbarButton, {
          [themeSwitcherButtonStyles.eightBit]: theme === Theme.EIGHT_BIT,
        })}
    >
      <div
          className={themeSwitcherButtonStyles.themeOptions}
      >
        { THEMES.map(themeOption => (
          <div
              key={themeOption.theme.toString()}
              onClick={() => setTheme(themeOption.theme)}
              className={classNames(themeSwitcherButtonStyles.themeOption, {
                [themeSwitcherButtonStyles.active]: themeOption.theme === theme,
              })}
          >
            { themeOption.icon }
          </div>
        )) }
      </div>
    </Button>
  );
};

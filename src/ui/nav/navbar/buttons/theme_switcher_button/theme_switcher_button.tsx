import classNames from 'classnames';
import React from 'react';
import { Routes } from '../../../../../routes/routes';
import { THEMES, Theme, useThemeContext } from '../../../../../util/theming/theme_provider';
import baseStyles from './../navbar_button.module.css';
import themeSwitcherButtonStyles from './theme_switcher_button.module.css';

const getLocationSpecificThemeStyles = (activeRoute: string) => {
  if (activeRoute === Routes.PROJECTS) {
    return baseStyles.projects;
  }
};

export const ThemeSwitcherButton = ({
  activeRoute,
}: {
  activeRoute: string,
}) => {
  const { theme, setTheme } = useThemeContext();
  return (
    <div
        className={classNames(baseStyles.navbarButton, themeSwitcherButtonStyles.themeSwitcherButton, {
          [themeSwitcherButtonStyles.eightBit]: theme === Theme.EIGHT_BIT,
          [baseStyles.eightBit]: theme === Theme.EIGHT_BIT,
        }, getLocationSpecificThemeStyles(activeRoute))}
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

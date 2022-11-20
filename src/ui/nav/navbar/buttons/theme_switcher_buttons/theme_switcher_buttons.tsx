import classNames from 'classnames';
import React from 'react';
import { Routes } from '../../../../../routes/routes';
import { Appearance, THEMES, Theme, useThemeContext } from '../../../../../util/theming/theme_provider';
import { Button } from '../../../../button/button';
import styles from './theme_switcher_buttons.module.css';

const getLocationSpecificThemeStyles = (activeRoute: string) => {
  if (activeRoute === Routes.PROJECTS) {
    return classNames(styles.projects, styles.projects);
  }
};

export const ThemeSwitcherButtons = ({
  activeRoute,
}: {
  activeRoute: string,
}) => {
  const { theme, setTheme, appearance } = useThemeContext();
  // TODO: add tooltips
  return (
    <div
        className={styles.themeSwitcherButtonsContainer}
    >
      { THEMES.map(themeOption => (
        <Button
            key={themeOption.theme.toString()}
            // title={themeOption.label(locale)}
            onClick={() => setTheme(themeOption.theme)}
            className={classNames(styles.themeOptionButton, {
              [styles.active]: themeOption.theme === theme,
              [styles.eightBit]: theme === Theme.EIGHT_BIT,
              [styles.eightBit]: theme === Theme.EIGHT_BIT,
              [styles.dark]: appearance === Appearance.DARK,
              [styles.dark]: appearance === Appearance.DARK,
            }, getLocationSpecificThemeStyles(activeRoute))}
        >
          { themeOption.icon }
        </Button>
      )) }
    </div>
  );
};

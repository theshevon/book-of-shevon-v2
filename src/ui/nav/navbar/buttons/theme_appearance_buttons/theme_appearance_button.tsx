import classNames from 'classnames';
import React from 'react';
import { Routes } from '../../../../../routes/routes';
import { Appearance, Theme, useThemeContext } from '../../../../../util/theming/theme_provider';
import { Button } from '../../../../button/button';
import styles from './theme_appearance_button.module.css';

const getLocationSpecificThemeStyles = (activeRoute: string) => {
  if (activeRoute === Routes.PROJECTS) {
    return classNames(styles.projects, styles.projects);
  }
};

export const ThemeAppearanceButton = ({
  onClick,
  active,
  label,
  activeRoute,
}: {
  onClick: () => void,
  active: boolean,
  label: string,
  activeRoute: string,
}) => {
  const { theme, appearance } = useThemeContext();
  // TODO: add tooltips
  return (
    <Button
        // title={themeOption.label(locale)}
        onClick={onClick}
        className={classNames(styles.themeAppearanceButton, {
          [styles.active]: active,
          [styles.eightBit]: theme === Theme.EIGHT_BIT,
          [styles.dark]: appearance === Appearance.DARK,
        }, getLocationSpecificThemeStyles(activeRoute))}
    >
      { label }
    </Button>
  );
};

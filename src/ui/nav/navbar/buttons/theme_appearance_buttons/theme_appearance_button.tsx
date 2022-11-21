import classNames from 'classnames';
import React from 'react';
import { Routes } from '../../../../../routes/routes';
import { Appearance, Theme, useThemeContext } from '../../../../../util/theming/theme_provider';
import { Button } from '../../../../button/button';
import styles from './theme_appearance_button.module.css';
import { TooltipWrapper } from './tooltip/tooltip';

const getLocationSpecificThemeStyles = (activeRoute: string) => {
  if (activeRoute === Routes.PROJECTS) {
    return classNames(styles.projects, styles.projects);
  }
};

export const ThemeAppearanceButton = ({
  onClick,
  inActive,
  label,
  activeRoute,
}: {
  onClick: () => void,
  inActive?: boolean,
  label: string,
  activeRoute: string,
}) => {
  const { theme, appearance } = useThemeContext();
  return (
    <TooltipWrapper
        label={'something'}
    >
      <Button
          onClick={onClick}
          className={classNames(styles.themeAppearanceButton, {
            [styles.inActive]: inActive,
            [styles.eightBit]: theme === Theme.EIGHT_BIT,
            [styles.dark]: appearance === Appearance.DARK,
          }, getLocationSpecificThemeStyles(activeRoute))}
      >
        { label }
      </Button>
    </TooltipWrapper>
  );
};

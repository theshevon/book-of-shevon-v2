import classNames from 'classnames';
import React from 'react';
import { Routes } from '../../../../../routes/routes';
import { Appearance, Theme, useThemeContext } from '../../../../../util/theming/theme_provider';
import { Button } from '../../../../button/button';
import styles from './theme_appearance_button.module.css';
import { TooltipWrapper } from './tooltip_wrapper/tooltip_wrapper';

const getLocationSpecificThemeStyles = (activeRoute: string) => {
  if (activeRoute === Routes.PROJECTS) {
    return styles.projects;
  }
  if (!(Object.values(Routes).some(route => route.toString() === activeRoute))) {
    return styles.error;
  }
};

export const ThemeAppearanceButton = ({
  onClick,
  inActive,
  label,
  tooltipLabel,
  activeRoute,
}: {
  onClick: () => void,
  inActive?: boolean,
  label: string,
  tooltipLabel: string,
  activeRoute: string,
}) => {
  const { theme, appearance } = useThemeContext();
  return (
    <TooltipWrapper
        label={tooltipLabel}
        activeRoute={activeRoute}
    >
      <Button
          onClick={onClick}
          className={classNames(styles.themeAppearanceButton, {
            [styles.inActive]: inActive,
            [styles.eightBit]: theme === Theme.EIGHT_BIT,
            [styles.dark]: appearance === Appearance.DARK,
          }, getLocationSpecificThemeStyles(activeRoute))}
      >
        { label.toUpperCase() }
      </Button>
    </TooltipWrapper>
  );
};

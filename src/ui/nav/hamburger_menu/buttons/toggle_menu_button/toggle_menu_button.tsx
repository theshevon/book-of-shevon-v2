import classnames from 'classnames';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { RouteData } from '../../../../../routes/route_data/route_data';
import { Routes } from '../../../../../routes/routes';
import { Appearance, Theme, useThemeContext } from '../../../../../util/theming/theme_provider';
import styles from './toggle_menu_button.module.css';

type ToggleMenuButtonProps = {
  routesData: RouteData[],
  menuOpen: boolean,
  onClick: () => void,
}

const getLocationSpecificThemeStyles = (activeRoute: string, theme: Theme) => {
  if (activeRoute === Routes.PROJECTS && theme === Theme.EIGHT_BIT) {
    return styles.projects;
  }
  if (!(Object.values(Routes).some(route => route.toString() === activeRoute))) {
    return styles.error;
  }
};

export const ToggleMenuButton = ({
  menuOpen,
  onClick,
}: ToggleMenuButtonProps) => {
  const { pathname: activeRoute } = useLocation();
  const { appearance, theme } = useThemeContext();
  return (
    <div
        role='button'
        className={classnames(styles.toggleMenuButton, {
          [styles.menuOpen]: menuOpen,
          [styles.dark]: appearance === Appearance.DARK,
        }, getLocationSpecificThemeStyles(activeRoute, theme))}
        onClick={onClick}
    >
      <div
          className={classnames(styles.line, { [styles.menuOpen]: menuOpen })}
      >
      </div>
      <div
          className={classnames(styles.line, { [styles.menuOpen]: menuOpen })}
      >
      </div>
    </div>
  );};

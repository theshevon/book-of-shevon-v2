import classNames from 'classnames';
import React from 'react';
import { Routes } from '../../../../../routes/routes';
import { Theme, useThemeContext } from '../../../../../util/theming/theme_provider';
import { Button } from './../../../../button/button';
import styles from './../navbar_button.module.css';
import { MenuButtonMessages as Messages } from './toggle_menu_botton.messages';

type ToggleMenuButtonProps = {
  menuOpen: boolean,
  onClick: () => void,
  activeRoute: string,
}

const getLocationSpecificThemeStyles = (activeRoute: string) => {
  if (activeRoute === Routes.PROJECTS) {
    return styles.projects;
  }
};

export const ToggleMenuButton = ({
  menuOpen,
  onClick,
  activeRoute,
}: ToggleMenuButtonProps) => {
  const { theme } = useThemeContext();
  return (
    <Button
        onClick={onClick}
        className={classNames(styles.navbarButton, {
          [styles.eightBit]: theme === Theme.EIGHT_BIT,
        }, getLocationSpecificThemeStyles(activeRoute))}
    >
      { menuOpen ? Messages.CloseMenuButtonLabel() : Messages.OpenMenuButtonLabel() }
    </Button>
  );
};

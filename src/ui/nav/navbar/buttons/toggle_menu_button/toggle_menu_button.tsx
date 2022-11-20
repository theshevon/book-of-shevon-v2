import classNames from 'classnames';
import React from 'react';
import { Routes } from '../../../../../routes/routes';
import { useLocaleContext } from '../../../../../util/localisation/locale_provider';
import { Appearance, Theme, useThemeContext } from '../../../../../util/theming/theme_provider';
import { Button } from './../../../../button/button';
import styles from './../navbar_button.module.css';
import { MenuButtonMessages as Messages } from './toggle_menu_button.messages';

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
  const { locale } = useLocaleContext();
  const { theme, appearance } = useThemeContext();
  return (
    <Button
        onClick={onClick}
        className={classNames(styles.navbarButton, {
          [styles.eightBit]: theme === Theme.EIGHT_BIT,
          [styles.dark]: appearance === Appearance.DARK,
        }, getLocationSpecificThemeStyles(activeRoute))}
    >
      { menuOpen ? Messages.CloseMenuButtonLabel[locale] : Messages.OpenMenuButtonLabel[locale] }
    </Button>
  );
};

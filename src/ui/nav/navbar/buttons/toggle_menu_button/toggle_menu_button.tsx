import classNames from 'classnames';
import React from 'react';
import { Theme, useThemeContext } from '../../../../../util/theming/theme_provider';
import { Button } from './../../../../button/button';
import styles from './../navbar_button.module.css';
import { MenuButtonMessages as Messages } from './toggle_menu_botton.messages';

type ToggleMenuButtonProps = {
  menuOpen: boolean,
  onClick: () => void,
}

export const ToggleMenuButton = ({
  menuOpen,
  onClick,
}: ToggleMenuButtonProps) => {
  const { theme } = useThemeContext();
  return (
    <Button
        onClick={onClick}
        className={classNames(styles.navbarButton, {
          [styles.eightBit]: theme === Theme.EIGHT_BIT,
        })}
    >
      { menuOpen ? Messages.CloseMenuButtonLabel() : Messages.OpenMenuButtonLabel() }
    </Button>
  );
};

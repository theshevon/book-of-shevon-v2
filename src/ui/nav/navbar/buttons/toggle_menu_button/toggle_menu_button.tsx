import React from 'react';

import { Button } from 'ui/button/button';
import { MenuButtonMessages as Messages } from './toggle_menu_botton.messages';

import styles from 'ui/nav/navbar/buttons/navbar_button.module.css';

type ToggleMenuButtonProps = {
  menuOpen: boolean,
  onClick: () => void,
}

export const ToggleMenuButton = ({
  menuOpen,
  onClick,
}: ToggleMenuButtonProps) => (
  <Button
      label={menuOpen ? Messages.CloseMenuButtonLabel() : Messages.OpenMenuButtonLabel()}
      onClick={onClick}
      extraClassNames={styles.navbarButton}
  />
);

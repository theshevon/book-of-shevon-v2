import React from 'react';

import { Button } from '../../button/button';
import { MenuButtonMessages as Messages } from './menu_botton.messages';

import styles from './menu_button.module.css';

type MenuButtonProps = {
  menuOpen: boolean,
  onClick: () => void,
}

export const MenuButton = ({
    menuOpen,
    onClick,
  }: MenuButtonProps) => (
      <Button
          label={menuOpen ? Messages.CloseMenuButtonLabel() : Messages.OpenMenuButtonLabel()}
          onClick={onClick}
          extraClassNames={styles.navbarButton}
      />
    );

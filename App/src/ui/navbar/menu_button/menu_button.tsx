import React from 'react';

import { Button } from '../../button/button';
import { MenuButtonMessages } from './menu_botton.messages';

import styles from './menu_button.module.css';

type MenuButtonProps = {
  onClick: () => void,
}

export const MenuButton = ({
    onClick,
  }: MenuButtonProps) => (
      <Button
          label={MenuButtonMessages.MenuButtonLabel()}
          onClick={onClick}
          extraClassNames={styles.navbarButton}
      />
    );

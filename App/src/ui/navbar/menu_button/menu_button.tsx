import React from 'react';

import { Button } from '../../button/button';
import { MenuButtonMessages } from './menu_botton.messages';

import styles from './menu_button.module.css';

const onClick = () => {
  // no-op for now
}

export const MenuButton = () => {
  return (
    <Button
        label={MenuButtonMessages.MenuButtonLabel()}
        onClick={onClick}
        extraClassNames={styles.navbarButton}
    />
  );
}


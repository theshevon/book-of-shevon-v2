import React from 'react';
import classnames from 'classnames';

import styles from './toggle_menu_button.module.css';

type ToggleMenuButtonProps = {
  menuOpen: boolean,
  onClick: () => void,
}

export const ToggleMenuButton = ({
  menuOpen,
  onClick,
}: ToggleMenuButtonProps) => (
  <div
      role='button'
      className={classnames(styles.toggleMenuButton, {[styles.menuOpen]: menuOpen })}
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
);

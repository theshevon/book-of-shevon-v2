import React from 'react';
import classnames from 'classnames';

import styles from './toggle_menu_button.module.css';

export const ToggleMenuButton = ({
  menuOpen,
  onClick,
}: {
  menuOpen: boolean,
  onClick: () => void,
}) => (
  <div
      role='button'
      className={classnames(styles.toggleMenuButton, {[styles.menuOpen]: menuOpen })}
      onClick={onClick}
  >
    <div
        id="upper"
        className={classnames(styles.line, { [styles.menuOpen]: menuOpen })}
    >
    </div>
    <div
        id="lower"
        className={classnames(styles.line, { [styles.menuOpen]: menuOpen })}
    >
    </div>
  </div>
);

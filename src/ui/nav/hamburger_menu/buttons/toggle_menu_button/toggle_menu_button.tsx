import classnames from 'classnames';
import React from 'react';
import { Appearance, useThemeContext } from '../../../../../util/theming/theme_provider';
import styles from './toggle_menu_button.module.css';

type ToggleMenuButtonProps = {
  menuOpen: boolean,
  onClick: () => void,
}

export const ToggleMenuButton = ({
  menuOpen,
  onClick,
}: ToggleMenuButtonProps) => {
  const { appearance } = useThemeContext();
  return (
    <div
        role='button'
        className={classnames(styles.toggleMenuButton, {
          [styles.menuOpen]: menuOpen,
          [styles.dark]: appearance === Appearance.DARK,
        })}
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

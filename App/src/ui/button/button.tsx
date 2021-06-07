import React from 'react';
import classNames from 'classnames';

import styles from './button.module.css';

type ButtonProps = {
  label: string,
  onClick: () => void,
  disabled?: boolean,
  extraClassNames?: string,
}

export const Button = ({
  label,
  onClick,
  disabled=false,
  extraClassNames='',
}: ButtonProps) => (
  <button
      className={classNames(styles.button, extraClassNames)}
      onClick={onClick}
      disabled={disabled}
  >
    { label }
  </button>
);

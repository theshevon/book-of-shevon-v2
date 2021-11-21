import classNames from 'classnames';
import React from 'react';
import { Icon, IconDefinition } from '../icons/icon/icon';

import styles from './button.module.css';

type ButtonProps = {
  label: string,
  onClick: () => void,
  disabled?: boolean,
  className?: string,
}

export const Button = ({
  label,
  onClick,
  disabled=false,
  className='',
}: ButtonProps) => (
  <button
      className={classNames(styles.button, className)}
      onClick={onClick}
      disabled={disabled}
  >
    { label }
  </button>
);

type IconButtonProps = Omit<ButtonProps, 'label'> & {
  iconDefinition: IconDefinition,
}

export const IconButton = ({
  iconDefinition,
  className,
  ...buttonProps
}: IconButtonProps) => (
  <button
      {...buttonProps}
      className={classNames(styles.iconButton, className)}
  >
    <Icon
        {...iconDefinition}
    />
  </button>
);

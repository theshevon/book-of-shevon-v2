import classNames from 'classnames';
import React, { FC } from 'react';
import { THEME } from '../../util/theming/theme_provider';
import { Icon, IconDefinition } from '../icons/icon/icon';
import styles from './button.module.css';

type ButtonProps = {
  onClick: () => void,
  disabled?: boolean,
  className?: string,
  theme?: THEME,
}

export const Button: FC<ButtonProps> = ({
  onClick,
  disabled=false,
  className='',
  theme=THEME.BASIC,
  children,
}) => (
  <button
      className={classNames(styles.button, className, {
        [styles.basic]: theme === THEME.BASIC,
        [styles.eightBit]: theme === THEME.EIGHT_BIT,
      })}
      onClick={onClick}
      disabled={disabled}
  >
    { children }
  </button>
);

type IconButtonProps = ButtonProps & {
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

import classNames from 'classnames';
import React from 'react';
import type { FC } from 'react';
import { Theme, useThemeContext } from '../../util/theming/theme_provider';
import { Icon, IconDefinition } from '../icons/icon/icon';
import styles from './button.module.css';

type ButtonProps = {
  onClick: () => void,
  disabled?: boolean,
  className?: string,
}

export const Button: FC<ButtonProps> = ({
  onClick,
  disabled=false,
  className='',
  children,
}) => {
  const { theme } = useThemeContext();
  return (
    <button
        className={classNames(styles.button, className, {
          [styles.eightBit]: theme === Theme.EIGHT_BIT,
        })}
        onClick={onClick}
        disabled={disabled}
    >
      { children }
    </button>
  );
};

type IconButtonProps = ButtonProps & {
  iconDefinition: IconDefinition,
  overrideTheming?: boolean,
}

export const IconButton = ({
  iconDefinition,
  className,
  overrideTheming=false,
  ...buttonProps
}: IconButtonProps) => (
  <button
      {...buttonProps}
      className={classNames(styles.iconButton, className)}
  >
    <Icon
        {...iconDefinition}
        overrideTheming={overrideTheming}
    />
  </button>
);

import classNames from 'classnames';
import React from 'react';
import { THEME, useThemeContext } from '../../util/theming/theme_provider';
import { Text } from './../text/text';
import styles from './capsule.module.css';

type CapsuleProps = {
  className?: string,
}

export const Capsule: React.FC<CapsuleProps> = ({
  className,
  children,
}) => {
  const { theme } = useThemeContext();
  return (
    <div
        className={classNames(styles.capsule, className, {
          [styles.eightBit]: theme === THEME.EIGHT_BIT,
        })}
    >
      <Text.ExtraSmall>
        { children }
      </Text.ExtraSmall>
    </div>
  );
}

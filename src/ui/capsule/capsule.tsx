import classNames from 'classnames';
import React from 'react';
import { THEME } from '../../util/theming/theme_provider';
import { Text } from './../text/text';
import styles from './capsule.module.css';

type CapsuleProps = {
  className?: string,
  theme?: THEME,
}

export const Capsule: React.FC<CapsuleProps> = ({
  className,
  theme=THEME.BASIC,
  children,
}) => (
  <div
      className={classNames(styles.capsule, className, {
        [styles.basic]: theme === THEME.BASIC,
        [styles.eightBit]: theme === THEME.EIGHT_BIT,
      })}
  >
    <Text.ExtraSmall>
      { children }
    </Text.ExtraSmall>
  </div>
);

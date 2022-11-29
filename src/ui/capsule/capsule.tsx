import classNames from 'classnames';
import React from 'react';
import type { FC } from 'react';
import { Appearance, Theme, useThemeContext } from '../../util/theming/theme_provider';
import { Text } from './../text/text';
import styles from './capsule.module.css';

type CapsuleProps = {
  className?: string,
  appearanceOverride?: Appearance,
}

export const Capsule: FC<CapsuleProps> = ({
  className,
  appearanceOverride,
  children,
}) => {
  const { theme } = useThemeContext();
  return (
    <div
        className={classNames(styles.capsule, className, {
          [styles.eightBit]: theme === Theme.EIGHT_BIT,
        })}
    >
      <Text.ExtraSmall
          appearanceOverride={appearanceOverride}
      >
        { children }
      </Text.ExtraSmall>
    </div>
  );
};

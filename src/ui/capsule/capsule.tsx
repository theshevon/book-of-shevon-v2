import React from 'react'
import classNames from 'classnames';

import { Text } from 'ui/text/text';

import styles from './capsule.module.css';

type CapsuleProps = {
  className?: string,
}

export const Capsule: React.FC<CapsuleProps> = ({
  className,
  children,
}) => (
  <div
      className={classNames(styles.capsule, className)}
  >
    <Text.ExtraSmall>
      {children}
    </Text.ExtraSmall>
  </div>
);

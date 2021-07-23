import React from 'react'
import classNames from 'classnames';

import styles from './capsule.module.css';

type CapsuleProps = {
  text: string,
  className?: string[],
}

export const Capsule = ({
  text,
  className = [],
}: CapsuleProps) => (
  <div
      className={classNames(styles.capsule, ...className)}
  >
    {text}
  </div>
);

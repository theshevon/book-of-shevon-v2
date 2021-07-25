import React from 'react'
import classNames from 'classnames';

import { Text } from './../text/text';
import { Capsule } from './../capsule/capsule'

import styles from './link.module.css';

export type LinkProps = {
  anchorText: string,
  url: string,
  className?: string,
}

export const Link = ({
  anchorText,
  url,
  className,
}: LinkProps) => (
  <a
      href={url}
      target='_blank'
      rel='noreferrer'
      className={classNames(styles.link, className)}
  >
    <Text.Small
        text={anchorText}
    />
  </a>
);

export const ButtonLink = (props: LinkProps) => (
  <Link
      className={styles.buttonLink}
      {...props}
  />
);

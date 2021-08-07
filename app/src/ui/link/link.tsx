import React from 'react'
import classNames from 'classnames';

import styles from './link.module.css';

export type LinkProps = {
  anchorText: string,
  url: string,
  targetSelf?: boolean,
  className?: string[],
}

export const Link = ({
  anchorText,
  url,
  targetSelf,
  className,
}: LinkProps) => (
  <a
      href={url}
      target={targetSelf ? '_self' : '_blank'}
      rel={!targetSelf ? 'noopener' : undefined}
      className={classNames(styles.link, className)}
  >
    {anchorText}
  </a>
);

export const ButtonLink = ({
  anchorText,
  url,
  className = [],
}: LinkProps) => (
  <Link
      anchorText={anchorText}
      url={url}
      className={[styles.buttonLink, ...className]}
  />
);

export const CapsuleLink = ({
  anchorText,
  url,
  className = [],
}: LinkProps) => (
  <Link
      anchorText={anchorText}
      url={url}
      className={[classNames(styles.capsuleLink, ...className)]}
  />
);

import type { IconDefinition } from '../icons/icon/icon';
import { Icon } from '../icons/icon/icon';
import classNames from 'classnames';
import React from 'react';

import styles from './link.module.css';

export type LinkProps = {
  url: string,
  targetSelf?: boolean,
  className?: string,
}

export type IconLinkProps = Omit<LinkProps, 'className'> & {
	iconDefinition: IconDefinition,
}

export const Link: React.FC<LinkProps> = ({
  url,
  targetSelf,
  className,
  children,
}) => {
  const linkAttributes = {
    target: targetSelf ? '_self' : '_blank',
    rel: !targetSelf ? 'noopener noreferrer' : undefined,
  };
  return (
    <a
        href={url}
        className={classNames(styles.link, className)}
        {...linkAttributes}
    >
      { children }
    </a>
  );
};

export const ButtonLink: React.FC<LinkProps> = ({
  url,
  className,
  children,
}) => (
  <Link
      url={url}
      className={classNames(styles.buttonLink, className)}
  >
    { children }
  </Link>
);

export const CapsuleLink: React.FC<LinkProps> = ({
  url,
  className,
  children,
}) => (
  <Link
      url={url}
      className={classNames(styles.capsuleLink, className)}
  >
    { children }
  </Link>
);

export const IconLink = ({
  iconDefinition,
  ...linkProps
}: IconLinkProps) => (
  <Link
      {...linkProps}
      className={styles.iconLink}
  >
    <Icon
        {...iconDefinition}
    />
  </Link>
);

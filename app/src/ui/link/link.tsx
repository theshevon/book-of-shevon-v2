import React from 'react'
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import styles from './link.module.css';

export type LinkProps = {
  url: string,
  targetSelf?: boolean,
  className?: string,
}

export type IconLinkProps = Omit<LinkProps, 'className'> & {
	icon: IconDefinition,	
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
  }
  return (
    <a
        href={url}
        className={classNames(styles.link, className)}
        {...linkAttributes}
    >
      {children}
    </a>
  );
}

export const ButtonLink: React.FC<LinkProps> = ({
  url,
  className,
  children,
}) => (
  <Link
      url={url}
      className={classNames(styles.buttonLink, className)}
  >
    {children}
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
    {children}
  </Link>
);

export const IconLink = ({
	icon,
  ...linkProps
}: IconLinkProps) => (
  <Link
      {...linkProps}
      className={styles.iconLink}
  >
    <FontAwesomeIcon
        icon={icon}
    />
  </Link>
);

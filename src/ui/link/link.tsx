import classNames from 'classnames';
import React, { FC } from 'react';
import { THEME } from '../../util/theming/theme_provider';
import type { IconDefinition } from '../icons/icon/icon';
import { Icon } from '../icons/icon/icon';
import styles from './link.module.css';

export type LinkProps = {
  url: string,
  targetSelf?: boolean,
  className?: string,
  theme?: THEME,
}

export type IconLinkProps = Omit<LinkProps, 'className'> & {
	iconDefinition: IconDefinition,
}

export const Link: FC<LinkProps> = ({
  url,
  targetSelf,
  className,
  theme=THEME.BASIC,
  children,
}) => {
  const linkAttributes = {
    target: targetSelf ? '_self' : '_blank',
    rel: !targetSelf ? 'noopener noreferrer' : undefined,
  };
  return (
    <a
        href={url}
        className={classNames(styles.link, className, {
          [styles.basic]: theme === THEME.BASIC,
          [styles.eightBit]: theme === THEME.EIGHT_BIT,
        })}
        {...linkAttributes}
    >
      { children }
    </a>
  );
};

export const ButtonLink: FC<LinkProps> = ({
  url,
  className,
  theme=THEME.BASIC,
  children,
}) => (
  <Link
      url={url}
      className={classNames(styles.buttonLink, className)}
      theme={theme}
  >
    { children }
  </Link>
);

export const CapsuleLink: FC<LinkProps> = ({
  url,
  className,
  theme=THEME.BASIC,
  children,
}) => (
  <Link
      url={url}
      className={classNames(styles.capsuleLink, className)}
      theme={theme}
  >
    { children }
  </Link>
);

export const IconLink = ({
  iconDefinition,
  theme=THEME.BASIC,
  ...linkProps
}: IconLinkProps) => (
  <Link
      {...linkProps}
      className={styles.iconLink}
      theme={theme}
  >
    <Icon
        {...iconDefinition}
    />
  </Link>
);

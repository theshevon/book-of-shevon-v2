import classNames from 'classnames';
import React, { FC } from 'react';
import { THEME, useThemeContext } from '../../util/theming/theme_provider';
import type { IconDefinition } from '../icons/icon/icon';
import { Icon } from '../icons/icon/icon';
import styles from './link.module.css';

export type LinkProps = {
  url: string,
  targetSelf?: boolean,
  className?: string,
}

export type IconLinkProps = Omit<LinkProps, 'className'> & {
	iconDefinition: IconDefinition,
}

export const Link: FC<LinkProps> = ({
  url,
  targetSelf,
  className,
  children,
}) => {
  const { theme } = useThemeContext();
  const linkAttributes = {
    target: targetSelf ? '_self' : '_blank',
    rel: !targetSelf ? 'noopener noreferrer' : undefined,
  };
  return (
    <a
        href={url}
        className={classNames(styles.link, className, {
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
  children,
}) => (
  <Link
      url={url}
      className={classNames(styles.buttonLink, className)}
  >
    { children }
  </Link>
);

export const CapsuleLink: FC<LinkProps> = ({
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

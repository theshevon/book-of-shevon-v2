import classNames from 'classnames';
import React, { FC } from 'react';
import { Appearance, Theme, useThemeContext } from '../../util/theming/theme_provider';
import type { IconDefinition } from '../icons/icon/icon';
import { Icon } from '../icons/icon/icon';
import styles from './link.module.css';

export type LinkProps = {
  url: string,
  targetSelf?: boolean,
  className?: string,
  appearanceOverride?: Appearance,
}

export type IconLinkProps = Omit<LinkProps, 'className'> & {
	iconDefinition: IconDefinition,
}

export const Link: FC<LinkProps> = ({
  url,
  targetSelf,
  className,
  appearanceOverride,
  children,
}) => {
  const { theme, appearance } = useThemeContext();
  const linkAttributes = {
    target: targetSelf ? '_self' : '_blank',
    rel: !targetSelf ? 'noopener noreferrer' : undefined,
  };
  const _appearance = appearanceOverride ? appearanceOverride : appearance;
  return (
    <a
        href={url}
        className={classNames(styles.link, className, {
          [styles.eightBit]: theme === Theme.EIGHT_BIT,
          [styles.dark]: _appearance === Appearance.DARK,
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
  appearanceOverride,
  children,
}) => (
  <Link
      url={url}
      targetSelf={true}
      className={classNames(styles.buttonLink, className)}
      appearanceOverride={appearanceOverride}
  >
    { children }
  </Link>
);

export const CapsuleLink: FC<LinkProps> = ({
  url,
  className,
  appearanceOverride,
  children,
}) => (
  <Link
      url={url}
      className={classNames(styles.capsuleLink, className)}
      appearanceOverride={appearanceOverride}
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

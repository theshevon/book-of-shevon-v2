import classNames from 'classnames';
import React from 'react';
import { Theme, useThemeContext } from '../../../util/theming/theme_provider';
import { Text } from './../../../ui/text/text';
import styles from './profile.module.css';

export type ProfileProps = {
  name: string,
  imgSrc: string,
  imgAltTag: string,
}

export const Profile = ({
  name,
  imgSrc,
  imgAltTag,
}: ProfileProps) => {
  const { theme } = useThemeContext();
  return (
    <div
        className={classNames(styles.profile, {
          [styles.eightBit]: theme === Theme.EIGHT_BIT,
        })}
    >
      <img
          className={styles.picture}
          src={imgSrc}
          alt={imgAltTag}
      />
      <Text.LargeTitle
          alignment='centre'
          fontWeight='bold'
          textCase='uppercase'
          keepDefaultMargins={true}
          className={styles.name}
      >
        { name }
      </Text.LargeTitle>
      <div
          className={styles.underline}
      >
      </div>
    </div>
  );
};

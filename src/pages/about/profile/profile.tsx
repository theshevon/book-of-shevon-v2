import classNames from 'classnames';
import React from 'react';
import { useLocaleContext } from '../../../util/localisation/locale_provider';
import { Appearance, Theme, useThemeContext } from '../../../util/theming/theme_provider';
import { Text } from './../../../ui/text/text';
import profilePic from './profile.jpeg';
import { ProfileMessages as Messages } from './profile.messages';
import styles from './profile.module.css';

export const Profile = () => {
  const { locale } = useLocaleContext();
  const { theme, appearance } = useThemeContext();
  return (
    <div
        className={classNames(styles.profile, {
          [styles.eightBit]: theme === Theme.EIGHT_BIT,
          [styles.dark]: appearance === Appearance.DARK,
        })}
    >
      <img
          className={styles.picture}
          src={profilePic}
          alt={Messages.AltTag[locale]}
      />
      <Text.LargeTitle
          alignment='centre'
          fontWeight='bold'
          textCase='uppercase'
          keepDefaultMargins={true}
          className={styles.name}
      >
        { Messages.ShevonMendis[locale] }
      </Text.LargeTitle>
      <div
          className={styles.underline}
      >
      </div>
    </div>
  );
};

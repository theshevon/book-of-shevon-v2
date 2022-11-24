import classNames from 'classnames';
import React, { useEffect } from 'react';
import { PageContainer } from '../../ui/page_container/page_container';
import { Text } from '../../ui/text/text';
import { useLocaleContext } from '../../util/localisation/locale_provider';
import { Appearance, Theme, useThemeContext } from '../../util/theming/theme_provider';
import { updateDocumentHeader } from '../../util/title_manager';
import { AboutMessages as Messages } from './about.messages';
import styles from './about.module.css';
import { FriendshipsPhoto } from './friendships_photo/friendships_photo';
import profilePic from './profile.jpeg';
import { Resume } from './resume/resume';

export const About = () => {

  const { locale } = useLocaleContext();

  useEffect(() => {
    updateDocumentHeader(Messages.pageTitle[locale], { type: 'emoji', src: '👀' });
  }, [locale]);

  const { theme, appearance } = useThemeContext();

  const Content = () => (
    <div
        className={classNames(styles.aboutPage, {
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
      >
        hey, i&apos;m shevon 👋🏽
      </Text.LargeTitle>
      <Text.UltraSmall
          alignment='centre'
      >
        (don&apos;t call me shev; that&apos;s for close friends only 😤)
      </Text.UltraSmall>
      <FriendshipsPhoto/>
      <Text.Small
          alignment='centre'
          keepDefaultMargins={true}
      >
        and if you wanted to know what i&apos;ve been up to professionally, here&apos;s my (hopefully up-to-date) resume:
      </Text.Small>
      <Resume/>
    </div>
  );

  return (
    <PageContainer
        Content={Content}
    />
  );
};

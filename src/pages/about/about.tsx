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
import profileImgSrc from './profile.jpeg';
import { Resume } from './resume/resume';

export const About = () => {

  const Content = () => (
    <ContentContainer>
      <ProfilePicture/>
      <PersonableContent/>
      <HorizontalDivider/>
      <ResumePlug/>
      <Resume/>
    </ContentContainer>
  );

  return (
    <PageContainer
        Content={Content}
    />
  );
};

const ContentContainer: React.FC = ({ children }) => {
  const { locale } = useLocaleContext();

  useEffect(() => {
    updateDocumentHeader(Messages.pageTitle[locale], { type: 'emoji', src: '👀' });
  }, [locale]);

  const { theme, appearance } = useThemeContext();

  return (
    <div
        className={classNames(styles.aboutPage, {
          [styles.eightBit]: theme === Theme.EIGHT_BIT,
          [styles.dark]: appearance === Appearance.DARK,
        })}
    >
      { children }
    </div>
  );
};

const ProfilePicture = () => {
  const { locale } = useLocaleContext();
  return (
    <img
        className={styles.picture}
        src={profileImgSrc}
        alt={Messages.altTag[locale]}
    />
  );
};

const PersonableContent = () => {
  const { locale } = useLocaleContext();
  return (
    <div
        className={styles.personableContent}
    >
      <Text.LargeTitle
          alignment='centre'
          keepDefaultMargins={true}
      >
        { Messages.hello[locale] }
      </Text.LargeTitle>
      <Text.Small>
        { Messages.welcome[locale] }
      </Text.Small>
      <Text.Small
          keepDefaultMargins={true}
      >
        { Messages.rundown[locale] }
      </Text.Small>
      <InterestsList/>
      <Text.Small>
        { Messages.friendDedication[locale] }
      </Text.Small>
      <Text.UltraSmall
          alignment='centre'
          className={styles.hint}
      >
        { Messages.hint[locale] }
      </Text.UltraSmall>
      <FriendshipsPhoto/>
      <Text.Small
          alignment='centre'
          keepDefaultMargins={true}
      >
        { Messages.thanks[locale] }
      </Text.Small>
    </div>);
};

const InterestsList = () => {
  const { locale } = useLocaleContext();
  const { appearance } = useThemeContext();
  return (
    <ul
        className={classNames(styles.interestsList, {
          [styles.dark]: appearance === Appearance.DARK,
        })}
    >
      <li>
        <Text.Small>
          { Messages.singing[locale] }
        </Text.Small>
      </li>
      <li>
        <Text.Small>
          { Messages.drawing[locale] }
        </Text.Small>
      </li>
      <li>
        <Text.Small>
          { Messages.basketball[locale] }
        </Text.Small>
      </li>
      <li>
        <Text.Small>
          { Messages.workingOut[locale] }
        </Text.Small>
      </li>
      <li>
        <Text.Small>
          { Messages.makingDumbJokes[locale] }
        </Text.Small>
      </li>
    </ul>
  );
};

const HorizontalDivider = () => {
  const { appearance } = useThemeContext();
  return (
    <div
        className={classNames(styles.horizontalDivider, {
          [styles.dark]: appearance === Appearance.DARK,
        })}
    ></div>
  );
};

const ResumePlug = () => {
  const { locale } = useLocaleContext();
  return (
    <Text.Small
        alignment='centre'
        keepDefaultMargins={true}
        className={styles.resumePlug}
    >
      { Messages.resumePlug[locale] }
    </Text.Small>
  );
};

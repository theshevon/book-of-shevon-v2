import classNames from 'classnames';
import React, { useEffect } from 'react';
import { PageContainer } from '../../ui/page_container/page_container';
import { Text } from '../../ui/text/text';
import { useLocaleContext } from '../../util/localisation/locale_provider';
import { Appearance, Theme, useThemeContext } from '../../util/theming/theme_provider';
import { updateDocumentHeader } from '../../util/title_manager';
import { AboutMessages as Messages } from './about.messages';
import styles from './about.module.css';
import dingDingImgSrc from './dingding.png';
import { FriendshipsPhoto } from './friendships_photo/friendships_photo';
import profileImgSrc from './profile.jpeg';
import { Resume } from './resume/resume';

export const About = () => {

  const Content = () => (
    <ContentContainer>
      <ProfilePicture/>
      <PersonableContent/>
      <HorizontalDivider/>
      <Text.Small
          alignment='centre'
          keepDefaultMargins={true}
      >
        oh and if you still wanted to know what i&apos;ve been up to professionally, here&apos;s my resume (pretty much a scrape of my linkedin tbh):
      </Text.Small>
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
        alt={Messages.AltTag[locale]}
    />
  );
};

const PersonableContent = () => (
  <div
      className={styles.personableContent}
  >
    <Text.LargeTitle
        alignment='centre'
        keepDefaultMargins={true}
    >
      hey, i&apos;m shevon 👋🏽
    </Text.LargeTitle>
    <Text.Small>
      welcome to my portfolio! an earlier version of this page pretty much just listed out my resume, and after a friend pointed this out, i decided to make it more personality (and pizzazz™) to it. so let me give you a quick rundown of my life.
    </Text.Small>
    <Text.Small
        keepDefaultMargins={true}
    >
      i grew up in sri lanka and moved to australia when i was 18, where i graduated from uni and started working as a software engineer. apart from writing code (either for work or fun), i enjoy:
    </Text.Small>
    <InterestsList/>
    <Text.Small>
      and of course, making memories with people i care about, which is why this website is dedicated to some of my favourite homies (づ｡◕‿‿◕｡)づ
    </Text.Small>
    <Text.UltraSmall
        alignment='centre'
    >
      (hint: click on the pics to find out more! 😬)
    </Text.UltraSmall>
    <FriendshipsPhoto/>
    <Text.Small
        alignment='centre'
        keepDefaultMargins={true}
    >
      thanks so much for visiting my website btw! dingding and i appreciate you!
    </Text.Small>
    <img
        src={dingDingImgSrc}
        width='25px'
    ></img>
  </div>
);

const InterestsList = () => {
  const { appearance } = useThemeContext();
  return (
    <ul
        className={classNames(styles.interestsList, {
          [styles.dark]: appearance === Appearance.DARK,
        })}
    >
      <li>
        <Text.Small>
          singing 🎤
        </Text.Small>
      </li>
      <li>
        <Text.Small>
          drawing ✏️
        </Text.Small>
      </li>
      <li>
        <Text.Small>
          basketball 🏀
        </Text.Small>
      </li>
      <li>
        <Text.Small>
          working out 💪🏽
        </Text.Small>
      </li>
      <li>
        <Text.Small>
          making dumb jokes 🥦
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

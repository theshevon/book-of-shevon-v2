import classNames from 'classnames';
import React, { useEffect } from 'react';
import { PageContainer } from '../../ui/page_container/page_container';
import { useLocaleContext } from '../../util/localisation/locale_provider';
import { Appearance, Theme, useThemeContext } from '../../util/theming/theme_provider';
import { updateDocumentHeader } from '../../util/title_manager';
import { IconLink } from './../../ui/link/link';
import { Text } from './../../ui/text/text';
import { HomeMessages as Messages } from './home.messages';
import styles from './home.module.css';
import { Links } from './links';

export const Home = () => {

  const { locale } = useLocaleContext();

  useEffect(() => {
    updateDocumentHeader(Messages.bookOfShevon[locale], { type: 'emoji', src: '🤠' });
  }, [locale]);

  const { theme, appearance } = useThemeContext();

  const Content = () => (
    <div
        className={classNames(styles.siteTitleContainer, {
          [styles.eightBit]: theme === Theme.EIGHT_BIT,
          [styles.dark]: appearance === Appearance.DARK,
        })}
    >
      <Text.LargeTitle
          alignment='centre'
          className={styles.siteTitle}
      >
        { Messages.bookOfShevon[locale] }
      </Text.LargeTitle>
      <div
          className={styles.links}
      >
        { Links.map((link, index) =>(
          <IconLink
              key={index}
              {...link}
          />
        )) }
      </div>
    </div>
  );

  return (
    <PageContainer
        Content={Content}
    />
  );
};

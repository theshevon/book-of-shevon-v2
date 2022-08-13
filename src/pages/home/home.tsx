import classNames from 'classnames';
import React, { useEffect } from 'react';
import { Theme, useThemeContext } from '../../util/theming/theme_provider';
import { updateDocumentHeader } from '../../util/title_manager';
import { IconLink } from './../../ui/link/link';
import { Text } from './../../ui/text/text';
import { HomeMessages as Messages } from './home.messages';
import styles from './home.module.css';
import { Links } from './links';

export const Home = () => {

  useEffect(() => {
    updateDocumentHeader(Messages.bookOfShevon(), { type: 'emoji', src: '🤠' });
  }, []);

  const { theme } = useThemeContext();

  return (
    <div
        className={classNames(styles.siteTitleContainer, {
          [styles.eightBit]: theme === Theme.EIGHT_BIT,
        })}
    >
      <Text.LargeTitle
          alignment='center'
          className={styles.siteTitle}
      >
        { Messages.bookOfShevon() }
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
};

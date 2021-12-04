import React, { useEffect } from 'react';
import { updateDocumentHeader } from '../../util/title_manager';
import { IconLink } from './../../ui/link/link';
import { Text } from './../../ui/text/text';
import { HomeMessages as Messages } from './home.messages';
import styles from './home.module.css';
import { Links } from './links';

export const Home = () => {

  useEffect(() => {
    updateDocumentHeader(Messages.pageTitle());
  }, []);

  return (
    <div
        className={styles.siteTitleContainer}
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

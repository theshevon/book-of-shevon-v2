import React, { useEffect } from 'react';

import { Text } from '../../ui/text/text';
import { updateDocumentHeader } from '../../util/title_manager';

import { CreativeMessages as Messages } from './creative.messages';

import styles from './creative.module.css';

export const Creative = () => {

  useEffect(() => {
    updateDocumentHeader(Messages.title());
  }, []);

  return (
    <Text.LargeTitle
        alignment='center'
        className={styles.title}
    >
      { Messages.title() }
    </Text.LargeTitle>
  );
};

import React, { useEffect } from 'react';

import { Text } from '../../ui/text/text';
import { updateDocumentHeader } from '../../util/title_manager';

import { CreativeMessages as Messages } from './creative.messages';

import styles from './creative.module.css';
import { CreativeCategory } from './creative_category/creative_category';
import { CreativeCategories } from './data/creative_categories'; 

export const Creative = () => {

  useEffect(() => {
    updateDocumentHeader(Messages.title());
  }, []);

  return (
    <div
        className={styles.creativePage}
    >
      <div
          className={styles.header}
      >
        <Text.LargeTitle
            alignment='center'
            className={styles.title}
        >
          { Messages.title() }
        </Text.LargeTitle>
      </div>
      <div
          className={styles.content}
      >
        { CreativeCategories.map(category => (
          <CreativeCategory
              key={category.name}
              {...category}
          />
        )) }
      </div>
    </div>
  );
};

import React, { useEffect } from 'react';

import { updateDocumentHeader } from '../../util/title_manager';

import { CreativeMessages as Messages } from './creative.messages';

import styles from './creative.module.css';

import { CreativeHeader } from './creative_header/creative_header';
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
      <CreativeHeader/>
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
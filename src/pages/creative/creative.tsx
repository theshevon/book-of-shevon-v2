import React, { useEffect } from 'react';
import { PageContainer } from '../../ui/page_container/page_container';
import { updateDocumentHeader } from '../../util/title_manager';
import { CreativeMessages as Messages } from './creative.messages';
import { CreativeCategory } from './creative_category/creative_category';
import { CreativeCategories } from './data/creative_categories';

export const Creative = () => {

  useEffect(() => {
    updateDocumentHeader(Messages.title(), { type: 'emoji', src: '🌊' });
  }, []);

  const Content = () => (
    <>
      { CreativeCategories.map(category => (
        <CreativeCategory
            key={category.name}
            {...category}
        />
      )) }
    </>
  );

  return (
    <PageContainer
        Content={Content}
    />
  );
};

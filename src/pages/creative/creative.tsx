import React, { useEffect } from 'react';
import { PageContainer } from '../../ui/page_container/page_container';
import { useLocaleContext } from '../../util/localisation/locale_provider';
import { updateDocumentHeader } from '../../util/title_manager';
import { CreativeMessages as Messages } from './creative.messages';
import { CreativeCategory } from './creative_category/creative_category';
import { CreativeCategories } from './data/creative_categories';

export const Creative = () => {

  const { locale } = useLocaleContext();

  useEffect(() => {
    updateDocumentHeader(Messages.title[locale], { type: 'emoji', src: '🌊' });
  }, [locale]);

  const Content = () => (
    <>
      { CreativeCategories.map(category => (
        <CreativeCategory
            key={category.name(locale)}
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

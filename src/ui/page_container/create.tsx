import React from 'react';
import { PageContainer as PageContainerImpl } from './page_container';

export const createPageContainer = (Nav: () => JSX.Element) => {

  const PageContainer = ({
    Content,
    withoutTopPaddingForContent,
  }: {
    Content: () => JSX.Element,
    withoutTopPaddingForContent?: boolean,
  }) => (
    <PageContainerImpl
        Nav={Nav}
        Content={Content}
        withoutTopPaddingForContent={withoutTopPaddingForContent}
    />
  );

  return PageContainer;
};

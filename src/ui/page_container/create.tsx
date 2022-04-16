import React from 'react';
import { PageContainer as PageContainerImpl } from './page_container';

export const createPageContainer = (Nav: () => JSX.Element) => {

  const PageContainer = ({
    Content,
    pageBackgroundStyles,
    withoutTopPaddingForContent,
  }: {
    Content: () => JSX.Element,
    pageBackgroundStyles?: string,
    withoutTopPaddingForContent?: boolean,
  }) => (
    <PageContainerImpl
        Nav={Nav}
        Content={Content}
        pageBackgroundStyles={pageBackgroundStyles}
        withoutTopPaddingForContent={withoutTopPaddingForContent}
    />
  );

  return PageContainer;
};

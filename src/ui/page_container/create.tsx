import React from 'react';
import { PageContainer as PageContainerImpl } from './page_container';

export const createPageContainer = (Nav: () => JSX.Element) => {

  const PageContainer = ({
    Content,
  }: {
    Content: () => JSX.Element,
  }) => (
    <PageContainerImpl
        Nav={Nav}
        Content={Content}
    />
  );

  return PageContainer;
};

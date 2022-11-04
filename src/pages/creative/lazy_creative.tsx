import React from 'react';
import { PagePlaceholder } from '../../ui/preload/page_placeholder/page_placeholder';

export const CreativePage = () => {
  const LazyCreative = React.lazy(async () => {
    const { Creative } = await import('./creative');
    return {
      default: Creative,
    };
  });
  return (
    <React.Suspense fallback={<PagePlaceholder/>}>
      <LazyCreative/>
    </React.Suspense>
  );
};

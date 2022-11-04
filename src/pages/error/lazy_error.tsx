import React from 'react';
import { PagePlaceholder } from '../../ui/preload/page_placeholder/page_placeholder';

export const ErrorPage = () => {
  const LazyError = React.lazy(async () => {
    const { Error } = await import('./error');
    return {
      default: Error,
    };
  });
  return (
    <React.Suspense fallback={<PagePlaceholder/>}>
      <LazyError/>
    </React.Suspense>
  );
};

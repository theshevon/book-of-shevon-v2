import React from 'react';
import { PagePlaceholder } from '../../ui/preload/page_placeholder/page_placeholder';

export const AboutPage = () => {
  const LazyAbout = React.lazy(async () => {
    const { About } = await import('./about');
    return {
      default: About,
    };
  });
  return (
    <React.Suspense fallback={<PagePlaceholder/>}>
      <LazyAbout/>
    </React.Suspense>
  );
};

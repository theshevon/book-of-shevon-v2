import React from 'react';
import { PagePlaceholder } from '../../ui/preload/page_placeholder/page_placeholder';

export const BlogPage = () => {
  const LazyBlog = React.lazy(async () => {
    const { Blog } = await import('./blog');
    return {
      default: Blog,
    };
  });
  return (
    <React.Suspense fallback={<PagePlaceholder/>}>
      <LazyBlog/>
    </React.Suspense>
  );
};

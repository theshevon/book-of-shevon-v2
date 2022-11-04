import React from 'react';

export const BlogPage = () => {
  const LazyBlog = React.lazy(async () => {
    const { Blog } = await import('./blog');
    return {
      default: Blog,
    };
  });
  return (
    <React.Suspense fallback={null}>
      <LazyBlog/>
    </React.Suspense>
  );
};

import React from 'react';

export const AboutPage = () => {
  const LazyAbout = React.lazy(async () => {
    const { About } = await import('./about');
    return {
      default: About,
    };
  });
  return (
    <React.Suspense fallback={null}>
      <LazyAbout/>
    </React.Suspense>
  );
};

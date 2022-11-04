import React from 'react';

export const CreativePage = () => {
  const LazyCreative = React.lazy(async () => {
    const { Creative } = await import('./creative');
    return {
      default: Creative,
    };
  });
  return (
    <React.Suspense fallback={null}>
      <LazyCreative/>
    </React.Suspense>
  );
};

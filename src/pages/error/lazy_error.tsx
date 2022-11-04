import React from 'react';

export const ErrorPage = () => {
  const LazyError = React.lazy(async () => {
    const { Error } = await import('./error');
    return {
      default: Error,
    };
  });
  return (
    <React.Suspense fallback={null}>
      <LazyError/>
    </React.Suspense>
  );
};

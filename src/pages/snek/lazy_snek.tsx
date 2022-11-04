import React from 'react';

export const SnekPage = () => {
  const LazySnek = React.lazy(async () => {
    const { Snek } = await import('./snek');
    return {
      default: Snek,
    };
  });
  return (
    <React.Suspense fallback={null}>
      <LazySnek/>
    </React.Suspense>
  );
};

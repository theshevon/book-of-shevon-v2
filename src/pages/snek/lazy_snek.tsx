import React from 'react';
import { PagePlaceholder } from '../../ui/preload/page_placeholder/page_placeholder';

export const SnekPage = () => {
  const LazySnek = React.lazy(async () => {
    const { Snek } = await import('./snek');
    return {
      default: Snek,
    };
  });
  return (
    <React.Suspense fallback={<PagePlaceholder/>}>
      <LazySnek/>
    </React.Suspense>
  );
};

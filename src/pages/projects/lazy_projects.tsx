import React from 'react';
import { PagePlaceholder } from '../../ui/preload/page_placeholder/page_placeholder';

export const ProjectsPage = () => {
  const LazyProjects = React.lazy(async () => {
    const { Projects } = await import('./projects');
    return {
      default: Projects,
    };
  });
  return (
    <React.Suspense fallback={<PagePlaceholder/>}>
      <LazyProjects/>
    </React.Suspense>
  );
};

import React from 'react';

export const ProjectsPage = () => {
  const LazyProjects = React.lazy(async () => {
    const { Projects } = await import('./projects');
    return {
      default: Projects,
    };
  });
  return (
    <React.Suspense fallback={null}>
      <LazyProjects/>
    </React.Suspense>
  );
};

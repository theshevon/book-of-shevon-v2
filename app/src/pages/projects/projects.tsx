import React from 'react';

import { Text } from './../../ui/text/text';

import { Projects as TechProjects } from './info/projects';
import { Project } from './project/project';

import styles from './projects.module.css';

export const Projects = () => (
  <div
    className={styles.projectsPage}
  >
    <div
      className={styles.pageTitleContainer}
    >
      <Text.LargeTitle
          fontWeight='bold'
          className={styles.pageTitle}
      >
        {/* TODO: replace with a message */}
        {'ls projects'}
      </Text.LargeTitle>
    </div>
    <div
        className={styles.projects}
    >
      {TechProjects.map(project => (
        <Project
          {...project}
        />
      ))}
    </div>
  </div>
);

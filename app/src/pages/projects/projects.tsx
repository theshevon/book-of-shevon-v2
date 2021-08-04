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
      className={styles.pageTitle}
    >
      <Text.ExtraLarge
          text='ls projects'
          fontWeight='bold'
      />
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

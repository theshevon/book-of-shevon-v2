import React from 'react';

import { Text } from './../../ui/text/text';

import { Projects as TechProjects } from './info/projects';
import { Project } from './project/project';

import styles from './projects.module.css';

export const Projects = () => (
  <div>
    <Text.Large
        text='>>> ls projects'
    />
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

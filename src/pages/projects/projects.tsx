import React from 'react';

import { Text } from './../../ui/text/text';
import { useDocumentHeader } from './../../util/hooks';

import { Projects as TechProjects } from './info/projects';
import { Project } from './project/project';

import { ProjectsMessages as Messages } from './projects.messages';

import styles from './projects.module.css';

export const Projects = () => {

  useDocumentHeader(Messages.pageTitle());

  return (
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
          { 'ls ' + Messages.pageTitle() }
        </Text.LargeTitle>
      </div>
      <div
          className={styles.projects}
      >
        { TechProjects.map((project, index) => (
          <Project
              key={index}
              {...project}
          />
        )) }
      </div>
    </div>
  );
};

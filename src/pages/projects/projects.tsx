import React, { useEffect } from 'react';

import { updateDocumentHeader } from '../../util/title_manager';
import { Text } from './../../ui/text/text';

import { Projects as TechProjects } from './data/projects';
import { Project } from './project/project';

import { ProjectsMessages as Messages } from './projects.messages';

import styles from './projects.module.css';

export const Projects = () => {

  useEffect(() => {
    updateDocumentHeader(Messages.pageTitle());
  }, []);

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

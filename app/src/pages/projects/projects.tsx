import React from 'react';

import { useDocumentHeader } from './../../util/hooks';
import { Text } from './../../ui/text/text';
import { Nav } from './../../ui/nav/nav';
import { Routes as routes } from './../../routes/routes';

import { Projects as TechProjects } from './info/projects';
import { Project } from './project/project';

import { ProjectsMessages as Messages } from './projects.messages';

import styles from './projects.module.css';

export const Projects = () => {

  useDocumentHeader(Messages.pageTitle());

  return (
    <>
			<Nav
					routes={routes}
					activeRoute='/home'
			/>
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
            {'ls ' + Messages.pageTitle()}
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
    </>
  );
}

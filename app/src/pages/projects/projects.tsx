import React from 'react';

import { useDocumentHeader } from './../../util/hooks';
import { Text } from './../../ui/text/text';
import { PageContainer } from './../../ui/page_container/page_container';

import { Projects as TechProjects } from './info/projects';
import { Project } from './project/project';

import { ProjectsMessages as Messages } from './projects.messages';

import styles from './projects.module.css';

export const Projects = () => {

  useDocumentHeader(Messages.pageTitle());

  const Content = () => (
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
  );

  return (
		<PageContainer
				Content={Content}
		/>
	);
}

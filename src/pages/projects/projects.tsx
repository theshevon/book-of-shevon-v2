import classNames from 'classnames';
import React, { useEffect } from 'react';
import { PageContainer } from '../../ui/page_container/page_container';
import { useLocaleContext } from '../../util/localisation/locale_provider';
import { Appearance, Theme, useThemeContext } from '../../util/theming/theme_provider';
import { updateDocumentHeader } from '../../util/title_manager';
import { Projects as TechProjects } from './data/projects';
import { Project } from './project/project';
import { ProjectsMessages as Messages } from './projects.messages';
import styles from './projects.module.css';

export const Projects = () => {

  const { locale } = useLocaleContext();

  useEffect(() => {
    updateDocumentHeader(Messages.pageTitle[locale], { type: 'emoji', src: '🐝' });
  }, [locale]);

  const { theme, appearance } = useThemeContext();

  const Content = () => (
    <div
        className={classNames(styles.projectsPage, {
          [styles.eightBit]: theme === Theme.EIGHT_BIT,
        })}
    >
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

  return (
    <PageContainer
        Content={Content}
        pageBackgroundStyles={classNames(styles.pageBackground, {
          [styles.eightBit]: theme === Theme.EIGHT_BIT,
          [styles.dark]: appearance === Appearance.DARK,
        })}
    />
  );
};

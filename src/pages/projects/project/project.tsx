import classNames from 'classnames';
import React from 'react';
import { Theme, THEMES, useThemeContext } from '../../../util/theming/theme_provider';
import { ButtonLink, CapsuleLink } from './../../../ui/link/link';
import { Text } from './../../../ui/text/text';
import { ProjectMessages as Messages } from './project.messages';
import styles from './project.module.css';
import { TechCapsule } from './tech_capsule/tech_capsule';

type Contributor = {
  name: string,
  githubUrl: string,
}

export type ProjectProps = {
  name: string,
  year: number,
  description: string,
  techStack: string[],
  otherContributors?: Contributor[],
  githubUrl: string,
}

export const Project = ({
  name,
  year,
  description,
  techStack,
  otherContributors,
  githubUrl,
}: ProjectProps) => {
  const { theme } = useThemeContext();
  return (
    <div
        className={classNames(styles.project, {
          [styles.eightBit]: theme === Theme.EIGHT_BIT,
        })}
    >
      { /* TITLE */ }
      <Text.Large
          alignment='center'
          fontWeight='bold'
          className={styles.title}
      >
        { name }
      </Text.Large>

      { /* YEAR */ }
      <Text.ExtraSmall
          alignment='center'
          className={styles.year}
      >
        { year.toString() }
      </Text.ExtraSmall>

      { /* DESCRIPTION */ }
      <Text.Small
          alignment='center'
          className={styles.description}
      >
        { description }
      </Text.Small>

      { /* TECH STACK */ }
      <div
          className={styles.techStack}
      >
        <Text.Medium
            alignment='center'
            fontWeight='bold'
        >
          { Messages.TechStack() }
        </Text.Medium>
        <TechStack
            techStack={techStack}
        />
      </div>

      { /* OTHER CONTRIBUTORS */ }
      { otherContributors &&
        <div
            className={styles.otherContributors}
        >
          <Text.Medium
              alignment='center'
              fontWeight='bold'
          >
            { Messages.OtherContributors() }
          </Text.Medium>
          <OtherContributors
              otherContributors={otherContributors}
          />
        </div>
      }

      { /* GITHUB LINK */ }
      <div
          className={styles.githubLinkContainer}
      >
        <ButtonLink
            url={githubUrl}
            className={classNames(styles.githubLink, {
              [styles.eightBit]: theme === Theme.EIGHT_BIT,
            })}
        >
          { Messages.ViewProject() }
        </ButtonLink>
      </div>

    </div>
  );
};

const TechStack = ({
  techStack,
}: {
  techStack: string[],
}) => (
  <ul
      className={styles.techList}
  >
    { techStack.map(tech => (
      <li
          key={tech}
          className={styles.listCapsule}
      >
        <TechCapsule
            tech={tech}
        />
      </li>
    )) }
  </ul>
);

const OtherContributors = ({
  otherContributors,
}: {
  otherContributors: Contributor[],
}) => (
  <ul
      className={styles.contributorsList}
  >
    { otherContributors.map(otherContributor => (
      <li
          key={otherContributor.name}
          className={styles.contributorCapsuleContainer}
      >
        <CapsuleLink
            url={otherContributor.githubUrl}
            className={styles.contributorCapsule}
        >
          { otherContributor.name }
        </CapsuleLink>
      </li>
    )) }
  </ul>
);

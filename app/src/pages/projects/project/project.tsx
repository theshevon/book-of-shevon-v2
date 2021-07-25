import React from 'react'

import { Text } from './../../../ui/text/text';
import { Link, ButtonLink } from './../../../ui/link/link';
import { Capsule } from './../../../ui/capsule/capsule';
import { ProjectMessages as Messages } from './project.messages';

import styles from './project.module.css';

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
}: ProjectProps) => (
  <div
      className={styles.project}
  >
    {/* TITLE */}
    <Text.Large
        text={name}
        alignment='center'
        fontWeight='bold'
        className={styles.title}
    />

    {/* YEAR */}
    <Text.Small
        text={year.toString()}
        alignment='center'
        className={styles.year}
    />

    {/* DESCRIPTION */}
    <Text.Small
        text={description}
        alignment='justify'
        className={styles.description}
    />

    {/* TECH STACK */}
    <div
        className={styles.techStack}
    >
      <Text.Medium
          text={Messages.TechStack() + ':'}
          alignment='center'
          fontWeight='bold'
      />
      <TechStack
          techStack={techStack}
      />
    </div>

    {/* OTHER CONTRIBUTORS */}
    {otherContributors &&
      <div
          className={styles.otherContributors}
      >
        <Text.Medium
            text={Messages.OtherContributors() + ':'}
            alignment='center'
            fontWeight='bold'
        />
        <OtherContributors
            otherContributors={otherContributors}
        />
      </div>
    }

    {/* GITHUB LINK */}
    <ButtonLink
        url={githubUrl}
        anchorText={'hi'}
        className={styles.githubLink}
    />
    
  </div>
);

const TechStack = ({
  techStack,
}: {
  techStack: string[],
}) => (
  <ul
      className={styles.techList}
  >
    {techStack.map(tech => (
      <li
          key={tech}
          className={styles.tech}
      >
        <Capsule>
          <Text.Small
            text={tech}
          />
        </Capsule>
      </li>
    ))}
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
    {otherContributors.map(otherContributor => (
      <li
          key={otherContributor.name}
          className={styles.otherContributor}
      >
        <Capsule>
          <Link
              url={otherContributor.githubUrl}
              anchorText={otherContributor.name}
          />
        </Capsule>
      </li>
    ))}
  </ul>
);

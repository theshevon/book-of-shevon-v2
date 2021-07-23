import React from 'react'

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
  otherContributors: Contributor[],
  githubUrl: string,
}

export const Project = () => (
    <div>
      
    </div>
);

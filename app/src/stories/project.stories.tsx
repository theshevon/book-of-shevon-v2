import React from 'react';
import { storiesOf } from '@storybook/react';

import { Project } from './../pages/projects/project/project';

storiesOf('Pages/Projects/Project', module)
  .add('Project', () => (
    <Project
        name='Test Project'
        year={2021}
        description={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, ipsum'}
        techStack={['react', 'mobx']}
        otherContributors={[{name:'Test Contributor', githubUrl:'#'}]}
        githubUrl='#'
    />
  ));

storiesOf('Pages/Projects/Tech', module)
  .add('Tech', () => (
    <Project
        name='Test Project'
        year={2021}
        description={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, ipsum'}
        techStack={['react', 'mobx']}
        otherContributors={[{name:'Test Contributor', githubUrl:'#'}]}
        githubUrl='#'
    />
  ));

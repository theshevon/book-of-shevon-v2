import React from 'react';
import { storiesOf } from '@storybook/react';

import { Project } from './../pages/projects/project/project';

storiesOf('pages/projects/project', module)
  .add('Default', () => (
    <Project
        name='Test Project'
        year={2021}
        description={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, ipsum'}
        techStack={['react', 'mobx']}
        otherContributors={[{name:'Test Contributor', githubUrl:'#'}]}
        githubUrl='#'
    />
  ));

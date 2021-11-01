import { storiesOf } from '@storybook/react';
import React from 'react';

import { Project } from '../project';

storiesOf('Pages/Projects/Project', module)
  .add('Project', () => (
    <Project
        name='Test Project'
        year={2021}
        description={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, ipsum'}
        techStack={['React', 'MobX']}
        otherContributors={[{ name: 'Test Contributor', githubUrl: '#' }]}
        githubUrl='#'
    />
  ));

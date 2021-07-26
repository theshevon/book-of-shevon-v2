import React from 'react';
import { storiesOf } from '@storybook/react';

import { Project } from './../pages/projects/project/project';
import { TechCapsule } from './../pages/projects/project/tech_capsule/tech_capsule';

storiesOf('Pages/Projects/Project', module)
  .add('Project', () => (
    <Project
        name='Test Project'
        year={2021}
        description={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, ipsum'}
        techStack={['React', 'MobX']}
        otherContributors={[{name:'Test Contributor', githubUrl:'#'}]}
        githubUrl='#'
    />
  ));

storiesOf('pages/projects/tech_capsule', module)
  .add('TechCapsule', () => (
    <div
        style={{display: 'flex', flexWrap: 'wrap'}}
    >
      <TechCapsule
          tech='Python'
      />
      <TechCapsule
          tech='C#'
      />
      <TechCapsule
          tech='Java'
      />
      <TechCapsule
          tech='HTML'
      />
      <TechCapsule
          tech='CSS'
      />
      <TechCapsule
          tech='Javascript'
      />
      <TechCapsule
          tech='React'
      />
      <TechCapsule
          tech='Redux'
      />
      <TechCapsule
          tech='MobX'
      />
      <TechCapsule
          tech='MongoDB'
      />
      <TechCapsule
          tech='MySql'
      />
      <TechCapsule
          tech='Git'
      />
      <TechCapsule
          tech='Firebase'
      />
      <TechCapsule
          tech='jQuery'
      />
      <TechCapsule
          tech='Node'
      />
      <TechCapsule
          tech='Android Studio'
      />
      <TechCapsule
          tech='Unity'
      />
    </div>
  ));

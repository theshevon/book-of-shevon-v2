import { storiesOf } from '@storybook/react';
import React from 'react';

import { GitHubIcon } from '../github_icon';
import { LinkedInIcon } from '../linkedin_icon';
import { MediumIcon } from '../medium_icon';
import { YouTubeIcon } from '../youtube_icon';

storiesOf('UI/Icons', module)
  .add('GitHub', () => (
    <GitHubIcon />
  ))
  .add('Medium', () => (
    <MediumIcon />
  ))
  .add('LinkedIn', () => (
    <LinkedInIcon />
  ))
  .add('YouTube', () => (
    <YouTubeIcon />
  ));

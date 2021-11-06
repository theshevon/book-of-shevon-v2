import { storiesOf } from '@storybook/react';
import React from 'react';

import { GitHubIconDefition } from '../definitions/github';
import { LinkedInIconDefition } from '../definitions/linkedin';
import { MediumIconDefition } from '../definitions/medium';
import { YouTubeIconDefition } from '../definitions/youtube';
import { Icon } from '../icon/icon';

storiesOf('UI/Icons', module)
  .add('GitHub', () => (
    <Icon
        {...GitHubIconDefition}
    />
  ))
  .add('LinkedIn', () => (
    <Icon
        {...LinkedInIconDefition}
    />
  ))
  .add('Medium', () => (
    <Icon
        {...MediumIconDefition}
    />
  ))
  .add('YouTube', () => (
    <Icon
        {...YouTubeIconDefition}
    />
  ));

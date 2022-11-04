import { storiesOf } from '@storybook/react';
import React from 'react';
import { CloseIconDefinition } from '../definitions/close';
import { GitHubIconDefinition } from '../definitions/github';
import { LeftArrowIconDefinition } from '../definitions/left_arrow';
import { LinkedInIconDefinition } from '../definitions/linkedin';
import { MediumIconDefinition } from '../definitions/medium';
import { RightArrowIconDefinition } from '../definitions/right_arrow';
import { YouTubeIconDefinition } from '../definitions/youtube';
import { Icon } from '../icon/icon';

storiesOf('UI/Icons', module)
  .add('GitHub', () => (
    <Icon
        {...GitHubIconDefinition}
    />
  ))
  .add('LinkedIn', () => (
    <Icon
        {...LinkedInIconDefinition}
    />
  ))
  .add('Medium', () => (
    <Icon
        {...MediumIconDefinition}
    />
  ))
  .add('YouTube', () => (
    <Icon
        {...YouTubeIconDefinition}
    />
  ))
  .add('Close', () => (
    <Icon
        {...CloseIconDefinition}
    />
  ))
  .add('Left Arrow', () => (
    <Icon
        {...LeftArrowIconDefinition}
    />
  ))
  .add('Right Arrow', () => (
    <Icon
        {...RightArrowIconDefinition}
    />
  ));

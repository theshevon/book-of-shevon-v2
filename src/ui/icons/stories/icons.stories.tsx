import { storiesOf } from '@storybook/react';
import React from 'react';
import { CloseIconDefinition } from '../definitions/close';
import { GitHubIconDefition } from '../definitions/github';
import { LeftArrowIconDefinition } from '../definitions/left_arrow';
import { LinkedInIconDefition } from '../definitions/linkedin';
import { MediumIconDefition } from '../definitions/medium';
import { RightArrowIconDefinition } from '../definitions/right_arrow';
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

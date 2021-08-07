import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { StoryGroup } from './stories';
import { Link, ButtonLink, CapsuleLink } from '../ui/link/link';

storiesOf('UI/Link', module)
  .add('Link', () => (
    <Link
        anchorText='Link'
        url='#'
    />
  ))
  .add('ButtonLink', () => (
    <ButtonLink
        anchorText='Button Link'
        url='#'
    />
  ))
  .add('CapsuleLink', () => (
    <CapsuleLink
        anchorText='Capsule Link'
        url='#'
    />
  ));

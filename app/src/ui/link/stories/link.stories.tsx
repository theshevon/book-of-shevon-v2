import React from 'react';
import { storiesOf } from '@storybook/react';

import { Link, ButtonLink, CapsuleLink } from '../link';

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

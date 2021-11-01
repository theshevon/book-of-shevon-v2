import { storiesOf } from '@storybook/react';
import React from 'react';

import { ButtonLink, CapsuleLink, Link } from '../link';

storiesOf('UI/Link', module)
  .add('Link', () => (
    <Link
        url='#'
    >
      Link
    </Link>
  ))
  .add('ButtonLink', () => (
    <ButtonLink
        url='#'
    >
      Button Link
    </ButtonLink>
  ))
  .add('CapsuleLink', () => (
    <CapsuleLink
        url='#'
    >
      Capsule Link
    </CapsuleLink>
  ));

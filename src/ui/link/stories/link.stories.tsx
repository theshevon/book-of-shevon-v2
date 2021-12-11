import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { THEMES } from '../../../util/theming/theme_provider';
import { ButtonLink, CapsuleLink, Link } from '../link';

storiesOf('UI/Link', module)
  .add('Link', () => (
    <Link
        url='#'
        theme={select('theme', THEMES, THEMES[0]).theme}
    >
      Link
    </Link>
  ))
  .add('ButtonLink', () => (
    <ButtonLink
        url='#'
        theme={select('theme', THEMES, THEMES[0]).theme}
    >
      Button Link
    </ButtonLink>
  ))
  .add('CapsuleLink', () => (
    <CapsuleLink
        url='#'
        theme={select('theme', THEMES, THEMES[0]).theme}
    >
      Capsule Link
    </CapsuleLink>
  ));

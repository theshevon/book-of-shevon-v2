import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { THEMES } from '../../../util/theming/theme_provider';
import { CloseIconDefinition } from '../../icons/definitions/close';
import { Button, IconButton } from '../button';

storiesOf('UI/Button/Button', module)
  .add('Button', () => (
    <Button
        onClick={action('clicked')}
        disabled={boolean('disabled', false)}
        theme={select('theme', THEMES, THEMES[0]).theme}
    >
      Click Me
    </Button>
  ));

storiesOf('UI/Button/IconButton', module)
  .add('IconButton', () => (
    <IconButton
        iconDefinition={CloseIconDefinition}
        onClick={action('clicked')}
        disabled={boolean('disabled', false)}
    />
  ));

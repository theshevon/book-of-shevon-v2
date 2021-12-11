import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { THEME } from '../../../util/theming/theme_provider';
import { CloseIconDefinition } from '../../icons/definitions/close';
import { Button, IconButton } from '../button';

storiesOf('UI/Button/Button', module)
  .add('Button', () => (
    <Button
        onClick={action('clicked')}
        disabled={boolean('disabled', false)}
        theme={boolean('8bit', false) ? THEME.EIGHT_BIT : THEME.BASIC}
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

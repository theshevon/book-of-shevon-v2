import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { CloseIconDefinition } from '../../icons/definitions/close';
import { Button, IconButton } from '../button';

storiesOf('UI/Button/Button', module)
  .add('Default', () => (
    <Button
        label={text('label', 'click me')}
        onClick={action('clicked')}
        disabled={boolean('disabled', false)}
    />
  ))
  .add('Disabled', () => (
    <Button
        label={'disabled'}
        onClick={action('clicked')}
        disabled={true}
    />
  ));

storiesOf('UI/Button/IconButton', module)
  .add('Default', () => (
    <IconButton
        iconDefinition={CloseIconDefinition}
        onClick={action('clicked')}
        disabled={boolean('disabled', false)}
    />
  ))
  .add('Disabled', () => (
    <IconButton
        iconDefinition={CloseIconDefinition}
        onClick={action('clicked')}
        disabled={true}
    />
  ));

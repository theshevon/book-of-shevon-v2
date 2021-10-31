import { StoryGroup } from 'util/storybook/stories';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Button } from 'ui/button/button';

storiesOf('UI/Button', module)
  .add('Default', () => (
    <Button
        label={text('label', 'click me')}
        onClick={action('clicked')}
        disabled={boolean('disabled', false)}
    />
  ))
  .add('Overview (all states)', () => (
    <StoryGroup>
      <Button
          label={'click me'}
          onClick={action('clicked')}
      />
      <Button
          label={'disabled'}
          onClick={action('clicked')}
          disabled={true}
      />
    </StoryGroup>
  ));

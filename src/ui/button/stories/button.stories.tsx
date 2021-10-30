import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { StoryGroup } from 'util/storybook/stories';
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

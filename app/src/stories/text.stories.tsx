import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { StoryGroup } from './stories';
import { Text } from '../ui/text/text';

storiesOf('UI/Text', module)
  .add('Overview', () => {
    const italicised = boolean('Italicised', false);
    return (
      <StoryGroup>
        <Text.Small
            italicised={italicised}
        >
          This is a sentence using small text
        </Text.Small>
        <Text.Medium
            italicised={italicised}
        >
          This is a sentence using medium text
        </Text.Medium>
        <Text.Large
            italicised={italicised}
        >
          This is a sentence using large text
        </Text.Large>
        <Text.ExtraLarge
            italicised={italicised}
        >
          This is a sentence using extra large text
        </Text.ExtraLarge>
      </StoryGroup>
    );
  });

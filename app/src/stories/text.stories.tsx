import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';

import { StoryGroup } from './stories';
import { Text } from '../ui/text/text';

storiesOf('UI/Text', module)
  .add('Overview', () => {
    const alignment = select('Alignment', {
      'Left': 'left',
      'Right': 'right',
      'Center': 'center',
      'Justify': 'justify',
    }, 'left');
    const fontWeight = select('Font Weight', {
      'Light': 'light',
      'Normal': 'normal',
      'Semi-Bold': 'semi-bold',
      'Bold': 'bold',
    }, 'normal');
    const italicised = boolean('Italicised', false);
    const props = {
      alignment,
      fontWeight,
      italicised,
    }
    return (
      <StoryGroup>
        <Text.Small
            text={'This is a sentence using small text'}
            {...props}
        />
        <Text.Medium
            text={'This is a sentence using medium text'}
            {...props}
        />
        <Text.Large
            text={'This is a sentence using large text'}
            {...props}
        />
        <Text.ExtraLarge
            text={'This is a sentence using extra large text'}
            {...props}
        />
      </StoryGroup>
    );
  });

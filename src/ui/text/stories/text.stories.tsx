import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { StoryGroup } from '../../storybook/stories';
import { Text } from '../text';

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
    const textCase = select('Text Case', {
      'None': 'none',
      'Lowercase': 'lowercase',
      'Uppercase': 'uppercase',
      'Captialize': 'capitalize',
    }, 'none');
    const props = {
      alignment,
      fontWeight,
      italicised,
      textCase,
    };
    return (
      <StoryGroup>
        <Text.ExtraSmall
            {...props}
        >
          This is a sentence using extra small text
        </Text.ExtraSmall>
        <Text.Small
            {...props}
        >
          This is a sentence using small text
        </Text.Small>
        <Text.Medium
            {...props}
        >
          This is a sentence using medium text
        </Text.Medium>
        <Text.Large
            {...props}
        >
          This is a sentence using large text
        </Text.Large>
        <Text.ExtraLarge
            {...props}
        >
          This is a sentence using extra large text
        </Text.ExtraLarge>
        <Text.SmallTitle
            {...props}
        >
          This is a sentence using small title text
        </Text.SmallTitle>
        <Text.MediumTitle
            {...props}
        >
          This is a sentence using medium title text
        </Text.MediumTitle>
        <Text.LargeTitle
            {...props}
        >
          This is a sentence using large title text
        </Text.LargeTitle>
      </StoryGroup>
    );
  });

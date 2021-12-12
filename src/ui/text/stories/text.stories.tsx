import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { StoryWrapper } from '../../../util/storybook/story_wrapper';
import { Text } from '../text';

const TEXT = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit';

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
    const italicized = boolean('italicized', false);
    const textCase = select('Text Case', {
      'None': 'none',
      'Lowercase': 'lowercase',
      'Uppercase': 'uppercase',
      'Capitalize': 'capitalize',
    }, 'none');
    const props = {
      alignment,
      fontWeight,
      italicized,
      textCase,
    };
    return (
      <>
        <StoryWrapper
            title='Extra Small'
        >
          <Text.ExtraSmall
              {...props}
          >
            { TEXT }
          </Text.ExtraSmall>
        </StoryWrapper>
        <StoryWrapper
            title='Small'
        >
          <Text.Small
              {...props}
          >
            { TEXT }
          </Text.Small>
        </StoryWrapper>
        <StoryWrapper
            title='Medium'
        >
          <Text.Medium
              {...props}
          >
            { TEXT }
          </Text.Medium>
        </StoryWrapper>
        <StoryWrapper
            title='large'
        >
          <Text.Large
              {...props}
          >
            { TEXT }
          </Text.Large>
        </StoryWrapper>
        <StoryWrapper
            title='Extra Large'
        >
          <Text.ExtraLarge
              {...props}
          >
            { TEXT }
          </Text.ExtraLarge>
        </StoryWrapper>
        <StoryWrapper
            title='Small Title'
        >
          <Text.SmallTitle
              {...props}
          >
            { TEXT }
          </Text.SmallTitle>
        </StoryWrapper>
        <StoryWrapper
            title='Medium Title'
        >
          <Text.MediumTitle
              {...props}
          >
            { TEXT }
          </Text.MediumTitle>
        </StoryWrapper>
        <StoryWrapper
            title='Large Title'
        >
          <Text.LargeTitle
              {...props}
          >
            { TEXT }
          </Text.LargeTitle>
        </StoryWrapper>
      </>
    );
  });

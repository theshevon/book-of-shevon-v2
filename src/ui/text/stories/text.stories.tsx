import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { StoryWrapper } from '../../../util/storybook/story_wrapper';
import { Theme } from '../../../util/theming/theme_provider';
import { Text } from '../text';

const ALIGNMENT_OPTS: Record<string, 'left' | 'right' | 'centre' | 'justify'> = {
  'Left': 'left',
  'Right': 'right',
  'Centre': 'centre',
  'Justify': 'justify',
};

const FONT_WEIGHT_OPTS: Record<string, 'light' | 'normal' | 'semi-bold' | 'bold'> = {
  'Light': 'light',
  'Normal': 'normal',
  'Semi-Bold': 'semi-bold',
  'Bold': 'bold',
};

const TEXT_CASE_OPTS: Record<string, 'none' | 'lowercase' | 'uppercase' | 'capitalize'> = {
  'None': 'none',
  'Lowercase': 'lowercase',
  'Uppercase': 'uppercase',
  'Capitalize': 'capitalize',
};

const TextStoryWrapper = ({
  testText,
  ...otherProps
} : {
  testText: string,
  alignment: 'left' | 'right' | 'centre' | 'justify',
  fontWeight: 'light' | 'normal' | 'semi-bold' | 'bold',
  textCase: 'none' | 'lowercase' | 'uppercase' | 'capitalize',
  __themeOverride?: Theme,
}) => (
  <>
    <StoryWrapper
        title='Extra Small'
    >
      <Text.ExtraSmall
          {...otherProps}
      >
        { testText }
      </Text.ExtraSmall>
    </StoryWrapper>
    <StoryWrapper
        title='Small'
    >
      <Text.Small
          {...otherProps}
      >
        { testText }
      </Text.Small>
    </StoryWrapper>
    <StoryWrapper
        title='Medium'
    >
      <Text.Medium
          {...otherProps}
      >
        { testText }
      </Text.Medium>
    </StoryWrapper>
    <StoryWrapper
        title='large'
    >
      <Text.Large
          {...otherProps}
      >
        { testText }
      </Text.Large>
    </StoryWrapper>
    <StoryWrapper
        title='Extra Large'
    >
      <Text.ExtraLarge
          {...otherProps}
      >
        { testText }
      </Text.ExtraLarge>
    </StoryWrapper>
    <StoryWrapper
        title='Small Title'
    >
      <Text.SmallTitle
          {...otherProps}
      >
        { testText }
      </Text.SmallTitle>
    </StoryWrapper>
    <StoryWrapper
        title='Medium Title'
    >
      <Text.MediumTitle
          {...otherProps}
      >
        { testText }
      </Text.MediumTitle>
    </StoryWrapper>
    <StoryWrapper
        title='Large Title'
    >
      <Text.LargeTitle
          {...otherProps}
      >
        { testText }
      </Text.LargeTitle>
    </StoryWrapper>
  </>
);

storiesOf('UI/Text', module)
  .add('Overview', () => {
    const alignment = select('Alignment', ALIGNMENT_OPTS, 'left');
    const fontWeight = select('Font Weight', FONT_WEIGHT_OPTS, 'normal');
    const italicized = boolean('italicized', false);
    const textCase = select('Text Case', TEXT_CASE_OPTS, 'none');
    const props = {
      alignment,
      fontWeight,
      italicized,
      textCase,
    };
    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magnam aut quae esse distinctio \
      consectetur maiores itaque, perferendis ex, ipsam expedita rem cumque officiis commodi eum, ipsum omnis hic \
      nihil.';

    return (
      <TextStoryWrapper
          testText={text}
          {...props}
      />
    );
  })
  .add('Comparative', () => {
    const alignment = select('Alignment', ALIGNMENT_OPTS, 'left');
    const fontWeight = select('Font Weight', FONT_WEIGHT_OPTS, 'normal');
    const italicized = boolean('italicized', false);
    const textCase = select('Text Case', TEXT_CASE_OPTS, 'none');
    const props = {
      alignment,
      fontWeight,
      italicized,
      textCase,
    };
    const text = 'garlic bread';
    return (
      <div
          style={{
            display: 'flex',
            gap: '10px',
          }}
      >
        <div
            style={{ minWidth: '200px' }}
        >
          <TextStoryWrapper
              testText={text}
              __themeOverride={Theme.BASIC}
              {...props}
          />
        </div>
        <div
            style={{ minWidth: '200px' }}
        >
          <TextStoryWrapper
              testText={text}
              __themeOverride={Theme.EIGHT_BIT}
              {...props}
          />
        </div>
      </div>
    );
  });

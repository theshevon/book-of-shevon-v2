import { storiesOf } from '@storybook/react';
import React from 'react';
import colourValues from '../colours.module.css';
import { ColourGroup, ColourGroupProps } from './colour_group';

const BASE_COLOR_GROUPS: ColourGroupProps[] = [
  {
    name: 'Grey',
    colours: [
      {
        name: 'colourGrey100',
        value: colourValues.colourGrey100,
      },
      {
        name: 'colourGrey200',
        value: colourValues.colourGrey200,
      },
      {
        name: 'colourGrey300',
        value: colourValues.colourGrey300,
      },
      {
        name: 'colourGrey400',
        value: colourValues.colourGrey400,
      },
      {
        name: 'colourGrey500',
        value: colourValues.colourGrey500,
      },
      {
        name: 'colourGreyTransparentLight',
        value: colourValues.colourGreyTransparentLight,
      },
      {
        name: 'colourGreyTransparentDark',
        value: colourValues.colourGreyTransparentDark,
      },
    ],
  },
  {
    name: 'Flat Gold',
    colours: [
      {
        name: 'colourFlatGold',
        value: colourValues.colourFlatGold,
      },
    ],
  },
  {
    name: 'Green',
    colours: [
      {
        name: 'colourGreen200',
        value: colourValues.colourGreen200,
      },
      {
        name: 'colourGreen300',
        value: colourValues.colourGreen300,
      },
      {
        name: 'colourGreen400',
        value: colourValues.colourGreen400,
      },
    ],
  },
  {
    name: 'Lime Green',
    colours: [
      {
        name: 'colourLimeGreen100',
        value: colourValues.colourLimeGreen100,
      },
      {
        name: 'colourLimeGreen500',
        value: colourValues.colourLimeGreen500,
      },
    ],
  },
];

const MARIO_COLOR_GROUP: ColourGroupProps = {
  name: 'Mario',
  colours: [
    {
      name: 'marioWhite',
      value: colourValues.marioWhite,
    },
    {
      name: 'marioYellowLight',
      value: colourValues.marioYellowLight,
    },
    {
      name: 'marioYellow',
      value: colourValues.marioYellow,
    },
    {
      name: 'marioYellowDark',
      value: colourValues.marioYellowDark,
    },
    {
      name: 'marioOrange',
      value: colourValues.marioOrange,
    },
    {
      name: 'marioBrownLight',
      value: colourValues.marioBrownLight,
    },
    {
      name: 'marioBrownDark',
      value: colourValues.marioBrownDark,
    },
  ],
};

storiesOf('UI/Colours', module)
  .add('Base Palette', () => (
    <div
        style={{
          display: 'flex',
          columnGap: '10px',
        }}
    >
      { BASE_COLOR_GROUPS.map(colourGroup => (
        <ColourGroup
            key={colourGroup.name}
            {...colourGroup}
        />
      )) }
    </div>
  ))
  .add('Mario Palette', () => (
    <div
        style={{
          display: 'flex',
          columnGap: '10px',
        }}
    >
      <ColourGroup
          {...MARIO_COLOR_GROUP}
      />
    </div>
  ));

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
        name: 'colourFlatGold800',
        value: colourValues.colourFlatGold800,
      },
    ],
  },
  {
    name: 'Green',
    colours: [
      {
        name: 'colourGreen50',
        value: colourValues.colourGreen50,
      },
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
      {
        name: 'colourGreen800',
        value: colourValues.colourGreen800,
      },
    ],
  },
  {
    name: 'Lime Green',
    colours: [
      {
        name: 'colourLimeGreen400',
        value: colourValues.colourLimeGreen400,
      },
    ],
  },
  {
    name: 'Pink',
    colours: [
      {
        name: 'colourPink500',
        value: colourValues.colourPink500,
      },
    ],
  },
  {
    name: 'Red',
    colours: [
      {
        name: 'colourRed100',
        value: colourValues.colourRed100,
      },
      {
        name: 'colourRed300',
        value: colourValues.colourRed300,
      },
    ],
  },
  {
    name: 'Lavender',
    colours: [
      {
        name: 'colourLavender500',
        value: colourValues.colourLavender500,
      },
    ],
  },
  {
    name: 'Sky Blue',
    colours: [
      {
        name: 'colourSkyBlue300',
        value: colourValues.colourSkyBlue300,
      },
    ],
  },
  {
    name: 'Royal Blue',
    colours: [
      {
        name: 'colourRoyalBlue300',
        value: colourValues.colourRoyalBlue300,
      },
      {
        name: 'colourRoyalBlue500',
        value: colourValues.colourRoyalBlue500,
      },
    ],
  },
  {
    name: 'Purple',
    colours: [
      {
        name: 'colourPurple300',
        value: colourValues.colourPurple300,
      },
      {
        name: 'colourPurple500',
        value: colourValues.colourPurple500,
      },
    ],
  },
  {
    name: 'Yellow',
    colours: [
      {
        name: 'colourYellow400',
        value: colourValues.colourYellow400,
      },
    ],
  },
  {
    name: 'Gold',
    colours: [
      {
        name: 'colourGold300',
        value: colourValues.colourGold300,
      },
    ],
  },
  {
    name: 'Teal',
    colours: [
      {
        name: 'colourTeal500',
        value: colourValues.colourTeal500,
      },
    ],
  },
];

const MARIO_COLOR_GROUP: ColourGroupProps = {
  name: 'Mario',
  colours: [
    {
      name: 'colourMarioWhite',
      value: colourValues.colourMarioWhite,
    },
    {
      name: 'colourMarioLightYellow',
      value: colourValues.colourMarioLightYellow,
    },
    {
      name: 'colourMarioYellow',
      value: colourValues.colourMarioYellow,
    },
    {
      name: 'colourMarioDarkYellow',
      value: colourValues.colourMarioDarkYellow,
    },
    {
      name: 'colourMarioOrange',
      value: colourValues.colourMarioOrange,
    },
    {
      name: 'colourMarioLightBrown',
      value: colourValues.colourMarioLightBrown,
    },
    {
      name: 'colourMarioDarkBrown',
      value: colourValues.colourMarioDarkBrown,
    },
  ],
};

const DARK_MODE_COLOUR_GROUP: ColourGroupProps = {
  name: 'Dark Mode',
  colours: [
    {
      name: 'colourDarkModeGrey50',
      value: colourValues.colourDarkModeGrey50,
    },
    {
      name: 'colourDarkModeGrey100',
      value: colourValues.colourDarkModeGrey100,
    },
    {
      name: 'colourDarkModeGrey200',
      value: colourValues.colourDarkModeGrey200,
    },
    {
      name: 'colourDarkModeGrey300',
      value: colourValues.colourDarkModeGrey300,
    },
    {
      name: 'colourDarkModeGrey400',
      value: colourValues.colourDarkModeGrey400,
    },
    {
      name: 'colourDarkModeGrey500',
      value: colourValues.colourDarkModeGrey500,
    },
    {
      name: 'colourDarkModeGrey700',
      value: colourValues.colourDarkModeGrey700,
    },
    {
      name: 'colourDarkModeGrey800',
      value: colourValues.colourDarkModeGrey800,
    },
    {
      name: 'colourDarkModeGrey900',
      value: colourValues.colourDarkModeGrey900,
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
  ))
  .add('Dark Mode Palette', () => (
    <div
        style={{
          display: 'flex',
          columnGap: '10px',
        }}
    >
      <ColourGroup
          {...DARK_MODE_COLOUR_GROUP}
      />
    </div>
  ));

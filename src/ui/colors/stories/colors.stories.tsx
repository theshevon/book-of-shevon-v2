import { storiesOf } from '@storybook/react';
import React from 'react';
import colorValues from '../colors.module.css';
import { ColorGroup, ColorGroupProps } from './color_group';

const BASE_COLOR_GROUPS: ColorGroupProps[] = [
  {
    name: 'Grey',
    colors: [
      {
        name: 'colorGrey100',
        value: colorValues.colorGrey100,
      },
      {
        name: 'colorGrey200',
        value: colorValues.colorGrey200,
      },
      {
        name: 'colorGrey300',
        value: colorValues.colorGrey300,
      },
      {
        name: 'colorGrey400',
        value: colorValues.colorGrey400,
      },
      {
        name: 'colorGrey500',
        value: colorValues.colorGrey500,
      },
      {
        name: 'colorGreyTransparentLight',
        value: colorValues.colorGreyTransparentLight,
      },
      {
        name: 'colorGreyTransparentDark',
        value: colorValues.colorGreyTransparentDark,
      },
    ],
  },
  {
    name: 'Flat Gold',
    colors: [
      {
        name: 'colorFlatGold',
        value: colorValues.colorFlatGold,
      },
    ],
  },
  {
    name: 'Green',
    colors: [
      {
        name: 'colorGreen200',
        value: colorValues.colorGreen200,
      },
      {
        name: 'colorGreen300',
        value: colorValues.colorGreen300,
      },
      {
        name: 'colorGreen400',
        value: colorValues.colorGreen400,
      },
    ],
  },
  {
    name: 'Lime Green',
    colors: [
      {
        name: 'colorLimeGreen100',
        value: colorValues.colorLimeGreen100,
      },
      {
        name: 'colorLimeGreen500',
        value: colorValues.colorLimeGreen500,
      },
    ],
  },
];

const MARIO_COLOR_GROUP: ColorGroupProps = {
  name: 'Mario',
  colors: [
    {
      name: 'marioWhite',
      value: colorValues.marioWhite,
    },
    {
      name: 'marioYellowLight',
      value: colorValues.marioYellowLight,
    },
    {
      name: 'marioYellow',
      value: colorValues.marioYellow,
    },
    {
      name: 'marioYellowDark',
      value: colorValues.marioYellowDark,
    },
    {
      name: 'marioOrange',
      value: colorValues.marioOrange,
    },
  ],
};

storiesOf('UI/Colors', module)
  .add('Base Palette', () => (
    <div
        style={{
          display: 'flex',
          columnGap: '10px',
        }}
    >
      { BASE_COLOR_GROUPS.map(colorGroup => (
        <ColorGroup
            key={colorGroup.name}
            {...colorGroup}
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
      <ColorGroup
          {...MARIO_COLOR_GROUP}
      />
    </div>
  ));

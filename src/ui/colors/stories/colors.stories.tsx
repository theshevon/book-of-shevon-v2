import { storiesOf } from '@storybook/react';
import React from 'react';
import colorValues from '../colors.module.css';
import { ColorGroup, ColorGroupProps } from './color_group';

const COLOR_GROUPS: ColorGroupProps[] = [
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
];

storiesOf('UI/Colors', module)
  .add('Colors', () => (
    <div
        style={{
          display: 'flex',
          columnGap: '10px',
        }}
    >
      { COLOR_GROUPS.map(colorGroup => (
        <ColorGroup
            key={colorGroup.name}
            {...colorGroup}
        />
      )) }
    </div>
  ));

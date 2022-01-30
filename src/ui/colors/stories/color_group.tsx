import React from 'react';
import { Text } from '../../text/text';
import styles from './color_group.module.css';

type ColorRectProps = {
	name: string,
	value: string,
};

export const ColorRect = ({
  name,
  value,
}: ColorRectProps) => (
  <div
      className={styles.colorRect}
      style={{ backgroundColor: value }}
  >
    <div
        className={styles.colorLabel}
    >
      <Text.ExtraSmall>
        { name }
      </Text.ExtraSmall>
    </div>
  </div>
);

export type ColorGroupProps = {
	name: string,
	colors: ColorRectProps[],
};

export const ColorGroup = ({
  name,
  colors,
}: ColorGroupProps) => (
  <div
      className={styles.colorGroup}
  >
    <Text.Small
        fontWeight='bold'
        textCase='uppercase'
        keepDefaultMargins={true}
    >
      { name }
    </Text.Small>
    <div
        className={styles.colors}
    >
      { colors.map((color, index) => (
        <ColorRect
            key={index}
            {...color}
        />
      )) }
    </div>
  </div>
);

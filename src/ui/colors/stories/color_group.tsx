import React from 'react';
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
      <div>
        { name }
      </div>
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
    <div>
      { name }
    </div>
    <div
        className={styles.colors}
    >
      { colors.map(color => (
        <ColorRect
            key={color.name}
            {...color}
        />
      )) }
    </div>
  </div>
);

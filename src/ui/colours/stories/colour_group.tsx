import React from 'react';
import styles from './colour_group.module.css';

type ColourRectProps = {
	name: string,
	value: string,
};

export const ColourRect = ({
  name,
  value,
}: ColourRectProps) => (
  <div
      className={styles.colourRect}
      style={{ backgroundColor: value }}
  >
    <div
        className={styles.colourLabel}
    >
      <div>
        { name }
      </div>
    </div>
  </div>
);

export type ColourGroupProps = {
	name: string,
	colours: ColourRectProps[],
};

export const ColourGroup = ({
  name,
  colours,
}: ColourGroupProps) => (
  <div
      className={styles.colourGroup}
  >
    <div>
      { name }
    </div>
    <div
        className={styles.colours}
    >
      { colours.map(colour => (
        <ColourRect
            key={colour.name}
            {...colour}
        />
      )) }
    </div>
  </div>
);

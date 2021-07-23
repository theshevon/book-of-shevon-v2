import React from 'react';

import classNames from 'classnames';

import styles from './text.module.css';

type Alignment = 'left' | 'right' | 'center' | 'justify';

type FontWeight = 'light' | 'normal' | 'semi-bold' | 'bold';

type TextProps = {
  alignment?: Alignment,
  fontWeight?: FontWeight,
  italicised?: boolean,
}

const getAligmentClassName = (alignment: Alignment) => {
  switch (alignment) {
    case 'left':
      return styles.left;
    case 'center':
      return styles.center;
    case 'right':
      return styles.right;
    case 'justify':
      return styles.justified
  }
}

const getFontWeightClassName = (fontWeight: FontWeight) => {
  switch (fontWeight) {
    case 'light':
      return styles.light;
    case 'semi-bold':
      return styles.semiBold;
    case 'bold':
      return styles.bold;
    default:
      return styles.default;
  }
}

const getClassNames = ({
  size,
  alignment = 'left',
  fontWeight = 'normal',
  italicised = false,
}: { size: string } & TextProps) => {
  return classNames(
    styles.text,
    size,
    getAligmentClassName(alignment),
    getFontWeightClassName(fontWeight),
    {[styles.italicised]: italicised},
  );
}

const Small: React.FC<TextProps> = (props) => (
  <p
      className={getClassNames({
        size: styles.small,
        ...props
      })}
  >
    {props.children}
  </p>
);

const Medium: React.FC<TextProps> = (props) => (
  <h3
      className={getClassNames({
        size: styles.medium,
        ...props
      })}
  >
    {props.children}
  </h3>
);

const Large: React.FC<TextProps> = (props) => (
  <h2
      className={getClassNames({
        size: styles.large,
        ...props
      })}
  >
    {props.children}
  </h2>
);
  
const ExtraLarge: React.FC<TextProps> = (props) => (
  <h1
      className={getClassNames({
        size: styles.extraLarge,
        ...props
      })}
  >
    {props.children}
  </h1>
);

export const Text = {
  Small,
  Medium,
  Large,
  ExtraLarge,
}

import React from 'react';

import classNames from 'classnames';

import styles from './text.module.css';

type Alignment = 'left' | 'right' | 'center' | 'justify';

type FontWeight = 'light' | 'normal' | 'semi-bold' | 'bold';

type TextProps = {
  text: string,
  alignment?: Alignment,
  fontWeight?: FontWeight,
  italicised?: boolean,
  className?: string,
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
  className,
}: { size: string } & TextProps) => {
  return classNames(
    styles.text,
    size,
    getAligmentClassName(alignment),
    getFontWeightClassName(fontWeight),
    {[styles.italicised]: italicised},
    className,
  );
}

const Small = (props: TextProps) => (
  <p
      className={getClassNames({
        size: styles.small,
        ...props
      })}
  >
    {props.text}
  </p>
);

const Medium = (props: TextProps) => (
  <h3
      className={getClassNames({
        size: styles.medium,
        ...props
      })}
  >
    {props.text}
  </h3>
);

const Large = (props: TextProps) => (
  <h2
      className={getClassNames({
        size: styles.large,
        ...props
      })}
  >
    {props.text}
  </h2>
);
  
const ExtraLarge = (props: TextProps) => (
  <h1
      className={getClassNames({
        size: styles.extraLarge,
        ...props
      })}
  >
    {props.text}
  </h1>
);

export const Text = {
  Small,
  Medium,
  Large,
  ExtraLarge,
}

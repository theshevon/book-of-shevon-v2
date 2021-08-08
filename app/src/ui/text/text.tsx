import React, { Children } from 'react';

import classNames from 'classnames';

import styles from './text.module.css';

type Tag = 'p' | 'h3' | 'h2' | 'h1';

type Size = 'xs' | 's' | 'm' | 'l' | 'xl';

type Alignment = 'left' | 'right' | 'center' | 'justify';

type FontWeight = 'light' | 'normal' | 'semi-bold' | 'bold';

type TextProps = {
  alignment?: Alignment,
  fontWeight?: FontWeight,
  italicised?: boolean,
  keepDefaultMargins?: boolean,
}

const getSizeClassName = (size: Size | undefined) => {
  switch (size) {
    case 'xs':
      return styles.xSmall;
    case 's':
      return styles.small;
    case 'm':
      return styles.medium;
    case 'l':
      return styles.large;
    case 'xl':
      return styles.xLarge;
    default:
      return size;
  }
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
  keepDefaultMargins = false,
}: { size: Size | undefined } & TextProps) => {
  return classNames(
    getSizeClassName(size),
    getAligmentClassName(alignment),
    getFontWeightClassName(fontWeight),
    {[styles.italicised]: italicised},
    {[styles.removeMargins]: !keepDefaultMargins}
  );
}

const renderText = ({
  tag,
  size,
  alignment,
  fontWeight,
  italicised,
  keepDefaultMargins,
  children,
}: {
  tag: Tag,
  size?: Size,
  children?: React.ReactNode,
} & TextProps) => React.createElement(
  tag, 
  { className: getClassNames({ size, alignment, fontWeight, italicised, keepDefaultMargins }) },
  children
);

// Ordinary text (ie. body text)
const ExtraSmall: React.FC<TextProps> = (props) => renderText({ tag: 'p', size: 'xs', ...props });
const Small: React.FC<TextProps> = (props) => renderText({ tag: 'p', size: 's', ...props });
const Medium: React.FC<TextProps> = (props) => renderText({ tag: 'p', size: 'm', ...props });
const Large: React.FC<TextProps> = (props) => renderText({ tag: 'p', size: 'l', ...props });
const ExtraLarge: React.FC<TextProps> = (props) => renderText({ tag: 'p', size: 'xs', ...props });

// Title text
const SmallTitle: React.FC<TextProps> = (props) => renderText({ tag: 'h3', ...props });
const MediumTitle: React.FC<TextProps> = (props) => renderText({ tag: 'h2', ...props });
const LargeTitle: React.FC<TextProps> = (props) => renderText({ tag: 'h1', ...props });

export const Text = {
  ExtraSmall,
  Small,
  Medium,
  Large,
  ExtraLarge,
  SmallTitle,
  MediumTitle,
  LargeTitle,
}

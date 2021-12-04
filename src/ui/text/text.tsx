import classNames from 'classnames';
import React from 'react';
import styles from './text.module.css';

type Tag = 'p' | 'h3' | 'h2' | 'h1';

type Size = 'xs' | 's' | 'm' | 'l' | 'xl';

type Alignment = 'left' | 'right' | 'center' | 'justify';

type FontWeight = 'light' | 'normal' | 'semi-bold' | 'bold';

type TextCase = 'none' | 'lowercase' | 'uppercase' | 'capitalize';

type TextProps = {
  alignment?: Alignment,
  fontWeight?: FontWeight,
  italicised?: boolean,
  keepDefaultMargins?: boolean,
  textCase?: TextCase,
  className?: string,
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
};

const getAligmentClassName = (alignment: Alignment) => {
  switch (alignment) {
    case 'left':
      return styles.left;
    case 'center':
      return styles.center;
    case 'right':
      return styles.right;
    case 'justify':
      return styles.justified;
  }
};

const getFontWeightClassName = (fontWeight: FontWeight) => {
  switch (fontWeight) {
    case 'light':
      return styles.light;
    case 'semi-bold':
      return styles.semiBold;
    case 'bold':
      return styles.bold;
    default:
      return styles.normal;
  }
};

const getTextCaseClassName = (textCase: TextCase | undefined) => {
  switch (textCase) {
    case 'lowercase':
      return styles.lowercase;
    case 'uppercase':
      return styles.uppercase;
    case 'capitalize':
      return styles.capitalize;
    default:
      return styles.none;
  }
};

const getClassNames = ({
  size,
  alignment = 'left',
  fontWeight = 'normal',
  italicised = false,
  keepDefaultMargins = false,
  textCase,
  className,
}: { size: Size | undefined } & TextProps) => {
  return classNames(
    getSizeClassName(size),
    getAligmentClassName(alignment),
    getFontWeightClassName(fontWeight),
    {
      [styles.italicised]: italicised,
      [styles.removeMargins]: !keepDefaultMargins,
    },
    getTextCaseClassName(textCase),
    className,
  );
};

const renderText = ({
  tag,
  size,
  alignment,
  fontWeight,
  italicised,
  keepDefaultMargins,
  textCase,
  className,
  children,
}: {
  tag: Tag,
  size?: Size,
  children?: React.ReactNode,
} & TextProps) => React.createElement(
  tag,
  { className: getClassNames({ size, alignment, fontWeight, italicised, keepDefaultMargins, textCase, className }) },
  children,
);

// Ordinary text (ie. body text)
const ExtraSmall: React.FC<TextProps> = (props) => renderText({ tag: 'p', size: 'xs', ...props });
const Small: React.FC<TextProps> = (props) => renderText({ tag: 'p', size: 's', ...props });
const Medium: React.FC<TextProps> = (props) => renderText({ tag: 'p', size: 'm', ...props });
const Large: React.FC<TextProps> = (props) => renderText({ tag: 'p', size: 'l', ...props });
const ExtraLarge: React.FC<TextProps> = (props) => renderText({ tag: 'p', size: 'xl', ...props });

// Title text
const SmallTitle: React.FC<TextProps> = (props) => renderText({ tag: 'h3', size: 's', ...props });
const MediumTitle: React.FC<TextProps> = (props) => renderText({ tag: 'h2', size: 'm', ...props });
const LargeTitle: React.FC<TextProps> = (props) => renderText({ tag: 'h1', size: 'l', ...props });

export const Text = {
  ExtraSmall,
  Small,
  Medium,
  Large,
  ExtraLarge,
  SmallTitle,
  MediumTitle,
  LargeTitle,
};

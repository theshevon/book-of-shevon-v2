import classNames from 'classnames';
import { ReactNode, createElement } from 'react';
import type { FC } from 'react';
import { Appearance, Theme, useThemeContext } from '../../util/theming/theme_provider';
import styles from './text.module.css';

type Tag = 'p' | 'h3' | 'h2' | 'h1';

type Size = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl';

type Alignment = 'left' | 'right' | 'centre' | 'justify';

type FontWeight = 'light' | 'normal' | 'semi-bold' | 'bold';

type TextCase = 'none' | 'lowercase' | 'uppercase' | 'capitalise';

type TextProps = {
  alignment?: Alignment,
  fontWeight?: FontWeight,
  italicized?: boolean,
  keepDefaultMargins?: boolean,
  textCase?: TextCase,
  className?: string,
  appearanceOverride?: Appearance,
  themeOverride?: Theme,
}

const getSizeClassName = (size: Size | undefined) => {
  switch (size) {
    case 'xxs':
      return styles.xxSmall;
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

const getAlignmentClassName = (alignment: Alignment) => {
  switch (alignment) {
    case 'left':
      return styles.left;
    case 'centre':
      return styles.centre;
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
    case 'capitalise':
      return styles.capitalise;
    default:
      return styles.none;
  }
};

const getThemeClassName = (theme: Theme) => {
  switch (theme) {
    case '8bit':
      return styles.eightBit;
    case 'basic':
    default:
      return styles.basic;
  }
};

const getClassNames = ({
  size,
  alignment = 'left',
  fontWeight = 'normal',
  italicized = false,
  keepDefaultMargins = false,
  textCase,
  theme,
  appearance,
  className,
}: {
  size: Size | undefined,
  theme: Theme,
  appearance: Appearance,
} & TextProps) => {
  return classNames(
    styles.text,
    getSizeClassName(size),
    getAlignmentClassName(alignment),
    getFontWeightClassName(fontWeight),
    {
      [styles.italicized]: italicized,
      [styles.removeMargins]: !keepDefaultMargins,
    },
    getTextCaseClassName(textCase),
    getThemeClassName(theme),
    {
      [styles.dark]: appearance === Appearance.DARK,
    },
    className,
  );
};

const renderText = ({
  tag,
  size,
  alignment,
  fontWeight,
  italicized,
  keepDefaultMargins,
  textCase,
  theme,
  themeOverride,
  appearance,
  appearanceOverride,
  className,
  children,
}: {
  tag: Tag,
  size?: Size,
  theme: Theme,
  appearance: Appearance,
  children?: ReactNode,
} & TextProps) => {
  if (themeOverride) {
    theme = themeOverride;
  }
  if (appearanceOverride) {
    appearance = appearanceOverride;
  }
  return createElement(
    tag,
    { className: getClassNames({ size, alignment, fontWeight, italicized, keepDefaultMargins, textCase, theme, appearance, className }) },
    children,
  );
};

// Ordinary text (ie. body text)
const UltraSmall: FC<TextProps> = (props) => renderText({ tag: 'p', size: 'xxs', ...useThemeContext(), ...props });
const ExtraSmall: FC<TextProps> = (props) => renderText({ tag: 'p', size: 'xs', ...useThemeContext(), ...props });
const Small: FC<TextProps> = (props) => renderText({ tag: 'p', size: 's', ...useThemeContext(), ...props });
const Medium: FC<TextProps> = (props) => renderText({ tag: 'p', size: 'm', ...useThemeContext(), ...props });
const Large: FC<TextProps> = (props) => renderText({ tag: 'p', size: 'l', ...useThemeContext(), ...props });
const ExtraLarge: FC<TextProps> = (props) => renderText({ tag: 'p', size: 'xl', ...useThemeContext(), ...props });

// Title text
const SmallTitle: FC<TextProps> = (props) => renderText({ tag: 'h3', size: 's', ...useThemeContext(), ...props });
const MediumTitle: FC<TextProps> = (props) => renderText({ tag: 'h2', size: 'm', ...useThemeContext(), ...props });
const LargeTitle: FC<TextProps> = (props) => renderText({ tag: 'h1', size: 'l', ...useThemeContext(), ...props });

export const Text = {
  UltraSmall,
  ExtraSmall,
  Small,
  Medium,
  Large,
  ExtraLarge,
  SmallTitle,
  MediumTitle,
  LargeTitle,
};

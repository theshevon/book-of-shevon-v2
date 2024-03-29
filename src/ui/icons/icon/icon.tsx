import React from 'react';
import { Appearance, useThemeContext } from '../../../util/theming/theme_provider';
import colours from '../../colours/colours.module.css';

type ViewBox = {
  minX: number,
  minY: number,
  width: number,
  height: number,
}

type IconProps = {
  className?: string,
  width?: number,
  height?: number,
  viewBox?: ViewBox,
  fillRule?: 'evenodd' | 'nonzero' | 'inherit',
  clipRule?: string | number,
  pathData: string,
  overrideTheming?: boolean,
}

export type IconDefinition = Omit<IconProps, 'className'>;

const DEFAULT_WIDTH = 24;
const DEFAULT_HEIGHT = 24;
const DEFAULT_VIEW_BOX = {
  minX: 0,
  minY: 0,
  width: DEFAULT_WIDTH,
  height: DEFAULT_HEIGHT,
};

export const Icon = ({
  className,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  viewBox = DEFAULT_VIEW_BOX,
  fillRule,
  clipRule,
  pathData,
  overrideTheming=false,
}: IconProps) => {
  const { appearance } = useThemeContext();
  let fill = undefined;
  if (!overrideTheming) {
    fill = appearance === Appearance.LIGHT ? 'black' : colours.colourDarkModeGrey50;
  }
  return (
    <svg
        className={className}
        fill={fill}
        xmlns='http://www.w3.org/2000/svg'
        width={width}
        height={height}
        viewBox={`${viewBox.minX} ${viewBox.minY} ${viewBox.width} ${viewBox.height}`}
        fillRule={fillRule}
        clipRule={clipRule}
    >
      <path
          d={pathData}
      />
    </svg>);
};

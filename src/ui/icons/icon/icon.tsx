import React from 'react';

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
}

export type IconDefintion = Omit<IconProps, 'className'>;

const DEFAULT_WIDTH = 24;
const DEFAULT_HEIGHT = 24;
const DEFAULT_VIEWBOX = {
  minX: 0,
  minY: 0,
  width: DEFAULT_WIDTH,
  height: DEFAULT_HEIGHT,
};

export const Icon = ({
  className,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  viewBox = DEFAULT_VIEWBOX,
  fillRule,
  clipRule,
  pathData,
}: IconProps) => (
  <svg
      className={className}
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
  </svg>
);

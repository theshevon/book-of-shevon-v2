import classNames from 'classnames';
import React, { useState } from 'react';
import { Text } from '../../../../ui/text/text';
import { Appearance, Theme, useThemeContext } from '../../../../util/theming/theme_provider';
import styles from './tooltip_wrapper.module.css';

type TooltipProps = {
  direction?: 'top' | 'bottom' | 'left' | 'right',
  label: string,
}

const TOOLTIP_DELAY_MS = 400;

export const TooltipWrapper: React.FC<TooltipProps> = ({
  direction='bottom',
  label,
  children,
}) => {

  const [active, setActive] = useState(false);
  const { theme, appearance } = useThemeContext();

  // eslint-disable-next-line no-undef
  let timeout: string | number | NodeJS.Timeout | undefined;

  const showTip = () => {
    timeout = setTimeout(() => setActive(true), TOOLTIP_DELAY_MS);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
        className={styles.tooltipWrapper}
        onMouseEnter={showTip}
        onMouseLeave={hideTip}
    >
      { children }
      { active && (
        <div className={classNames(styles.tooltip, {
          [styles.eightBit]: theme === Theme.EIGHT_BIT,
          [styles.dark]: appearance === Appearance.DARK,
          [styles.top]: direction === 'top',
          [styles.bottom]: direction === 'bottom',
          [styles.left]: direction === 'left',
          [styles.right]: direction === 'right',
        })}
        >
          <Text.UltraSmall
              alignment='centre'
              textCase='capitalise'
              className={styles.tooltipLabel}
          >
            { label }
          </Text.UltraSmall>
        </div>
      ) }
    </div>
  );
};

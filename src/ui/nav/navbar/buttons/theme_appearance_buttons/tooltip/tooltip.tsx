import classNames from 'classnames';
import React, { useState } from 'react';
import { Text } from '../../../../../text/text';
import styles from './tooltip.module.css';

const TOOLTIP_DELAY_MS = 400;

type TooltipProps = {
  direction?: 'top' | 'bottom' | 'left' | 'right',
  label: string,
}

export const TooltipWrapper: React.FC<TooltipProps> = ({
  direction='right',
  label,
  children,
}) => {

  const [active, setActive] = useState(false);

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
          [styles.top]: direction === 'top',
          [styles.bottom]: direction === 'bottom',
          [styles.left]: direction === 'left',
          [styles.right]: direction === 'right',
        })}
        >
          <Text.UltraSmall
              alignment='centre'
          >
            { label }
          </Text.UltraSmall>
        </div>
      ) }
    </div>
  );
};

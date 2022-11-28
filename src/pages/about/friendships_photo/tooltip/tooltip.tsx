import classNames from 'classnames';
import React from 'react';
import { Text } from '../../../../ui/text/text';
import { Locale, useLocaleContext } from '../../../../util/localisation/locale_provider';
import { Appearance, useThemeContext } from '../../../../util/theming/theme_provider';
import styles from './tooltip.module.css';

export const Tooltip = ({
  tooltipDirection,
  tooltipLabel,
}: {
  tooltipDirection: 'top' | 'bottom' | 'left' | 'right',
  tooltipLabel: (locale: Locale) => string,
}) => {

  const { locale } = useLocaleContext();
  const { appearance } = useThemeContext();

  return (
    <div className={classNames(styles.tooltip, {
      [styles.dark]: appearance === Appearance.DARK,
      [styles.top]: tooltipDirection === 'top',
      [styles.bottom]: tooltipDirection === 'bottom',
      [styles.left]: tooltipDirection === 'left',
      [styles.right]: tooltipDirection === 'right',
    })}
    >
      <Text.UltraSmall
          alignment='centre'
          className={styles.tooltipLabel}
      >
        { tooltipLabel(locale) }
      </Text.UltraSmall>
    </div>
  );
};

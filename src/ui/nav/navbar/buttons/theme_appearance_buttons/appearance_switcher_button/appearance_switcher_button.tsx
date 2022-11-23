import React from 'react';
import { useLocaleContext } from '../../../../../../util/localisation/locale_provider';
import { APPEARANCES, Appearance, useThemeContext } from '../../../../../../util/theming/theme_provider';
import { ThemeAppearanceButton } from '../theme_appearance_button';
import { ThemeAppearanceButtonMessages as Messages } from '../theme_appearance_buttons.messages';
import styles from './appearance_switcher_button.module.css';

export const AppearanceSwitcherButton = ({
  activeRoute,
}: {
  activeRoute: string,
}) => {
  const { locale } = useLocaleContext();
  const { appearance, setAppearance } = useThemeContext();
  return (
    <div
        className={styles.appearanceSwitcherButtonContainer}
    >
      <ThemeAppearanceButton
          onClick={() => setAppearance(appearance === Appearance.LIGHT ? Appearance.DARK : Appearance.LIGHT)}
          label={appearance === Appearance.LIGHT ? APPEARANCES[Appearance.LIGHT].icon : APPEARANCES[Appearance.DARK].icon}
          tooltipLabel={`${ Messages.Appearance[locale] }: ${ APPEARANCES[appearance].label(locale) }`}
          activeRoute={activeRoute}
      />
    </div>
  );
};

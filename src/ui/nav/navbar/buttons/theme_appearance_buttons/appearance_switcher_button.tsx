import React from 'react';
import { useLocaleContext } from '../../../../../util/localisation/locale_provider';
import { APPEARANCES, Appearance, useThemeContext } from '../../../../../util/theming/theme_provider';
import { ThemeAppearanceButton } from './theme_appearance_button';

export const AppearanceSwitcherButton = ({
  activeRoute,
}: {
  activeRoute: string,
}) => {
  const { locale } = useLocaleContext();
  const { appearance, setAppearance } = useThemeContext();
  return (
    <ThemeAppearanceButton
        onClick={() => setAppearance(appearance === Appearance.LIGHT ? Appearance.DARK : Appearance.LIGHT)}
        label={appearance === Appearance.LIGHT ? APPEARANCES[Appearance.DARK].icon : APPEARANCES[Appearance.LIGHT].icon}
        tooltipLabel={APPEARANCES[appearance].label(locale)}
        activeRoute={activeRoute}
    />
  );
};

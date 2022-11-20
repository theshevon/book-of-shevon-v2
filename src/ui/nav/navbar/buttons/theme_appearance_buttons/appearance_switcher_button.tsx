import React from 'react';
import { APPEARANCES, Appearance, useThemeContext } from '../../../../../util/theming/theme_provider';
import { ThemeAppearanceButton } from './theme_appearance_button';

export const AppearanceSwitcherButton = ({
  activeRoute,
}: {
  activeRoute: string,
}) => {
  const { appearance, setAppearance } = useThemeContext();
  return (
    <ThemeAppearanceButton
        onClick={() => setAppearance(appearance === Appearance.LIGHT ? Appearance.DARK : Appearance.LIGHT)}
        // title={APPEARANCES[appearance].label(locale)}
        label={appearance === Appearance.LIGHT ? APPEARANCES[Appearance.DARK].icon : APPEARANCES[Appearance.LIGHT].icon}
        activeRoute={activeRoute}
    />

  );
};

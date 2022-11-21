import React from 'react';
import { useLocaleContext } from '../../../../../../util/localisation/locale_provider';
import { THEMES, useThemeContext } from '../../../../../../util/theming/theme_provider';
import { ThemeAppearanceButton } from '../theme_appearance_button';
import { ThemeAppearanceButtonMessages as Messages } from '../theme_appearance_buttons.messages';
import styles from './theme_switcher_buttons.module.css';

export const ThemeSwitcherButtons = ({
  activeRoute,
}: {
  activeRoute: string,
}) => {
  const { locale } = useLocaleContext();
  const { theme, setTheme } = useThemeContext();
  return (
    <div
        className={styles.themeSwitcherButtons}
    >
      { THEMES.map(themeOption => (
        <div
            className={styles.themeSwitcherButtonContainer}
            key={themeOption.theme.toString()}
        >
          <ThemeAppearanceButton
              onClick={() => setTheme(themeOption.theme)}
              inActive={themeOption.theme !== theme}
              label={themeOption.icon}
              tooltipLabel={`${ Messages.Theme[locale] }: ${ themeOption.label(locale) }`}
              activeRoute={activeRoute}
          />
        </div>
      )) }
    </div>
  );
};

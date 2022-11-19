import classNames from 'classnames';
import React from 'react';
import { Routes } from '../../../../../routes/routes';
import { LOCALES, useLocaleContext } from '../../../../../util/localisation/locale_provider';
import {  Appearance, Theme, useThemeContext } from '../../../../../util/theming/theme_provider';
import { Text } from '../../../../text/text';
import baseStyles from '../navbar_button.module.css';
import languageSwitcherButtonStyles from './language_switcher_button.module.css';

const getLocationSpecificThemeStyles = (activeRoute: string) => {
  if (activeRoute === Routes.PROJECTS) {
    return classNames(baseStyles.projects, languageSwitcherButtonStyles.projects);
  }
};

export const LanguageSwitcherButton = ({
  activeRoute,
}: {
  activeRoute: string,
}) => {
  const { locale, setLocale } = useLocaleContext();
  const { theme, appearance } = useThemeContext();
  return (
    <div
        className={classNames(baseStyles.navbarButton, languageSwitcherButtonStyles.languageSwitcherButton, {
          [languageSwitcherButtonStyles.eightBit]: theme === Theme.EIGHT_BIT,
          [baseStyles.eightBit]: theme === Theme.EIGHT_BIT,
          [baseStyles.dark]: appearance === Appearance.DARK,
          [languageSwitcherButtonStyles.dark]: appearance === Appearance.DARK,
        }, getLocationSpecificThemeStyles(activeRoute))}
    >
      <div
          className={languageSwitcherButtonStyles.themeOptions}
      >
        { LOCALES.map(localeOption => (
          <button
              key={localeOption.id}
              title={localeOption.label}
              onClick={() => setLocale(localeOption.id)}
              className={classNames(languageSwitcherButtonStyles.themeOption, {
                [languageSwitcherButtonStyles.active]: localeOption.id === locale,
              })}
          >
            <Text.Small>
              { localeOption.label }
            </Text.Small>
          </button>
        )) }
      </div>
    </div>
  );
};

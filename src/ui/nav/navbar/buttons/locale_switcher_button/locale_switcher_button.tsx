import classNames from 'classnames';
import React from 'react';
import { Routes } from '../../../../../routes/routes';
import { LOCALES, useLocaleContext } from '../../../../../util/localisation/locale_provider';
import {  Appearance, Theme, useThemeContext } from '../../../../../util/theming/theme_provider';
import baseStyles from '../navbar_button.module.css';
import localeSwitcherButtonStyles from './locale_switcher_button.module.css';

const getLocationSpecificThemeStyles = (activeRoute: string) => {
  if (activeRoute === Routes.PROJECTS) {
    return classNames(baseStyles.projects, localeSwitcherButtonStyles.projects);
  }
};

export const LocaleSwitcherButton = ({
  activeRoute,
}: {
  activeRoute: string,
}) => {
  const { locale, setLocale } = useLocaleContext();
  const { theme, appearance } = useThemeContext();
  return (
    <div
        className={classNames(baseStyles.navbarButton, localeSwitcherButtonStyles.localeSwitcherButton, {
          [localeSwitcherButtonStyles.eightBit]: theme === Theme.EIGHT_BIT,
          [baseStyles.eightBit]: theme === Theme.EIGHT_BIT,
          [baseStyles.dark]: appearance === Appearance.DARK,
          [localeSwitcherButtonStyles.dark]: appearance === Appearance.DARK,
        }, getLocationSpecificThemeStyles(activeRoute))}
    >
      <div
          className={localeSwitcherButtonStyles.localeOptions}
      >
        { LOCALES.map(localeOption => (
          <button
              key={localeOption.id}
              title={localeOption.label}
              onClick={() => setLocale(localeOption.id)}
              className={classNames(localeSwitcherButtonStyles.localeOption, {
                [localeSwitcherButtonStyles.active]: localeOption.id === locale,
              })}
          >
            { localeOption.label }
          </button>
        )) }
      </div>
    </div>
  );
};

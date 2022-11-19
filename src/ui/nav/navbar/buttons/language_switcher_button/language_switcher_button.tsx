import classNames from 'classnames';
import React from 'react';
import { Routes } from '../../../../../routes/routes';
import {  Appearance, Theme, useThemeContext } from '../../../../../util/theming/theme_provider';
import { Text } from '../../../../text/text';
import baseStyles from '../navbar_button.module.css';
import languageSwitcherButtonStyles from './language_switcher_button.module.css';

const getLocationSpecificThemeStyles = (activeRoute: string) => {
  if (activeRoute === Routes.PROJECTS) {
    return classNames(baseStyles.projects, languageSwitcherButtonStyles.projects);
  }
};

const LANGUAGES = [
  {
    id: 'en',
    label: 'ENG',
  },
  {
    id: 'kr',
    label: 'ㅊ',
  },
];

export const LanguageSwitcherButton = ({
  activeRoute,
}: {
  activeRoute: string,
}) => {
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
        { LANGUAGES.map(langOption => (
          <button
              key={langOption.id}
              title={langOption.label}
              onClick={() => {}}
              className={classNames(languageSwitcherButtonStyles.themeOption, {
              })}
          >
            <Text.Small>
              { langOption.label }
            </Text.Small>
          </button>
        )) }
      </div>
    </div>
  );
};

import classNames from 'classnames';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Routes } from '../../../../routes/routes';
import { LOCALES, useLocaleContext } from '../../../../util/localisation/locale_provider';
import { APPEARANCES, Appearance, THEMES, Theme, useThemeContext } from '../../../../util/theming/theme_provider';
import { Button } from '../../../button/button';
import { ButtonLink } from '../../../link/link';
import { Text } from '../../../text/text';
import type { RouteData } from './../../../../routes/route_data/route_data';
import { DrawerMessages } from './drawer.messages';
import styles from './drawer.module.css';

type DrawerProps = {
  routesData: RouteData[],
  show: boolean,
}

const getLocationSpecificThemeStyles = (activeRoute: string) => {
  if (activeRoute === Routes.PROJECTS) {
    return styles.projects;
  }
};

export const Drawer = ({
  routesData,
  show,
}: DrawerProps) => {
  const { pathname: activeRoute } = useLocation();
  const { locale } = useLocaleContext();
  const { theme, appearance } = useThemeContext();
  return (
    <div
        className={classNames(styles.drawer, {
          [styles.show]: show,
          [styles.eightBit]: theme === Theme.EIGHT_BIT,
          [styles.dark]: appearance === Appearance.DARK,
        }, getLocationSpecificThemeStyles(activeRoute))}
    >
      <ul
          className={styles.verticalMenu}
      >
        { routesData.map(routeData => (
          <li
              key={routeData.path}
              className={styles.linkContainer}
          >
            <ButtonLink
                url={routeData.path}
                className={classNames(styles.link, {
                  [styles.active]: routeData.path === activeRoute,
                })}
                targetSelf={true}
            >
              <Text.Small
                  textCase='uppercase'
                  alignment='centre'
                  className={styles.textContent}
              >
                { routeData.label(locale) }
              </Text.Small>
            </ButtonLink>
          </li>
        )) }
      </ul>
      <div
          className={styles.horizontalDivider}
      >
      </div>
      <LocaleOptions/>
      <div
          className={styles.horizontalDivider}
      >
      </div>
      <ThemeAppearanceOptions/>
    </div>
  );
};

const ThemeAppearanceOptions = () => {

  const { locale } = useLocaleContext();
  const { theme, setTheme, appearance, setAppearance } = useThemeContext();

  return (
    <div
        className={styles.themeAppearanceOptionsContainer}
    >
      <Text.ExtraSmall
          textCase='uppercase'
          alignment='centre'
          className={styles.textContent}
      >
        { DrawerMessages.ThemeAppearanceOptionsLabel[locale] }
      </Text.ExtraSmall>
      <div
          className={classNames(styles.themeAppearanceOptions, {
            [styles.dark]: appearance === Appearance.DARK,
          })}
      >
        { THEMES.map(themeOption => (
          <ThemeAppearanceButton
              key={themeOption.theme.toString()}
              label={themeOption.label(locale)}
              onClick={() => setTheme(themeOption.theme)}
              icon={themeOption.icon}
              className={styles.themeOption}
              active={themeOption.theme === theme}
          />
        )) }
        <div
            className={styles.verticalDivider}
        >
        </div>
        <ThemeAppearanceButton
            label={APPEARANCES[appearance].label(locale)}
            onClick={() => setAppearance(appearance === Appearance.LIGHT ? Appearance.DARK : Appearance.LIGHT)}
            icon={appearance === Appearance.LIGHT ? APPEARANCES[Appearance.DARK].icon : APPEARANCES[Appearance.LIGHT].icon}
            className={styles.appearanceOption}
        />
      </div>
    </div>
  );
};

const ThemeAppearanceButton = ({
  label,
  onClick,
  icon,
  className,
  active=true,
}: {
  label: string,
  onClick: () => void,
  icon: string,
  className: string,
  active?: boolean,
}) => (
  <div
      className={classNames(styles.themeAppearanceButton, {
        [styles.active]: active,
      })}
  >
    <Button
        onClick={onClick}
        className={className}
    >
      { icon }
    </Button>
    <Text.UltraSmall
        textCase='uppercase'
        alignment='centre'
        className={styles.textContent}
    >
      { label }
    </Text.UltraSmall>
  </div>
);

const LocaleOptions = () => {

  const { locale, setLocale } = useLocaleContext();
  const { appearance } = useThemeContext();

  return (
    <div
        className={styles.localeOptionsContainer}
    >
      <Text.ExtraSmall
          textCase='uppercase'
          alignment='centre'
          className={styles.textContent}
      >
        { DrawerMessages.LocaleOptionsLabel[locale] }
      </Text.ExtraSmall>
      <div
          className={classNames(styles.localeOptions, {
            [styles.dark]: appearance === Appearance.DARK,
          })}
      >
        { LOCALES.map(localeOption => (
          <LocaleButton
              key={localeOption.id}
              label={localeOption.label}
              onClick={() => setLocale(localeOption.id)}
              className={classNames(styles.localeOption)}
              active={localeOption.id === locale}
          />
        )) }
      </div>
    </div>
  );
};

const LocaleButton = ({
  label,
  onClick,
  className,
  active=true,
}: {
  label: string,
  onClick: () => void,
  className: string,
  active?: boolean,
}) => (
  <div
      className={classNames(styles.localeButton, {
        [styles.active]: active,
      })}
  >
    <Button
        onClick={onClick}
        className={className}
    >
      <Text.UltraSmall
          textCase='uppercase'
          alignment='centre'
          className={styles.textContent}
      >
        { label }
      </Text.UltraSmall>
    </Button>
  </div>
);

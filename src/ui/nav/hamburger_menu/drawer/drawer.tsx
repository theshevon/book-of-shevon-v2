import classNames from 'classnames';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { APPEARANCES, Appearance, THEMES, useThemeContext } from '../../../../util/theming/theme_provider';
import { Link } from '../../../link/link';
import { Text } from '../../../text/text';
import type { RouteData } from './../../../../routes/route_data/route_data';
import styles from './drawer.module.css';

type DrawerProps = {
  routesData: RouteData[],
  show: boolean,
}

export const Drawer = ({
  routesData,
  show,
}: DrawerProps) => {
  const { pathname: activeRoute } = useLocation();
  const { appearance } = useThemeContext();
  // TODO: add theming and fix overflow when closed
  return (
    <div
        className={classNames(styles.drawer, {
          [styles.show]: show,
          [styles.dark]: appearance === Appearance.DARK,
        })}
    >
      <ul
          className={styles.verticalMenu}
      >
        { routesData.map(routeData => (
          <li
              key={routeData.label}
              className={styles.linkContainer}
          >
            <Link
                url={routeData.path}
                className={classNames(styles.link, {
                  [styles.active]: routeData.path === activeRoute,
                })}
                targetSelf={true}
            >
              <Text.Small
                  textCase='uppercase'
                  alignment='centre'
              >
                { routeData.label }
              </Text.Small>
            </Link>
          </li>
        )) }
      </ul>
      <div
          className={styles.horizontalDivider}
      >
      </div>
      <ThemeAppearanceOptions/>
    </div>
  );
};

const ThemeAppearanceOptions = () => {

  const { theme, setTheme, appearance, setAppearance } = useThemeContext();

  return (
    <div
        className={styles.themeAppearanceOptionsContainer}
    >
      <Text.ExtraSmall
          textCase='uppercase'
          alignment='centre'
      >
        Themes / Appearance
      </Text.ExtraSmall>
      <div
          className={classNames(styles.themeAppearanceOptions, {
            [styles.dark]: appearance === Appearance.DARK,
          })}
      >
        { THEMES.map(themeOption => (
          <ThemeAppearanceButton
              key={themeOption.theme.toString()}
              label={themeOption.label}
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
            label={APPEARANCES[appearance].label}
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
    <button
        onClick={onClick}
        className={className}
    >
      { icon }
    </button>
    <Text.UltraSmall
        textCase='uppercase'
    >
      { label }
    </Text.UltraSmall>
  </div>
);

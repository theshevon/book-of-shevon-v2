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
      <ThemeSwitcherOptions/>
    </div>
  );
};

const ThemeSwitcherOptions = () => {

  const { theme, setTheme, appearance, setAppearance } = useThemeContext();

  return (
    <div
        className={classNames(styles.themeOptions, {
          [styles.dark]: appearance === Appearance.DARK,
        })}
    >
      { THEMES.map(themeOption => (
        <ThemeAppearanceSwitcherButton
            key={themeOption.theme.toString()}
            title={themeOption.label}
            onClick={() => setTheme(themeOption.theme)}
            className={classNames(styles.themeOption, {
              [styles.active]: themeOption.theme === theme,
            })}
            icon={themeOption.icon}
        />
      )) }
      <div className={styles.verticalDivider}></div>
      <ThemeAppearanceSwitcherButton
          title={APPEARANCES[appearance].label}
          onClick={() => setAppearance(appearance === Appearance.LIGHT ? Appearance.DARK : Appearance.LIGHT)}
          className={styles.appearanceOption}
          icon={appearance === Appearance.LIGHT ? APPEARANCES[Appearance.DARK].icon : APPEARANCES[Appearance.LIGHT].icon}
      />
    </div>
  );
};

const ThemeAppearanceSwitcherButton = ({
  title,
  onClick,
  className,
  icon,
}: {
  title: string,
  onClick: () => void,
  className: string,
  icon: string,
}) => (
  <div
      className={styles.themeAppearanceSwitcherButton}
  >
    <button
        title={title}
        onClick={onClick}
        className={className}
    >
      { icon }
    </button>
    <Text.UltraSmall
        textCase='uppercase'
    >
      { title }
    </Text.UltraSmall>
  </div>
);

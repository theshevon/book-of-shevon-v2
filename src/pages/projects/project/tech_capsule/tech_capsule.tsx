import classNames from 'classnames';
import React from 'react';
import { Appearance, useThemeContext } from '../../../../util/theming/theme_provider';
import { Capsule } from './../../../../ui/capsule/capsule';
import styles from './tech_capsule.module.css';

const getTechClassName = (tech: string) => {
  switch (tech.replace(/\s+/g, '').toLocaleLowerCase()) {
    case 'python':
      return styles.python;
    case 'c#':
      return styles.cSharp;
    case 'java':
      return styles.java;
    case 'html':
      return styles.html;
    case 'css':
      return styles.css;
    case 'javascript':
      return styles.javascript;
    case 'typescript':
      return styles.typescript;
    case 'react':
      return styles.react;
    case 'redux':
      return styles.redux;
    case 'mobx':
      return styles.mobx;
    case 'mongodb':
      return styles.mongoDb;
    case 'mysql':
      return styles.mySql;
    case 'git':
      return styles.git;
    case 'firebase':
      return styles.firebase;
    case 'jquery':
      return styles.jQuery;
    case 'node':
      return styles.node;
    case 'androidstudio':
      return styles.androidStudio;
    case 'unity':
      return styles.unity;
  }
};

export const TechCapsule = ({
  tech,
}: {
  tech: string,
}) => {
  const { appearance } = useThemeContext();
  return (
    <Capsule
        className={classNames(getTechClassName(tech), {
          [styles.dark]: appearance === Appearance.DARK,
        })}
        retainDarkTextOnDarkMode={true}
    >
      { tech }
    </Capsule>
  );
};

import React from 'react';

import { Text } from './../../../ui/text/text';

import styles from './profile.module.css';

export type ProfileProps = {
  name: string,
  imgSrc: string,
  imgAltTag: string,
}

export const Profile = ({
  name,
  imgSrc,
  imgAltTag,
}: ProfileProps) => (
  <div
      className={styles.profile}
  >
    <img
        className={styles.picture}
        src={imgSrc}
        alt={imgAltTag}
    />
    <Text.LargeTitle
        alignment='center'
        fontWeight='bold'
        textCase='uppercase'
        keepDefaultMargins={true}
        className={styles.name}
    >
      {name}
    </Text.LargeTitle>
    <div
        className={styles.underline}
    >
    </div>
  </div>
);

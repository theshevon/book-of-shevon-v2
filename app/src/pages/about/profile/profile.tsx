import React from 'react';

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
    <h1
        className={styles.name}
    >
      {name}
    </h1>
    <div
        className={styles.underline}
    >
    </div>
  </div>
);

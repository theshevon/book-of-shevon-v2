import classNames from 'classnames';
import React, { useRef } from 'react';
import { Locale, useLocaleContext } from '../../../util/localisation/locale_provider';
import { Friends as FriendsPictureData } from './data/friends';
import styles from './friendships_photo.module.css';
import doItForThemSrc from './photos/do_it_for_them.png';

type OverlayFriendPictureProps = {
  id: string,
  imageSrc: string,
  tooltipLabel?: (locale: Locale) => string,
  description?: (locale: Locale) => string,
};

export const FriendshipsPhoto = () => {
  const ref = useRef(null);
  return (
    <div
        className={styles.friendshipsPhotoContainer}
    >
      <img
          className={styles.pictureFrame}
          src={doItForThemSrc}
      />
      { FriendsPictureData.map((friendPictureData, index) => (
        <OverlayFriendPicture
            key={index}
            {...friendPictureData}
        />
      )) }

    </div>
  );
};

const OverlayFriendPicture = ({
  id,
  imageSrc,
  tooltipLabel,
  description,
}: OverlayFriendPictureProps) => {
  const { locale } = useLocaleContext();
  return (
    <div
        className={classNames(styles.overlayFriendPictureContainer, styles[id])}
    >
      <img
          src={imageSrc}
          className={styles.overlayFriendPicture}
      />
    </div>
  );
};

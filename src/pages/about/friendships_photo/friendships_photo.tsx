import classNames from 'classnames';
import React, { useState } from 'react';
import { Text } from '../../../ui/text/text';
import { Locale, useLocaleContext } from '../../../util/localisation/locale_provider';
import { Appearance, useThemeContext } from '../../../util/theming/theme_provider';
import { Friends as FriendsPictureData } from './data/friends';
import doItForThemImgSrc from './data/photos/do_it_for_them.png';
import styles from './friendships_photo.module.css';

type OverlayFriendPictureProps = {
  id: string,
  imageSrc: string,
  tooltipLabel: (locale: Locale) => string,
  tooltipDirection: 'top' | 'bottom' | 'left' | 'right',
  description?: (locale: Locale) => string,
};

export const FriendshipsPhoto = () => {
  return (
    <div
        className={styles.friendshipsPhotoContainer}
    >
      <img
          className={styles.pictureFrame}
          src={doItForThemImgSrc}
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
  tooltipDirection,
  description,
}: OverlayFriendPictureProps) => {
  const { locale } = useLocaleContext();

  const [showTooltip, setShowTooltip] = useState(false);
  const { appearance } = useThemeContext();

  return (
    <div
        className={classNames(styles.overlayFriendPictureContainerOuter, styles[id])}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
    >
      <div
          className={styles.overlayFriendPictureContainerInner}
      >
        <img
            src={imageSrc}
            className={styles.overlayFriendPicture}
        />
        { showTooltip && (
          <div className={classNames(styles.tooltip, {
            [styles.dark]: appearance === Appearance.DARK,
            [styles.top]: tooltipDirection === 'top',
            [styles.bottom]: tooltipDirection === 'bottom',
            [styles.left]: tooltipDirection === 'left',
            [styles.right]: tooltipDirection === 'right',
          })}
          >
            <Text.UltraSmall
                alignment='centre'
                className={styles.tooltipLabel}
            >
              { tooltipLabel(locale) }
            </Text.UltraSmall>
          </div>
        ) }
        <div
            className={styles.tapeTopLeft}
        ></div>
        <div
            className={styles.tapeTopRight}
        ></div>
        <div
            className={styles.tapeBottomLeft}
        ></div>
        <div
            className={styles.tapeBottomRight}
        ></div>
      </div>
    </div>
  );
};

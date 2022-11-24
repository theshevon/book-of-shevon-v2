import classNames from 'classnames';
import React, { useState } from 'react';
import { Text } from '../../../ui/text/text';
import { Locale, useLocaleContext } from '../../../util/localisation/locale_provider';
import { Appearance, Theme, useThemeContext } from '../../../util/theming/theme_provider';
import { Friends as FriendsPictureData } from './data/friends';
import doItForThemImgSrc from './data/photos/do_it_for_them.png';
import styles from './friendships_photo.module.css';

type OverlayFriendPictureProps = {
  id: string,
  imageSrc: string,
  tooltipLabel: (locale: Locale) => string,
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
  description,
}: OverlayFriendPictureProps) => {
  const { locale } = useLocaleContext();

  const [active, setActive] = useState(false);
  const { theme, appearance } = useThemeContext();

  // eslint-disable-next-line no-undef
  let timeout: string | number | NodeJS.Timeout | undefined;

  const showTip = () => {
    timeout = setTimeout(() => setActive(true), 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
        className={classNames(styles.overlayFriendPictureContainerOuter, styles[id])}
        onMouseEnter={showTip}
        onMouseLeave={hideTip}
    >
      <div
          className={styles.overlayFriendPictureContainerInner}
      >
        <img
            src={imageSrc}
            className={styles.overlayFriendPicture}
        />
        { active && (
          <div className={classNames(styles.tooltip, styles.bottom, {
            [styles.eightBit]: theme === Theme.EIGHT_BIT,
            [styles.dark]: appearance === Appearance.DARK,
          })}
          >
            <Text.UltraSmall
                alignment='centre'
                textCase='capitalise'
                className={styles.tooltipLabel}
            >
              { tooltipLabel(locale) }
            </Text.UltraSmall>
          </div>
        ) }
      </div>
    </div>
  );
};

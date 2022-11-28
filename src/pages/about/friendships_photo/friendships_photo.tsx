import classNames from 'classnames';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { IconButton } from '../../../ui/button/button';
import { CloseIconDefinition } from '../../../ui/icons/definitions/close';
import { Text } from '../../../ui/text/text';
import { Locale, useLocaleContext } from '../../../util/localisation/locale_provider';
import { Appearance, useThemeContext } from '../../../util/theming/theme_provider';
import { Friends as FriendsPictureData } from './data/friends';
import doItForThemImgSrc from './data/photos/do_it_for_them.png';
import styles from './friendships_photo.module.css';

type OverlayFriendPictureProps = {
  index: number,
  id: string,
  imageSrc: string,
  tooltipLabel: (locale: Locale) => string,
  tooltipDirection: 'top' | 'bottom' | 'left' | 'right',
  description?: (locale: Locale) => string,
};

export const FriendshipsPhoto = React.memo(() => {
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
            index={index}
            {...friendPictureData}
        />
      )) }
    </div>
  );
});

const OverlayFriendPicture = ({
  index,
  id,
  imageSrc,
  tooltipLabel,
  tooltipDirection,
  description,
}: OverlayFriendPictureProps) => {

  const [waitTimeElapsed, setWaitTimeElapsed] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showLightBox, setShowLightBox] = useState(false);

  useEffect(() => {
    setTimeout(() => setWaitTimeElapsed(true), index * 500);
  }, [index]);

  const onImgClick = () => {
    setShowLightBox(true);

    // lock scrolling
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    window.onscroll = () => {
      window.scrollTo({ top: scrollTop });
    };
  };

  const onLightBoxClose = () => {
    setShowLightBox(false);

    // unlock scrolling
    window.onscroll = () => {};
  }

  return (
    <>
      <div
          className={classNames(styles.overlayFriendPictureContainerOuter, styles[id], {
            [styles.hide]: !(waitTimeElapsed && imageLoaded),
          })}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onClick={onImgClick}
      >
        <div
            className={styles.overlayFriendPictureContainerInner}
        >
          <img
              src={imageSrc}
              className={styles.overlayFriendPicture}
              onLoad={() => setImageLoaded(true)}
          />
          { showTooltip && (
            <Tooltip
                tooltipLabel={tooltipLabel}
                tooltipDirection={tooltipDirection}
            />
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
      { showLightBox && (
        <LightBox
            imageSrc={imageSrc}
            description={description}
            onClose={onLightBoxClose}
        />
      ) }
    </>
  );
};

const Tooltip = ({
  tooltipDirection,
  tooltipLabel,
}: {
  tooltipDirection: 'top' | 'bottom' | 'left' | 'right',
  tooltipLabel: (locale: Locale) => string,
}) => {

  const { locale } = useLocaleContext();
  const { appearance } = useThemeContext();

  return (
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
  );
};

const LightBox = ({
  imageSrc,
  description,
  onClose,
}: {
  imageSrc: string,
  description?: (locale: Locale) => string,
  onClose: () => void,
}) => {

  const ref = useRef(null);

  const onClickHandler = useCallback((e: MouseEvent) => {

    if (e.target === ref.current) {
      onClose();
    }
  }, [onClose]);

  const onKeyDownHandler = useCallback((e: KeyboardEvent) => {
    if (e.key ==='Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    window.addEventListener('keydown', onKeyDownHandler);
    window.addEventListener('click', onClickHandler);
    return () => {
      window.removeEventListener('keydown', onKeyDownHandler);
      window.removeEventListener('click', onClickHandler);
    };
  }, [onClickHandler, onKeyDownHandler]);

  return (
    <div
        className={styles.lightBox}
        ref={ref}
    >
      <div
          className={styles.closeButtonContainer}
      >
        <IconButton
            iconDefinition={CloseIconDefinition}
            onClick={onClose}
            className={styles.closeButton}
            overrideTheming={true}
        />
      </div>
      <img
          src={imageSrc}
          className={styles.img}
      />
      { description && (
        <Text.Small>
          { description }
        </Text.Small>
      ) }
    </div>
  );
};

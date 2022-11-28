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
  };

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

function isPaddingClick(element: HTMLElement | null, e: MouseEvent) {
  if (!element) {
    return false;
  }
  const style = window.getComputedStyle(element, null);
  const pTop = parseInt(style.getPropertyValue('padding-top'));
  const pRight = parseFloat(style.getPropertyValue('padding-right'));
  const pLeft = parseFloat(style.getPropertyValue('padding-left') );
  const pBottom = parseFloat(style.getPropertyValue('padding-bottom'));
  const width = element.offsetWidth;
  const height = element.offsetHeight;
  const x = e.offsetX;
  const y = e.offsetY;

  return !(( x > pLeft && x < width - pRight) &&
           ( y > pTop && y < height - pBottom));
}

const LightBox = ({
  imageSrc,
  description,
  onClose,
}: {
  imageSrc: string,
  description?: (locale: Locale) => string,
  onClose: () => void,
}) => {

  const lightBoxRef = useRef(null);
  const imgRef = useRef(null);
  const { locale } = useLocaleContext();

  const onClickHandler = useCallback((e: MouseEvent) => {
    if (e.target === lightBoxRef.current || isPaddingClick(imgRef.current, e)) {
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
        ref={lightBoxRef}
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
          ref={imgRef}
      />
      { description && (
        <Text.Small
            alignment='left'
            className={styles.description}
        >
          { description(locale) }
        </Text.Small>
      ) }
    </div>
  );
};

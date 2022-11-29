import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from '../../../ui/link/link';
import { Locale, useLocaleContext } from '../../../util/localisation/locale_provider';
import { Friends as FriendsPictureData } from './data/friends';
import doItForThemImgSrc from './data/photos/do_it_for_them.png';
import letterMImgSrc from './data/photos/letter_m.png';
import letterTImgSrc from './data/photos/letter_t.png';
import { FriendshipsPhotoMessages as Messages } from './friendships_photo.messages';
import styles from './friendships_photo.module.css';
import { LightBox } from './light_box/light_box';
import { Tooltip } from './tooltip/tooltip';

type OverlayFriendPictureProps = {
  index: number,
  id: string,
  imageSrc: string,
  tooltipLabel: (locale: Locale) => string,
  tooltipDirection: 'top' | 'bottom' | 'left' | 'right',
  description?: (locale: Locale) => string,
};

const MEME_REF_URL = 'https://www.youtube.com/watch?v=x2mS3uDqQL4&ab_channel=ThingsICantFindOtherwise';

export const FriendshipsPhoto = React.memo(() => {

  const ref = useRef(null);
  const [showOverlayElements, setShowOverlayElements] = useState(false);

  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      for (let i=0; i<entries.length; i++) {
        if (entries[i].isIntersecting) {
          setShowOverlayElements(true);
        }
      }
    };
    const observer = new IntersectionObserver(callback, { threshold: 1 });
    const element = ref.current;
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [ref]);

  const OverlayElements = () => (
    <>
      { FriendsPictureData.map((friendPictureData, index) => (
        <OverlayPicture
            key={index}
            index={index + 1}
            {...friendPictureData}
        />
      )) }
      <OverlayLetter
          id='letterT'
          index={FriendsPictureData.length + 1}
          imageSrc={letterTImgSrc}
      />
      <OverlayLetter
          id='letterM'
          index={FriendsPictureData.length + 2}
          imageSrc={letterMImgSrc}
      />
    </>
  );

  return (
    <div
        className={styles.friendshipsPhotoContainer}
    >
      <img
          ref={ref}
          className={styles.pictureFrame}
          src={doItForThemImgSrc}
      />
      { showOverlayElements && (
        <OverlayElements/>
      ) }
      <MemeRef/>
    </div>
  );
});

const OverlayPicture = ({
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
    setTimeout(() => setWaitTimeElapsed(true), index * 600);
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
            [styles.hidden]: !(waitTimeElapsed && imageLoaded),
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
      { showLightBox && description && (
        <LightBox
            imageSrc={imageSrc}
            description={description}
            onClose={onLightBoxClose}
        />
      ) }
    </>
  );
};

const OverlayLetter = ({
  id,
  index,
  imageSrc,
}: {
  id: string,
  index: number,
  imageSrc: string,
}) => {

  const [waitTimeElapsed, setWaitTimeElapsed] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setWaitTimeElapsed(true), index * 600);
  }, [index]);

  return (
    <div
        className={classNames(styles.overlayLetter, styles[id], {
          [styles.hidden]: !(waitTimeElapsed && imageLoaded),
        })}
    >
      <img
          src={imageSrc}
          className={styles.overlayFriendPicture}
          onLoad={() => setImageLoaded(true)}
      />
    </div>
  );
};

const MemeRef = () => {
  const { locale } = useLocaleContext();
  return (
    <Link
        url={MEME_REF_URL}
        className={styles.memeRef}
    >
      [{ Messages.memeRef[locale] }]
    </Link>
  );
};

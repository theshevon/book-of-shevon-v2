import React from 'react';

import styles from './lightbox.module.css';

type LightboxProps = {
  imgSrc: string,
  isFirst: boolean,
  isLast: boolean,
  onImgChange: (direction: 'prev' | 'next') => void,
  onClose: () => void,
}

export const Lightbox = ({
  imgSrc,
  isFirst,
  isLast,
  onImgChange,
  onClose,
}: LightboxProps) => (
  <div
      className={styles.lightboxContainer}
  >
    <div
        className={styles.lightbox}
    >
      <div
          className={styles.closeButtonContainer}
      >
        <button onClick={onClose} className={styles.closeButton}>&times;</button>
      </div>
      <div
          className={styles.prevButtonContainer}
      >
        { !isFirst && <button onClick={() => onImgChange('prev')}>&lt;</button> }
      </div>
      <div
          className={styles.imgContainer}
      >
        <img
            src={imgSrc}
            className={styles.img}
        />
      </div>
      <div
          className={styles.nextButtonContainer}
      >
        { !isLast && <button onClick={() => onImgChange('next')}>&gt;</button> }
      </div>
    </div>
  </div>
);

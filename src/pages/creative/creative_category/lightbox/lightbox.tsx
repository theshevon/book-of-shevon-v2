import React from 'react';

import styles from './lightbox.module.css';

type LightboxProps = {
  imageSrc: string,
  onImageChange: (direction: 'prev' | 'next') => void,
  onClose: () => void,
  isFirst: boolean,
  isLast: boolean,
}

export const Lightbox = ({
  imageSrc,
  onImageChange,
  onClose,
  isFirst,
  isLast,
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
        {!isFirst && <button onClick={() => onImageChange('prev')}>&lt;</button>}
      </div>
      <div
          className={styles.imageContainer}
      >
        <img
            src={imageSrc}
            className={styles.image}
        />
      </div>
      <div
          className={styles.nextButtonContainer}
      >
        {!isLast && <button onClick={() => onImageChange('next')}>&gt;</button>}
      </div>
    </div>
  </div>
);

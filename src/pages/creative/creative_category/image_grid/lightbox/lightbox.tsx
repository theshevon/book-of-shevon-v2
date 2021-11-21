import React from 'react';
import { IconButton } from '../../../../../ui/button/button';
import { CloseIconDefinition } from '../../../../../ui/icons/definitions/close';
import styles from './lightbox.module.css';

type LightboxProps = {
  imgSrc: string,
  isFirst: boolean,
  isLast: boolean,
  onImgChange: (direction: 'prev' | 'next') => void,
  onClose: () => void,
}

// TODO: add key listeners so that arrow keys trigger changes
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
        <IconButton
            iconDefinition={CloseIconDefinition}
            onClick={onClose}
            className={styles.closeButton}
        />
      </div>
      <div
          className={styles.prevButtonContainer}
      >
        { !isFirst && (
          <button
              onClick={() => onImgChange('prev')}
              className={styles.imgChangeButton}
          >
            &lt;
          </button>
        ) }
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
        { !isLast && (
          <button
              onClick={() => onImgChange('next')}
              className={styles.imgChangeButton}
          >
            &gt;
          </button>
        ) }
      </div>
    </div>
  </div>
);

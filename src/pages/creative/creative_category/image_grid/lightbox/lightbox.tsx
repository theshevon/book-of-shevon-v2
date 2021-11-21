import React, { memo, useCallback, useEffect } from 'react';
import { IconButton } from '../../../../../ui/button/button';
import { CloseIconDefinition } from '../../../../../ui/icons/definitions/close';
import { LeftArrowIconDefinition } from '../../../../../ui/icons/definitions/left_arrow';
import { RightArrowIconDefinition } from '../../../../../ui/icons/definitions/right_arrow';
import styles from './lightbox.module.css';

type LightboxProps = {
  imgSrc: string,
  isFirst: boolean,
  isLast: boolean,
  onImgChange: (direction: 'prev' | 'next') => void,
  onClose: () => void,
}

export const Lightbox = memo(({
  imgSrc,
  isFirst,
  isLast,
  onImgChange,
  onClose,
}: LightboxProps) => {

  const onKeyDownHandler = useCallback((e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowLeft':
        onImgChange('prev');
        return;
      case 'ArrowRight':
        onImgChange('next');
        return;
      case 'Escape':
        onClose();
        return;
      default:
        return;
    }
  }, [onClose, onImgChange]);

  useEffect(() => {
    window.addEventListener('keydown', onKeyDownHandler);
    return () => {
      window.removeEventListener('keydown', onKeyDownHandler);
    };
  }, [onKeyDownHandler]);

  return (
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
            <IconButton
                iconDefinition={LeftArrowIconDefinition}
                onClick={() => onImgChange('prev')}
                className={styles.imgChangeButton}
            />
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
            <IconButton
                iconDefinition={RightArrowIconDefinition}
                onClick={() => onImgChange('next')}
                className={styles.imgChangeButton}
            />
          ) }
        </div>
      </div>
    </div>
  );
});

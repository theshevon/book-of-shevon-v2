import { observer } from 'mobx-react-lite';
import React, { useCallback, useEffect, useRef } from 'react';
import { IconButton } from '../../../../../ui/button/button';
import { CloseIconDefinition } from '../../../../../ui/icons/definitions/close';
import { LeftArrowIconDefinition } from '../../../../../ui/icons/definitions/left_arrow';
import { RightArrowIconDefinition } from '../../../../../ui/icons/definitions/right_arrow';
import { DisplaySizeObserver, isMediumOrWider, isSmallOrNarrower } from '../../../../../util/display_size_observer/display_size_observer';
import styles from './light_box.module.css';

type LightBoxProps = {
  imgSrc: string,
  isFirst: boolean,
  isLast: boolean,
  onImgChange: (direction: 'prev' | 'next') => void,
  onClose: () => void,
}

export const LightBox = observer(({
  imgSrc,
  isFirst,
  isLast,
  onImgChange,
  onClose,
}: LightBoxProps) => {

  const ref = useRef(null);

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

  const onClickHandler = useCallback((e: MouseEvent) => {

    if (e.target === ref.current) {
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
  }, [onKeyDownHandler, onClickHandler]);

  const PrevButtonContainer = () => (
    <div
        className={styles.prevButtonContainer}
    >
      { !isFirst && (
        <IconButton
            iconDefinition={LeftArrowIconDefinition}
            onClick={() => onImgChange('prev')}
            className={styles.imgChangeButton}
            overrideTheming={true}
        />
      ) }
    </div>
  );

  const NextButtonContainer = () => (
    <div
        className={styles.nextButtonContainer}
    >
      { !isLast && (
        <IconButton
            iconDefinition={RightArrowIconDefinition}
            onClick={() => onImgChange('next')}
            className={styles.imgChangeButton}
            overrideTheming={true}
        />
      ) }
    </div>
  );

  const displaySize = DisplaySizeObserver.size;

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
      { isMediumOrWider(displaySize)  && <PrevButtonContainer/> }
      <div
          className={styles.imgContainer}
      >
        <img
            src={imgSrc}
            className={styles.img}
        />
      </div>
      { isMediumOrWider(displaySize) && <NextButtonContainer/> }
      { isSmallOrNarrower(displaySize) && (
        <div
            className={styles.mobileControlsContainer}
        >
          <PrevButtonContainer/>
          <NextButtonContainer/>
        </div>
      ) }
    </div>
  );
});

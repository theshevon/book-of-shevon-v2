import React, { useCallback, useEffect, useRef } from 'react';
import { IconButton } from '../../../../ui/button/button';
import { CloseIconDefinition } from '../../../../ui/icons/definitions/close';
import { Text } from '../../../../ui/text/text';
import { Locale, useLocaleContext } from '../../../../util/localisation/locale_provider';
import { Appearance } from '../../../../util/theming/theme_provider';
import styles from './light_box.module.css';

export const LightBox = ({
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
    if (e.target === lightBoxRef.current || isClickWithinPadding(imgRef.current, e)) {
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
            appearanceOverride={Appearance.DARK}
        >
          { description(locale) }
        </Text.Small>
      ) }
    </div>
  );
};

const isClickWithinPadding = (element: HTMLElement | null, e: MouseEvent) => {
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

  return !((x > pLeft && x < width - pRight) && (y > pTop && y < height - pBottom));
};


import classNames from 'classnames';
import React, { useState } from 'react';
import { Theme, useThemeContext } from '../../../../util/theming/theme_provider';
import styles from './image_grid.module.css';
import { LightBox } from './light_box/light_box';

type SelectedImg = {
  imgSrc: string,
  index: number,
}

export const ImageGrid = ({
  images,
}: {
  images: string[],
}) => {

  const [showLightBox, setShowLightBox] = useState<boolean>(false);
  const [selectedImg, setSelectedImg] = useState<SelectedImg>({ imgSrc: '', index: -1 });
  const { theme } = useThemeContext();

  const onImgClick = (selectedImg: SelectedImg) => {
    setSelectedImg(selectedImg);
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

  const onImgChange = (direction: 'prev' | 'next') => {
    const selectedImgIndex = selectedImg.index;
    let nextImgIndex = selectedImgIndex;
    if (direction === 'prev') {
      if (selectedImgIndex !== 0) {
        nextImgIndex = selectedImgIndex - 1;
      }
    } else {
      if (selectedImgIndex !== images.length - 1) {
        nextImgIndex = selectedImgIndex + 1;
      }
    }
    const nextSelectedImg = { imgSrc: images[nextImgIndex], index: nextImgIndex };
    setSelectedImg(nextSelectedImg);
  };

  return (
    <div
        className={styles.imageGrid}
    >
      <div
          className={styles.thumbnails}
      >
        { images.map((imgSrc, index) => (
          <div
              key={imgSrc}
              className={classNames(styles.thumbnailContainer, {
                [styles.eightBit]: theme === Theme.EIGHT_BIT,
              })}
          >
            <img
                src={imgSrc}
                className={styles.thumbnail}
                onClick={() => onImgClick({ imgSrc, index })}
            />
          </div>
        )) }
      </div>
      { showLightBox && (
        <LightBox
            imgSrc={selectedImg.imgSrc}
            isFirst={selectedImg.index === 0}
            isLast={selectedImg.index === images.length - 1}
            onImgChange={onImgChange}
            onClose={onLightBoxClose}
        />
      ) }
    </div>
  );
};

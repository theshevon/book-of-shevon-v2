import React, { useState } from 'react';
import styles from './image_grid.module.css';
import { Lightbox } from './lightbox/lightbox';

type SelectedImg = {
  imgSrc: string,
  index: number,
}

// TODO: close lightbox when non interactive space is clicked
export const ImageGrid = ({
  images,
}: {
  images: string[],
}) => {

  const [showLightbox, setShowLightbox] = useState<boolean>(false);
  const [selectedImg, setSelectedImg] = useState<SelectedImg>({ imgSrc: '', index: -1 });

  const onImgClick = (selectedImg: SelectedImg) => {
    setSelectedImg(selectedImg);
    setShowLightbox(true);
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
              className={styles.thumbnailContainer}
          >
            <img
                src={imgSrc}
                className={styles.thumbnail}
                onClick={() => onImgClick({ imgSrc, index })}
            />
          </div>
        )) }
      </div>
      { showLightbox && (
        <Lightbox
            imgSrc={selectedImg.imgSrc}
            isFirst={selectedImg.index === 0}
            isLast={selectedImg.index === images.length - 1}
            onImgChange={onImgChange}
            onClose={() => setShowLightbox(false)}
        />
      ) }
    </div>
  );
};

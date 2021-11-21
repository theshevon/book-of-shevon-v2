import React from 'react';
import styles from './image_grid.module.css';

export const ImageGrid = ({
  images,
}: {
  images: string[],
}) => {
  return (
    <div
        className={styles.imageGrid}
    >
      <div
          className={styles.thumbnails}
      >
        { images.map(imageSrc => (
          <div
              key={imageSrc}
              className={styles.thumbnailContainer}
          >
            <img
                src={imageSrc}
                className={styles.thumbnail}
            />
          </div>
        )) }
      </div>
    </div>
  );
}

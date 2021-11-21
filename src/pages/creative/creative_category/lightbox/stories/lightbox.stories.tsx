import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';

import { Lightbox } from '../lightbox';

import testImg1 from './test_image_1.png';
import testImg2 from './test_image_2.png';
import testImg3 from './test_image_3.png';

const images = [testImg1, testImg2, testImg3];

const ImagesWithLightbox = () => {

  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedImg, setSelectedImg] = useState(0);

  const onImgClick = (index: number) => {
    setSelectedImg(index);
    setShowLightbox(true);
  };

  const onImageChange = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setSelectedImg(selectedImg === 0 ? 0 : selectedImg - 1);
    } else {
      setSelectedImg(selectedImg === images.length - 1 ? selectedImg : selectedImg + 1);
    }
  };

  return (
    <>
      { images.map((image, index) => (
        <img
            key={index}
            src={image}
            width='250'
            height='100'
            style={{ margin: '10px', borderRadius: '4px' }}
            onClick={() => onImgClick(index)}
        />
      )) }
      { showLightbox && (
        <Lightbox
            imageSrc={images[selectedImg]}
            onImageChange={onImageChange}
            onClose={() => setShowLightbox(false)}
            isFirst={selectedImg === 0}
            isLast={selectedImg === images.length - 1}
        />
      ) }
    </>
  );
};

storiesOf('Pages/Creative/CreativeCategory/Lightbox', module)
  .add('Lightbox', () => (
    <ImagesWithLightbox/>
  ));


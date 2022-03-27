import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import testImg1 from '../../../../../../util/storybook/test_images/test_img_1.png';
import testImg2 from '../../../../../../util/storybook/test_images/test_img_2.png';
import testImg3 from '../../../../../../util/storybook/test_images/test_img_3.png';
import { LightBox as LightBoxImpl } from '../light_box';

const images = [testImg1, testImg2, testImg3];

const LightBox = () => {

  const [selectedImg, setSelectedImg] = useState<{ imgSrc: string, index: number }>({ imgSrc: testImg1, index: 0 });

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
    <LightBoxImpl
        imgSrc={selectedImg.imgSrc}
        isFirst={selectedImg.index === 0}
        isLast={selectedImg.index === images.length - 1}
        onImgChange={onImgChange}
        onClose={action('Close lightbox')}
    />
  );
};

storiesOf('Pages/Creative/CreativeCategory/ImageGrid/LightBox', module)
  .add('LightBox', () => (
    <LightBox />
  ));

import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';

import { ImageGrid } from '../image_grid';
import testImg1 from '../../../../../ui/storybook/test_images/test_img_1.png';
import testImg2 from '../../../../../ui/storybook/test_images/test_img_2.png';
import testImg3 from '../../../../../ui/storybook/test_images/test_img_3.png';

const images = [testImg1, testImg2, testImg3];

storiesOf('Pages/Creative/CreativeCategory/ImageGrid', module)
  .add('ImageGrid', () => (
    <ImageGrid
        images={images}
    />
  ));


import { storiesOf } from '@storybook/react';
import React from 'react';
import { CreativeCategory, Section, SubSection } from '../creative_category';
import testImage from './test_image.png';

const images =  Array.from({ length: 5 }, () => testImage);

const subSection = {
  name: 'Test sub-section',
  desc: 'Some description',
  images: images,
};

const subSections = Array.from({ length: 3 }, () => subSection);

const sectionWithImages = {
  name: 'Test section with images',
  desc: 'Some description',
  images: images,
};

const sectionWithSubSections = {
  name: 'Test section with sub-sections',
  desc: 'Some description',
  subSections: subSections,
};

storiesOf('Pages/Creative/CreativeCategory', module)
  .add('SubSection', () => (
    <SubSection
        {...subSection}
    />
  ))
  .add('Section with images', () => (
    <Section
        {...sectionWithImages}
    />
  ))
  .add('Section with sub-sections', () => (
    <Section
        {...sectionWithSubSections}
    />
  ))
  .add('CreativeCategory', () => (
    <CreativeCategory
        name='Creative Category'
        sections={[sectionWithImages, sectionWithSubSections]}
    />
  ));


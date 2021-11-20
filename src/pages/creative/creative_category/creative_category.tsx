import React from 'react';

import { Text } from '../../../ui/text/text';

import styles from './creative_category.module.css';

export type CreativeCategoryProps = {
  name: string,
  sections: SectionProps[],
};

export const CreativeCategory = ({
  name,
  sections,
}: CreativeCategoryProps) => (
  <div
      className={styles.creativeCategory}
  >
    <Text.MediumTitle
        alignment='center'
        fontWeight='bold'
    >
      { name }
    </Text.MediumTitle>
    { sections.map(section => (
      <Section
          key={section.name}
          {...section}
      />
    )) }
  </div>
);

type SectionProps = {
  name: string,
  desc?: string,
} & ({
  images: string[],
  subSections?: never,
} | {
  images?: never,
  subSections: SubSectionProps[],
});

export const Section = ({
  name,
  desc,
  images,
  subSections,
}: SectionProps) => {

  let SectionContent: () => JSX.Element = () => <></>;
  if (subSections) {
    SectionContent = () => (
      <>
        { subSections.map(subSection => (
          <SubSection
              key={subSection.name}
              {...subSection}
          />
        )) }
      </>
    );
  } else if (images) {
    SectionContent = () => (
      <SectionImages
        images={images}
      />
    );
  }

  return (
    <div
        className={styles.section}
    >
      <Text.Large
            alignment='center'
        >
        { name }
      </Text.Large>
      { desc && (
        <Text.Small
            alignment='center'
        >
          { desc }
        </Text.Small>
      ) }
      <SectionContent/>
    </div>
  );
};

type SubSectionProps = {
  name: string,
  desc?: string,
  images: string[],
}

export const SubSection = ({
  name,
  desc,
  images,
}: SubSectionProps) => (
  <div
      className={styles.subSection}
  >
    <Text.Medium>
      { name }
    </Text.Medium>
    { desc && (
      <Text.Small>
        { desc }
      </Text.Small>
    ) }
    <SectionImages
        images={images}
    />
  </div>
);

const SectionImages = ({
  images,
} : {
  images: string[]
}) => (
  <div
      className={styles.thumbnails}
  >
    { images.map(image => (
      <img
          key={image}
          src={image}
          className={styles.thumbnail}
      />
    )) }
  </div>
);

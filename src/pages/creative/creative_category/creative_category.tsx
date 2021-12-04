import React from 'react';
import { Text } from '../../../ui/text/text';
import styles from './creative_category.module.css';
import { ImageGrid } from './image_grid/image_grid';

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
        className={styles.categoryName}
    >
      { name }
    </Text.MediumTitle>
    <div
        className={styles.sections}
    >
      { sections.map(section => (
        <Section
            key={section.name}
            {...section}
        />
      )) }
    </div>
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
      <div
          className={styles.subSections}
      >
        { subSections.map(subSection => (
          <SubSection
              key={subSection.name}
              {...subSection}
          />
        )) }
      </div>
    );
  } else if (images) {
    SectionContent = () => (
      <ImageGrid
          images={images}
      />
    );
  }

  return (
    <div
        className={styles.section}
    >
      <Text.Large
          fontWeight='bold'
          alignment='center'
          className={styles.sectionName}
      >
        { name }
      </Text.Large>
      { desc && (
        <Text.Small
            alignment='center'
            className={styles.sectionDesc}
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
    <Text.Medium
        fontWeight='bold'
        alignment='center'
        className={styles.subSectionName}
    >
      { name }
    </Text.Medium>
    { desc && (
      <Text.Small
          alignment='center'
          className={styles.subSectionDesc}
      >
        { desc }
      </Text.Small>
    ) }
    <ImageGrid
        images={images}
    />
  </div>
);

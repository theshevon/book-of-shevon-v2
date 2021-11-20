import React from 'react';

import { Text } from '../../../ui/text/text';

import styles from './section.module.css';

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
        <Text.Large
            alignment='center'
        >
          { name }
        </Text.Large>
        { desc && (
          <Text.Small>
            { desc }
          </Text.Small>
        ) }
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
      <SubSection
          name={name}
          desc={desc}
          images={images}
      />
    );
  }

  return (
    <div
        className={styles.section}
    >
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
  <>
    <Text.Medium>
      { name }
    </Text.Medium>
    { desc && (
      <Text.Small
          italicised={true}
      >
        { desc }
      </Text.Small>
    ) }
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
  </>
);

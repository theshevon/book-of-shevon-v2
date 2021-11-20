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
  images?: string[],
  subSections?: SubSectionProps[],
};

export const Section = ({
  name,
  desc,
  images,
  subSections,
}: SectionProps) => {

  let Content: () => JSX.Element = () => <></>;
  if (subSections) {
    Content = () => (
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
    Content = () => (
      <SubSection
          name={name}
          desc={desc}
          images={images}
      />
    );
  }

  return (
    <div>
      <Content />
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
      { images.map((image: string) => (
        <img
            key={image}
            src={image}
            className={styles.thumbnail}
        />
      )) }
    </div>
  </>
);

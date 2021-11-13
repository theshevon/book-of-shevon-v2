import React from 'react';

import { Text } from '../../../ui/text/text';

import styles from './section.module.css';

export type SectionContainerProps = {
  name: string,
  desc?: string,
  sections: SectionProps[],
};

export const SectionContainer = ({
  name,
  desc,
  sections,
}: SectionContainerProps) => (
  <div>
    <Text.MediumTitle
        alignment='center'
        fontWeight='bold'
    >
      { name }
    </Text.MediumTitle>
    { desc && (
      <Text.Small
          alignment='center'
      >
        { desc }
      </Text.Small>
    ) }
    { sections.map(section => (
      <Section
          key={section.name}
          {...section}
      />
    )) }
  </div>
);

export type SectionProps = Omit<SectionContainerProps, 'sections'> & {
  images?: string[],
  subSections?: SubSectionProps[],
};

// TODO: clean this up
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

type SubSectionProps = Omit<SectionContainerProps, 'sections'> & {
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
            alt={image}
            src={image}
            className={styles.thumbnail}
        />
      )) }
    </div>
  </>
);

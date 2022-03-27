import { observer } from 'mobx-react-lite';
import React from 'react';
import { Text } from '../../../ui/text/text';
import { DisplaySizeObserver, isSmallOrNarrower } from '../../../util/display_size_observer/display_size_observer';
import styles from './creative_category.module.css';
import { ImageGrid } from './image_grid/image_grid';

export type CreativeCategoryProps = {
  name: string,
  sections: SectionProps[],
};

export const CreativeCategory = observer(({
  name,
  sections,
}: CreativeCategoryProps) => (
  <div
      className={styles.creativeCategory}
  >
    <Text.MediumTitle
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
));

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

export const Section = observer(({
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
      <Text.SmallTitle
          fontWeight='bold'
          alignment={isSmallOrNarrower(DisplaySizeObserver.size) ? 'center' : 'left'}
          className={styles.sectionName}
      >
        { name }
      </Text.SmallTitle>
      { desc && (
        <Text.ExtraSmall
            alignment={isSmallOrNarrower(DisplaySizeObserver.size) ? 'center' : 'left'}
            className={styles.sectionDesc}
        >
          { desc }
        </Text.ExtraSmall>
      ) }
      <SectionContent/>
    </div>
  );
});

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
    <Text.Small
        fontWeight='bold'
        alignment={isSmallOrNarrower(DisplaySizeObserver.size) ? 'center' : 'left'}
        className={styles.subSectionName}
    >
      { name }
    </Text.Small>
    { desc && (
      <Text.ExtraSmall
          alignment={isSmallOrNarrower(DisplaySizeObserver.size) ? 'center' : 'left'}
          className={styles.subSectionDesc}
      >
        { desc }
      </Text.ExtraSmall>
    ) }
    <ImageGrid
        images={images}
    />
  </div>
);

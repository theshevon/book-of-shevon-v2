import { observer } from 'mobx-react-lite';
import React from 'react';
import { Text } from '../../../ui/text/text';
import { DisplaySizeObserver, isSmallOrNarrower } from '../../../util/display_size_observer/display_size_observer';
import { Locale, useLocaleContext } from '../../../util/localisation/locale_provider';
import styles from './creative_category.module.css';
import { ImageGrid } from './image_grid/image_grid';

export type CreativeCategoryProps = {
  name: (locale: Locale) => string,
  sections: SectionProps[],
};

export const CreativeCategory = observer(({
  name,
  sections,
}: CreativeCategoryProps) => {
  const { locale } = useLocaleContext();
  return (
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
              key={section.name(locale)}
              {...section}
          />
        )) }
      </div>
    </div>
  );
});

type SectionProps = {
  name: (locale: Locale) => string,
  desc?: (locale: Locale) => string,
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
  const { locale } = useLocaleContext();

  let SectionContent: () => JSX.Element = () => <></>;
  if (subSections) {
    SectionContent = () => (
      <div
          className={styles.subSections}
      >
        { subSections.map(subSection => (
          <SubSection
              key={subSection.name(locale)}
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
          alignment={isSmallOrNarrower(DisplaySizeObserver.size) ? 'centre' : 'left'}
          className={styles.sectionName}
      >
        { name(locale) }
      </Text.SmallTitle>
      { desc && (
        <Text.ExtraSmall
            alignment={isSmallOrNarrower(DisplaySizeObserver.size) ? 'centre' : 'left'}
            className={styles.sectionDesc}
        >
          { desc(locale) }
        </Text.ExtraSmall>
      ) }
      <SectionContent/>
    </div>
  );
});

type SubSectionProps = {
  name: (locale: Locale) => string,
  desc?: (locale: Locale) => string,
  images: string[],
}

export const SubSection = ({
  name,
  desc,
  images,
}: SubSectionProps) => {
  const { locale } = useLocaleContext();
  return (
    <div
        className={styles.subSection}
    >
      <Text.Small
          fontWeight='bold'
          alignment={isSmallOrNarrower(DisplaySizeObserver.size) ? 'centre' : 'left'}
          className={styles.subSectionName}
      >
        { name(locale) }
      </Text.Small>
      { desc && (
        <Text.ExtraSmall
            alignment={isSmallOrNarrower(DisplaySizeObserver.size) ? 'centre' : 'left'}
            className={styles.subSectionDesc}
        >
          { desc(locale) }
        </Text.ExtraSmall>
      ) }
      <ImageGrid
          images={images}
      />
    </div>
  );
};

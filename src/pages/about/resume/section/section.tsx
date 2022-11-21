import React from 'react';
import type { FC } from 'react';
import { Text } from '../../../../ui/text/text';
import { Locale, useLocaleContext } from '../../../../util/localisation/locale_provider';
import { SectionMessages as Messages } from './section.messages';
import styles from './section.module.css';

type SectionTitleOpt = 'education' | 'commercialXp' | 'skills' | 'volunteerXp';

type SectionProps = {
	title: SectionTitleOpt,
}

export const Section: FC<SectionProps> = ({
  title,
  children,
}) => {
  const { locale } = useLocaleContext();
  return (
    <section
        className={styles.section}
    >
      <Text.SmallTitle
          fontWeight='bold'
          alignment='centre'
          textCase='uppercase'
          className={styles.title}
      >
        { getSectionTitleLabel(title, locale) }
      </Text.SmallTitle>
      <div
          className={styles.info}
      >
        { children }
      </div>
    </section>
  );
};

const getSectionTitleLabel = (sectionTitleOpt: SectionTitleOpt, locale: Locale): string => {
  switch (sectionTitleOpt) {
    case 'education':
      return Messages.education[locale];
    case 'commercialXp':
      return Messages.commercialExperience[locale];
    case 'skills':
      return Messages.skills[locale];
    case 'volunteerXp':
      return Messages.volunteerExperience[locale];
  }
};

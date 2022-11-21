import classNames from 'classnames';
import React from 'react';
import { Link } from '../../../..//ui/link/link';
import { Locale, useLocaleContext } from '../../../../util/localisation/locale_provider';
import { Appearance, useThemeContext } from '../../../../util/theming/theme_provider';
import { Text } from './../../../../ui/text/text';
import { ExperiencesMessages as Messages } from './experiences.messages';
import styles from './experiences.module.css';

type Date = {
  month: (locale: Locale) => string,
  year: number,
}

export type ExperienceProps = {
  role: (locale: Locale) => string,
  companyName: (locale: Locale) => string,
  companyWebsiteUrl?: string,
  startDate: Date,
  endDate?: Date,
  useResponsibilitiesLabel?: boolean,
  responsibilities: ((locale: Locale) => string)[],
}

export const Experiences = ({
  experiences,
}: {
	experiences: ExperienceProps[],
}) => {
  const { locale } = useLocaleContext();
  const { appearance } = useThemeContext();
  return (
    <ul
        className={styles.experiences}
    >
      { experiences.map(experience => (
        <li
            key={experience.companyName(locale) + experience.startDate.month(locale) + experience.startDate.year}
            className={classNames(styles.experienceContainer, {
              [styles.dark]: appearance === Appearance.DARK,
            })}
        >
          <Experience
              {...experience}
          />
        </li>
      )) }
    </ul>
  );
};

const Experience = ({
  role,
  companyName,
  companyWebsiteUrl,
  startDate,
  endDate,
  useResponsibilitiesLabel=true,
  responsibilities,
}: ExperienceProps) => {
  const { locale } = useLocaleContext();

  return (
    <div
        className={styles.experience}
    >
      <Text.Small
          className={styles.role}
      >
        { role(locale) }
      </Text.Small>
      <Company
          companyName={companyName(locale)}
          companyWebsiteUrl={companyWebsiteUrl}
      />
      <TimePeriod
          startDate={startDate}
          endDate={endDate}
      />
      <Responsibilities
          useResponsibilitiesLabel={useResponsibilitiesLabel}
          responsibilities={responsibilities}
      />
    </div>
  );
};

const Company = ({
  companyName,
  companyWebsiteUrl,
}: {
  companyName: string,
  companyWebsiteUrl?: string,
}) => {
  let content;
  if (companyWebsiteUrl) {
    content = (
      <Link
          url={companyWebsiteUrl}
          className={styles.link}
      >
        { companyName }
      </Link>
    );
  } else {
    content = companyName;
  }
  return (
    <Text.ExtraSmall
        fontWeight='bold'
        className={styles.company}
    >
      { content }
    </Text.ExtraSmall>
  );
};

const Responsibilities = ({
  useResponsibilitiesLabel,
  responsibilities,
}: {
  useResponsibilitiesLabel: boolean,
  responsibilities: ((locale: Locale) => string)[],
}) => {
  const { locale } = useLocaleContext();
  const { appearance } = useThemeContext();

  const localisedResponsibilities = responsibilities.map(r => r(locale));
  return (
    <div
        className={styles.responsibilitiesContainer}
    >
      { useResponsibilitiesLabel &&
      <Text.ExtraSmall
          className={styles.label}
      >
        { Messages.ResponsibleFor[locale] }:
      </Text.ExtraSmall>
      }
      <ul
          className={styles.responsibilities}
      >
        { localisedResponsibilities.map((responsibility, index) => (
          <li
              key={index} // should be fine using index here since the order will never change
              className={classNames(styles.responsibility, {
                [styles.dark]: appearance === Appearance.DARK,
              })}
          >
            <Text.ExtraSmall>
              { responsibility }
            </Text.ExtraSmall>
          </li>
        )) }
      </ul>
    </div>
  );
};

export const TimePeriod = ({
  startDate,
  endDate,
} : {
  startDate: Date,
  endDate?: Date,
}) => {
  const { locale } = useLocaleContext();

  const start = `${startDate.month(locale)} ${startDate.year}`;
  const end = endDate ? `${endDate.month(locale)} ${endDate.year}` : Messages.Present[locale];
  const period = `${start} - ${end}`;
  return (
    <Text.ExtraSmall
        className={styles.period}
    >
      { period }
    </Text.ExtraSmall>
  );
};

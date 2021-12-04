import React from 'react';
import { Link } from '../../../ui/link/link';
import { Text } from './../../../ui/text/text';
import { ExperiencesMessages as Messages } from './experiences.messages';
import styles from './experiences.module.css';

type Date = {
  month: string,
  year: number,
}

export type ExperienceProps = {
  role: string,
  companyName: string,
  companyWebsiteUrl?: string,
  startDate: Date,
  endDate?: Date,
  useResponsibilitiesLabel?: boolean,
  responsibilities: string[],
}

export const Experiences = ({
  experiences,
}: {
	experiences: ExperienceProps[],
}) => (
  <ul
      className={styles.experiences}
  >
    { experiences.map(experience => (
      <li
          key={experience.companyName + experience.startDate.month + experience.startDate.year}
          className={styles.experienceContainer}
      >
        <Experience
            {...experience}
        />
      </li>
    )) }
  </ul>
);

const Experience = ({
  role,
  companyName,
  companyWebsiteUrl,
  startDate,
  endDate,
  useResponsibilitiesLabel=true,
  responsibilities,
}: ExperienceProps) => (
  <div
      className={styles.experience}
  >
    <Text.Small
        className={styles.role}
    >
      { role }
    </Text.Small>
    <Company
        companyName={companyName}
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
  responsibilities: string[],
}) => (
  <div
      className={styles.responsibilitiesContainer}
  >
    { useResponsibilitiesLabel &&
      <Text.ExtraSmall
          className={styles.label}
      >
        { Messages.ResponsibleFor() }:
      </Text.ExtraSmall>
    }
    <ul
        className={styles.responsibilities}
    >
      { responsibilities.map((responsibility, index) => (
        <li
            key={index} // should be fine using index here since the order will never change
            className={styles.responsibility}
        >
          <Text.ExtraSmall>
            { responsibility }
          </Text.ExtraSmall>
        </li>
      )) }
    </ul>
  </div>
);

export const TimePeriod = ({
  startDate,
  endDate,
} : {
  startDate: Date,
  endDate?: Date,
}) => {
  const start = `${startDate.month} ${startDate.year}`;
  const end = endDate ? `${endDate.month} ${endDate.year}` : Messages.Present();
  const period = `${start} - ${end}`;
  return (
    <Text.ExtraSmall
        className={styles.period}
    >
      { period }
    </Text.ExtraSmall>
  );
};

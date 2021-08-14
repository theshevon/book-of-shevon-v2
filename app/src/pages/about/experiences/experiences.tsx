import classNames from 'classnames';
import React from 'react';

import { Text } from './../../../ui/text/text';
import { ExperiencesMessages as Messages } from './experiences.messages';
import styles from './experiences.module.css';

type Date = {
  month: string,
  year: number,
}

type Link = {
  anchorText: string,
  url: string,
}

export type ExperienceProps = {
  role: string,
  company: string | Link,
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
		{experiences.map(experience => (
			<li
					key={experience.company + experience.startDate.month + experience.startDate.year}
					className={styles.experienceContainer}
			>
				<Experience
						{...experience}
				/>
			</li>
		))}
	</ul>
)

const Experience = ({
  role,
  company,
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
      {role}
    </Text.Small>
    <Company
        company={company}
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
  company,
}: {
  company: string | Link,
}) => {
  let content;
  if (typeof company === 'string') {
    content = company;
  } else {
    const { anchorText, url } = company as Link;
    content = (
      <a
          href={url}
          target='_blank'
          rel='noreferrer'
          className={styles.link}
      >
        {anchorText}
      </a>
    );
  }
  return (
    <Text.ExtraSmall
        fontWeight='bold'
        className={styles.company}
    >
      {content}
    </Text.ExtraSmall>
  );
}

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
    {useResponsibilitiesLabel && 
      <Text.ExtraSmall
          className={styles.label}
      >
        {Messages.ResponsibleFor()}:
      </Text.ExtraSmall>
    }
    <ul
        className={styles.responsibilities}
    >
      {responsibilities.map((responsibility, index) => (
        <li
            key={index} // should be fine using index here since the order will never change
            className={styles.responsibility}
        >
          <Text.ExtraSmall>
            {responsibility}
          </Text.ExtraSmall>
        </li>
      ))}
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
      {period}
    </Text.ExtraSmall>
  );
}

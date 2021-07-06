import React from 'react';

import { ExperienceMessages as Messages } from './experience.messages';
import styles from 'experience.module.css';

type Date = {
  month: string,
  year: number,
}

type ExperienceProps = {
  role: string,
  company: string,
  startDate: Date,
  endDate?: Date,
  responsibilities: string[],
}

export const Experience = ({
  role,
  company,
  startDate,
  endDate,
  responsibilities
}: ExperienceProps) => (
  <div
      className={styles.experience}
  >
    <p
        className={styles.role}
    >
      {role}
    </p>
    <p
        className={styles.company}
    >
      {company}
    </p>
    <TimePeriod
        startDate={startDate}
        endDate={endDate}
    />
    <Responsibilities
        responsibilities={responsibilities}
    />
  </div>
);

const Responsibilities = ({
  responsibilities,
}: {
  responsibilities: string[],
}) => (
  <div
      className={styles.responsibilitesContainer}
  >
    <p>
      {Messages.ResponsibleFor()}
    </p>
    <ul
        className={styles.responsibilites}
    >
      {responsibilities.map((responsibility, index) => (
        <li
            key={index} // should be fine using index here since the order will never change
            className={styles.responsibility}
        >
          {responsibility}
        </li>
      ))}
    </ul>
  </div>
);

const TimePeriod = ({
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
    <p
        className={styles.period}
    >
      {period}
    </p>
  );
}
import React from 'react';

import styles from 'experience.module.css';

type ExperienceProps = {
  role: string,
  company: string,
  startDate: string,
  endDate: string,
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
    <p
        className={styles.period}
    >
      {startDate} - {endDate}
    </p>
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
);

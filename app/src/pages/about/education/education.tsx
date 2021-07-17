import React from 'react';

import { TimePeriod } from '../experiences/experiences';
import { EducationMessages as Messages } from './education.messages';
import styles from './education.module.css';

type Date = {
  month: string,
  year: number,
}

type GradingSystem = 'WAM';

export type EducationProps = {
  university: string,
  startDate: Date,
  endDate: Date,
  course: string,
  major: string,
  gradingSystem: GradingSystem,
  mark: number,
  grade: string,
}

export const Education = ({
  education,
}: {
  education: EducationProps[],
}) => (
  <ul
			className={styles.education}
	>
		{education.map(courseOfStudy => (
			<li
					key={courseOfStudy.university + courseOfStudy.startDate.month + courseOfStudy.startDate.year}
					className={styles.educationContainer}
			>
				<CourseOfStudy
						{...courseOfStudy}
				/>
			</li>
		))}
	</ul>
);

const CourseOfStudy = ({
  university,
  startDate,
  endDate,
  course,
  major,
  gradingSystem,
  mark,
  grade,
}: EducationProps) => (
  <div
      className={styles.courseOfStudy}
  >
    <p
        className={styles.university}
    >
      {university}
    </p>
    <p
        className={styles.course}
    >
      {course}
    </p>
    <TimePeriod
        startDate={startDate}
        endDate={endDate}
    />
    <ul
        className={styles.courseDetails}
    >
      <li
          className={styles.detail}
      >
        <strong>
          {Messages.Major()}:&nbsp;
        </strong>
        {major}
      </li>

      <li
          className={styles.detail}
      >
        <strong>
          {getGradingSystemLabel(gradingSystem)}:&nbsp;
        </strong>
        {mark}&nbsp;({grade})
      </li>
    </ul>
  </div>
);

const getGradingSystemLabel = (gradingSystem: GradingSystem) => {
  switch (gradingSystem) {
    case 'WAM':
      return Messages.Wam();
  }
}

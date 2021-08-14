import React from 'react';

import { Text } from './../../../ui/text/text';
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
    <Text.Small
        className={styles.university}
    >
      {university}
    </Text.Small>
    <Text.ExtraSmall
        className={styles.course}
    >
      {course}
    </Text.ExtraSmall>
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
        <Text.ExtraSmall
          fontWeight='semi-bold'
        >
          {Messages.Major()}:&nbsp;
        </Text.ExtraSmall>
        <Text.ExtraSmall>
          {major}
        </Text.ExtraSmall>
      </li>

      <li
          className={styles.detail}
      >
        <Text.ExtraSmall
          fontWeight='semi-bold'
        >
          {getGradingSystemLabel(gradingSystem)}:&nbsp;
        </Text.ExtraSmall>
        <Text.ExtraSmall>
          {mark}&nbsp;({grade})
        </Text.ExtraSmall>
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

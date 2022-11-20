import classNames from 'classnames';
import React from 'react';
import { Locale, useLocaleContext } from '../../../util/localisation/locale_provider';
import { Appearance, useThemeContext } from '../../../util/theming/theme_provider';
import { TimePeriod } from '../experiences/experiences';
import { Text } from './../../../ui/text/text';
import { EducationMessages as Messages } from './education.messages';
import styles from './education.module.css';

type Date = {
  month: (locale: Locale) => string,
  year: number,
}

type GradingSystem = 'WAM';

export type EducationProps = {
  university: (locale: Locale) => string,
  startDate: Date,
  endDate: Date,
  course: (locale: Locale) => string,
  major: (locale: Locale) => string,
  gradingSystem: GradingSystem,
  mark: number,
  grade: string,
}

export const Education = ({
  education,
}: {
  education: EducationProps[],
}) => {
  const { locale } = useLocaleContext();
  const { appearance } = useThemeContext();

  return (
    <ul
        className={styles.education}
    >
      { education.map(courseOfStudy => (
        <li
            key={courseOfStudy.university(locale) + courseOfStudy.startDate.month(locale) + courseOfStudy.startDate.year}
            className={classNames(styles.educationContainer, {
              [styles.dark]: appearance === Appearance.DARK,
            })}
        >
          <CourseOfStudy
              {...courseOfStudy}
          />
        </li>
      )) }
    </ul>
  );
};

const CourseOfStudy = ({
  university,
  startDate,
  endDate,
  course,
  major,
  gradingSystem,
  mark,
  grade,
}: EducationProps) => {
  const { locale } = useLocaleContext();
  const { appearance } = useThemeContext();

  return (
    <div
        className={styles.courseOfStudy}
    >
      <Text.ExtraSmall
          className={styles.university}
      >
        { university(locale) }
      </Text.ExtraSmall>
      <Text.ExtraSmall
          className={styles.course}
      >
        { course(locale) }
      </Text.ExtraSmall>
      <TimePeriod
          startDate={startDate}
          endDate={endDate}
      />
      <ul
          className={styles.courseDetails}
      >
        <li
            className={classNames({ [styles.dark]: appearance === Appearance.DARK })}
        >
          <div
              className={styles.detailContainer}
          >
            <Text.ExtraSmall
                fontWeight='semi-bold'
                className={styles.detail}
            >
              { Messages.Major[locale] }:&nbsp;
            </Text.ExtraSmall>
            <Text.ExtraSmall
                className={styles.detail}
            >
              { major(locale) }
            </Text.ExtraSmall>
          </div>
        </li>

        <li
            className={classNames({ [styles.dark]: appearance === Appearance.DARK })}
        >
          <div
              className={styles.detailContainer}
          >
            <Text.ExtraSmall
                fontWeight='semi-bold'
                className={styles.detail}
            >
              { getGradingSystemLabel(gradingSystem, locale) }:&nbsp;
            </Text.ExtraSmall>
            <Text.ExtraSmall
                className={styles.detail}
            >
              { mark }&nbsp;({ grade })
            </Text.ExtraSmall>
          </div>
        </li>
      </ul>
    </div>
  );
};

const getGradingSystemLabel = (gradingSystem: GradingSystem, locale: Locale) => {
  switch (gradingSystem) {
    case 'WAM':
      return Messages.Wam[locale];
  }
};

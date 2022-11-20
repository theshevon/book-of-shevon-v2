import { Locale } from '../../../../util/localisation/locale_provider';
import type { EducationProps } from '../../education/education';
import { EducationMessages as Messages } from './education.messages';

export const TertiaryEducation: EducationProps[] = [
  {
    university: (locale: Locale) => Messages.UniMelb[locale],
    startDate: {
      month: (locale: Locale) => Messages.February[locale],
      year: 2017,
    },
    endDate: {
      month: (locale: Locale) => Messages.December[locale],
      year: 2019,
    },
    course: (locale: Locale) => Messages.Bsc[locale],
    major: (locale: Locale) => Messages.ComputingAndSoftwareSystems[locale],
    gradingSystem: 'WAM',
    mark: 80.583,
    grade: 'H1',
  },
];

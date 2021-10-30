import type { EducationProps } from '../../education/education';
import { EducationMessages as Messages } from './education.messages';

export const TertiaryEducation: EducationProps[] = [
  {
    university: Messages.UniMelb(),
    startDate: {
      month: Messages.February(),
      year: 2017,
    },
    endDate: {
      month: Messages.December(),
      year: 2019,
    },
    course: Messages.Bsc(),
    major: Messages.ComputingAndSoftwareSystems(),
    gradingSystem: 'WAM',
    mark: 80.583,
    grade: 'H1',
  }
];

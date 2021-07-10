import { ExperiencesMessages as Messages } from './experiences.messages';
import type { ExperienceProps } from '../../experiences/experiences';

export const CommercialExperiences: ExperienceProps[] = [
  {
    role: Messages.SoftwareEngineer(),
    company: Messages.Canva(),
    startDate: {
      month: Messages.April(),
      year: 2021,
    },
    responsibilities: [
      Messages.CanvaResponsibility1(),
      Messages.CanvaResponsibility2(),
    ],
  },
  {
    role: Messages.SoftwareEngineer(),
    company: Messages.DgitSystems(),
    startDate: {
      month: Messages.July(),
      year: 2020,
    },
    endDate: {
      month: Messages.March(),
      year: 2021,
    },
    responsibilities: [
      Messages.DgitResponsibility1(),
      Messages.DgitResponsibility2(),
    ],
  },
  {
    role: Messages.SoftwareEngineer(),
    company: Messages.UniMelb(),
    startDate: {
      month: Messages.May(),
      year: 2020,
    },
    endDate: {
      month: Messages.December(),
      year: 2020,
    },
    responsibilities: [
      Messages.UniMelbEngResponsibility1(),
      Messages.UniMelbEngResponsibility2(),
    ],
  },
  {
    role: Messages.AcademicTutor(),
    company: Messages.UniMelb(),
    startDate: {
      month: Messages.July(),
      year: 2019,
    },
    endDate: {
      month: Messages.July(),
      year: 2020,
    },
    responsibilities: [
      Messages.UniMelbTutResponsibility1(),
      Messages.UniMelbEngResponsibility2(),
    ],
  },
];

export const VolunteerExperiences: ExperienceProps[] = [
  {
    role: Messages.CoFounderAndVp(),
    company: Messages.Codec(),
    startDate: {
      month: Messages.March(),
      year: 2019,
    },
    endDate: {
      month: Messages.October(),
      year: 2019,
    },
    responsibilities: [
      Messages.CodecResponsibility1(),
      Messages.CodecResponsibility2(),
    ],
  },
  {
    role: Messages.GenCommMember(),
    company: Messages.Misc(),
    startDate: {
      month: Messages.September(),
      year: 2019,
    },
    endDate: {
      month: Messages.September(),
      year: 2019,
    },
    responsibilities: [
      Messages.MiscResponsibility1(),
      Messages.MiscResponsibility2(),
      Messages.MiscResponsibility3(),
    ],
  },
  {
    role: Messages.PubGenCommMember(),
    company: Messages.Cissa(),
    startDate: {
      month: Messages.April(),
      year: 2019,
    },
    endDate: {
      month: Messages.October(),
      year: 2019,
    },
    responsibilities: [
      Messages.CissaResponsibility1(),
      Messages.CissaResponsibility2(),
    ],
  },
];

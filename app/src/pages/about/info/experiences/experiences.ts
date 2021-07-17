import { ExperiencesMessages as Messages } from './experiences.messages';
import type { ExperienceProps } from '../../experiences/experiences';

export const CommercialExperiences: ExperienceProps[] = [
  {
    role: Messages.SoftwareEngineer(),
    company: {
      anchorText: Messages.Canva(),
      url: 'https://www.canva.com/',
    },
    startDate: {
      month: Messages.April(),
      year: 2021,
    },
    responsibilities: [
      Messages.CanvaResponsibility1(),
    ],
  },
  {
    role: Messages.SoftwareEngineer(),
    company: {
      anchorText: Messages.DgitSystems(),
      url: 'https://www.dgitsystems.com/',
    },
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
    company: {
      anchorText: Messages.UniMelb(),
      url: 'https://www.unimelb.edu.au/',
    },
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
    company: {
      anchorText: Messages.UniMelb(),
      url: 'https://www.unimelb.edu.au/',
    },
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
      Messages.UniMelbTutResponsibility2(),
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
    useResponsibilitiesLabel: false,
    responsibilities: [
      Messages.CodecResponsibility1(),
      Messages.CodecResponsibility2(),
    ],
  },
  {
    role: Messages.GenCommMember(),
    company: {
      anchorText: Messages.Misc(),
      url: 'https://www.umisc.info/',
    },
    startDate: {
      month: Messages.September(),
      year: 2018,
    },
    endDate: {
      month: Messages.September(),
      year: 2019,
    },
    useResponsibilitiesLabel: false,
    responsibilities: [
      Messages.MiscResponsibility1(),
      Messages.MiscResponsibility2(),
      Messages.MiscResponsibility3(),
    ],
  },
  {
    role: Messages.PubGenCommMember(),
    company: {
      anchorText: Messages.Cissa(),
      url: 'https://cissa.org.au/',
    },
    startDate: {
      month: Messages.April(),
      year: 2019,
    },
    endDate: {
      month: Messages.October(),
      year: 2019,
    },
    useResponsibilitiesLabel: false,
    responsibilities: [
      Messages.CissaResponsibility1(),
      Messages.CissaResponsibility2(),
    ],
  },
];

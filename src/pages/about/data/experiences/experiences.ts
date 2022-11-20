import { Locale } from '../../../../util/localisation/locale_provider';
import type { ExperienceProps } from '../../experiences/experiences';
import { ExperiencesMessages as Messages } from './experiences.messages';

export const CommercialExperiences: ExperienceProps[] = [
  {
    role: (locale: Locale) => Messages.SoftwareEngineer[locale],
    companyName: (locale: Locale) => Messages.Canva[locale],
    companyWebsiteUrl: 'https://www.canva.com/about',
    startDate: {
      month: (locale: Locale) => Messages.April[locale],
      year: 2021,
    },
    responsibilities: [
      (locale: Locale) => Messages.CanvaResponsibility1[locale],
      (locale: Locale) => Messages.CanvaResponsibility2[locale],
    ],
  },
  {
    role: (locale: Locale) => Messages.SoftwareEngineer[locale],
    companyName: (locale: Locale) => Messages.DgitSystems[locale],
    companyWebsiteUrl: 'https://www.dgitsystems.com/',
    startDate: {
      month: (locale: Locale) => Messages.July[locale],
      year: 2020,
    },
    endDate: {
      month: (locale: Locale) => Messages.March[locale],
      year: 2021,
    },
    responsibilities: [
      (locale: Locale) => Messages.DgitResponsibility1[locale],
      (locale: Locale) => Messages.DgitResponsibility2[locale],
    ],
  },
  {
    role: (locale: Locale) => Messages.SoftwareEngineer[locale],
    companyName: (locale: Locale) => Messages.UniMelb[locale],
    companyWebsiteUrl: 'https://www.unimelb.edu.au/',
    startDate: {
      month: (locale: Locale) => Messages.May[locale],
      year: 2020,
    },
    endDate: {
      month: (locale: Locale) => Messages.December[locale],
      year: 2020,
    },
    responsibilities: [
      (locale: Locale) => Messages.UniMelbEngResponsibility1[locale],
      (locale: Locale) => Messages.UniMelbEngResponsibility2[locale],
    ],
  },
  {
    role: (locale: Locale) => Messages.AcademicTutor[locale],
    companyName: (locale: Locale) => Messages.UniMelb[locale],
    companyWebsiteUrl: 'https://www.unimelb.edu.au/',
    startDate: {
      month: (locale: Locale) => Messages.July[locale],
      year: 2019,
    },
    endDate: {
      month: (locale: Locale) => Messages.July[locale],
      year: 2020,
    },
    responsibilities: [
      (locale: Locale) => Messages.UniMelbTutResponsibility1[locale],
      (locale: Locale) => Messages.UniMelbTutResponsibility2[locale],
    ],
  },
];

export const VolunteerExperiences: ExperienceProps[] = [
  {
    role: (locale: Locale) => Messages.CoFounderAndVp[locale],
    companyName: (locale: Locale) => Messages.Codec[locale],
    startDate: {
      month: (locale: Locale) => Messages.March[locale],
      year: 2019,
    },
    endDate: {
      month: (locale: Locale) => Messages.October[locale],
      year: 2019,
    },
    useResponsibilitiesLabel: false,
    responsibilities: [
      (locale: Locale) => Messages.CodecResponsibility1[locale],
      (locale: Locale) => Messages.CodecResponsibility2[locale],
    ],
  },
  {
    role: (locale: Locale) => Messages.GenCommMember[locale],
    companyName: (locale: Locale) => Messages.Misc[locale],
    companyWebsiteUrl: 'https://www.umisc.info/',
    startDate: {
      month: (locale: Locale) => Messages.September[locale],
      year: 2018,
    },
    endDate: {
      month: (locale: Locale) => Messages.September[locale],
      year: 2019,
    },
    useResponsibilitiesLabel: false,
    responsibilities: [
      (locale: Locale) => Messages.MiscResponsibility1[locale],
      (locale: Locale) => Messages.MiscResponsibility2[locale],
      (locale: Locale) => Messages.MiscResponsibility3[locale],
    ],
  },
  {
    role: (locale: Locale) => Messages.PubGenCommMember[locale],
    companyName: (locale: Locale) => Messages.Cissa[locale],
    companyWebsiteUrl: 'https://cissa.org.au/',
    startDate: {
      month: (locale: Locale) => Messages.April[locale],
      year: 2019,
    },
    endDate: {
      month: (locale: Locale) => Messages.October[locale],
      year: 2019,
    },
    useResponsibilitiesLabel: false,
    responsibilities: [
      (locale: Locale) => Messages.CissaResponsibility1[locale],
      (locale: Locale) => Messages.CissaResponsibility2[locale],
    ],
  },
];

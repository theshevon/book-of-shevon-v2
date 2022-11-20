import { Locale } from '../../../util/localisation/locale_provider';
import type { ProjectProps } from '../project/project';
import { ProjectsMessages as Messages } from './projects.messages';

export const Projects: ProjectProps[] = [
  {
    name: (locale: Locale) => Messages.BookOfShevonV2[locale],
    year: 2021,
    description: (locale: Locale) => Messages.BookOfShevonV2Desc[locale],
    techStack: [
      (locale: Locale) => Messages.React[locale],
      (locale: Locale) => Messages.Typescript[locale],
      (locale: Locale) => Messages.MobX[locale],
    ],
    githubUrl: 'https://github.com/theshevon/book-of-shevon-v2',
  },
  {
    name: (locale: Locale) => Messages.InvoiceMaker[locale],
    year: 2021,
    description: (locale: Locale) => Messages.InvoiceMakerDesc[locale],
    techStack: [
      (locale: Locale) => Messages.Python[locale],
    ],
    githubUrl: 'https://github.com/theshevon/invoice-maker',
  },
  {
    name: (locale: Locale) => Messages.TheTreasurePlatform[locale],
    year: 2019,
    description: (locale: Locale) => Messages.TheTreasurePlatformDesc[locale],
    techStack: [
      (locale: Locale) => Messages.React[locale],
      (locale: Locale) => Messages.JavaScript[locale],
      (locale: Locale) => Messages.Redux[locale],
      (locale: Locale) => Messages.Node[locale],
      (locale: Locale) => Messages.Firebase[locale],
    ],
    otherContributors: [
      {
        name: (locale: Locale) => Messages.AdamTurner[locale],
        githubUrl: 'https://github.com/aturnerr',
      },
      {
        name: (locale: Locale) => Messages.GraceSng[locale],
        githubUrl: 'https://github.com/ginseng88',
      },
      {
        name: (locale: Locale) => Messages.MichaelManoussakis[locale],
        githubUrl: 'https://github.com/mmanou',
      },
    ],
    githubUrl: 'https://github.com/theshevon/the-treasure-platform',
  },
  {
    name: (locale: Locale) => Messages.ReviewMyResume[locale],
    year: 2019,
    description: (locale: Locale) => Messages.ReviewMyResumeDesc[locale],
    techStack: [
      (locale: Locale) => Messages.Html[locale],
      (locale: Locale) => Messages.Css[locale],
      (locale: Locale) => Messages.JQuery[locale],
      (locale: Locale) => Messages.Node[locale],
      (locale: Locale) => Messages.MongoDb[locale],
    ],
    otherContributors: [
      {
        name: (locale: Locale) => Messages.AdamTurner[locale],
        githubUrl: 'https://github.com/aturnerr',
      },
      {
        name: (locale: Locale) => Messages.AmieXie[locale],
        githubUrl: 'https://github.com/amiexzj',
      },
    ],
    githubUrl: 'https://github.com/theshevon/invoice-maker',
  },
  {
    name: (locale: Locale) => Messages.BookOfShevonV1[locale],
    year: 2019,
    description: (locale: Locale) => Messages.BookOfShevonV1Desc[locale],
    techStack: [
      (locale: Locale) => Messages.Html[locale],
      (locale: Locale) => Messages.Css[locale],
      (locale: Locale) => Messages.JQuery[locale],
      (locale: Locale) => Messages.Node[locale],
      (locale: Locale) => Messages.MongoDb[locale],
    ],

    githubUrl: 'https://github.com/theshevon/book-of-shevon-v1',
  },
  {
    name: (locale: Locale) => Messages.MiscWebsite[locale],
    year: 2019,
    description: (locale: Locale) => Messages.MiscWebsiteDesc[locale],
    techStack: [
      (locale: Locale) => Messages.Html[locale],
      (locale: Locale) => Messages.Css[locale],
      (locale: Locale) => Messages.JQuery[locale],
      (locale: Locale) => Messages.Node[locale],
      (locale: Locale) => Messages.MongoDb[locale],
    ],
    githubUrl: 'https://github.com/theshevon/misc-website',
  },
  {
    name: (locale: Locale) => Messages.TheAdventuresOfSquidwod[locale],
    year: 2018,
    description: (locale: Locale) => Messages.TheAdventuresOfSquidwodDesc[locale],
    techStack: [
      (locale: Locale) => Messages.CSharp[locale],
      (locale: Locale) => Messages.Unity[locale],
    ],
    otherContributors: [
      {
        name: (locale: Locale) => Messages.AdamTurner[locale],
        githubUrl: 'https://github.com/aturnerr',
      },
      {
        name: (locale: Locale) => Messages.AmieXie[locale],
        githubUrl: 'https://github.com/amiexzj',
      },
    ],
    githubUrl: 'https://github.com/theshevon/the-adventures-of-squidwod',
  },
  {
    name: (locale: Locale) => Messages.LearningToEscape[locale],
    year: 2018,
    description: (locale: Locale) => Messages.LearningToEscapeDesc[locale],
    techStack: [
      (locale: Locale) => Messages.Java[locale],
    ],
    otherContributors: [
      {
        name: (locale: Locale) => Messages.AndrewGourley[locale],
        githubUrl: 'https://github.com/eindy',
      },
      {
        name: (locale: Locale) => Messages.DavidCrowe[locale],
        githubUrl: 'https://github.com/crowe099',
      },
    ],
    githubUrl: 'https://github.com/theshevon/learning-to-escape',
  },
  {
    name: (locale: Locale) => Messages.LandscapeGenerator[locale],
    year: 2018,
    description: (locale: Locale) => Messages.LandscapeGeneratorDesc[locale],
    techStack: [
      (locale: Locale) => Messages.CSharp[locale],
      (locale: Locale) => Messages.Unity[locale],
    ],
    otherContributors: [
      {
        name: (locale: Locale) => Messages.BrendenLeung[locale],
        githubUrl: 'https://github.com/leungb2',
      },
    ],
    githubUrl: 'https://github.com/theshevon/procedural-landscape',
  },
  {
    name: (locale: Locale) => Messages.LubyJump[locale],
    year: 2018,
    description: (locale: Locale) => Messages.LubyJumpDesc[locale],
    techStack: [
      (locale: Locale) => Messages.Java[locale],
      (locale: Locale) => Messages.AndroidStudio[locale],
    ],
    githubUrl: 'https://github.com/theshevon/luby-jump-android',
  },
];

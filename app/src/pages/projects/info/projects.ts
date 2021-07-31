import { ProjectsMessages as Messages } from './projects.messages';
import type { ProjectProps } from '../project/project';

export const Projects: ProjectProps[] = [
  {
    name: Messages.BookOfShevonV2(),
    year: 2021,
    description: Messages.BookOfShevonV2Desc(),
    techStack: [
      Messages.React(),
    ], 
    githubUrl: 'https://github.com/theshevon/book-of-shevon-v2',
  },
  {
    name: Messages.InvoiceMaker(),
    year: 2021,
    description: Messages.InvoiceMakerDesc(),
    techStack: [
      Messages.Python(),
    ],
    githubUrl: 'https://github.com/theshevon/invoice-maker',
  },
  {
    name: Messages.TheTreasurePlatform(),
    year: 2019,
    description: Messages.TheTreasurePlatformDesc(),
    techStack: [
      Messages.React(),
      Messages.Redux(),
      Messages.Node(),
      Messages.Firebase(),
    ],
    otherContributors: [
      {
        name: Messages.AdamTurner(),
        githubUrl: 'https://github.com/aturnerr',
      },
      {
        name: Messages.GraceSng(),
        githubUrl: 'https://github.com/sngweoien',
      },
      {
        name: Messages.MichaelManoussakis(),
        githubUrl: 'https://github.com/mmanou',
      },
    ],
    githubUrl: 'https://github.com/theshevon/the-treasure-platform',
  },
  {
    name: Messages.ReviewMyResume(),
    year: 2019,
    description: Messages.ReviewMyResumeDesc(),
    techStack: [
      Messages.Html(),
      Messages.Css(),
      Messages.JQuery(),
      Messages.Node(),
      Messages.MongoDb(),
    ],
    otherContributors: [
      {
        name: Messages.AdamTurner(),
        githubUrl: 'https://github.com/aturnerr',
      },
      {
        name: Messages.AmieXie(),
        githubUrl: 'https://github.com/amiexzj',
      },
    ],
    githubUrl: 'https://github.com/theshevon/invoice-maker',
  },
  {
    name: Messages.BookOfShevonV1(),
    year: 2019,
    description: Messages.BookOfShevonV1(),
    techStack: [
      Messages.Html(),
      Messages.Css(),
      Messages.JQuery(),
      Messages.Node(),
      Messages.MongoDb(),
    ],
  
    githubUrl: 'https://github.com/theshevon/book-of-shevon-v1',
  },
  {
    name: Messages.MiscWebsite(),
    year: 2019,
    description: Messages.MiscWebsiteDesc(),
    techStack: [
      Messages.Html(),
      Messages.Css(),
      Messages.JQuery(),
      Messages.Node(),
      Messages.MongoDb(),
    ],  
    githubUrl: 'https://github.com/theshevon/misc-website',
  },
  {
    name: Messages.TheAdventuresOfSquidwod(),
    year: 2019,
    description: Messages.TheAdventuresOfSquidwodDesc(),
    techStack: [
      Messages.CSharp(),
      Messages.Unity(),
    ],
    otherContributors: [
      {
        name: Messages.AdamTurner(),
        githubUrl: 'https://github.com/aturnerr',
      },
      {
        name: Messages.AmieXie(),
        githubUrl: 'https://github.com/amiexzj',
      },
    ],
    githubUrl: 'https://github.com/theshevon/the-adventures-of-squidwod',
  },
  {
    name: Messages.LandscapeGenerator(),
    year: 2019,
    description: Messages.LandscapeGenerator(),
    techStack: [
      Messages.CSharp(),
      Messages.Unity(),
    ],
    otherContributors: [
      {
        name: Messages.BrendenLeung(),
        githubUrl: 'https://github.com/leungb2',
      }
    ],
    githubUrl: 'https://github.com/theshevon/procedural-landscape',
  },
  {
    name: Messages.LubyJump(),
    year: 2018,
    description: Messages.LubyJump(),
    techStack: [
      Messages.Java(),
      Messages.AndroidStudio(),
    ], 
    githubUrl: 'https://github.com/theshevon/luby-jump-android',
  },
];

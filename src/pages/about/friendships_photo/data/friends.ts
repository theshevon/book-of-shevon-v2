import { Locale } from '../../../../util/localisation/locale_provider';
import { FriendsMessages as Messages } from './friends.messages';
import asilPicSrc from './photos/asil.png';
import cissaPicSrc from './photos/cissa.png';
import curzonPicSrc from './photos/curzon.png';
import familyPicSrc from './photos/family.png';
import johnAsilPicSrc from './photos/john_asil.png';
import joshPicSrc from './photos/josh.png';
import mihirBevPicSrc from './photos/mihir_bev.png';
import rohylPicSrc from './photos/rohyl.png';
import stefanPicSrc from './photos/stefan.png';

type FriendPicture = {
  id: string,
  imageSrc: string,
  tooltipLabel: (locale: Locale) => string,
  description: (locale: Locale) => string,
  dimensions: {
    width: number,
    height: number,
  },
  relativePosition: {
    top: number,
    left: number,
  },
};

export const Friends: FriendPicture[] = [
  {
    id: 'asil',
    imageSrc: asilPicSrc,
    tooltipLabel: (locale: Locale) => Messages.asil[locale],
    description: (locale: Locale) => Messages.asil[locale],
    dimensions: {
      width: 100,
      height: 100,
    },
    relativePosition: {
      top: 100,
      left: 100,
    },
  },
  {
    id: 'cissa',
    imageSrc: cissaPicSrc,
    tooltipLabel: (locale: Locale) => Messages.cissa[locale],
    description: (locale: Locale) => Messages.cissa[locale],
    dimensions: {
      width: 100,
      height: 100,
    },
    relativePosition: {
      top: 100,
      left: 100,
    },
  },
  {
    id: 'curzon',
    imageSrc: curzonPicSrc,
    tooltipLabel: (locale: Locale) => Messages.curzon[locale],
    description: (locale: Locale) => Messages.curzon[locale],
    dimensions: {
      width: 100,
      height: 100,
    },
    relativePosition: {
      top: 100,
      left: 100,
    },
  },
  {
    id: 'family',
    imageSrc: familyPicSrc,
    tooltipLabel: (locale: Locale) => Messages.family[locale],
    description: (locale: Locale) => Messages.family[locale],
    dimensions: {
      width: 100,
      height: 100,
    },
    relativePosition: {
      top: 100,
      left: 100,
    },
  },
  {
    id: 'johnAsil',
    imageSrc: johnAsilPicSrc,
    tooltipLabel: (locale: Locale) => Messages.johnAndAsil[locale],
    description: (locale: Locale) => Messages.johnAndAsil[locale],
    dimensions: {
      width: 100,
      height: 100,
    },
    relativePosition: {
      top: 100,
      left: 100,
    },
  },
  {
    id: 'josh',
    imageSrc: joshPicSrc,
    tooltipLabel: (locale: Locale) => Messages.josh[locale],
    description: (locale: Locale) => Messages.josh[locale],
    dimensions: {
      width: 100,
      height: 100,
    },
    relativePosition: {
      top: 100,
      left: 100,
    },
  },
  {
    id: 'mihirBev',
    imageSrc: mihirBevPicSrc,
    tooltipLabel: (locale: Locale) => Messages.mihirAndBev[locale],
    description: (locale: Locale) => Messages.mihirAndBev[locale],
    dimensions: {
      width: 100,
      height: 100,
    },
    relativePosition: {
      top: 100,
      left: 100,
    },
  },
  {
    id: 'rohyl',
    imageSrc: rohylPicSrc,
    tooltipLabel: (locale: Locale) => Messages.rohyl[locale],
    description: (locale: Locale) => Messages.rohyl[locale],
    dimensions: {
      width: 100,
      height: 100,
    },
    relativePosition: {
      top: 100,
      left: 100,
    },
  },
  {
    id: 'stefan',
    imageSrc: stefanPicSrc,
    tooltipLabel: (locale: Locale) => Messages.stefan[locale],
    description: (locale: Locale) => Messages.stefan[locale],
    dimensions: {
      width: 100,
      height: 100,
    },
    relativePosition: {
      top: 100,
      left: 100,
    },
  },
];

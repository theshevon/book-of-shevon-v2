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
import shevonPicSrc from './photos/shevon.png';
import stefanPicSrc from './photos/stefan.png';

type FriendPicture = {
  id: string,
  imageSrc: string,
  tooltipLabel?: (locale: Locale) => string,
  description?: (locale: Locale) => string,
};

export const Friends: FriendPicture[] = [
  {
    id: 'asil',
    imageSrc: asilPicSrc,
    tooltipLabel: (locale: Locale) => Messages.asilTooltipLabel[locale],
    description: (locale: Locale) => Messages.asilTooltipLabel[locale],
  },
  {
    id: 'cissa',
    imageSrc: cissaPicSrc,
    tooltipLabel: (locale: Locale) => Messages.cissaTooltipLabel[locale],
    description: (locale: Locale) => Messages.cissaTooltipLabel[locale],
  },
  {
    id: 'curzon',
    imageSrc: curzonPicSrc,
    tooltipLabel: (locale: Locale) => Messages.curzonTooltipLabel[locale],
    description: (locale: Locale) => Messages.curzonTooltipLabel[locale],
  },
  {
    id: 'family',
    imageSrc: familyPicSrc,
    tooltipLabel: (locale: Locale) => Messages.familyTooltipLabel[locale],
    description: (locale: Locale) => Messages.familyTooltipLabel[locale],
  },
  {
    id: 'johnAsil',
    imageSrc: johnAsilPicSrc,
    tooltipLabel: (locale: Locale) => Messages.johnAndAsilTooltipLabel[locale],
    description: (locale: Locale) => Messages.johnAndAsilTooltipLabel[locale],
  },
  {
    id: 'josh',
    imageSrc: joshPicSrc,
    tooltipLabel: (locale: Locale) => Messages.joshTooltipLabel[locale],
    description: (locale: Locale) => Messages.joshTooltipLabel[locale],
  },
  {
    id: 'mihirBev',
    imageSrc: mihirBevPicSrc,
    tooltipLabel: (locale: Locale) => Messages.mihirAndBevTooltipLabel[locale],
    description: (locale: Locale) => Messages.mihirAndBevTooltipLabel[locale],
  },
  {
    id: 'rohyl',
    imageSrc: rohylPicSrc,
    tooltipLabel: (locale: Locale) => Messages.rohylTooltipLabel[locale],
    description: (locale: Locale) => Messages.rohylTooltipLabel[locale],
  },
  {
    id: 'stefan',
    imageSrc: stefanPicSrc,
    tooltipLabel: (locale: Locale) => Messages.stefanTooltipLabel[locale],
    description: (locale: Locale) => Messages.stefanTooltipLabel[locale],
  },
  {
    id: 'shevon',
    imageSrc: shevonPicSrc,
    tooltipLabel: (locale: Locale) => Messages.shevonTooltipLabel[locale],
    description: (locale: Locale) => Messages.shevonTooltipLabel[locale],
  },
];

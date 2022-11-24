import { Locale } from '../../../../util/localisation/locale_provider';
import { FriendsMessages as Messages } from './friends.messages';
import asilImgSrc from './photos/asil.png';
import cissaImgSrc from './photos/cissa.png';
import curzonImgSrc from './photos/curzon.png';
import familyImgSrc from './photos/family.png';
import johnAsilImgSrc from './photos/john_asil.png';
import joshImgSrc from './photos/josh.png';
import mihirBevImgSrc from './photos/mihir_bev.png';
import rohylImgSrc from './photos/rohyl.png';
import shevonImgSrc from './photos/shevon.png';
import stefanImgSrc from './photos/stefan.png';

type FriendPicture = {
  id: string,
  imageSrc: string,
  tooltipLabel: (locale: Locale) => string,
  description?: (locale: Locale) => string,
};

export const Friends: FriendPicture[] = [
  {
    id: 'asil',
    imageSrc: asilImgSrc,
    tooltipLabel: (locale: Locale) => Messages.asilTooltipLabel[locale],
    description: (locale: Locale) => Messages.asilTooltipLabel[locale],
  },
  {
    id: 'cissa',
    imageSrc: cissaImgSrc,
    tooltipLabel: (locale: Locale) => Messages.cissaTooltipLabel[locale],
    description: (locale: Locale) => Messages.cissaTooltipLabel[locale],
  },
  {
    id: 'curzon',
    imageSrc: curzonImgSrc,
    tooltipLabel: (locale: Locale) => Messages.curzonTooltipLabel[locale],
    description: (locale: Locale) => Messages.curzonTooltipLabel[locale],
  },
  {
    id: 'family',
    imageSrc: familyImgSrc,
    tooltipLabel: (locale: Locale) => Messages.familyTooltipLabel[locale],
    description: (locale: Locale) => Messages.familyTooltipLabel[locale],
  },
  {
    id: 'johnAsil',
    imageSrc: johnAsilImgSrc,
    tooltipLabel: (locale: Locale) => Messages.johnAndAsilTooltipLabel[locale],
    description: (locale: Locale) => Messages.johnAndAsilTooltipLabel[locale],
  },
  {
    id: 'josh',
    imageSrc: joshImgSrc,
    tooltipLabel: (locale: Locale) => Messages.joshTooltipLabel[locale],
    description: (locale: Locale) => Messages.joshTooltipLabel[locale],
  },
  {
    id: 'mihirBev',
    imageSrc: mihirBevImgSrc,
    tooltipLabel: (locale: Locale) => Messages.mihirAndBevTooltipLabel[locale],
    description: (locale: Locale) => Messages.mihirAndBevTooltipLabel[locale],
  },
  {
    id: 'rohyl',
    imageSrc: rohylImgSrc,
    tooltipLabel: (locale: Locale) => Messages.rohylTooltipLabel[locale],
    description: (locale: Locale) => Messages.rohylTooltipLabel[locale],
  },
  {
    id: 'stefan',
    imageSrc: stefanImgSrc,
    tooltipLabel: (locale: Locale) => Messages.stefanTooltipLabel[locale],
    description: (locale: Locale) => Messages.stefanTooltipLabel[locale],
  },
  {
    id: 'shevon',
    imageSrc: shevonImgSrc,
    tooltipLabel: (locale: Locale) => Messages.shevonTooltipLabel[locale],
    description: (locale: Locale) => Messages.shevonTooltipLabel[locale],
  },
];

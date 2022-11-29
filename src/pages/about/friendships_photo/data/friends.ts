import { Locale } from '../../../../util/localisation/locale_provider';
import { FriendsMessages as Messages } from './friends.messages';
import asilImgSrc from './photos/asil.png';
import cissaImgSrc from './photos/cissa.png';
import curzonImgSrc from './photos/curzon.png';
import familyImgSrc from './photos/family.png';
import johnAsilImgSrc from './photos/john_asil.png';
import joshImgSrc from './photos/josh.png';
import mihirBevImgSrc from './photos/mihir_bev.png';
import shevonImgSrc from './photos/shevon.png';
import stefanImgSrc from './photos/stefan.png';

type FriendPicture = {
  id: string,
  imageSrc: string,
  tooltipLabel: (locale: Locale) => string,
  tooltipDirection: 'top' | 'bottom' | 'left' | 'right',
  description?: (locale: Locale) => string,
};

export const Friends: FriendPicture[] = [
  {
    id: 'cissa',
    imageSrc: cissaImgSrc,
    tooltipLabel: (locale: Locale) => Messages.cissaTooltipLabel[locale],
    tooltipDirection: 'top',
    description: (locale: Locale) => Messages.cissaDesc[locale],
  },
  {
    id: 'asil',
    imageSrc: asilImgSrc,
    tooltipLabel: (locale: Locale) => Messages.asilTooltipLabel[locale],
    tooltipDirection: 'right',
    description: (locale: Locale) => Messages.asilDesc[locale],
  },
  {
    id: 'johnAsil',
    imageSrc: johnAsilImgSrc,
    tooltipLabel: (locale: Locale) => Messages.johnAndAsilTooltipLabel[locale],
    tooltipDirection: 'top',
    description: (locale: Locale) => Messages.johnAndAsilDesc[locale],
  },
  {
    id: 'josh',
    imageSrc: joshImgSrc,
    tooltipLabel: (locale: Locale) => Messages.joshTooltipLabel[locale],
    tooltipDirection: 'top',
    description: (locale: Locale) => Messages.joshDesc[locale],
  },
  {
    id: 'curzon',
    imageSrc: curzonImgSrc,
    tooltipLabel: (locale: Locale) => Messages.curzonTooltipLabel[locale],
    tooltipDirection: 'left',
    description: (locale: Locale) => Messages.curzonDesc[locale],
  },
  {
    id: 'shevon',
    imageSrc: shevonImgSrc,
    tooltipLabel: (locale: Locale) => Messages.shevonTooltipLabel[locale],
    tooltipDirection: 'bottom',
    description: (locale: Locale) => Messages.shevonDesc[locale],
  },
  {
    id: 'family',
    imageSrc: familyImgSrc,
    tooltipLabel: (locale: Locale) => Messages.familyTooltipLabel[locale],
    tooltipDirection: 'bottom',
    description: (locale: Locale) => Messages.familyDesc[locale],
  },
  {
    id: 'stefan',
    imageSrc: stefanImgSrc,
    tooltipLabel: (locale: Locale) => Messages.stefanTooltipLabel[locale],
    tooltipDirection: 'left',
    description: (locale: Locale) => Messages.stefanDesc[locale],
  },
  {
    id: 'mihirBev',
    imageSrc: mihirBevImgSrc,
    tooltipLabel: (locale: Locale) => Messages.mihirAndBevTooltipLabel[locale],
    tooltipDirection: 'bottom',
    description: (locale: Locale) => Messages.mihirAndBevDesc[locale],
  },
];

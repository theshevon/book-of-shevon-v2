import { importAll } from '../../../util/image_importer/image_importer';
import { Locale } from '../../../util/localisation/locale_provider';
import type { CreativeCategoryProps } from '../creative_category/creative_category';

import { CreativeCategoriesMessages as Messages } from './creative_categories.messages';

export const CreativeCategories: CreativeCategoryProps[] = [
  {
    name: (locale: Locale) => Messages.art[locale],
    sections: [
      {
        name: (locale: Locale) => Messages.handDrawn[locale],
        images: importAll(require.context('./assets/art/hand_drawn', false, /\.(png|jpe?g|svg)$/)),
      },
      {
        name: (locale: Locale) => Messages.models[locale],
        subSections: [
          {
            name: (locale: Locale) => Messages.eternalSunshineTitle[locale],
            desc: (locale: Locale) => Messages.eternalSunshineDesc[locale],
            images: importAll(require.context('./assets/art/models/visual_seq', false, /\.(png|jpe?g|svg)$/)),
          },
          {
            name: (locale: Locale) => Messages.invertedRipplesTitle[locale],
            desc: (locale: Locale) => Messages.invertedRipplesDesc[locale],
            images: importAll(require.context('./assets/art/models/terrain', false, /\.(png|jpe?g|svg)$/)),
          },
        ],
      },
    ],
  },
  {
    name: (locale: Locale) => Messages.photography[locale],
    sections: [
      {
        name: (locale: Locale) => Messages.southKoreaTitle[locale],
        images: importAll(require.context('./assets/photography/south_korea', false, /\.(png|jpe?g|svg)$/)),
      },
      {
        name: (locale: Locale) => Messages.misc[locale],
        images: importAll(require.context('./assets/photography/misc', false, /\.(png|jpe?g|svg)$/)),
      },
    ],
  },
];

import { importAll } from '../../../util/image_importer/image_importer';
import type { CreativeCategoryProps } from '../creative_category/creative_category';

import { CreativeCategoriesMessages as Messages } from './creative_categories.messages';

export const CreativeCategories: CreativeCategoryProps[] = [
  {
    name: Messages.art(),
    sections: [
      {
        name: Messages.handDrawn(),
        images: importAll(require.context('./assets/art/hand_drawn', false, /\.(png|jpe?g|svg)$/)),
      },
      {
        name: Messages.models(),
        subSections: [
          {
            name: Messages.eternalSunshineTitle(),
            desc: Messages.eternalSunshineDesc(),
            images: importAll(require.context('./assets/art/models/visual_seq', false, /\.(png|jpe?g|svg)$/)),
          },
          {
            name: Messages.invertedRipplesTitle(),
            desc: Messages.invertedRipplesDesc(),
            images: importAll(require.context('./assets/art/models/terrain', false, /\.(png|jpe?g|svg)$/)),
          },
        ],
      },
    ],
  },
  {
    name: Messages.photography(),
    sections: [
      {
        name: Messages.southKoreaTitle(),
        desc: Messages.southKoreaDesc(),
        images: importAll(require.context('./assets/photography/south_korea', false, /\.(png|jpe?g|svg)$/)),
      },
      {
        name: Messages.misc(),
        images: importAll(require.context('./assets/photography/misc', false, /\.(png|jpe?g|svg)$/)),
      },
    ],
  },
];

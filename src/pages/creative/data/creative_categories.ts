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
            name: Messages.eternalSunshine(),
            // TODO: Add this to messages file
            desc: 'A visual sequence I created as my submission for Project 2 of Making Movies 1. Special thanks to Lideschi for helping bring life to these models',
            images: importAll(require.context('./assets/art/models/visual_seq', false, /\.(png|jpe?g|svg)$/)),
          },
          {
            name: Messages.invertedRipples(),
            desc: 'A model I built as my submission for the \'Pattern vs Surface\' of Foundations of Design: Representation',
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
        name: Messages.southKorea(),
        // TODO: Add this to messages file
        desc: 'I\'d like to thank my friends Adam and Michael for convincing me to go on this unforgettable trip',
        images: importAll(require.context('./assets/photography/south_korea', false, /\.(png|jpe?g|svg)$/)),
      },
      {
        name: Messages.misc(),
        images: importAll(require.context('./assets/photography/misc', false, /\.(png|jpe?g|svg)$/)),
      },
    ],
  },
];

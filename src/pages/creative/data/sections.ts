import type { SectionProps } from '../section/section';

import { importAll } from '../../../util/image_importer/image_importer';

import { SectionsMessages as Messages } from './sections.messages';

export const Sections: SectionProps[] = [
  {
    name: Messages.art(),
    subSections: [
      {
        name: Messages.handDrawn(),
        images: importAll(require.context('./assets/art/hand_drawn', false, /\.(png|jpe?g|svg)$/)),
      },
      {
        name: Messages.models(),
        subSections: [
          {
            name: Messages.terrain(),
            images: importAll(require.context('./assets/art/models/terrain', false, /\.(png|jpe?g|svg)$/)),
          },
          {
            name: Messages.visualSeq(),
            // TODO: Add this to messages file
            desc: 'Special thanks to my friend, Lideschi Silva, for helping bring life to these models',
            images: importAll(require.context('./assets/art/models/visual_seq', false, /\.(png|jpe?g|svg)$/)),
          },
        ],
      },
    ],
  },
  {
    name: Messages.photography(),
    subSections: [
      {
        name: Messages.misc(),
        images: importAll(require.context('./assets/photography/misc', false, /\.(png|jpe?g|svg)$/)),
      },
      {
        name: Messages.southKorea(),
        // TODO: Add this to messages file
        desc: 'I\'d like to thank my friends Adam and Michael for convincing me to go on this unforgettable trip',
        images: importAll(require.context('./assets/photography/south_korea', false, /\.(png|jpe?g|svg)$/)),
      },
    ],
  },
];

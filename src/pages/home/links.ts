import { GitHubIconDefinition } from '../../ui/icons/definitions/github';
import { LinkedInIconDefinition } from '../../ui/icons/definitions/linkedin';
import { MediumIconDefinition } from '../../ui/icons/definitions/medium';
import { TikTokIconDefinition } from '../../ui/icons/definitions/tiktok';
import { YouTubeIconDefinition } from '../../ui/icons/definitions/youtube';
import { IconLinkProps } from '../../ui/link/link';

export const Links: IconLinkProps[] = [
  {
    url: 'https://github.com/theshevon',
    iconDefinition: GitHubIconDefinition,
  },
  {
    url: 'https://www.linkedin.com/in/mendiss',
    iconDefinition: LinkedInIconDefinition,
  },
  {
    url: 'https://medium.com/@shevon_mendis',
    iconDefinition: MediumIconDefinition,
  },
  {
    url: 'https://www.youtube.com/channel/UCkL1cYAWa9Wsx6xDT2H8zOg?view_as=subscriber',
    iconDefinition: YouTubeIconDefinition,
  },
  {
    url: 'https://www.tiktok.com/@shevywestside',
    iconDefinition: TikTokIconDefinition,
  },
];

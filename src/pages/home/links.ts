import { GitHubIconDefition } from '../../ui/icons/definitions/github';
import { LinkedInIconDefition } from '../../ui/icons/definitions/linkedin';
import { MediumIconDefition } from '../../ui/icons/definitions/medium';
import { TiktokIconDefition } from '../../ui/icons/definitions/tiktok';
import { YouTubeIconDefition } from '../../ui/icons/definitions/youtube';
import { IconLinkProps } from '../../ui/link/link';

export const Links: IconLinkProps[] = [
  {
    url: 'https://github.com/theshevon',
    iconDefinition: GitHubIconDefition,
  },
  {
    url: 'https://www.linkedin.com/in/mendiss',
    iconDefinition: LinkedInIconDefition,
  },
  {
    url: 'https://medium.com/@shevon_mendis',
    iconDefinition: MediumIconDefition,
  },
  {
    url: 'https://www.youtube.com/channel/UCkL1cYAWa9Wsx6xDT2H8zOg?view_as=subscriber',
    iconDefinition: YouTubeIconDefition,
  },
  {
    url: 'https://www.tiktok.com/@shevywestside',
    iconDefinition: TiktokIconDefition,
  },
];

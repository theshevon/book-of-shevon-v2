import {
	faGithub,
	faLinkedin,
	faMedium,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import { IconLinkProps } from '../../ui/link/link';

export const Links: IconLinkProps[] = [
	{
		url: 'https://github.com/theshevon',
		icon: faGithub,
	},
	{
		url: 'https://www.linkedin.com/in/mendiss',
		icon: faLinkedin,
	},
	{
		url: 'https://medium.com/@shevon_mendis',
		icon: faMedium,
	},
	{
		url: 'https://www.youtube.com/channel/UCkL1cYAWa9Wsx6xDT2H8zOg?view_as=subscriber',
		icon: faYoutube,
	}
];

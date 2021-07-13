import {
	faGithub,
	faLinkedin,
	faMedium,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import { IconLinkProps as Link } from './icon_link/icon_link';

export const Links: Link[] = [
	{
		type:	'web',
		href: 'https://github.com/theshevon',
		icon: faGithub,
	},
	{
		type: 'web',
		href: 'https://www.linkedin.com/in/mendiss',
		icon: faLinkedin,
	},
	{
		type: 'web',
		href: 'https://medium.com/@shevon_mendis',
		icon: faMedium,
	},
	{
		type: 'web',
		href: 'https://www.youtube.com/channel/UCkL1cYAWa9Wsx6xDT2H8zOg?view_as=subscriber',
		icon: faYoutube,
	}
];

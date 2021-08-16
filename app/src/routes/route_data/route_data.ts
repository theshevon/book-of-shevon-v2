import { Routes } from './routes';
import { RouteDataMessages as Messages } from './route_data.messages';

export type RouteData = {
	pathname: string,
	label: string,
	index: number,
}

export const RoutesData: RouteData[] = [
	{
		pathname: Routes.ABOUT,
		label: Messages.about(),
		index: -1,
	},
	{
		pathname: Routes.HOME,
		label: Messages.home(),
		index: 0,
	},
	{
    pathname: Routes.PROJECTS,
    label: Messages.projects(),
    index: 1,
	},
	{
    pathname: Routes.BLOG,
    label: Messages.blog(),
    index: 1,
	},
];

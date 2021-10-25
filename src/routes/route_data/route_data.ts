import { Routes } from './../routes';
import { RouteDataMessages as Messages } from './route_data.messages';

export type RouteData = {
	path: string,
	label: string,
	index: number,
}

export const RoutesData: RouteData[] = [
	{
		path: Routes.CREATIVE,
		label: Messages.creative(),
		index: -2,
	},
	{
		path: Routes.ABOUT,
		label: Messages.about(),
		index: -1,
	},
	{
		path: Routes.HOME,
		label: Messages.home(),
		index: 0,
	},
	{
    path: Routes.PROJECTS,
    label: Messages.projects(),
    index: 1,
	},
	{
    path: Routes.BLOG,
    label: Messages.blog(),
    index: 2,
	},
];

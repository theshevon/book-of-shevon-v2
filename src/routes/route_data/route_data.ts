import { Locale } from '../../util/localisation/locale_provider';
import { Routes } from './../routes';
import { RouteDataMessages as Messages } from './route_data.messages';

export type RouteData = {
	path: string,
	label: (locale: Locale) => string,
	index: number,
}

export const RoutesData: RouteData[] = [
  {
    path: Routes.CREATIVE,
    label: (locale: Locale) => Messages.creative[locale],
    index: -2,
  },
  {
    path: Routes.ABOUT,
    label: (locale: Locale) => Messages.about[locale],
    index: -1,
  },
  {
    path: Routes.HOME,
    label: (locale: Locale) => Messages.home[locale],
    index: 0,
  },
  {
    path: Routes.PROJECTS,
    label: (locale: Locale) => Messages.projects[locale],
    index: 1,
  },
  {
    path: Routes.BLOG,
    label: (locale: Locale) => Messages.blog[locale],
    index: 2,
  },
];

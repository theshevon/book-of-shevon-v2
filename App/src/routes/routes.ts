import { RoutesMessages } from "./routes.messages";

export type Route = {
    route: string,
    label: string,
    index: number,
}

export const Routes: Route[] = [
    {
        route: '/',
        label: RoutesMessages.Home(),
        index: 1,
    },
    {
        route: '/old-about',
        label: 'Old ' + RoutesMessages.About(),
        index: -1,
    },
    {
        route: '/new-about',
        label: 'New ' + RoutesMessages.About(),
        index: -1,
    },
];
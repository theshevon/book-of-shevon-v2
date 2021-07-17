import { RoutesMessages } from "./routes.messages";

export type Route = {
    route: string,
    label: string,
    index: number,
}

export const Routes: Route[] = [
    {
        route: '/about',
        label: RoutesMessages.About(),
        index: -1,
    },
    {
        route: '/',
        label: RoutesMessages.Home(),
        index: 1,
    },
];
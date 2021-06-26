import { RoutesMessages } from "./routes.messages";

export type Route = {
    route: string,
    label: string,
    index: number,
}

export const Routes = [
    {
        route: '/',
        label: RoutesMessages.Home(),
        index: 1,
    }
];
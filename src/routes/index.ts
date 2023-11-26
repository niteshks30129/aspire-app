// Loadable Routes with Error Boundary

import { MainScreenProps } from '../pages/MainScreen';
import MyCard from '../pages/Card'
import NotFound from '../pages/NotFound';

export interface IRoute {
    // Path, like in basic prop
    path: string;
    // Id, for uniquely identify each Route
    id: string;
    // default, like in basic prop
    default?: boolean;
    // Lazy Loaded component
    component: React.FC<MainScreenProps>;
    // Allowed Permissions, though its an array,
    // the best practice is to have only
    // Sub routes
    routes?: IRoute[];
}

export const routeConfig: IRoute[] = [
    {
        path: '/card',
        id: 'card',
        component: MyCard,
    },
    {
        path: 'no-match',
        default: true,
        id: 'NotFoundRoute',
        component: NotFound,
    },
];

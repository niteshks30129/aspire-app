import { IRoute, routeConfig } from './';
import { BrowserRouter as Router, RouteProps,  Routes, Route} from 'react-router-dom';
import React, { Suspense } from 'react';

import { Spin } from 'antd';
import MainScreen from '../pages/MainScreen';
import NotFound from '../pages/NotFound';

const RouteWithSubRoutes = (route: IRoute) => {
    const { component: Component, routes, id, ...restProps } = route;
    return (
        <Route key={id} {...restProps} element={<Component children={undefined} />}>
            {routes?.map(RouteWithSubRoutes)}
        </Route>
    );
};

const AppRoutes: React.FC<RouteProps> = () => {
    return (
        <Suspense fallback={<Spin />}>
            <Router>
                <MainScreen>
                    <Routes>
                        {routeConfig.map(RouteWithSubRoutes)}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </MainScreen>
            </Router>
        </Suspense>
    );
};

export default AppRoutes;

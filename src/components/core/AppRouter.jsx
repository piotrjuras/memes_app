import React from 'react';
import { BrowserRouter, Routes as BrowserRoutes, Route } from 'react-router-dom';
import { env } from '../../helpers/enviroment';
import routes from '../../helpers/routes';

const AppRouter = () => {

    return (
        <BrowserRouter basename={ env.routerBasename }>
            <BrowserRoutes>
                {routes.map(({ name, path, component }, index) => <Route key={ index } path={ path } element={ component } /> )}
            </BrowserRoutes>
        </BrowserRouter>
    )
}

export default AppRouter;
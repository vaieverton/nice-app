import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home/index';
import CreatePoint from './pages/CreatePoin/index';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={CreatePoint} path="/create-point" />
        </BrowserRouter>
    );
}

export default Routes;
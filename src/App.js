import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

const HomePage = loadable(() => import('./pages/HomePage'));
const MoviePage = loadable(() => import('./pages/MoviePage'));
const NotFound = loadable(() => import('./pages/NotFound'));

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/movies/:movieId" component={MoviePage} />
            <Route component={NotFound} />
        </Switch>
    );
};

export default App;

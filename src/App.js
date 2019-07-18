import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

import ResetStyles from './styles/reset';

const HomePage = loadable(() => import('./pages/HomePage'));
const MoviePage = loadable(() => import('./pages/MoviePage'));
const NotFound = loadable(() => import('./pages/NotFound'));

const App = () => {
    return (
        <>
            <ResetStyles />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route
                    path="/movie/:movieId"
                    render={({ match }) => <MoviePage movieId={match.params.movieId} />}
                />
                <Route component={NotFound} />
            </Switch>
        </>
    );
};

export default App;

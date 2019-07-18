import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import { createGlobalStyle } from 'styled-components';

const HomePage = loadable(() => import('./pages/HomePage'));
const MoviePage = loadable(() => import('./pages/MoviePage'));
const NotFound = loadable(() => import('./pages/NotFound'));

const ResetStyles = createGlobalStyle`
    body {
        margin: 0;
        background-color: ${props => props.theme.white};
        font-family: 'Lato', sans-serif;
    }

    a {
        color: black;
        text-decoration: none;
    }
`;

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

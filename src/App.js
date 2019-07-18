import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import { createGlobalStyle } from 'styled-components';

const HomePage = loadable(() => import('./pages/HomePage'));
const MoviePage = loadable(() => import('./pages/MoviePage'));
const NotFound = loadable(() => import('./pages/NotFound'));

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        background-color: #F5F6F7;
        font-family: 'Lato', sans-serif;
    }

    a {
        color: black;
        text-decoration: none;
    }

    h1 {
        font-size: 50px;
        margin: 50px;
        margin-left: 110px;
        margin-right: 110px;
        padding-bottom: 5px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
`;

const App = () => {
    return (
        <>
            <GlobalStyle />
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

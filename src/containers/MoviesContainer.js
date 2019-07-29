import React from 'react';
import Helmet from 'react-helmet';

import Movie from '../components/Movie';
import { Container } from '../styles/card';
import { MainTitle } from '../styles/title';
import NotFound from '../pages/NotFound';
import LoadingPage from '../pages/LoadingPage';

const MoviesContainer = ({ loading, data, error }) => {
    if (loading) return <LoadingPage />;
    if (error) return <NotFound />;

    return (
        <>
            <Helmet>
                <title>Movies | {'' + data.movies.length}</title>
            </Helmet>
            <MainTitle>Movies</MainTitle>
            <Container>
                {data.movies.map(movie => (
                    <Movie key={movie.id} {...movie} />
                ))}
            </Container>
        </>
    );
};

export default MoviesContainer;

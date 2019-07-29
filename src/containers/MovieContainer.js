import React from 'react';

import MovieDetails from '../components/MovieDetails';
import MovieSuggestions from '../components/MovieSuggestions';
import NotFound from '../pages/NotFound';
import LoadingPage from '../pages/LoadingPage';

const MovieContainer = ({ loading, data, error }) => {
    if (loading) return <LoadingPage />;
    if (error) return <NotFound />;

    return (
        <>
            <MovieDetails {...data.movie} />
            <MovieSuggestions suggestions={data.movieSuggestions} />
        </>
    );
};

export default MovieContainer;

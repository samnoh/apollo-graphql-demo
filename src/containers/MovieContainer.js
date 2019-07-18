import React from 'react';

import MovieDetails from '../components/MovieDetails';
import MovieSuggestions from '../components/MovieSuggestions';

const MovieContainer = ({ loading, data, error }) => {
    if (loading) return 'Loading...';
    if (error) return 'Something went wrong';

    return (
        <>
            <MovieDetails {...data.movie} />
            <MovieSuggestions suggestions={data.movieSuggestions} />
        </>
    );
};

export default MovieContainer;

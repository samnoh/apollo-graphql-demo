import React from 'react';

import MovieDetails from '../components/MovieDetails';

const MovieContainer = ({ loading, data, error, id }) => {
    if (loading) return 'Loading...';
    if (error) return 'Something went wrong';

    return <MovieDetails {...data.movie} id={id} />;
};

export default MovieContainer;

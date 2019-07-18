import React from 'react';
import Helmet from 'react-helmet';

import Movie from '../components/Movie';

const MoviesContainer = ({ loading, data, error }) => {
    if (loading) return 'Loading...';
    if (error) return 'Something went wrong';

    return (
        <>
            <Helmet>
                <title>Movies | {'' + data.movies.length}</title>
            </Helmet>
            {data.movies.map(movie => (
                <Movie key={movie.id} {...movie} />
            ))}
        </>
    );
};

export default MoviesContainer;

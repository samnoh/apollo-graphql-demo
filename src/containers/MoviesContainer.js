import React from 'react';

import Movie from '../components/Movie';

const MoviesContainer = ({ loading, data, error }) => {
    if (loading) return 'Loading...';
    if (error) return 'Something went wrong';

    return data.movies.map(movie => <Movie {...movie} />);
};

export default MoviesContainer;

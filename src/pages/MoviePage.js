import React from 'react';
import { Query } from 'react-apollo';

import { MOVIE_PAGE } from '../apollo/queries';
import MovieContainer from '../containers/MovieContainer';

const Movie = ({ movieId }) => {
    return (
        <Query query={MOVIE_PAGE} variables={{ movieId: +movieId }}>
            {props => <MovieContainer id={movieId} {...props} />}
        </Query>
    );
};

export default Movie;

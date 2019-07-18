import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Movie from '../components/Movie';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 0.7fr);
    flex-wrap: wrap;
    justify-items: center;
`;

const MoviesContainer = ({ loading, data, error }) => {
    if (loading) return 'Loading...';
    if (error) return 'Something went wrong';

    return (
        <>
            <Helmet>
                <title>Movies | {'' + data.movies.length}</title>
            </Helmet>
            <h1>Movies</h1>
            <Container>
                {data.movies.map(movie => (
                    <Movie key={movie.id} {...movie} />
                ))}
            </Container>
        </>
    );
};

export default MoviesContainer;

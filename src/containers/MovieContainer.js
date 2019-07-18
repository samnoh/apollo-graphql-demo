import React from 'react';
import { Link } from 'react-router-dom';

import MovieDetails from '../components/MovieDetails';
import { Container, CardContainer, CardImage, CardTitle } from '../styles/card';

import { SubTitle } from '../styles/title';
import trimTitle from '../utils/trimTitle';

const MovieContainer = ({ loading, data, error }) => {
    if (loading) return 'Loading...';
    if (error) return 'Something went wrong';

    return (
        <>
            <MovieDetails {...data.movie} />
            <SubTitle>Suggestions</SubTitle>
            <Container>
                {data.movieSuggestions
                    .slice(0, 3)
                    .map(({ id, title, year, medium_cover_image }) => (
                        <Link to={`/movie/${id}`}>
                            <CardContainer key={id}>
                                <CardImage src={medium_cover_image} alt={title + ' - Poster'} />
                                <CardTitle>
                                    {trimTitle(title)} ({year})
                                </CardTitle>
                            </CardContainer>
                        </Link>
                    ))}
            </Container>
        </>
    );
};

export default MovieContainer;

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import MovieDetails from '../components/MovieDetails';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 0.7fr);
    flex-wrap: wrap;
    justify-items: center;
`;

const CardContainer = styled.div`
    text-align: center;
    background-color: #353a3f;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    padding-bottom: 8px;
    margin-bottom: 50px;
    margin-left: 20px;
    border-radius: 7px;
    transition: 0.3s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
`;

const Card = styled.div`
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
`;

const CardImage = Card.withComponent('img');

const CardTitle = styled.h2`
    color: #e3e4e5;
    font-size: 16px;
    font-weight: 400;
`;

const Suggestions = styled.h2`
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 5px;
    margin: 10px 110px 30px;
`;

const MovieContainer = ({ loading, data, error }) => {
    if (loading) return 'Loading...';
    if (error) return 'Something went wrong';

    return (
        <>
            <MovieDetails {...data.movie} />
            <Suggestions>Suggestions</Suggestions>
            <Container>
                {data.movieSuggestions.slice(0, 3).map(movie => (
                    <Link to={`/movie/${movie.id}`}>
                        <CardContainer key={movie.id}>
                            <CardImage
                                src={movie.medium_cover_image}
                                alt={movie.title + ' - Poster'}
                            />
                            <CardTitle>
                                {movie.title} ({movie.year})
                            </CardTitle>
                        </CardContainer>
                    </Link>
                ))}
            </Container>
        </>
    );
};

export default MovieContainer;

import React from 'react';
import { Link } from 'react-router-dom';

import { Container, CardContainer, CardImage, CardTitle } from '../styles/card';
import { SubTitle } from '../styles/title';
import trimTitle from '../utils/trimTitle';

const MovieSuggestions = ({ suggestions }) => {
    return (
        <>
            <SubTitle>Suggestions</SubTitle>
            <Container>
                {suggestions.slice(0, 3).map(({ id, title, year, medium_cover_image }) => (
                    <Link to={`/movie/${id}`} key={id}>
                        <CardContainer>
                            <CardImage src={medium_cover_image} alt={`${title} - Poster`} />
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

export default MovieSuggestions;

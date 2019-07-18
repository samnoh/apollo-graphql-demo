import React from 'react';
import { Link } from 'react-router-dom';

import trimTitle from '../utils/trimTitle';
import { CardContainer, CardImage, CardTitle } from '../styles/card';

const Movie = ({ id, title, rating, medium_cover_image, year }) => {
    const cardTitle = `${trimTitle(title)} (${year})`;

    return (
        <Link to={`/movie/${id}`}>
            <CardContainer>
                <CardImage src={medium_cover_image} alt={`${title} - Poster`} />
                <CardTitle>{cardTitle}</CardTitle>
            </CardContainer>
        </Link>
    );
};

export default Movie;

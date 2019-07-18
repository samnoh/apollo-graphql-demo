import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardContainer = styled.div`
    text-align: center;
    background-color: #353a3f;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    padding-bottom: 8px;
    margin-bottom: 50px;
    margin-left: 25px;
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

const Movie = ({ id, title, rating, medium_cover_image, year }) => {
    const cardTitle = `${title.length > 20 ? title.slice(0, 20) + '...' : title} (${year})`;

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

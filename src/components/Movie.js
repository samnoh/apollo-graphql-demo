import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ id, title, rating, medium_cover_image }) => {
    return (
        <Link to={`/movie/${id}`}>
            <h2>
                {title} / {rating}
            </h2>
            <img src={medium_cover_image} alt={`${title} - Poster`} />
        </Link>
    );
};

export default Movie;
import React from 'react';

const Movie = ({ title, rating, medium_cover_image }) => {
    return (
        <>
            <h2>
                {title} / {rating}
            </h2>
            <img src={medium_cover_image} alt={`${title} - Poster`} />
        </>
    );
};

export default Movie;

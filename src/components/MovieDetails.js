import React from 'react';

const MovieDetails = ({ id, title, rating, medium_cover_image, language }) => {
    return (
        <>
            <h2>
                {title} / {rating}
            </h2>
            <img src={medium_cover_image} alt={`${title} - Poster`} />
            <br />
            {language}
        </>
    );
};

export default MovieDetails;

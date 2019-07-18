import React from 'react';
import Helmet from 'react-helmet';

const MovieDetails = ({ title, rating, medium_cover_image, language }) => {
    return (
        <>
            <Helmet>
                <title>
                    {title} - {'' + rating}
                </title>
            </Helmet>
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

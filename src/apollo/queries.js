import gql from 'graphql-tag';

export const HOME_PAGE = gql`
    {
        movies(limit: 50, rating: 7) {
            id
            title
            year
            rating
            medium_cover_image
        }
    }
`;

export const MOVIE_PAGE = gql`
    query movie($movieId: Int!) {
        movie(id: $movieId) {
            title
            year
            rating
            language
            medium_cover_image
            description_intro
        }
        movieSuggestions(id: $movieId) {
            id
            title
            year
            medium_cover_image
        }
    }
`;

import gql from 'graphql-tag';

export const HOME_PAGE = gql`
    {
        movies(limit: 50, rating: 7) {
            id
            title
            rating
            medium_cover_image
        }
    }
`;

export const MOVIE_PAGE = gql`
    query movie($movieId: Int!) {
        movie(id: $movieId) {
            title
            rating
            medium_cover_image
            language
        }
    }
`;

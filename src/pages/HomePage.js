import React from 'react';
import { Query } from 'react-apollo';

import { HOME_PAGE } from '../apollo/queries';
import MoviesContainer from '../containers/MoviesContainer';

const HomePage = () => {
    return <Query query={HOME_PAGE}>{props => <MoviesContainer {...props} />}</Query>;
};

export default HomePage;

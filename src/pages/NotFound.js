import React from 'react';
import { withRouter } from 'react-router-dom';

import { MainTitle } from '../styles/title';
import { BackButton } from '../styles/buttons';

const NotFound = ({ history }) => {
    return (
        <>
            <div onClick={() => history.goBack()}>
                <BackButton>
                    <i className="fas fa-chevron-left fa-sm" /> Back
                </BackButton>
            </div>
            <MainTitle>Not Found - 404</MainTitle>
        </>
    );
};

export default withRouter(NotFound);

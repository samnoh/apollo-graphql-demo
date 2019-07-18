import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { MainTitle } from '../styles/title';
import { boxShadow } from '../styles/mixins';
import { BackButton } from '../styles/buttons';

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Image = styled.img`
    width: 300px;
    flex-shrink: 0;
    border-radius: 7px;
    ${boxShadow}
`;

const Info = styled.div`
    color: gray;
    text-align: right;
`;

const Rating = styled.div`
    margin-top: 5px;
    font-weight: 600;
    font-size: 28px;
`;

const Year = styled.span`
    font-size: 16px;
    vertical-align: 10%;
    color: gray;
    margin-left: 3px;
`;

const Description = styled.p`
    margin: 50px 120px;
    font-weight: 400;
    color: gray;
    text-align: justify;
`;

const MovieDetails = ({
    title,
    year,
    rating,
    medium_cover_image,
    language,
    description_intro,
    history
}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [title, year]); // just in case of the same titles :)
    return (
        <>
            <Helmet>
                <title>
                    {title} ({'' + year}) - {'' + rating}
                </title>
            </Helmet>
            <div onClick={() => history.goBack()}>
                <BackButton>
                    <i className="fas fa-chevron-left fa-sm" /> Back
                </BackButton>
            </div>
            <MainTitle>
                {title} <Year>{year}</Year>
            </MainTitle>
            <Container>
                <div>
                    <Image src={medium_cover_image} alt={`${title} - Poster`} />
                    <Info>
                        <Rating>{rating.toFixed(1)}</Rating>
                        <div>{language}</div>
                    </Info>
                </div>
            </Container>
            <Description>{description_intro}</Description>
        </>
    );
};

export default withRouter(MovieDetails);

import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Image = styled.img`
    width: 300px;
    flex-shrink: 0;
    border-radius: 7px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
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

const BackButton = styled.button`
    cursor: pointer;
    position: absolute;
    top: 17px;
    margin-left: 105px;
    border: none;
    background-color: transparent;
    font-size: 17px;
    color: gray;
    font-weight: 400;
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
    return (
        <>
            <Helmet>
                <title>
                    {title} - {'' + rating}
                </title>
            </Helmet>
            <div onClick={() => history.goBack()}>
                <BackButton>
                    <i className="fas fa-chevron-left fa-sm" /> Back
                </BackButton>
            </div>
            <h1>
                {title} <Year>{year}</Year>
            </h1>
            <Container>
                <div>
                    <Image src={medium_cover_image} alt={`${title} - Poster`} />
                    <Info>
                        <Rating>{rating}</Rating>
                        <div>{language}</div>
                    </Info>
                </div>
            </Container>
            <Description>{description_intro}</Description>
        </>
    );
};

export default withRouter(MovieDetails);

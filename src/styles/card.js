import styled from 'styled-components';

import { boxShadow } from '../styles/mixins';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 0.7fr);
    flex-wrap: wrap;
    justify-items: center;
`;

export const CardContainer = styled.div`
    text-align: center;
    background-color: ${props => props.theme.black};
    ${boxShadow}
    padding-bottom: 8px;
    margin-bottom: 50px;
    margin-left: 25px;
    border-radius: 7px;
    transition: 0.3s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
`;

export const Card = styled.div`
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
`;

export const CardImage = Card.withComponent('img');

export const CardTitle = styled.h2`
    color: ${props => props.theme.gray};
    font-size: 16px;
    font-weight: 400;
`;

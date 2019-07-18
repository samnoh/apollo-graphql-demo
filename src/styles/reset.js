import { createGlobalStyle } from 'styled-components';

const ResetStyles = createGlobalStyle`
    body {
        margin: 0;
        background-color: ${props => props.theme.white};
        font-family: 'Lato', sans-serif;
    }

    a {
        color: black;
        text-decoration: none;
    }
`;

export default ResetStyles;

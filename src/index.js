import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';

import App from './App';
import * as serviceWorker from './serviceWorker';
import apolloClient from './apollo/apolloClient';
import theme from './styles/theme';

ReactDOM.render(
    <ApolloProvider client={apolloClient}>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </ApolloProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

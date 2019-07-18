# Apollo + GraphQL Demo

-   react-apollo
-   react-router-dom
-   react-helmet
-   @loadable/component

## TIL

### react-appolo

-   Install
    -   apollo-boost: a minimal config way to start using Apollo Client

```Shell
npm install --save apollo-boost react-apollo graphql-tag graphql
```

-   Apollo Client

```JavaScript
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: 'http://localhost:4000' // GraphQL server
});
```

-   Apollo Provider

```JavaScript
import { ApolloProvider } from 'react-apollo';
import apolloClient from './apolloClient';

ReactDOM.render(
    <ApolloProvider client={apolloClient}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);
```

### Apollo Client Dev Tools

-   [Chrome Extension](https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm)

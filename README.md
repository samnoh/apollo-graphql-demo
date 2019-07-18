# Apollo + GraphQL Demo

-   react-apollo
-   react-router-dom
-   react-helmet
-   @loadable/component

## TIL

```Shell
npm install --save apollo-boost react-apollo graphql-tag graphql
```

### apollo-boost

-   Apollo Client
    -   A minimal config way to start using Apollo Client

```JavaScript
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: 'http://localhost:4000' // GraphQL server
});
```

### react-appolo

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

-   Query

```JavaScript
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const query = gql`
...
`

const TestPage = () => {
    return (
        <Query query={query} variables={{id: id}}>
            {({loading, data, error}) => {
                ...
            }}
        </Query>
    )
}
```

### graphql-tag

-   Query without variables

```JavaScript
import gql from 'graphql-tag';

export const HOME_PAGE = gql`
    {
        movies(limit: 10) {
            ...
        }
    }
`;
```

-   Query with variables

```JavaScript
export const MOVIE_PAGE = gql`
    query movie($movieId: Int!) {
        movie(id: $movieId) {
            ...
        }
    }
`;
```

### Apollo Client Dev Tools

-   [Chrome Extension](https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm)

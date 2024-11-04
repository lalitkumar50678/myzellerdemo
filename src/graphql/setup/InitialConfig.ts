import { ApolloClient, InMemoryCache,createHttpLink } from '@apollo/client';
import { setContext } from "apollo-link-context";

const httpLink = createHttpLink({
  uri: 'https://prrwjjssnvhpbcdwbcwx3nm3zm.appsync-api.ap-southeast-2.amazonaws.com/graphql',
});

const authLink = setContext((_, { headers }) => {
    return {
    headers: {
      ...headers,
      'X-API-Key': 'da2-6y6arb7mwvgrnmds2jignrgr2u',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;

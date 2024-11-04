import { ApolloClient, InMemoryCache,createHttpLink } from '@apollo/client';
import { setContext } from "apollo-link-context";
//import {BASE_URL, API_KEY} from '@env'

const httpLink = createHttpLink({
  uri: 'https://prrwjjssnvhpbcdwbcwx3nm3zm.appsync-api.ap-southeast-2.amazonaws.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  //const token = sessionStorage.getItem('token');
  console.log("Header in AppSync ");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      'X-API-Key': 'da2-6y6arb7mwvgrnmds2jignrgr2u',
    },
  };
});
//console.log('BASE_URL -> ',BASE_URL);
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;

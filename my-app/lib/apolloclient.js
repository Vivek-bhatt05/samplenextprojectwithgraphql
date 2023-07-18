// import { ApolloClient, InMemoryCache } from "@apollo/client";

// const apolloClient = new ApolloClient({
//     // uri: 'http://localhost:4000', 
//     uri: 'http://wtbg-wp.bizhueslabs.com/graphql',// Replace with your GraphQL API endpoint
//     cache: new InMemoryCache(),
//   });

// export default apolloClient


import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const GRAPHQL_API_URL = 'http://wtbg-wp.bizhueslabs.com/graphql'; // Replace this with your GraphQL API URL

const httpLink = new HttpLink({
  uri: GRAPHQL_API_URL
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
	uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
});

const apolloClient = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
});

export { apolloClient };

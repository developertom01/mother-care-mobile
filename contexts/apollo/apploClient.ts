import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GRAPHQL_URL } from "../../config/env";

export const apolloClient = new ApolloClient({
    cache: new InMemoryCache({}),
    uri: 'http://167.99.95.243',
})

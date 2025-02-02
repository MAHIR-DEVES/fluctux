import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://fluctux.vercel.app/api/graphql",
  cache: new InMemoryCache(),
});

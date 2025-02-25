import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const uri = "https://fluctux.vercel.app/api/graphql";

const link = createHttpLink({ uri });

export const apolloClient = new ApolloClient({
  // change it to actual base url
  link,
  cache: new InMemoryCache(),
  
});

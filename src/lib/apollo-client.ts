import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  // change it to actual base url
  uri: "https://fluctux.vercel.app/",
  cache: new InMemoryCache(),
  
});

import { ApolloClient, InMemoryCache } from "@apollo/client";


export default new ApolloClient({
  uri: "https://elfdgqx7uk.execute-api.us-west-2.amazonaws.com/graphql/",
  cache: new InMemoryCache(),
  headers: {
    "Content-Type": "application/graphsql",
    "X-API-KEY": "UWv_JBCRCvJdPIygisuuAb35Hj8kqkwUC7jGfQp8",
  },
});

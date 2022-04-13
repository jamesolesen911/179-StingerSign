import { ApolloClient, InMemoryCache } from "@apollo/client";


export default new ApolloClient({
  uri: "https://tz02ey9p4c.execute-api.us-west-2.amazonaws.com/graphql/",
  cache: new InMemoryCache(),
  headers: {
    "Content-Type": "application/graphsql",
    "X-API-KEY": "qhOGVbY6dnhj6TnNy6_BMPJr2CH8FrSknBvUJI-N",
  },
});

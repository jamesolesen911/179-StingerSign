import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import apolloClient from "./Apollo-Setup/ApolloSetup"
import { ApolloProvider } from "@apollo/client";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);


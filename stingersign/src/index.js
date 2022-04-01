import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from "./routes/login";
import Profile from './routes/profile';
import Home from './routes/home';

import "./style.css";
import "./style2.css";
import "./style3.css";

import { Outlet, Link } from "react-router-dom";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://tz02ey9p4c.execute-api.us-west-2.amazonaws.com/graphql/',
  cache: new InMemoryCache(),
  headers: {
    "Content-Type": "application/graphsql",
    "X-API-KEY": "qhOGVbY6dnhj6TnNy6_BMPJr2CH8FrSknBvUJI-N"
  }
});


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="profile" element={<Profile />}>
        </Route>

        <Route path="home" element={<Home />}></Route>

        <Route exact path="/">
          <Route path= "/" element={<Home />} />
        </Route>

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>


  </BrowserRouter>,
  rootElement
  
);

export default function App() {
  return (
    <div>

      <ApolloProvider client={client}>
        <div>
        </div>
      </ApolloProvider>

      <h1>Stinger Sign</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/login">Login</Link> |{" "}
        <Link to="/home">Home</Link> |{" "}
        <Link to="/profile">Profile</Link>

      </nav>
      <Outlet />

    </div>

    
  );
}


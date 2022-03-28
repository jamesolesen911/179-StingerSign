import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";
import Login from "./routes/login";
import Profile from './routes/profile';

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
        <Route path="expenses" element={<Expenses />} />

        <Route path="invoices" element={<Invoices />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an invoice</p>
              </main>
            }
          />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>

        <Route path="profile" element={<Profile />}>
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
          <h2>My first Apollo app 🚀</h2>
        </div>
      </ApolloProvider>

      <h1>Stinger Sign</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/home">Home</Link> |{" "}
        <Link to="/profile">Profile</Link>

      </nav>
      <Outlet />

    </div>

    
  );
}


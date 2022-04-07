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
import Upload from './routes/upload';
import Signature from './routes/signature';

import "./style.css";
import "./style2.css";
import "./style3.css";
import "./upload.css";


import { Outlet, Link } from "react-router-dom";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider} from "@apollo/client";
import ManageDocumentPage from './routes/ManageDocumentPage';

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

        <Route path="login" element={<Login />}></Route>

        <Route path="upload" element={<Upload />}></Route>

        <Route path="signature" element={<Signature />}></Route>

        <Route path="ManageDocument" element={<ManageDocumentPage />}></Route>


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

      <h1>Stinger-Sign</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/login"style={{textDecoration:"none"}}>Login</Link> |{" "} 
        <Link to="/home"style={{textDecoration:"none"}}>Home</Link> |{" "}
        <Link to="/profile"style={{textDecoration:"none"}}>Profile</Link> |{" "}
        <Link to="/upload"style={{textDecoration:"none"}}>Upload</Link> |{" "}
        <Link to="/signature"style={{textDecoration:"none"}}>Signature Required</Link> |{" "}
        <Link to="/ManageDocument"style={{textDecoration:"none"}}>Manage Documents</Link> |



      </nav>
      <Outlet />

    </div>

    
  );
}

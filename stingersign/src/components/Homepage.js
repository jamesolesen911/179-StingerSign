import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {

  return (
    <main style={{ padding: "1rem 0" }}>
    <div>
      <h2> Home Page </h2>

      <Link to="/homepage"style={{textDecoration:"none"}}>Home</Link> |{" "}
      <Link to="/"style={{textDecoration:"none"}}>Login</Link> |{" "} 
      <Link to="/profile"style={{textDecoration:"none"}}>Profile</Link> |{" "}
      <Link to="/upload"style={{textDecoration:"none"}}>Upload</Link> |{" "}
      <Link to="/signature"style={{textDecoration:"none"}}>Signature Required</Link> |{" "}
      <Link to="/ManageDocument"style={{textDecoration:"none"}}>Manage Documents</Link> 
    </div>
    </main>
  );
}

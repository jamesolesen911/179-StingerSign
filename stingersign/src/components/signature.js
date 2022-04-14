import "../styles/style.css";
import "../styles/style2.css";
import "../styles/style3.css";
import { Link } from "react-router-dom";

export default function Signature() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Signature Required</h2>

        <Link to="/"style={{textDecoration:"none"}}>Login</Link> |{" "} 
        <Link to="/homepage"style={{textDecoration:"none"}}>Home</Link> |{" "}
        <Link to="/profile"style={{textDecoration:"none"}}>Profile</Link> |{" "}
        <Link to="/upload"style={{textDecoration:"none"}}>Upload</Link> |{" "}
        <Link to="/signature"style={{textDecoration:"none"}}>Signature Required</Link> |{" "}
        <Link to="/ManageDocument"style={{textDecoration:"none"}}>Manage Documents</Link> |
        


      </main>
    );
  }
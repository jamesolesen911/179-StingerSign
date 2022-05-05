import "../styles/style.css";
import { Link } from "react-router-dom";


export default function ManageDocumentPage() {
    return (
      <div>
      <div id="box3">
      <main style={{ padding: "0.5rem 0" }}>

        <h2>Manage Documents</h2>
        <Link to="/homepage"style={{textDecoration:"none"}}>Home</Link> |{" "}
        <Link to="/"style={{textDecoration:"none"}}>Login</Link> |{" "} 
        <Link to="/profile"style={{textDecoration:"none"}}>Profile</Link> |{" "}
        <Link to="/upload"style={{textDecoration:"none"}}>Upload</Link> |{" "}
        <Link to="/signature"style={{textDecoration:"none"}}>Signature Required</Link> |{" "}
        <Link to="/ManageDocument"style={{textDecoration:"none"}}>Manage Documents</Link> 
      </main>
      </div>
      </div>
    );
  }
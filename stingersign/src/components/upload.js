import "../styles/upload.css"
import { Link } from "react-router-dom";

//export const routes upload = ({}) => {
export default function Upload() {

    return(
        <form method="post" action="#" id="#">
        <main style={{ padding: "1rem 0" }}>
        <h2>Upload Files</h2>
        <Link to="/homepage"style={{textDecoration:"none"}}>Home</Link> |{" "}
        <Link to="/"style={{textDecoration:"none"}}>Login</Link> |{" "} 
        <Link to="/profile"style={{textDecoration:"none"}}>Profile</Link> |{" "}
        <Link to="/upload"style={{textDecoration:"none"}}>Upload</Link> |{" "}
        <Link to="/signature"style={{textDecoration:"none"}}>Signature Required</Link> |{" "}
        <Link to="/ManageDocument"style={{textDecoration:"none"}}>Manage Documents</Link> |
        
           
        <div 
        className="form-group files">
          <input type="file" className="form-control" multiple=""/>
        </div>
      <button>Submit</button>
      </main>
    </form> 
    )
}
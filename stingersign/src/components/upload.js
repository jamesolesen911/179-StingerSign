import "../styles/upload.css"
import { Link } from "react-router-dom";

//export const routes upload = ({}) => {
export default function Upload() {

    return(
        <form method="post" action="#" id="#">
      
        <Link to="/homepage"style={{textDecoration:"none"}}>Home</Link> |{" "}
        <Link to="/"style={{textDecoration:"none"}}>Login</Link> |{" "} 
        <Link to="/profile"style={{textDecoration:"none"}}>Profile</Link> |{" "}
        <Link to="/upload"style={{textDecoration:"none"}}>Upload</Link> |{" "}
        <Link to="/signature"style={{textDecoration:"none"}}>Signature Required</Link> |{" "}
        <Link to="/ManageDocument"style={{textDecoration:"none"}}>Manage Documents</Link> |
              
              
              
        <div 
        className="form-group files">
          <label>Upload Your File </label><br></br>
          <input type="file" className="form-control" multiple=""/>
        </div>
        
      <button>Submit</button>
    </form> 
    )
}
import React, {useEffect } from 'react';
import "../styles/style.css";
import "../styles/style2.css";
import "../styles/style3.css";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GET_FILES } from "../GraphQL/Query";

export default function Signature() {
  const { error, loading, data } = useQuery(GET_FILES);

    function handleSubmit(e) {
      e.preventDefault();
      console.log(data)
      getFileList();
    }
    const links =[]
    const getFileList = () => {
      console.log("getting the list relax son")
      data.listVendia_FileItems.Vendia_FileItems.map((file) => {
        console.log(file._id)
        links.push(file.temporaryUrl)
        console.log(links)
      })
    };
    
    function FileList(props) {
     
      return (
        <div style={{class: "container", display: "flex", flexDirection:"column", justifyContent: "space-between", padding: "10px" }}> 
          <div style={{alignSelf: "flex-start", borderWidth: "1px", borderStyle:"solid", width: "80%"}}>
          <div style={{alignSelf: "flex-start", width: "80%"}}>
            <h4>This is a document</h4>
            <a href={props.temporaryUrl} target="_blank" rel="noreferrer">
              props.file
            </a>
          </div>
        </div> 
      </div>
      );


    }
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Signature Required</h2>

        <Link to="/homepage"style={{textDecoration:"none"}}>Home</Link> |{" "}
        <Link to="/"style={{textDecoration:"none"}}>Login</Link> |{" "} 
        <Link to="/profile"style={{textDecoration:"none"}}>Profile</Link> |{" "}
        <Link to="/upload"style={{textDecoration:"none"}}>Upload</Link> |{" "}
        <Link to="/signature"style={{textDecoration:"none"}}>Signature Required</Link> |{" "}
        <Link to="/ManageDocument"style={{textDecoration:"none"}}>Manage Documents</Link> |
        
        <FileList />
  
        <button style={{ width: "20%"}} onClick={handleSubmit}>Submit Signature</button>
      </main>
    );
  }

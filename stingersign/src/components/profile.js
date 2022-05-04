import React, { useCallback, useState, useEffect } from "react";
import "../styles/style.css";
import "../styles/style2.css";
import "../styles/style3.css";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { FIRST_AND_LAST_NAME_FOR_ALL_USERS } from "../GraphQL/Query";

const loggedIn = window.localStorage.getItem("state");

const initValues = {
  email: "",
  password: "",
  test: "TESTING"
};


export default function Profile() {

const [loggedInUser, setLoggedInUser] = useState();  

const { error, loading, data } = useQuery(FIRST_AND_LAST_NAME_FOR_ALL_USERS);

  useEffect(() => {

    const loggedIn = window.localStorage.getItem("state");
    
    const getLoggedUser = () =>{
      let tempUserHolder = null;
      if(data){
      data.list_ProfileItems._ProfileItems.map((user) => {
        if (user.Email === loggedIn) {
          tempUserHolder = user;
          setLoggedInUser(tempUserHolder);
        }
          });
      
       } }
        getLoggedUser();
        console.log(data);

  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (

    <main style={{ padding: "1rem 0" }}>

      <h2>Profile</h2>
      <Link to="/homepage"style={{textDecoration:"none"}}>Home</Link> |{" "}
      <Link to="/"style={{textDecoration:"none"}}>Login</Link> |{" "} 
      <Link to="/profile"style={{textDecoration:"none"}}>Profile</Link> |{" "}
      <Link to="/upload"style={{textDecoration:"none"}}>Upload</Link> |{" "}
      <Link to="/signature"style={{textDecoration:"none"}}>Signature Required</Link> |{" "}
      <Link to="/ManageDocument"style={{textDecoration:"none"}}>Manage Documents</Link> |

      <br></br><br></br><br></br>
      {loggedInUser ? ( 
        <div>
        <label htmlFor ="FirstName">First Name</label> <br></br>
        <input type="text" id="FirstName" name="fname" placeholder={loggedInUser.FirstName}></input><br></br><br></br>
        <label htmlFor ="MiddleName">Middle Name (Optional)</label> <br></br>
        <input type="text" id="MiddleName" name="mname" placeholder={loggedInUser.MiddleName}></input><br></br><br></br>
        <label htmlFor ="LastName">Last Name</label> <br></br>
        <input type="text" id="LastName" name="lname" placeholder={loggedInUser.LastName}></input><br></br><br></br>
        <label htmlFor ="email">Email </label> <br></br>
        <input type="text" id="email" name="email" placeholder={loggedInUser.Email} ></input><br></br><br></br>
        <label htmlFor ="nickname">Nickname </label> <br></br>
        <input type="text" id="nickname" name="nickname" placeholder={loggedInUser.Nickname}></input><br></br><br></br>
        <label htmlFor ="phoneNumber">PhoneNumber </label> <br></br>
        <input type="text" id="phoneNumber" name="phoneNumber" placeholder={loggedInUser.PhoneNumber}></input><br></br><br></br>
        </div>
      ): <p>No user logged in.</p> }
    </main>
  );
}

  
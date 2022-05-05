import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { FIRST_AND_LAST_NAME_FOR_ALL_USERS } from "../GraphQL/Query";
import { Link } from "react-router-dom";

import "../styles/style.css";

const initValues = {
  email: "",
  password: "",
  test: "TESTING"
};

export default function Login() {
  const { error, loading, data } = useQuery(FIRST_AND_LAST_NAME_FOR_ALL_USERS);
  const [loggedInUser, setLoggedInUser] = useState();
  const [formValues, setFormValues] = useState(initValues);
  const [formError, setFormError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleChange = (e) => {
    setFormError("");
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(data)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkIfUserIsRegistered();
  };

  const handlePassword = (e) => {
    setFormError("");
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(data)
  }


  const checkIfUserIsRegistered = () => {
    let tempUserHolder = null;
    data.list_ProfileItems._ProfileItems.map((user) => {
      if (user.Email === formValues.email && user.Password === formValues.password) {
        console.log("User Found");
        setLoginSuccess("Logged In Successfully");
        window.localStorage.setItem("state" , user.Email);
        tempUserHolder = user;
        setLoggedInUser(tempUserHolder);
      }
    });

    if (!tempUserHolder) {
      console.log("User Not Found");
      setFormError("Email or Password is incorrect!");
    }
  };

  return (
    <div style={{class: "container", display: "flex", flexDirection:"column", justifyContent: "space-between", padding: "10px" }}> 
    <div style={{alignSelf: "flex-start", borderWidth: "1px", borderStyle:"solid", width: "100%"}}>
    <div style={{alignSelf: "flex-start", width: "100%"}}>
    <main style={{ padding: "1rem 0" }}>
    <div>
      <h1 className="login-header"> LOG IN </h1>
      <hr></hr> <br></br>
      <form onSubmit={handleSubmit}>
        {loggedInUser ? (
          <p>
            {" "}
            The Logged In User is: {loggedInUser.FirstName}{" "}
            {loggedInUser.LastName}{" "}
          </p>
        ) : (
          <>
            <label>Email:  </label><br />
            <input
              type="email"
              placeholder=" Email"
              name="email"
              onChange={handleChange}
            />
            <br />
            <br></br>
            <label>Password:  </label><br />
            <input type="password" placeholder=" Password" name="password" onChange={handlePassword} />
            <br />
            <p>{formError}</p>
            <p>{loginSuccess}</p>
            <br></br>
            <button style={{ width: "7%"}} type="submit"> Log In </button>
          </>
        )}
      </form>
      <br></br>
      <hr></hr>
      <Link to="/signup">
        <p> Click here to sign up! </p>
      </Link>

      <Link to="/homepage">
        <p>Click here if already logged in</p>
      </Link>
    </div>
    </main>
    </div>
    </div> 
    </div>
  );
}

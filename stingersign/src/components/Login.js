import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { FIRST_AND_LAST_NAME_FOR_ALL_USERS } from "../GraphQL/Query";
import { Link } from "react-router-dom";

import "../styles/style.css";
import "../styles/style2.css";
import "../styles/style3.css";

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

  const checkIfUserIsRegistered = () => {
    let tempUserHolder = null;
    data.list_ProfileItems._ProfileItems.map((user) => {
      if (user.Email === formValues.email) {
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
    <main style={{ padding: "1rem 0" }}>
    <div>
      <h2 className="login-header"> Stinger-Sign Log In </h2>
      <form onSubmit={handleSubmit}>
        {loggedInUser ? (
          <p>
            {" "}
            The Logged In User is: {loggedInUser.FirstName}{" "}
            {loggedInUser.LastName}{" "}
          </p>
        ) : (
          <>
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <br />
            <label>Password</label>
            <input type="password" placeholder="Password" />
            <br />
            <p>{formError}</p>
            <p>{loginSuccess}</p>
            <button type="submit"> Log In </button>
          </>
        )}
      </form>

      <Link to="/signup">
        <p> Click here to sign up! </p>
      </Link>

      <Link to="/homepage">
        <p>Click here if already logged in</p>
      </Link>
    </div>
    </main>
  );
}

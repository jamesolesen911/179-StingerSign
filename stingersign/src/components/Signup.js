import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { ADD_NEW_USER } from "../GraphQL/Mutation";
import {FIRST_AND_LAST_NAME_FOR_ALL_USERS } from "../GraphQL/Query";

const initValues = {
  firstName: "",
  middleName: "",
  lastName: "", 
  phoneNumber: "",
  nickname: "",
  email: "",
  password: "",
};

let valid = true;


export default function Signup() {
  const [addNewUser, { loading }] = useMutation(ADD_NEW_USER);
  const [formValues, setFormValues] = useState(initValues);
  const { error, data } = useQuery(FIRST_AND_LAST_NAME_FOR_ALL_USERS);
  const [formError, setFormError] = useState("");

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleError = (e) => {
    console.log("User Not added.");
    setFormError("New User not created. Account already exists.");
  }

  const handleBadCredentials = (e) => {
    console.log("Email or password left blank.");
    setFormError("Cannot leave email or password blank.");
  }

  const handleSubmit = (e) => {

    e.preventDefault();
    
    if(formValues.email === '' || formValues.password === '')
    {
      valid = false;
      handleBadCredentials();
    }

    data.list_ProfileItems._ProfileItems.map((user) => {
      if (user.Email === formValues.email) {
        console.log("User with same email found");
        setFormError("Email already in use");
        valid = false;
      }
    });

    if(valid === true){
    addNewUser({
      variables: {
        Email: formValues.email,
        Password: formValues.password,
        FirstName: formValues.firstName,
        MiddleName: formValues.middleName,
        LastName: formValues.lastName,
        Nickname: formValues.nickname,
        PhoneNumber: formValues.phoneNumber
      }
    })
    console.log("Added User");
  }

  else{
    console.log("Not submitted");
  }

  };

  

  return (
    <div id="box2">
      <main style={{ padding: "0.5rem 0" }}>
      <h1> SIGN UP </h1><hr></hr><br></br>
      <form onSubmit={handleSubmit}>
        <label>First Name: </label>
        <input type="text" placeholder=" First Name" name="firstName" onChange={handleChange}/>
        <br /><br></br>
        <label>Middle Name: </label>
        <input type="text" placeholder=" Middle Name" name="middleName"onChange={handleChange} />
        <br /><br></br>
        <label>Last Name: </label>
        <input type="text" placeholder=" Last Name" name="lastName" onChange={handleChange}/>
        <br /><br></br>
        <label>Phone Number: </label>
        <input type="text" placeholder=" Phone Number" name="phoneNumber" onChange={handleChange}/>
        <br /><br></br>
        <label>Nickname: </label>
        <input type="text" placeholder=" Nickname" name="nickname" onChange={handleChange}/>
        <br /><br></br>
        <label>Email: </label>
        <input type="email" placeholder=" Email" name="email"onChange={handleChange}/>
        <br /><br></br>
        <label>Password: </label>
        <input type="password" placeholder=" Password" name="password" onChange={handleChange}/>
        <br /><br></br>
        <button style={{ width: "25%"}} type="submit"> Create Account </button>
        <p>{formError}</p>
      </form>
      <br></br><hr></hr>
      <Link to="/">
        <p> Already have an account? Log in</p>
      </Link>
      </main>
    </div>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_NEW_USER } from "../GraphQL/Mutation";

const initValues = {
  firstName: "",
  middleName: "",
  lastName: "", 
  phoneNumber: "",
  nickname: "",
  email: "",
  password: "",
};

export default function Signup() {
  const [addNewUser, { loading }] = useMutation(ADD_NEW_USER);
  const [formValues, setFormValues] = useState(initValues);

  if (loading) return <div>Loading</div>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = () => {
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
  };

  return (
    <div style={{class: "container", display: "flex", flexDirection:"column", justifyContent: "space-between", padding: "10px", width:"500px", height:"500px" }}> 
    <div style={{alignSelf: "flex-start", borderWidth: "1px", borderStyle:"solid", width: "100%"}}>
    <div style={{alignSelf: "flex-start", width: "100%"}}>
    <div>
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
      </form>
      <br></br><hr></hr>
      <Link to="/">
        <p> Already have an account? Log in</p>
      </Link>
    </div>
    </div>
    </div> 
  </div>
  );
}

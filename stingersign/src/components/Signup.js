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
    <div>
      <h2> Stinger-Sign Sign Up </h2>
      <form onSubmit={handleSubmit}>
        <label>First Name: </label>
        <input type="text" placeholder="First Name" name="firstName" onChange={handleChange}/>
        <br />
        <label>Middle Name: </label>
        <input type="text" placeholder="Middle Name" name="middleName"onChange={handleChange} />
        <br />
        <label>Last Name: </label>
        <input type="text" placeholder="Last Name" name="lastName" onChange={handleChange}/>
        <br />
        <label>Phone Number: </label>
        <input type="text" placeholder="Phone Number" name="phoneNumber" onChange={handleChange}/>
        <br />
        <label>Nickname: </label>
        <input type="text" placeholder="Nickname" name="nickname" onChange={handleChange}/>
        <br />
        <label>Email: </label>
        <input type="email" placeholder="Email" name="email"onChange={handleChange}/>
        <br />
        <label>Password: </label>
        <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
        <br />
        <button type="submit"> Create Account </button>
      </form>

      <Link to="/">
        <p> Already have an account? Log in</p>
      </Link>
    </div>
  );
}

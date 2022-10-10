
// import React from 'react';
  
// const SignUp = () => {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'Right',
//         alignItems: 'Right',
//         height: '100vh'
//       }}
//     >
//       <h1>Sign Up</h1>
//     </div>
//   );
// };
  
// export default SignUp;

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function signUp() {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
    });
    const handleChange = (e) => {
      setInputs((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };
    const sendRequest = async () => {
      const res = await axios
        .post("/users/signUp", {
          firstName: inputs.firstName,
          lastName: inputs.lastName,
          email: inputs.email,
          password: inputs.password,
          confirmPassword: inputs.confirmPassword,
          phoneNumber: inputs.phoneNumber,
        })
        .catch((err) => console.log(err));
      const data = await res.data;
      return data;
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      // send http request
      sendRequest().then(() => history("/activate"));
    };

  return (
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" >
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name="firstName" onChange={handleChange} placeholder="First Name" />
        </Form.Group>
        <Form.Group className="mb-3" >
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" name='lastName' onChange={handleChange} placeholder="Last Name" />
        </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" onChange={handleChange} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" onChange={handleChange} placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" name="confirmPassword" onChange={handleChange} placeholder="Confirm Password" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" name='phoneNumber' onChange={handleChange} placeholder="Phone Number" />
        </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary"  type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default signUp;
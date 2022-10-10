import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function login() {
  const history = useNavigate();
    const [inputs, setInputs] = useState({
      email: "",
      password: "",
      
    });
    const handleChange = (e) => {
      setInputs((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };
    const sendRequest = async () => {
      const res = await axios
        .post("/users/login", {
          email: inputs.email,
          password: inputs.password,
        })
        .then((res)=>{console.log(res);})
        .catch((err) => console.log(err));
      // const data = await res.data;
      // console.log(data)
      // return data;
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      // send http request
      sendRequest().then(() => history("/home"));
    };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" onChange={handleChange} placeholder="Enter email" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" onChange={handleChange} placeholder="Password" />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default login;
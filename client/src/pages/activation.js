import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function activate() {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
      email: "",
      code: "",
      
    });
    const handleChange = (e) => {
      setInputs((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };
    const sendRequest = async () => {
      const res = await axios
        .patch("/users/activate", {
          email: inputs.email,
          code: inputs.code,
        })
        .catch((err) => console.log(err));
      // const data = await res.data;
      // return data;
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      // send http request
      sendRequest().then(() => history("/signin"));
    };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" onChange={handleChange} placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Activation Code</Form.Label>
        <Form.Control type="text" name="code" onChange={handleChange} placeholder="Activation Code" />
        </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default activate;
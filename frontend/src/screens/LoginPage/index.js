import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";
import { Form, FormGroup, Label, Input, SubmitButton } from "./style";

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, dispatch, isFetching } = useContext(Context);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // ...

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/login",
        {
          username,
          password,
        }
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
      console.log("Login success:", response.data);

      setUsername("");
      setPassword("");
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="username">Username:</Label>
        <Input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password:</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </FormGroup>
      <SubmitButton type="submit">Log In</SubmitButton>
    </Form>
  );
};

export default LoginForm;

import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button`
  border: 3px double #ff3333;
  border-radius: 10px;
  background: honeydew;
  padding: 5px;
  width: 120px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0;
`;

const FormField = styled.div`
  margin-bottom: 15px;
`;

class Login extends Component {
  state = {};

  authenticate() {
    window.sessionStorage.setItem("isAuthenticated", "true");
    alert("Authentication successful");
  }

  hasAuthenticated() {
    return window.sessionStorage.getItem("isAuthenticated") === "true";
  }

  logOut() {
    window.sessionStorage.setItem("isAuthenticated", "false");
    alert("Logout successful");
  }
  render() {
    return this.hasAuthenticated() ? (
      <React.Fragment>
        <h1>Welcome user !!</h1>
        <Button type="button" onClick={this.logOut}>
          Logout
        </Button>
      </React.Fragment>
    ) : (
      <form
        style={{
          background: "whitesmoke",
          padding: "20px",
          border: "2px dotted royalblue",
        }}
        onSubmit={this.authenticate}
      >
        <FormField>
          <FormLabel htmlFor="username">User ID:</FormLabel>
          <input type="text" size="30" aria-label="User ID Input" name="uid" />
        </FormField>
        <FormField>
          <FormLabel htmlFor="password">Password:</FormLabel>
          <input
            type="password"
            aria-label="Password Input"
            size="30"
            name="password"
          />
        </FormField>
        <FormField style={{ textAlign: "center" }}>
          <Button type="submit">Sign In</Button>
        </FormField>
      </form>
    );
  }
}

export default Login;

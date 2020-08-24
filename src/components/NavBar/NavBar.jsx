import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavSection = styled.nav`
  display: flex;
  background: gray;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 10px;
  // & > * {
  //   flex: 1 0;
  // }
`;

export default function NavBar() {
  const navLinks = {
    textDecoration: "none",
    color: "#fff",
    ":hover": {
      color: "orange",
    },
  };
  return (
    <NavSection>
      <NavLink style={navLinks} to="/login">
        Login
      </NavLink>
      <NavLink style={navLinks} to="/forgot">
        Forgot
      </NavLink>
      <NavLink style={navLinks} to="/register">
        Register
      </NavLink>
      <NavLink style={navLinks} to="/address">
        Address
      </NavLink>
      <NavLink style={navLinks} to="/list">
        List
      </NavLink>
      <NavLink style={navLinks} to="/">
        Home
      </NavLink>
    </NavSection>
  );
}

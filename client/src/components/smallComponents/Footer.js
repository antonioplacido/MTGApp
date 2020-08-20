import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Wrapper>
      <Buttons>
        <Login href="#login">Login</Login>
        <Register href="#register">Register</Register>
      </Buttons>
    </Wrapper>
  );
}

const Login = styled.a`
  border-radius: 2px;
  color: black;
`;

const Register = styled.a`
  border-radius: 2px;
`;

const Buttons = styled.div`
  float: center;
  display: flex;
  justify-content: center;
  a {
    padding: 4px 8px;
    text-decoration: none;
  }
`;

const Wrapper = styled.div`
  padding: 26px 28px 22px 28px;
  font-size: 1em;
`;

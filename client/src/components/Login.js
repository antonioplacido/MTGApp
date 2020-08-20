import React from "react";
import Footer from "../components/smallComponents/Footer";
import Header from "../components/smallComponents/Header";
import styled from "styled-components";

export default function Login() {
  return (
    <Wrapper>
      <Form>
        <Header />
        <Subtitle>Login or Register</Subtitle>
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        <Footer />
      </Form>
    </Wrapper>
  );
}

const Form = styled.div`
  padding: 18px 28px 0 28px;
  background-color: white;
  input {
    font-size: 1.05em;
    font-weight: 300;
    margin-top: 18px;
    padding: 10px 8px;
    width: 288px;
  }
`;

const Subtitle = styled.div`
  padding-top: 10px;
  font-size: 0.92em;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  width: 360px;
  height: auto;
  color: black;
  border: 1px solid #161616;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.3);
  */ input {
    font-size: 1.05em;
    font-weight: 300;
    margin-top: 18px;
    padding: 10px 8px;
    width: 288px;
  }
`;

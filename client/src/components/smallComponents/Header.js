import React, { useContext } from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import { AuthContext } from "../AuthContext";
import { useHistory } from "react-router-dom";

export default function Header() {
  const authContext = useContext(AuthContext);
  const history = useHistory();
  function signOut() {
    authContext.handleSignOut();
    history.push("/");
  }
  return (
    <Wrapper>
      <SignAndGreeting>
        {authContext.appUser && <button onClick={signOut}>Sign Out</button>}
      </SignAndGreeting>
      <Title>Tolarian</Title>
      <NavBar />
    </Wrapper>
  );
}

const Title = styled.span`
  font-size: 50px;
`;

const Wrapper = styled.div`
  height: 46px;
  border-bottom: 1px solid #161616;
  margin-bottom: 80px;
  line-height: 46px;
  font-size: 1.5em;
  font-weight: 600;
  text-align: center;
`;

const SignAndGreeting = styled.div`
  button {
    padding: 6px;
    position: absolute;
    left: 10px;
    top: 10px;
  }
`;

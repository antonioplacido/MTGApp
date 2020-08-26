import React from "react";
import Header from "../components/smallComponents/Header";
import styled from "styled-components";
import { useSelector } from "react-redux";

export default function Homepage() {
  const { isLoggedIn } = useSelector((state) => state.isLogged);
  return (
    <Wrapper>
      <Header />
      <Content>{isLoggedIn ? <div>you can see this</div> : ""}</Content>
    </Wrapper>
  );
}

const Content = styled.div`
  padding: 20px;
`;

const Wrapper = styled.div``;

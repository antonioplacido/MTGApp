import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <Wrapper>
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

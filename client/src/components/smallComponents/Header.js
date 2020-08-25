import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Wrapper>
      <Title>
        <span>Tolarian</span>
      </Title>
      <Nav>
        <span>Home</span>
        <span>Commanders</span>
        <span>Library</span>
        <span>Create Deck</span>
        <span>Trade</span>
        <span>Wishlist</span>
        <span>Stats</span>
      </Nav>
    </Wrapper>
  );
}

const Nav = styled.div`
  border-bottom: 1px solid #161616;
  line-height: 46px;
  justify-content: space-around;
  display: flex;
`;

const Title = styled.div`
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

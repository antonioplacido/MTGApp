import React from "react";
import styled from "styled-components";

export default function NavBar() {
  return (
    <Wrapper>
      {" "}
      <span>Home</span>
      <span>Commanders</span>
      <span>Library</span>
      <span>Create Deck</span>
      <span>Trade</span>
      <span>Wishlist</span>
      <span>Stats</span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-bottom: 1px solid #161616;
  line-height: 46px;
  justify-content: space-around;
  display: flex;
`;

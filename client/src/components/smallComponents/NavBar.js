import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Wrapper>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/commander">Commanders</NavLink>
      <NavLink to="/library">Library</NavLink>
      <NavLink to="/create">Deck</NavLink>
      <NavLink to="/trade">Trade</NavLink>
      <NavLink to="/wishlist">Wishlist</NavLink>
      <NavLink to="/stats">Stats</NavLink>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-bottom: 1px solid #161616;
  line-height: 46px;
  justify-content: space-around;
  display: flex;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  display: block;
  color: black;
  span {
    opacity: 100%;
  }
`;

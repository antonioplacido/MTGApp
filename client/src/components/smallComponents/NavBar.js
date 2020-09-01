import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Wrapper>
      <NavLink to="/home" activeClassName="selected">
        Home
      </NavLink>
      <NavLink to="/commander" activeClassName="selected">
        Commanders
      </NavLink>
      <NavLink to="/library" activeClassName="selected">
        Library
      </NavLink>
      <NavLink to="/create" activeClassName="selected">
        Deck
      </NavLink>
      <NavLink to="/trade" activeClassName="selected">
        Collection
      </NavLink>
      <NavLink to="/wishlist" activeClassName="selected">
        Wishlist
      </NavLink>
      {/* <NavLink to="/stats">Stats</NavLink> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-bottom: 1px solid #161616;
  line-height: 46px;
  justify-content: space-around;
  display: flex;
  .selected {
    background-color: lightblue;
    color: white;
    padding: 0 10px;
    border-radius: 4px;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  display: block;
  color: black;
  span {
    opacity: 100%;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

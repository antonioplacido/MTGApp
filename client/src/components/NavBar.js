import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Wrapper>
      <div>put logo here</div>
      <NavLink to="/home">
        <span>Home</span>
      </NavLink>
      <NavLink to="/library">
        <span>Library</span>
      </NavLink>
      <NavLink to="/trade">
        <span>Trade</span>
      </NavLink>
      <NavLink to="/wishlist">
        <span>Wishlist</span>
      </NavLink>
      <NavLink to="/create">
        <span>Create</span>
      </NavLink>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const NavLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  display: block;
  color: black;
  span {
    opacity: 100%;
  }
`;

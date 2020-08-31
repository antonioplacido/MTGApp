import React, { useState, useContext, useEffect } from "react";
import Header from "../components/smallComponents/Header";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { AuthContext } from "./AuthContext";

export default function Homepage() {
  const [list, setList] = useState([]);
  const appUser = useContext(AuthContext);

  function getUserList() {
    if (appUser) {
      fetch("/home", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: appUser.email,
        }),
      })
        .then((response) => response.json())
        .then((json) => setList(json.data));
    }
  }
  useEffect(() => {
    getUserList();
    console.log(list);
    console.log(appUser);
  }, [appUser]);

  const state = useSelector((state) => {
    return { authState: state.auth, deckState: state.deck };
  });

  return (
    <Wrapper>
      <Header />
      <button onClick={getUserList()}>CLICK TO POST</button>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

import React, { useState, useContext, useEffect } from "react";
import Header from "../components/smallComponents/Header";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { AuthContext } from "./AuthContext";

export default function Homepage() {
  const [list, setList] = useState([]);
  const appUser = useContext(AuthContext);

  useEffect(() => {
    getUserList();
  }, [appUser]);

  function getUserList() {
    if (appUser) {
      fetch(`/decks/${appUser.appUser}`)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setList(json.data);
        });
    }
  }

  const state = useSelector((state) => {
    return { authState: state.auth, deckState: state.deck };
  });
  return appUser ? (
    <>
      <Wrapper>
        <Header />
        <button onClick={() => getUserList()}>CLICK TO GET</button>
      </Wrapper>
    </>
  ) : (
    <>
      <div>not loaded</div>
    </>
  );
}

const Wrapper = styled.div``;

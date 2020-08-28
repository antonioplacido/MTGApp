import React from "react";
import Header from "../components/smallComponents/Header";
import styled from "styled-components";
import { useSelector } from "react-redux";

export default function Homepage() {
  const state = useSelector((state) => {
    return { authState: state.auth, deckState: state.deck };
  });

  console.log(state);

  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

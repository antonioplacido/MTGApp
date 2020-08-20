import React from "react";
import styled from "styled-components";

//for now we're trying to pull a list of all the planeswalkers

export default function MTGList({ cards }) {
  return (
    <Wrapper>
      {cards.map((c) => (
        <div key={c}>{c}</div>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div``;

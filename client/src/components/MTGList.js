import React from "react";
import styled from "styled-components";

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

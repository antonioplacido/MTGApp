import React from "react";
import styled from "styled-components";

export default function Card({ cards }) {
  const picture = cards;
  const pictures = cards.image_uris;
  console.log(cards);
  console.log(pictures);

  return (
    <Wrapper>
      {cards.map((c) => (
        <div key={c}>{c.name}</div>
      ))}
    </Wrapper>
  );
}

const Imagediv = styled.img`
  height: 100px;
  width: 100px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 350px;
`;

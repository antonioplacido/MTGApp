import React from "react";
import styled from "styled-components";

export default function Card({ cards }) {
  let [first, second] = cards;
  console.log(first);
  console.log(second);

  // need to return each image as HTML to return a nice pretty image

  return (
    <Wrapper>
      {cards.map((c) => (
        <div key={c}>
          {c.name}
          <Buttons>
            <WishlistAdd>Wishlist</WishlistAdd>
            <TradeAdd>Trade</TradeAdd>
            <DeckAdd>Deck</DeckAdd>
          </Buttons>
        </div>
      ))}
    </Wrapper>
  );
}

const WishlistAdd = styled.button``;

const TradeAdd = styled.button``;

const DeckAdd = styled.button``;

const Buttons = styled.div``;

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

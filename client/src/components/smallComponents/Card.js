import React from "react";
import styled from "styled-components";

export default function Card({ cards, imageUri, price, name }) {
  console.log(name);
  console.log(cards);
  return (
    <Wrapper>
      <h1>{name}</h1>
      <p>Price</p>

      {cards.map((c) => {
        console.log(c);
        return (
          <>
            {c.image_uris && <img src={c.image_uris.normal} alt="" />}
            <div key={c}>
              {c.name}
              <Buttons>
                <WishlistAdd>Wishlist</WishlistAdd>
                <TradeAdd>Trade</TradeAdd>
                <DeckAdd>Deck</DeckAdd>
              </Buttons>
            </div>
          </>
        );
      })}
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

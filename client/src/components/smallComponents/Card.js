import React from "react";
import styled from "styled-components";
import { SiAirtable } from "react-icons/si";

export default function Card({ cards }) {
  return (
    <Wrapper>
      {cards.map((c) => {
        return (
          <>
            <CardWrapper>
              {c.image_uris && <img src={c.image_uris.normal} alt="" />}
              {c.image_uris && (
                <div key={c}>
                  <Buttons>
                    <WishlistAdd>Wishlist</WishlistAdd>
                    <TradeAdd>Trade</TradeAdd>
                    {c.type_line.includes("Legendary Creature") && (
                      <CommanderAdd>+</CommanderAdd>
                    )}
                    <DeckAdd>Deck</DeckAdd>
                    <CollectionAdd>Collection</CollectionAdd>
                  </Buttons>
                </div>
              )}
            </CardWrapper>
          </>
        );
      })}
    </Wrapper>
  );
}

const CardWrapper = styled.div`
  display: inline-block;
  padding: 20px;
  img {
    height: 400px;
  }
`;

const CommanderAdd = styled.button`
  background: ${SiAirtable};
`;

const CollectionAdd = styled.button``;

const WishlistAdd = styled.button``;

const TradeAdd = styled.button``;

const DeckAdd = styled.button``;

const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  padding-top: 50px;
  align-items: center;
  height: 350px;
`;

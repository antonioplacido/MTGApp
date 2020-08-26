import React from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { star } from "react-icons-kit/ikons/star";
import { useSelector, useDispatch } from "react-redux";
import { selectCommander } from "../../action";

export default function Card({ cards }) {
  const { hasCommander } = useSelector((state) => state.deck);
  const dispatch = useDispatch();
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
                      <CommanderAdd onClick={() => dispatch(selectCommander)}>
                        <Icon icon={star} />
                      </CommanderAdd>
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

const CommanderAdd = styled.button``;

const CollectionAdd = styled.button``;

const WishlistAdd = styled.button``;

const TradeAdd = styled.button``;

const DeckAdd = styled.button``;

const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 30px;
`;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  padding-top: 50px;
  align-items: center;
  height: 350px;
`;

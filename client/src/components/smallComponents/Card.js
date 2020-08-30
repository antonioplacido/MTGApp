import React from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { star } from "react-icons-kit/ikons/star";
import { trash2 } from "react-icons-kit/feather/trash2";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCommander,
  removeCommander,
  addCardToDeck,
  addCardTrade,
  addCardWishList,
  addCardCollection,
} from "../../action";

export default function Card({ cards }) {
  const state = useSelector((state) => state.deck);
  const dispatch = useDispatch();
  const creatureConditions = [
    "Legendary Creature",
    "Legendary Artifact Creature",
    "Legendary Enchantment Creature",
    "Legendary Planeswalker",
    "Planeswalker",
  ];

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
                    <WishlistAdd onClick={() => dispatch(addCardWishList(c))}>
                      Wishlist
                    </WishlistAdd>
                    {/* <TradeAdd onClick={() => dispatch(addCardTrade(c))}>
                      Trade
                    </TradeAdd> */}
                    {!state.hasCommander &&
                      creatureConditions.some((ele) =>
                        c.type_line.includes(ele)
                      ) && (
                        <CommanderAdd
                          onClick={() => dispatch(selectCommander(c))}
                        >
                          <Icon icon={star} />
                        </CommanderAdd>
                      )}
                    {state.hasCommander &&
                      creatureConditions.some((ele) =>
                        c.type_line.includes(ele)
                      ) && (
                        <CommanderAdd
                          onClick={() => dispatch(removeCommander(c))}
                        >
                          <Icon icon={trash2} />
                        </CommanderAdd>
                      )}
                    {c.color_identity.every((e) =>
                      state.colorIdentity.includes(e)
                    ) && (
                      <DeckAdd onClick={() => dispatch(addCardToDeck(c))}>
                        Deck
                      </DeckAdd>
                    )}
                    <CollectionAdd
                      onClick={() => dispatch(addCardCollection(c))}
                    >
                      Collection
                    </CollectionAdd>
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

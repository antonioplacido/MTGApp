import React, { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "./AuthContext";
import Header from "../components/smallComponents/Header";
import { useSelector, useDispatch } from "react-redux";
import {
  removeCardFromDeck,
  clearDeck,
  saveDeck,
  addCardWishListFromDeck,
} from "../../src/action";
import { Icon } from "react-icons-kit";
import { save } from "react-icons-kit/feather/save";
import { list } from "react-icons-kit/feather/list";
import { trash2 } from "react-icons-kit/feather/trash2";
import { useHistory } from "react-router-dom";

export default function CreatePage() {
  // this page is rendering the DECK page
  const appUser = useContext(AuthContext);
  const createState = useSelector((state) => state.deck);
  const dispatch = useDispatch();
  const history = useHistory();

  function saveCurrentDeck() {
    const decks = createState.decks;
    const userEmail = appUser.appUser;

    if (appUser) {
      fetch("/decks", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          decks: decks,
          email: userEmail,
        }),
      })
        .then((response) => response.json())
        .then(() => {
          history.push("/home");
        });
    }
  }
  return (
    <Wrapper>
      <Header />
      {createState.commanderCard.image && (
        <DeckDrop>
          <LeftSide>
            <CommanderName>{createState.commanderCard.name}</CommanderName>
            {createState.commanderCard.image && (
              <img
                src={createState.commanderCard.image}
                alt="chosen commander"
              ></img>
            )}
            <DeckStats>
              <h2>Deck:{createState.deckSize}</h2>
              <OmegaDelete onClick={() => dispatch(clearDeck())}>
                Clear Deck
              </OmegaDelete>
              <OmegaSave
                onClick={() => {
                  dispatch(saveDeck());
                  saveCurrentDeck();
                }}
              >
                <Icon icon={save} />
              </OmegaSave>
            </DeckStats>
          </LeftSide>
          <RightSide>
            <Subs>
              <div>Name</div>
              <div>Type</div>
              <div>CMC</div>
              <div>Remove/Wishlist</div>
            </Subs>
            {createState.the99.map((c) => {
              return (
                <>
                  {c.cardName && (
                    <CardName>
                      <div>{c.cardName}</div>
                      <div>{c.cardType}</div>
                      <div>{c.cmc}</div>
                      <RemoveCard
                        onClick={() => dispatch(removeCardFromDeck(c))}
                      >
                        <Icon icon={trash2} />
                      </RemoveCard>
                      <WishlistAdd
                        onClick={() => dispatch(addCardWishListFromDeck(c))}
                      >
                        <Icon icon={list} />
                      </WishlistAdd>
                    </CardName>
                  )}
                </>
              );
            })}
          </RightSide>
        </DeckDrop>
      )}
    </Wrapper>
  );
}

const DeckStats = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
`;

const Wrapper = styled.div`
  img {
    height: 400px;
  }
`;

const CardName = styled.div`
  display: flex;
  div {
    width: 20em;
  }
`;

const CommanderName = styled.h1``;

const LeftSide = styled.div`
  display: inline-block;
  padding: 20px;
  img {
    height: 400px;
  }
`;

const RightSide = styled.div`
  padding: 40px;
`;

const DeckDrop = styled.div`
  display: flex;
`;

const RemoveCard = styled.button``;

const WishlistAdd = styled.button``;

const OmegaDelete = styled.button``;

const OmegaSave = styled.button``;

const Subs = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 60px;
`;

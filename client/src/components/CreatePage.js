import React from "react";
import styled from "styled-components";
import Header from "../components/smallComponents/Header";
import { useSelector, useDispatch } from "react-redux";
import { removeCardFromDeck, clearDeck } from "../../src/action";
import { Icon } from "react-icons-kit";
import { trash2 } from "react-icons-kit/feather/trash2";

export default function CreatePage() {
  const state = useSelector((state) => state.deck);
  console.log(state);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Header />
      {state.commanderCard.image && (
        <DeckDrop>
          <LeftSide>
            <CommanderName>{state.commanderCard.name}</CommanderName>
            {state.commanderCard.image && (
              <img src={state.commanderCard.image} alt="chosen commander"></img>
            )}
            <h2>Deck:{state.deckSize}</h2>
            <OmegaDelete onClick={() => dispatch(clearDeck())}>
              Clear Deck
            </OmegaDelete>
          </LeftSide>
          <RightSide>
            <Subs>
              <div>Name</div>
              <div>Type</div>
              <div>CMC</div>
              <div>Remove?</div>
            </Subs>
            {state.the99.map((c) => {
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

const Wrapper = styled.div`
  padding: 20px;
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
  padding: 60px;
`;

const DeckDrop = styled.div`
  display: flex;
`;

const RemoveCard = styled.button``;

const OmegaDelete = styled.button``;

const Subs = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-left: 60px;
`;

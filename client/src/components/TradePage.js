import React from "react";
import Header from "../components/smallComponents/Header";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { trash2 } from "react-icons-kit/feather/trash2";
import { removeCardTrade } from "../../src/action";

export default function TradePage() {
  // currently named "Collection" in our app
  const state = useSelector((state) => state.deck);
  console.log(state);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Header />
      <h1> Collection</h1>
      <Collection>
        {state.trade.map((c) => {
          return (
            <>
              {c.image && (
                <div>
                  <img src={c.image} alt="trade card" />
                  <RemoveCard onClick={() => dispatch(removeCardTrade(c))}>
                    <Icon icon={trash2} />
                  </RemoveCard>
                </div>
              )}
            </>
          );
        })}
      </Collection>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  justify-content: center;
  img {
    height: 400px;
  }
  h1 {
    padding: 20px;
    text-align: center;
    align-items: center;
  }
`;

const Collection = styled.div`
  display: flex;
`;

const RemoveCard = styled.button``;

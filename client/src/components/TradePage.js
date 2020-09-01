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
  width: 100vw;
  img {
    height: 300px;
  }
  h1 {
    padding: 20px;
    text-align: center;
    align-items: center;
  }
`;

const Collection = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  align-items: center;
  text-align: center;
  height: 300px;
`;

const RemoveCard = styled.button``;

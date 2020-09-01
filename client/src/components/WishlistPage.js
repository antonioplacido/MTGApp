import React from "react";
import styled from "styled-components";
import Header from "../components/smallComponents/Header";
import { useSelector, useDispatch } from "react-redux";
import { removeCardWishList } from "../../src/action";
import { Icon } from "react-icons-kit";
import { trash2 } from "react-icons-kit/feather/trash2";
import { send } from "react-icons-kit/feather/send";

export default function WishlistPage() {
  const state = useSelector((state) => state.deck);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Header />
      <h1>Wishlist </h1>
      <Wishlist>
        {state.wishList.map((c) => {
          return (
            <>
              {c.cardName && (
                <CardName>
                  <img src={c.image} alt="wishlist cards" />
                  <div>{c.cardName}</div>
                  <RemoveCard onClick={() => dispatch(removeCardWishList(c))}>
                    <Icon icon={trash2} />
                  </RemoveCard>
                </CardName>
              )}
            </>
          );
        })}
      </Wishlist>
      <ExportButton>
        <Icon icon={send} />
      </ExportButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  align-items: center;
  h1 {
    padding: 20px;
  }
`;

const RemoveCard = styled.button``;

const Wishlist = styled.div`
  justify-content: space-around;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  display: grid;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px 5px;
  text-align: center;
  height: 350px;
`;

const ExportButton = styled.button`
  height: 80px;
  width: 80px;
  position: fixed;
  bottom: -4px;
  right: 10px;
  background-color: #31b0d5;
  color: white;
  border-radius: 4px;
  border-color: #46b8da;
`;

const CardName = styled.div`
  img {
    height: 300px;
  }
`;

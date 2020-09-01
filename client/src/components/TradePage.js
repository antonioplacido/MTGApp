import React, { useContext, useState, useEffect } from "react";
import Header from "../components/smallComponents/Header";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { trash2 } from "react-icons-kit/feather/trash2";
import { removeCardTrade } from "../../src/action";
import { AuthContext } from "./AuthContext";
import { save } from "react-icons-kit/feather/save";
import { useHistory } from "react-router-dom";
import giphy from "../assets/giphy.gif";

export default function TradePage() {
  // currently named "Collection" in our app
  const [wishList, setwishList] = useState([]);
  const state = useSelector((state) => state.deck);
  const appUser = useContext(AuthContext);
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(`/collection/${appUser.appUser}`)
      .then((response) => response.json())
      .then((json) => {
        setwishList(json.data);
        console.log(json, "CHECKING JSON");
        console.log(json.data, "CHECKING JSON.DATA");
        return json;
      })
      .then((json) => {
        setLoading(false);
        console.log(json);
      });
  }, [appUser.appUser]);

  function saveCurrentCollection() {
    const collection = state.trade;
    const userEmail = appUser.appUser;
    if (appUser) {
      fetch("/collection", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          collection: collection,
          email: userEmail,
        }),
      })
        .then((response) => response.json())
        .then(() => {
          history.push("/trade");
        });
    }
  }

  if (loading)
    return <img src={giphy} height="800vh" width="2000vw" alt="Liliana Vess" />;
  console.log(wishList);
  console.log(wishList.collection);
  return appUser.appUser ? (
    <>
      <Wrapper>
        <Header />
        <h1>
          {" "}
          Collection{" "}
          <button onClick={saveCurrentCollection}>
            <Icon icon={save}></Icon>
          </button>
        </h1>
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
        <SavedCollection>
          <h1>Saved</h1>
          {wishList.length > 0 && (
            <DeckThumbnail>
              {wishList.map((d) => {
                return (
                  <>
                    {d.collection.map((e) => {
                      return (
                        <>
                          <WholeCard>
                            <Thumbnail src={e.image} />
                          </WholeCard>
                        </>
                      );
                    })}
                  </>
                );
              })}
            </DeckThumbnail>
          )}
        </SavedCollection>
      </Wrapper>
    </>
  ) : (
    <>
      <div>Please sign in</div>
    </>
  );
}

const WholeCard = styled.div``;

const DeckThumbnail = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(8, minmax(220px, 1fr));
  align-items: center;
  text-align: center;
  height: 300px;
`;

const Thumbnail = styled.img``;

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
  display: inline-grid;
  grid-template-columns: repeat(8, minmax(220px, 1fr));
  align-items: center;
  text-align: center;
  height: 300px;
`;

const SavedCollection = styled.div``;

const RemoveCard = styled.button``;

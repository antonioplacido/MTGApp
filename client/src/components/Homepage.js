import React, { useState, useContext, useEffect } from "react";
import Header from "../components/smallComponents/Header";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { AuthContext } from "./AuthContext";
import giphy from "../assets/giphy.gif";

export default function Homepage() {
  const [list, setList] = useState([]);
  const appUser = useContext(AuthContext);
  const [loading, setLoading] = useState("");

  useEffect(() => {
    setLoading(true);
    console.log("click");
    fetch(`/decks/${appUser.appUser}`)
      .then((response) => response.json())
      .then((json) => {
        setList(json.data);
        return json;
      })
      .then((json) => {
        setLoading(false);
      });
  }, [appUser]);

  function checkList() {
    console.log(list, "CHECKING");
    console.log(appUser);
  }

  if (loading)
    return <img src={giphy} height="800vh" width="2000vw" alt="Liliana Vess" />;

  return appUser ? (
    <>
      <Wrapper>
        <Header />
        <button
          onClick={() => {
            checkList();
          }}
        >
          Please return data
        </button>
        <DeckThumbnail>
          {list.map((d) => {
            return (
              <>
                {d.decks.map((e) => {
                  return (
                    <>
                      <Thumbnail src={e.commander.image} />
                    </>
                  );
                })}
              </>
            );
          })}
        </DeckThumbnail>
        {list.length > 0 && <div>it detected the decks</div>}
      </Wrapper>
    </>
  ) : (
    <>
      <div>not loaded</div>
    </>
  );
}

const Thumbnail = styled.img`
  padding: 40px;
  height: 400px;
`;

const Wrapper = styled.div``;

const DeckThumbnail = styled.div``;

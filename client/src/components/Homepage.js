import React, { useState, useContext, useEffect } from "react";
import Header from "../components/smallComponents/Header";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { AuthContext } from "./AuthContext";
import giphy from "../assets/giphy.gif";

export default function Homepage() {
  const [list, setList] = useState([]);
  const authContext = useContext(AuthContext);
  const [loading, setLoading] = useState("");

  useEffect(() => {
    setLoading(true);
    console.log("click");
    fetch(`/decks/${authContext.appUser}`)
      .then((response) => response.json())
      .then((json) => {
        setList(json.data);
        return json;
      })
      .then((json) => {
        setLoading(false);
      });
  }, [authContext.appUser]);

  function signOut() {
    authContext.handleSignOut();
  }

  function checkList() {
    console.log(list, "CHECKING");
    console.log(authContext);
  }
  if (loading)
    return <img src={giphy} height="800vh" width="2000vw" alt="Liliana Vess" />;

  return authContext.appUser ? (
    <>
      <Wrapper>
        <Header />
        {authContext.appUser && <button onClick={signOut}>Sign Out</button>}
        <DeckThumbnail>
          {list.map((d) => {
            return (
              <>
                {d.decks.map((e) => {
                  return (
                    <>
                      <WholeCard>
                        <Thumbnail src={e.commander.image} />
                      </WholeCard>
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

const WholeCard = styled.div``;

const Wrapper = styled.div``;

const DeckThumbnail = styled.div``;

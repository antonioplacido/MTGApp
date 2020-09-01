import React, { useState, useContext, useEffect } from "react";
import Header from "../components/smallComponents/Header";
import styled from "styled-components";
import { AuthContext } from "./AuthContext";
import giphy from "../assets/giphy.gif";

export default function Homepage() {
  const [list, setList] = useState([]);
  const authContext = useContext(AuthContext);
  const [loading, setLoading] = useState("");
  const [revealdeck, setRevealDeck] = useState(false);

  useEffect(() => {
    setLoading(true);
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

  if (loading)
    return <img src={giphy} height="800vh" width="2000vw" alt="Liliana Vess" />;

  return authContext.appUser ? (
    <>
      <Wrapper>
        <Header />
        {list.length > 0 && (
          <DeckThumbnail>
            {list.map((d) => {
              return (
                <>
                  {d.decks.map((e) => {
                    return (
                      <>
                        <WholeCard>
                          <Thumbnail
                            src={e.commander.image}
                            onClick={() => setRevealDeck(!revealdeck)}
                          />
                          {revealdeck &&
                            e.deck.map((the99) => {
                              return (
                                <>
                                  <DeckCard>
                                    <img src={the99.image} alt="thealtname" />
                                  </DeckCard>
                                </>
                              );
                            })}
                        </WholeCard>
                      </>
                    );
                  })}
                </>
              );
            })}
          </DeckThumbnail>
        )}
      </Wrapper>
    </>
  ) : (
    <>
      <div>Please sign in</div>
    </>
  );
}

const Thumbnail = styled.img`
  padding: 40px;
  height: 400px;
  display: flex;
  cursor: pointer;
`;

const WholeCard = styled.div`
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 2em;
  /* position: relative; */
  display: grid;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px 5px;
  text-align: center;
  height: 350px;
`;

const Wrapper = styled.div``;

const DeckThumbnail = styled.div``;

const DeckCard = styled.div`
  img {
    height: 200px;
    position: relative;
  }
`;

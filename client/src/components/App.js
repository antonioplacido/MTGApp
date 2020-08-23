import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import GlobalStyles from "./GlobalStyles";
import Homepage from "./Homepage";
import StatsPage from "./StatsPage";
import TradePage from "./TradePage";
import WishlistPage from "./WishlistPage";
import CardDatabase from "./CardDatabase";
import axios from "axios";

import Login from "./Login";
import MTGList from "./MTGList";
import Tolarian from "../assets/tolarianacademy.jpg";
import Decks from "./CreateMenu/Decks";
import Pagination from "./Pagination";

function App() {
  const [cards, setCards] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://api.scryfall.com/cards/search?q=legal%3Acommander"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [previousPageUrl, setPreviousPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  // const picture = cards.data.data;

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setNextPageUrl(res.data.next_page);
        setPreviousPageUrl(res.data.previous);
        setCards(res.data.data.map((c) => c.name));
      });

    return () => cancel();
  }, [currentPageUrl]);

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function gotoPrevPage() {
    setCurrentPageUrl(previousPageUrl);
  }

  if (loading) return "Loading...";

  return (
    <>
      <Router>
        <GlobalStyles />
        <Main>
          <Switch>
            <Route exact path="/">
              <LoginWrapper>
                <Login />
              </LoginWrapper>
            </Route>
            <Route exact path="/home">
              <Homepage />
            </Route>
            <Route exact path="/stats">
              <StatsPage />
            </Route>
            <Route exact path="/trade">
              <TradePage cards={cards} />
            </Route>
            <Route exact path="/wishlist">
              <WishlistPage cards={cards} />
            </Route>
            <Route exact path="/collection">
              <CardDatabase cards={cards} />
              <Pagination
                gotoNextPage={nextPageUrl ? gotoNextPage : null}
                gotoPrevPage={previousPageUrl ? gotoPrevPage : null}
              />
            </Route>
          </Switch>
        </Main>
      </Router>
    </>
  );
}

const Main = styled.div``;

const LoginWrapper = styled.div`
  /* height: 100vh;
  width: 100vw;
  position: fixed;

  div::after {
    content: "";
    background: url(${Tolarian}) no-repeat center center fixed;
    background-size: cover;
    opacity: 0.25;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  } */
`;

export default App;

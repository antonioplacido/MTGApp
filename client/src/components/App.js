import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import GlobalStyles from "./GlobalStyles";
import Homepage from "./Homepage";
import StatsPage from "./StatsPage";
import TradePage from "./TradePage";
import WishlistPage from "./WishlistPage";
import CollectionPage from "./CollectionPage";
import axios from "axios";

import Login from "./Login";
import MTGList from "./MTGList";
import Tolarian from "../assets/tolarianacademy.jpg";
import Decks from "./CreateMenu/Decks";

function App() {
  const dispatch = useDispatch();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.scryfall.com/cards/search?q=legal%3Acommander")
      .then((res) => {
        setCards(res.data.data.map((c) => c.name));
      });
  }, []);

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
              <CollectionPage cards={cards} />
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

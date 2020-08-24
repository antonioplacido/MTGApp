import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import GlobalStyles from "./GlobalStyles";
import Homepage from "./Homepage";
import StatsPage from "./StatsPage";
import TradePage from "./TradePage";
import WishlistPage from "./WishlistPage";
import CreatePage from "./CreatePage";
import Library from "./Library";
import axios from "axios";

import Login from "./Login";
import Tolarian from "../assets/tolarianacademy.jpg";
import Pagination from "./Pagination";

function App() {
  const [cards, setCards] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://api.scryfall.com/cards/search?q=legal%3Acommander"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [previousPageUrl, setPreviousPageUrl] = useState();
  const [loading, setLoading] = useState(true);

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
              <Login />
            </Route>
            <Route exact path="/home">
              <Homepage />
            </Route>
            <Route exact path="/create">
              <CreatePage />
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
            <Route exact path="/library">
              <Library cards={cards} />
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

export default App;

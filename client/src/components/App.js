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
import CommanderPage from "./CommanderPage";

function App() {
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
            <Route exact path="/commander">
              <CommanderPage />
            </Route>
            <Route exact path="/stats">
              <StatsPage />
            </Route>
            <Route exact path="/trade">
              <TradePage />
            </Route>
            <Route exact path="/wishlist">
              <WishlistPage />
            </Route>
            <Route exact path="/library">
              <Library />
            </Route>
          </Switch>
        </Main>
      </Router>
    </>
  );
}

const Main = styled.div``;

export default App;

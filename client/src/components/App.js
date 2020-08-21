import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import GlobalStyles from "./GlobalStyles";
import { requestAllData } from "../action";

import Login from "./Login";
import MTGList from "./MTGList";
import Tolarian from "../assets/tolarianacademy.jpg";
import Decks from "./CreateMenu/Decks";

function App() {
  const dispatch = useDispatch();
  const [cards, setCards] = useState(["Teysa", "Yawgmoth"]);

  // useEffect(() => {
  //   dispatch(requestAllData());
  //   fetchAllData()
  //     .then((data) => dispatch(receiveAllData(data)))
  //     .catch((err) => dispatch(receiveDataError(err)));
  // }, [dispatch]);

  return (
    <>
      <Router>
        <GlobalStyles />
        <Main>
          <Switch>
            <Route exact path="/">
              <Wrapper>
                <Login />
              </Wrapper>
            </Route>
            <Route exact path="/create/commander">
              <MTGList cards={cards} />
            </Route>
          </Switch>
        </Main>
      </Router>
    </>
  );
}

const Main = styled.div``;

const Wrapper = styled.div`
  height: 100vh;
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
  }
`;

export default App;

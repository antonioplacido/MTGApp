import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Login from "./Login";
import MTGList from "./MTGList";
import Tolarian from "../assets/tolarianacademy.jpg";

function App() {
  const [cards, setCards] = useState(["Cabal Coffers", "Tolarian Academy"]);
  return (
    <Wrapper>
      <MTGList cards={cards} />
      <Login />
    </Wrapper>
  );
}

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

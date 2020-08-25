import React, { useState, useEffect } from "react";
import Header from "../components/smallComponents/Header";
import axios from "axios";
import Card from "./smallComponents/Card";
import styled from "styled-components";

export default function CommanderPage() {
  // setting my cards on render
  const [cards, setCards] = useState([]);
  const [images, setImages] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://api.scryfall.com/cards/search?q=is%3Acommander"
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
        setCards(res.data.data.map((c) => c));
        setImages(res.data.data.image_uris);
      });

    return () => cancel();
  }, [currentPageUrl]);

  if (loading) return "Loading...";

  return (
    <Wrapper>
      <Header />
      <h1>Commanders</h1>
      <Card cards={cards} image={images} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  h1 {
    padding: 20px;
  }
`;

import React, { useState, useEffect } from "react";
import Header from "../components/smallComponents/Header";
import axios from "axios";
import Card from "./smallComponents/Card";
import giphy from "../assets/giphy.gif";

export default function TradePage() {
  const [cards, setCards] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://api.scryfall.com/cards/search?as=grid&order=name&q=legal%3Acommander"
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

  if (loading)
    return <img src={giphy} height="800vh" width="2000vw" alt="Liliana Vess" />;

  return (
    <div>
      <Header />
      <div>display the trade page</div>
      <Card cards={cards} />
    </div>
  );
}

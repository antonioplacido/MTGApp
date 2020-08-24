import React, { useState, useEffect } from "react";
import Header from "../components/smallComponents/Header";
import axios from "axios";
import Card from "./smallComponents/Card";
import Pagination from "../components/Pagination";

export default function Library() {
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

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function gotoPrevPage() {
    setCurrentPageUrl(previousPageUrl);
  }

  if (loading) return "Loading...";

  return (
    <div>
      <Header />
      <h1> this renders all legal commander cards</h1>
      <Card cards={cards} />
      <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={previousPageUrl ? gotoPrevPage : null}
      />
    </div>
  );
}

import React, { useState, useEffect } from "react";
import Header from "../components/smallComponents/Header";
import axios from "axios";
import Card from "./smallComponents/Card";
import styled from "styled-components";
import giphy from "../assets/giphy.gif";

export default function CommanderPage() {
  const [cards, setCards] = useState([]);
  const [query, setQuery] = useState(null);
  const [currentPageUrl] = useState(
    `https://api.scryfall.com/cards/search?q=is%3Acommander`
  );

  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  let baseUrl = `https://api.scryfall.com/cards/search?q=is%3Acommander`;

  useEffect(() => {
    setLoading(true);
    let cancel;
    if (query) {
      const baseUrl = `https://api.scryfall.com/cards/search?q=is%3Acommander+${query}`;
      axios
        .get(baseUrl, {
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        })
        .then((res) => {
          setLoading(false);
          setCards(res.data.data.map((c) => c));
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .get(baseUrl, {
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        })
        .then((res) => {
          setLoading(false);
          setCards(res.data.data.map((c) => c));
        })
        .catch((err) => {
          console.log(err);
          console.log(baseUrl);
        });
    }

    return () => cancel();
  }, [currentPageUrl, query]);

  if (loading)
    return <img src={giphy} height="800vh" width="2000vw" alt="Liliana Vess" />;

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <Wrapper>
      <Header />
      <SearchBar>
        <h1> Commanders</h1>
        <form onSubmit={getSearch} className="search-form">
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={updateSearch}
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
      </SearchBar>
      <Card cards={cards} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  h1 {
    padding: 20px;
  }
`;

const SearchBar = styled.div`
  padding: 20px;
  text-align: center;
  align-items: center;
  input {
    height: 6vh;
    width: 600px;
    font-size: 30px;
  }
  button {
    height: 6vh;
    font-size: 30px;
  }
`;

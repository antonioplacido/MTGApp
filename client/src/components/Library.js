import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/smallComponents/Header";
import axios from "axios";
import Card from "./smallComponents/Card";
import giphy from "../assets/giphy.gif";

export default function Library() {
  const [cards, setCards] = useState([]);
  const [query, setQuery] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  let baseUrl =
    "https://api.scryfall.com/cards/search?as=grid&order=name&q=f%3Acommander";

  useEffect(() => {
    setLoading(true);
    let cancel;
    if (query) {
      const baseUrl = `https://api.scryfall.com/cards/search?as=grid&order=name&q=${query}`;
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
  }, [query]);

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
        <h1> Library</h1>
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
  justify-content: center;
`;

const SearchBar = styled.div`
  padding: 20px;
  text-align: center;
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

import React from "react";
import Header from "../components/smallComponents/Header";

export default function Library({ cards }) {
  return (
    <div>
      <Header />
      <h1>This shows all legal commander cards</h1>
      {cards.map((c) => (
        <div key={c}>{c}</div>
      ))}
    </div>
  );
}

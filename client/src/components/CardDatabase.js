import React from "react";

export default function CardDatabase({ cards }) {
  return (
    <div>
      {" "}
      <h1>This shows all legal commander cards</h1>
      {""}
      {cards.map((c) => (
        <div key={c}>{c}</div>
      ))}
    </div>
  );
}

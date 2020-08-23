import React from "react";

export default function CardDatabase({ cards }) {
  return (
    <div>
      {cards.map((c) => (
        <div key={c}>{c}</div>
      ))}
    </div>
  );
}

import React from "react";

export default function Card({ cards }) {
  return (
    <div>
      {cards.map((c) => (
        <div key={c}>{c}</div>
      ))}
    </div>
  );
}

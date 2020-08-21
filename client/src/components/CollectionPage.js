import React from "react";

export default function CollectionPage({ cards }) {
  return (
    <div>
      {cards.map((c) => (
        <div key={c}>{c}</div>
      ))}
    </div>
  );
}

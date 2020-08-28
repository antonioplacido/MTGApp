import { useSelector } from "redux";
import appUser from "./AuthContext";
export default function saveDeck() {
  const userEmail = appUser.email;
  fetch("/decks", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      commander: commanderCard,
      the99: the99,
      email: { userEmail },
    }),
  }).then((response) => response.json());
}

/// need to convert the values to reflect state

const state = useSelector((state) => {
  state.auth, state.deck;
});

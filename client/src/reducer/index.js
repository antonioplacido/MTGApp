import { combineReducers } from "redux";

import auth from "./auth-reducer";
import deck from "./deck-reducer";
import isLogged from "./isLogged-reducer";
import wishlist from "./wishlist-reducer";
import collection from "./collection-reducer";
import savedDeck from "./completed-decks-reducer";

export default combineReducers({
  auth,
  deck,
  isLogged,
  savedDeck,
  wishlist,
  collection,
});

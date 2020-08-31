import { combineReducers } from "redux";

import auth from "./auth-reducer";
import deck from "./deck-reducer";
import isLogged from "./isLogged-reducer";

export default combineReducers({
  auth,
  deck,
  isLogged,
});

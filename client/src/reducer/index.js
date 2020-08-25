import { combineReducers } from "redux";

import auth from "./auth-reducer";
import deck from "./deck-reducer";

export default combineReducers({ auth, deck });

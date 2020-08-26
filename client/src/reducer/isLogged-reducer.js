const initialState = {
  isLoggedIn: false,
};

export default function loggedReducer(state = initialState, action) {
  const stateCopy = { ...state };

  switch (action.type) {
    case "SIGN_IN":
      return !state;
    default:
      return state;
  }
}

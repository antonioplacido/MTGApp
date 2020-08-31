const initialState = {
  status: "idle",
  error: null,
  email: null,
  displayname: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

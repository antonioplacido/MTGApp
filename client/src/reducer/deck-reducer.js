const initialState = {
  hasCommander: false,
  colorIdentity: [],
  error: null,
  commanderCard: {},
  the99: [],
  deckSize: 1,
  deckCompleted: false,
};

export default function deckReducer(state = initialState, action) {
  const stateCopy = { ...state };

  switch (action.type) {
    case "ADD_COMMANDER":
      return { ...state, hasCommander: true };
    case "REMOVE_COMMANDER":
      return { ...state, hasCommander: false };
    default:
      return state;
  }
}

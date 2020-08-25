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
    
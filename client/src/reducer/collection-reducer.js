const initialState = {
  binder: [],
  trade: [],
  wishList: [],
  WIP: [],
  decks: [],
};

export default function collectionReducer(state = initialState, action) {
  const stateCopy = { ...state };

  switch (action.type) {
    case "ADD_CARD_TRADE":
      stateCopy.trade.push(action.card.id);
      return stateCopy;
  }
}

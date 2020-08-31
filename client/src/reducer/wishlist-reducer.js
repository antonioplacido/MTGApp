const initialState = [];

export default function wishlistReducer(state = initialState, action) {
  const stateCopy = { ...state };

  switch (action.type) {
    case "ADD_CARD_TRADE":
      stateCopy.trade.push(action.card.id);
      return stateCopy;
    default:
      return stateCopy;
  }
}

const initialState = {
  hasCommander: false,
  colorIdentity: [],
  error: null,
  commanderCard: {},
  the99: [],
  deckSize: 1,
  deckCompleted: false,
  binder: [],
  trade: [],
  wishList: [],
  WIP: [],
  decks: [],
};

export default function deckReducer(state = initialState, action) {
  const stateCopy = { ...state };

  switch (action.type) {
    case "ADD_COMMANDER":
      stateCopy.hasCommander = true;
      stateCopy.colorIdentity = action.card.color_identity;
      stateCopy.commanderCard = {
        ...stateCopy.commanderCard,
        image: action.card.image_uris.normal,
        id: action.card.id,
      };
      return stateCopy;
    case "REMOVE_COMMANDER":
      return {
        ...state,
        hasCommander: false,
        colorIdentity: [],
        commanderCard: {},
      };
    case "ADD_CARD":
      stateCopy.deckSize += 1;
      stateCopy.the99.push(action.card.id);
      return stateCopy;
    case "REMOVE_CARD":
      stateCopy.deckSize -= 1;
      const index = stateCopy.the99.indexOf(action.card.id);
      if (index > -1) {
        stateCopy.the99.splice(index, 1);
      }
      return stateCopy;
    case "ADD_CARD_TRADE":
      stateCopy.trade.push(action.card.id);
      return stateCopy;
    case "REMOVE_CARD_TRADE":
      const tradeIndex = stateCopy.trade.indexOf(action.card.id);
      if (tradeIndex > -1) {
        stateCopy.trade.splice(tradeIndex, 1);
      }
      return stateCopy;
    case "ADD_CARD_WISHLIST":
      stateCopy.wishList.push(action.card.id);
      return stateCopy;
    case "REMOVE_CARD_WISHLIST":
      const wishIndex = stateCopy.wishList.indexOf(action.card.id);
      if (wishIndex > -1) {
        stateCopy.wishList.splice(wishIndex, 1);
      }
      return stateCopy;
    case "CLEAR_DECK":
      return {
        hasCommander: false,
        colorIdentity: [],
        error: null,
        commanderCard: {},
        the99: [],
        deckSize: 1,
        deckCompleted: false,
      };
    default:
      return stateCopy;
  }
}

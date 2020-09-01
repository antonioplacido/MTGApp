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
        name: action.card.name,
      };
      return stateCopy;
    case "REMOVE_COMMANDER":
      return {
        ...state,
        hasCommander: false,
        colorIdentity: [],
        commanderCard: {},
        the99: [],
        deckSize: 1,
      };
    case "ADD_CARD":
      stateCopy.deckSize += 1;
      stateCopy.the99.push({
        id: action.card.id,
        image: action.card.image_uris.normal,
        manacost: action.card.mana_cost,
        colorIdentity: action.card.color_identity,
        cardType: action.card.type_line,
        cardName: action.card.name,
        cmc: action.card.cmc,
      });
      return stateCopy;
    case "REMOVE_CARD":
      stateCopy.deckSize -= 1;
      const index = stateCopy.the99.indexOf(action.card);
      if (index > -1) {
        stateCopy.the99.splice(index, 1);
      }
      return stateCopy;
    case "ADD_CARD_TRADE":
      stateCopy.trade.push({
        id: action.card.id,
        image: action.card.image_uris.normal,
        manacost: action.card.mana_cost,
        colorIdentity: action.card.color_identity,
        cardType: action.card.type_line,
        cardName: action.card.name,
        cmc: action.card.cmc,
      });
      return stateCopy;
    case "REMOVE_CARD_TRADE":
      const tradeIndex = stateCopy.trade.indexOf(action.card);
      if (tradeIndex > -1) {
        stateCopy.trade.splice(tradeIndex, 1);
      }
      return stateCopy;
    case "ADD_CARD_WISHLIST":
      stateCopy.wishList.push({
        id: action.card.id,
        image: action.card.image_uris.normal,
        manacost: action.card.mana_cost,
        colorIdentity: action.card.color_identity,
        cardType: action.card.type_line,
        cardName: action.card.name,
        cmc: action.card.cmc,
      });
      return stateCopy;
    case "REMOVE_CARD_WISHLIST":
      const wishIndex = stateCopy.wishList.indexOf(action.card);
      if (wishIndex > -1) {
        stateCopy.wishList.splice(wishIndex, 1);
      }
      return stateCopy;
    case "ADD_CARD_COLLECTION":
      stateCopy.binder.push(action.card.id);
      return stateCopy;
    case "REMOVE_CARD_COLLECTION":
      const binderIndex = stateCopy.binder.indexOf(action.card);
      if (binderIndex > -1) {
        stateCopy.binder.splice(binderIndex, 1);
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
        decks: stateCopy.decks,
      };
    case "SAVE_DECK":
      stateCopy.decks.push({
        commander: stateCopy.commanderCard,
        deck: stateCopy.the99,
        completed: stateCopy.deckCompleted,
        colorID: stateCopy.color_identity,
      });
      stateCopy.hasCommander = false;
      stateCopy.colorIdentity = [];
      stateCopy.commanderCard = {};
      stateCopy.the99 = [];
      stateCopy.deckSize = 1;
      return stateCopy;
    case "ADD_CARD_WISHLIST_DECK":
      stateCopy.wishList.push({
        id: action.card.id,
        image: action.card.image,
        manacost: action.card.manacost,
        colorIdentity: action.card.colorIdentity,
        cardType: action.card.cardType,
        cardName: action.card.cardName,
        cmc: action.card.cmc,
      });
      return stateCopy;
    case "CLEAR_COLLECTION":
      return {
        ...state,
        trade: [],
      };
    default:
      return stateCopy;
  }
}

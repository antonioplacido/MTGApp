export const selectCommander = (card) => {
  return { type: "ADD_COMMANDER", card };
};

export const removeCommander = () => {
  return { type: "REMOVE_COMMANDER" };
};

export const addCardToDeck = (card, id) => {
  return { type: "ADD_CARD", card, id };
};

export const removeCardFromDeck = (card) => {
  return { type: "REMOVE_CARD", card };
};

export const addCardWishList = (card) => {
  return { type: "ADD_CARD_WISHLIST", card };
};

export const removeCardWishList = (card) => {
  return { type: "REMOVE_CARD_WISHLIST", card };
};

export const addCardTrade = (card) => {
  return { type: "ADD_CARD_TRADE", card };
};

export const removeCardTrade = (card) => {
  return { type: "REMOVE_CARD_TRADE", card };
};

export const increaseCardCount = (card) => {
  return { type: "INCREMENT_CARD_QUANTITY", card };
};

export const decreaseCardCount = (card) => {
  return { type: "DECREASE_CARD_QUANTITY", card };
};

export const addCardCollection = (card) => {
  return { type: "ADD_CARD_COLLECTION", card };
};

export const removeCardCollection = (card) => {
  return { type: "REMOVE_CARD_COLLECTION", card };
};

export const clearDeck = () => {
  return { type: "CLEAR_DECK" };
};

export const saveDeck = () => {
  return { type: "SAVE_DECK" };
};

export const addCardWishListFromDeck = (card) => {
  return { type: "ADD_CARD_WISHLIST_DECK", card };
};

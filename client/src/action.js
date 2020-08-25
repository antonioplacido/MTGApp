export const addCardToDeck = (card, id) => {
  return { type: "ADD_CARD", card, id };
};

export const removeCardFromDeck = (id) => {
  return { type: "REMOVE_CARD", item, id };
};

export const clearDeck = (item, id) => {
  return { type: "ADD_ITEM", item, id };
};

export const addCardWishList = (card, id) => {
  return { type: "ADD_CARD_WISHLIST", card, id };
};

export const removeCardWishList = (id) => {
  return { type: "REMOVE_CARD_WISHLIST", id };
};

export const addCardTrade = (card, id) => {
  return { type: "ADD_CARD_TRADE", card, id };
};

export const removeCardTrade = (id) => {
  return { type: "REMOVE_CARD_TRADE", id };
};

export const increaseCardCount = (id) => {
  return { type: "INCREMENT_CARD_QUANTITY", id };
};

export const decreaseCardCount = (id) => {
  return { type: "DECREASE_CARD_QUANTITY", id };
};

export const clearDeck = () => {
  return { type: "CLEAR_DECK" };
};

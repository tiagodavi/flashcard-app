export const addDeck = (name) => {
  return {
    type: 'ADD_DECK',
    data: name
  };
};

export const showAddDeck = () => {
  return {
    type: 'SHOW_ADD_DECK'
  };
};

export const hideAddDeck = () => {
  return {
    type: 'HIDE_ADD_DECK'
  };
};

export const addCard = (card) => {
  return {
    type: 'ADD_CARD',
    data: card
  };
};

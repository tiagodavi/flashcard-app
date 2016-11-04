export const cards = (state, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      let newCard = Object.assign({}, action.data, {
        score: 1,
        id: +new Date
      });
      return state.concat([newCard]);
    break;
    case 'UPDATE_CARD':
      let updatedCard = action.data;
      return state.map((card) => (
       (card.id !== updatedCard.id) ? card :
        Object.assign({}, card, updatedCard)
      ));
    break;
    case 'DELETE_CARD':
      return state.filter((c) => c.id !== action.data);
    break;
    default:
      return state || [];
  }
};

export const decks = (state, action) => {
  switch (action.type) {
    case 'ADD_DECK':
      let newDeck = { name: action.data, id: +new Date };
      return state.concat([newDeck]);
    break;
    default:
      return state || [];
  }
};

export const addingDeck = (state, action) => {
  switch (action.type) {
    case 'SHOW_ADD_DECK': return true;  break;
    case 'HIDE_ADD_DECK': return false; break;
    default: return !!state;
  }
};

export const cardFilter = (state, action) => {
  switch (action.type) {
    case 'FILTER_CARDS':
      return action.data;
    break;
    default:
     return state || '';
  }
};

export const showBack = (state, action) => {
  switch (action.type) {
    case 'SHOW_BACK':
      return action.data || false;
    break;
    default:
      return state || false;
  }
};

export const addDeck = (name) => {
  return {
    type: 'ADD_DECK',
    data:  name
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
    data:  card
  };
};

export const updateCard = (card) => {
  return {
    type: 'UPDATE_CARD',
    data:  card
  };
};

export const deleteCard = (cardId) => {
  return {
    type: 'DELETE_CARD',
    data:  cardId
  };
};

export const filterCards = (query) => {
  return {
    type: 'FILTER_CARDS',
    data:  query
  };
};

export const setShowBack = (back) => {
  return {
    type: 'SHOW_BACK',
    data:  back
  };
};

export const receiveData = (json) => {
  return {
    type: 'RECEIVE_DATA',
    data:  json
  };
};

export const fetchData = () => {
  return (dispatch) => {
    fetch('/api/data')
    .then((res)  => res.json())
    .then((json) => dispatch(receiveData(json)));
  };
};

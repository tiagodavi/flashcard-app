const addDeck = (name) => {
  return {
    type: 'ADD_DECK',
    data: name
  };
};

const showAddDeck = () => {
  return {
    type: 'SHOW_ADD_DECK'
  };
};

const hideAddDeck = () => {
  return {
    type: 'HIDE_ADD_DECK'
  };
};

const decks = (state, action) => {
  switch (action.type) {
    case 'ADD_DECK':
      let newDeck = { name: action.data, id: +new Date };
      return state.concat([newDeck]);
    break;
    default:
      return state || [];
  }
};

const addingDeck = (state, action) => {
  switch (action.type) {
    case 'SHOW_ADD_DECK': return true;  break;
    case 'HIDE_ADD_DECK': return false; break;
    default: return !!state;
  }
};

const cards = (state, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      let newCard = Object.assign({}, action.data, {
        score: 1,
        id: +new Date
      });
      return state.concat([newCard]);
    break;
    default:
      return state || [];
  }
};

const store = Redux.createStore(Redux.combineReducers({
  cards,
  decks,
  addingDeck
}));

const App = (props) => {
  return (
    <div className='app'>
      { props.children }
    </div>
  );
};

const Sidebar = React.createClass({
  render() {
    let props = this.props;
    return (
      <div className='sidebar'>
        <h2> All Decks </h2>
        <ul>
          { props.decks.map((deck, i) => <li key={i}> {deck.name} </li>) }
          { props.addingDeck && <input ref='add' /> }
        </ul>
      </div>
    );
  }
});

function run() {
  let state = store.getState();
  ReactDOM.render(
    <App>
     <Sidebar decks={state.decks} addingDeck={state.addingDeck} />
    </App>,
    document.getElementById('root')
  );
}

run();

store.subscribe(run);

window.show = () => store.dispatch(showAddDeck());
window.hide = () => store.dispatch(hideAddDeck());
window.add  = () => store.dispatch(addDeck(new Date().toString()));

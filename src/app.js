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
  componentDidUpdate() {
    let inputText = ReactDOM.findDOMNode(this.refs.add);
    if(inputText) {
       inputText.focus();
    }
  },
  render() {
    let props = this.props;
    return (
      <div className='sidebar'>
        <h2> All Decks </h2>
        <button onClick={ (evt) => this.props.showAddDeck() }>
          New Deck
        </button>
        <ul>
          { props.decks.map((deck, i) => <li key={i}> { deck.name } </li>) }
          { props.addingDeck && <input ref='add' onKeyPress={ this.createDeck } /> }
        </ul>
      </div>
    );
  },
  createDeck(evt) {
    const enterKey = 13;
    if(evt.which !== enterKey) {
      return;
    }
    let deckName = ReactDOM.findDOMNode(this.refs.add).value;
    this.props.addDeck(deckName);
    this.props.hideAddDeck();
  }
});

function run() {
  let state = store.getState();
  ReactDOM.render(
    <App>
     <Sidebar
      decks={ state.decks }
      addingDeck={ state.addingDeck }
      addDeck={ (name) => store.dispatch(addDeck(name)) }
      showAddDeck={ () => store.dispatch(showAddDeck()) }
      hideAddDeck={ () => store.dispatch(hideAddDeck()) }
     />
    </App>,
    document.getElementById('root')
  );
}

run();

store.subscribe(run);

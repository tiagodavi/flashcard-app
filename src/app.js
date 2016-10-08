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
  cards
}));

const app = (props) => {
  return (
    <div className='app'>
      {props.children}
    </div>
  );
};

const sideBar = React.createClass({
  render() {
    let props = this.props;

    return (
      <div className='sideBar'>
        <h2> All Decks </h2>
        <ul>
          {
            props.decks.map((deck, i) => {
              <li key={i}> {deck.name} </li>
            })
          }
        </ul>
      </div>
    )
  }
});

ReactDOM.render(<App> Hello <strong>React</strong> </App>, document.getElementById('root'));

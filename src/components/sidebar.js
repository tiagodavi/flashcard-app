import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { addDeck, showAddDeck, hideAddDeck } from '../actions';
import { Link } from 'react-router';

const mapStateToProps = ({ decks, addingDeck }) => ({
  decks,
  addingDeck
});

const mapDispatchToProps = (dispatch) => ({
  addDeck: (name) => dispatch(addDeck(name)),
  showAddDeck: () => dispatch(showAddDeck()),
  hideAddDeck: () => dispatch(hideAddDeck())
});

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
          { props.decks.map((deck, i) =>
            <li key={i}>
              <Link to={ `/decks/${deck.id}` }>
                { deck.name }
              </Link>
            </li>
          )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

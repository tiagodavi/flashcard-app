import React from 'react';
import Card from './card';
import { connect } from 'react-redux';

const mapStateToProps = ({ cards }, { params: { deckId } }) => ({
  cards: cards.filter((c) => c.deckId === deckId)
});

const Cards = ({ cards, children }) => (
  <div className='main'>
    { cards.map((card) => <Card card={card} key={card.id} />) }
    { children }
  </div>
);

export default connect(mapStateToProps)(Cards);

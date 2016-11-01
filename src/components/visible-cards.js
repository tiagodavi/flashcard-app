import React from 'react';
import Card from './card';
import { connect } from 'react-redux';
import fuzzysearch from 'fuzzysearch';

const matches = (filter, card) => {
  let target  = filter.toLowerCase();
  return fuzzysearch(target, card.front.toLowerCase()) ||
         fuzzysearch(target, card.back.toLowerCase());
};

const mapStateToProps = ({ cards, cardFilter }, { params: { deckId } }) => ({
  cards: cards.filter((c) => c.deckId === deckId && matches(cardFilter, c))
});

const Cards = ({ cards, children }) => (
  <div className='main'>
    { cards.map((card) => <Card card={card} key={card.id} />) }
    { children }
  </div>
);

export default connect(mapStateToProps)(Cards);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import VisibleCards from './components/visible-cards';
import NewCardModal from './components/new-card-modal';
import EditCardModal from './components/edit-card-modal';
import StudyModal from './components/study-modal';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import { fetchData } from './actions';
import thunkMiddleware from 'redux-thunk';

import * as reducers from './reducers';

reducers.routing = routerReducer;

const store   = createStore(combineReducers(reducers), applyMiddleware(thunkMiddleware));
const history = syncHistoryWithStore(browserHistory, store);
const routes  = (
  <Route path='/' component={ App }>
    <Route path='/decks/:deckId' component={ VisibleCards }>
      <Route path='/decks/:deckId/new' component={ NewCardModal } />
      <Route path='/decks/:deckId/edit/:cardId' component={ EditCardModal } />
      <Route path='/decks/:deckId/study' component={ StudyModal } />
    </Route>
  </Route>
);

function run() {
  let state = store.getState();
  ReactDOM.render(
    <Provider store={ store }>
      <Router history={ history }>
        { routes }
      </Router>
    </Provider>,
    document.getElementById('root')
  );
}

function save() {
  let state = store.getState();
  fetch('/api/data', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      decks: state.decks,
      cards: state.cards
    })
  });
}

function init() {
  run();
  store.subscribe(run);
  store.subscribe(save);
  store.dispatch(fetchData());
}

init();

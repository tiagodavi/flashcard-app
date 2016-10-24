import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import VisibleCards from './components/visible-cards';
import NewCardModal from './components/new-card-modal';
import EditCardModal from './components/edit-card-modal';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import * as localStore from './local-store';
import * as reducers from './reducers';

reducers.routing = routerReducer;

const store   = createStore(combineReducers(reducers), localStore.get());
const history = syncHistoryWithStore(browserHistory, store);
const routes  = (
  <Route path='/' component={ App }>
    <Route path='/decks/:deckId' component={ VisibleCards }>
      <Route path='/decks/:deckId/new' component={ NewCardModal } />
      <Route path='/decks/:deckId/edit/:cardId' component={ EditCardModal } />
    </Route>
  </Route>
);

function run() {
  let state = store.getState();
  localStore.set(state, ['decks', 'cards']);
  ReactDOM.render(
    <Provider store={ store }>
      <Router history={ history }>
        { routes }
      </Router>
    </Provider>,
    document.getElementById('root')
  );
}

run();

store.subscribe(run);

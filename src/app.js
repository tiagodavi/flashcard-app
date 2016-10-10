import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import * as reducers from './reducers';
import App from './components/app';

reducers.routing = routerReducer;

const store   = createStore(combineReducers(reducers));
const history = syncHistoryWithStore(browserHistory, store);
const routes  = (<Route path='/' component={ App } />);

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

run();

store.subscribe(run);

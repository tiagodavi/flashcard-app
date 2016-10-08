(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var cards = function cards(state, action) {
  switch (action.type) {
    case 'ADD_CARD':
      var newCard = Object.assign({}, action.data, {
        score: 1,
        id: +new Date()
      });
      return state.concat([newCard]);
      break;
    default:
      return state || [];
  }
};

var store = Redux.createStore(Redux.combineReducers({
  cards: cards
}));

var app = function app(props) {
  return React.createElement(
    'div',
    { className: 'app' },
    props.children
  );
};

var sideBar = React.createClass({
  displayName: 'sideBar',
  render: function render() {
    var props = this.props;

    return React.createElement(
      'div',
      { className: 'sideBar' },
      React.createElement(
        'h2',
        null,
        ' All Decks '
      ),
      React.createElement(
        'ul',
        null,
        props.decks.map(function (deck, i) {
          React.createElement(
            'li',
            { key: i },
            ' ',
            deck.name,
            ' '
          );
        })
      )
    );
  }
});

ReactDOM.render(React.createElement(
  App,
  null,
  ' Hello ',
  React.createElement(
    'strong',
    null,
    'React'
  ),
  ' '
), document.getElementById('root'));

},{}]},{},[1]);

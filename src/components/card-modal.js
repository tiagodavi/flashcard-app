import React from 'react';
import ReactDOM from 'react-dom';
import { Link, browserHistory } from 'react-router';

const CardModal = React.createClass({
  componentDidUpdated() {
    ReactDOM.findDOMNode(this.refs.front).focus();
  },
  render() {
    let { card, onDelete } = this.props;

    return (
      <div className='modal'>
        <h1> { onDelete ? 'Edit' : 'New' } Card </h1>

        <label> Card Front </label>
        <textarea ref='front' defaultValue={ card.front } />

        <label> Card Back </label>
        <textarea ref='back' defaultValue={ card.back } />
        <p>
          <button onClick={ this.onSave }> Save Card </button>
          <Link className='btn' to={`/decks/${card.id}`}> Cancel </Link>
          {
            onDelete ?
            <button onClick={ this.onDelete } className='delete'> Delete Card </button>
            : null
          }
        </p>
      </div>
    )
  },
  onSave(evt) {
    let front = ReactDOM.findDOMNode(this.refs.front);
    let back  = ReactDOM.findDOMNode(this.refs.back);

    this.props.onSave(
      Object.assign({}, this.props.card, {
        front: front.value,
        back:  back.value
      })
    );

    browserHistory.push(`/decks/${this.props.card.id}`);
  },
  onDelete(evt) {
    this.props.onDelete(this.props.card.id);
    browserHistory.push(`/decks/${this.props.card.id}`);
  }
});

export default CardModal;

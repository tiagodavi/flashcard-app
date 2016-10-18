import CardModal from './card-modal';
import { connect } from 'react-redux';
import { addCard } from '../actions';

const mapStateToProps = (props, { params: { id } }) => ({
  card: { id }
});

const mapDispatchToProps = (dispatch) => ({
  onSave: (card) => dispatch(addCard(card))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardModal);

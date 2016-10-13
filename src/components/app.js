import React from 'react';
import Sidebar from './sidebar';
import { connect } from 'react-redux';

const mapStateToProps = (props, { params: { id } }) => ({
  id
});

const App = ({ id, children }) => {
  return (
    <div className='app'>
      <Sidebar />
      <h1>Deck: { id }</h1>
      { children }
    </div>
  );
};

export default connect(mapStateToProps)(App);

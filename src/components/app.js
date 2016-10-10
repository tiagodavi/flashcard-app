import React from 'react';
import Sidebar from './sidebar';

const App = (props) => {
  return (
    <div className='app'>
      <Sidebar />
      { props.children }
    </div>
  );
};

export default App;

import React from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';

function App({ children }) {
  return (
    <div className="App">
      {children}
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node,
};

export default App;

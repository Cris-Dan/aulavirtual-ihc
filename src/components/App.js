import React from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';
import firebase from 'firebase';
import { DB_CONFIG } from "../config/config";
import 'firebase/database';
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

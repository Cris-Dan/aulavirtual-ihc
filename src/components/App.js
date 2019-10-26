import React from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';
import Sidenav from './Sidenav';
import Footer from './Footer';

function App({ children }) {
  return (
    <div className="App">
      <Sidenav />
      <div className="content">
        {children}
      </div>
      <Footer />
    </div>
  );
}

App.propTypes = {
  childre: PropTypes.node,
};

export default App;

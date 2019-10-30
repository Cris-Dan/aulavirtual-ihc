import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/font.css';
import './styles/social.css';
import Root from './components/Root';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyBTG3wLBzjV4yG5Wd_p2K9PaOEiX05VY7o",
    authDomain: "aulavirtual-ihc.firebaseapp.com",
    databaseURL: "https://aulavirtual-ihc.firebaseio.com",
    projectId: "aulavirtual-ihc",
    storageBucket: "aulavirtual-ihc.appspot.com",
    messagingSenderId: "1057283553330",
    appId: "1:1057283553330:web:d19a83d1003e22070d642b",
    measurementId: "G-28MY12WDV1"
});


ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

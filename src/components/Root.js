/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import Login from './Login';
import Principal from './Principal';
import firebase from 'firebase';

const cursos = [{
    "_id": 1,
    "estado": false,
    "nombre": "DATA WAREHOUSE",
    "semestre": "2019-2",
    "escuela": "SOFTWARE",
    "ciclo": "0"
},
{
    "_id": 2,
    "estado": true,
    "nombre": "GERENCIA DE PROYECTO DE SOFTWARE",
    "semestre": "2019-2",
    "escuela": "SOFTWARE",
    "ciclo": "8"
},
{
    "_id": 3,
    "estado": false,
    "nombre": "INTERACCION HOMBRE - COMPUTADOR",
    "semestre": "2019-2",
    "escuela": "SOFTWARE",
    "ciclo": "8"
},
{
    "_id": 4,
    "estado": false,
    "nombre": "GESTION DE CONFIGURACION Y MANTENIMIENTO",
    "semestre": "2019-2",
    "escuela": "SOFTWARE",
    "ciclo": "8"
},
]
function handleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
        .signInWithPopup(provider)
        .then(
            result => {
                console.log(`${result.user.email} ha iniciado sesion`);
                <Redirect to="/principal" />;
                console.log(`${result.user.email} ha iniciado sesion2`);
            })
        .catch(error => console.log(`Error ${error.code}: ${error.message}`));
}


function Root(props) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setUser(user);
        })
    });


    return (
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" render={() => <Login handleAuth={handleAuth} />} />
                    <Route path='/principal' render={() => { return user ? (<Principal cursos={cursos} />) : (<Redirect to="/" />) }} />
                </Switch>
            </App>
        </Router>
    );
};

export default Root;
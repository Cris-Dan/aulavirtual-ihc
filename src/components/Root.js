/* eslint-disable no-unused-expressions */
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import Login from './Login';
import Principal from './Principal';

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

function Root(props) {
    return (
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path='/principal' render={(props) => { return true ? (<Principal {...props} cursos={cursos} />) : (<Redirect to="/" />) }} />
                </Switch>
            </App>
        </Router>
    );
};

export default Root;
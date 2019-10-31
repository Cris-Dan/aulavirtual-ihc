/* eslint-disable no-unused-expressions */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
import Principal from './Principal';
import { AuthProvider } from "./Auth";
import Admin from './Admin';
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

const Root = (props) => {
    return (
        <AuthProvider>
            <Router>
                <div>
                    <Route exact path="/" render={() => <Login />} />
                    <Route path='/admin' render={() => <Admin />} />
                    <Route path='/principal' render={() => <Principal cursos={cursos} />} />
                </div>
            </Router>
        </AuthProvider>
    );
};

export default Root;
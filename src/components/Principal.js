import React from 'react';
import { Route } from 'react-router-dom';
import Sidenav from './Sidenav';
import Footer from './Footer';
import Curso from './Curso';
import Home from './Home';


function Principal(props) {
    const cursos = props.cursos;
    return (

        <div className="App">

            <Sidenav />
            <div className="content">
                <Route exact path='/principal' render={(props) => <Home {...props} cursos={cursos} />} />
                <Route path='/principal/:curso' component={Curso} />
            </div>
            <Footer />
        </div>
    );
};

export default Principal;
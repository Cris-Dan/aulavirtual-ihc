import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from "react-router";
import { Link } from 'react-router-dom';
import app from 'firebase';
import { AuthContext } from "./Auth.js";

const Sidenav = ({ history }) => {

    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            try {
                await app
                    .auth()
                    .signOut();
                history.push("/");
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (!currentUser) {
        return <Redirect to="/" />;
    }

    return (
        <div>
            <div className="social-bar">
                <a href="https://www.facebook.com/sistemasUNMSM/" className="icon icon-facebook2" rel="noopener noreferrer" target="_blank"></a>
                <a href="https://sistemas.unmsm.edu.pe" className="icon icon-earth" rel="noopener noreferrer" target="_blank"></a>
            </div>
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper oscuro">
                        <div className="row">
                            <div className="col s12 m12">
                                <div className="container">


                                    <Link to="/" className="left"><img className="imagen-logo" src="logo-fisi-header-2.png" alt="logo" /></Link>
                                    <a data-target="mobile-navbar" className="sidenav-trigger right">
                                        <i className="material-icons naranja-texto">menu</i>
                                    </a>
                                    <ul id="navbar-items" className="right hide-on-med-and-down">
                                        <li><Link to="/admin"> Mensajes <i className="material-icons left naranja-claro-texto">forum</i> </Link></li>
                                        <li><Link to="/principal">Mis Cursos <i className="material-icons naranja-claro-texto left">book</i></Link></li>
                                        <li onClick={handleLogin}><i className="material-icons naranja-claro-texto left" >book</i> cerrar sesion</li>

                                    </ul>

                                </div>

                            </div>
                            <div className="col s12 m12 borde-cero">
                                <div className="bot-navbar"></div>
                            </div>
                        </div>

                    </div>
                </nav>
            </div>
            <div className="parallax-container principal">
                <div className="parallax"><img src="fisi-pabellon.jpg" alt="fisi pabellon" /></div>
                <div className="row">
                    <div className="col s12 m8 offset-m2">
                        <div className="white-text transparent bienvenida">

                            <h4>BIENVENIDO AL AULA VIRTUAL</h4>
                            <p>Aula virtual Semestre 2019-2</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(Sidenav);
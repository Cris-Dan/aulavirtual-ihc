import React from 'react';
import { Link } from 'react-router-dom';
function Sidenav() {
    return (
        <div>
            <div class="social-bar">
                <a href="https://www.facebook.com/sistemasUNMSM/" class="icon icon-facebook2" rel="noopener noreferrer" target="_blank"></a>
                <a href="https://sistemas.unmsm.edu.pe" class="icon icon-earth" rel="noopener noreferrer" target="_blank"></a>
            </div>
            <div class="navbar-fixed">
                <nav>
                    <div className="nav-wrapper oscuro">
                        <div className="row">
                            <div className="col s12 m12">
                                <div class="container">


                                    <Link to="/" className="left"><img className="imagen-logo" src="logo-fisi-header-2.png" alt="logo" /></Link>
                                    <a href="#" data-target="mobile-navbar" class="sidenav-trigger right">
                                        <i className="material-icons naranja-texto">menu</i>
                                    </a>
                                    <ul id="navbar-items" className="right hide-on-med-and-down">
                                        <li><Link to="/about"> Mensajes <i className="material-icons left naranja-claro-texto">forum</i> </Link></li>
                                        <li><Link to="/">Mis Cursos <i className="material-icons naranja-claro-texto left">book</i></Link></li>

                                        <li>
                                            <a className="dropdown-trigger" data-target="dropdown-menu" href="#">
                                                Mi Usuario<i className="material-icons left naranja-claro-texto">person</i> <i className="material-icons right naranja-texto">arrow_drop_down</i>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul id="dropdown-menu" className="dropdown-content">
                                        <li><a href="#" className="black-text">Mis Notas</a></li>
                                        <li><a href="#" className="black-text">Mi Perfil</a></li>
                                        <li className="divider"></li>
                                        <li><a href="#" className="black-text">Cerrar Sesion</a></li>
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

            <ul id="mobile-navbar" className="sidenav azul-oscuro">
                <li>
                    <div className="user-view">
                        <div className="background">
                            <img class="imagen-fondo" src="gatos-persas.jpg" alt="imagen fondo" />
                        </div>
                        <a href="#user"><img className="circle" src="gato.jpg" alt="imagen usuario" /></a>
                        <a href="#name"><span className="white-text name">Usuario</span></a>
                        <a href="#email"><span className="white-text email">gato_oculto@gmail.com</span></a>
                    </div>
                </li>
                <li>
                    <Link to="/" className="sidenav-close white-text">
                        <i class="material-icons left naranja-claro-texto">assignment</i>
                        Mis Notas
                    </Link>
                </li>
                <li>
                    <Link to="/" className="sidenav-close white-text">
                        <i class="material-icons left naranja-claro-texto">person</i>
                        Mi Perfil
                        </Link>
                </li>
                <li class="divider" ></li>
                <li>
                    <Link to="/" className="sidenav-close white-text">
                        <i class="material-icons naranja-claro-texto left">book</i>
                        Mis Cursos
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="sidenav-close white-text">
                        <i class="material-icons left naranja-claro-texto">forum</i>
                        Mensajes
                    </Link>
                </li>
                <li class="divider" ></li>
                <li>
                    <Link to="/" className="sidenav-close white-text">
                        <i class="material-icons left naranja-claro-texto">logout</i>Cerrar Sesion
                    </Link>
                </li>
            </ul>
            <div class="parallax-container principal">
                <div class="parallax"><img src="fisi-pabellon.jpg" alt="fisi pabellon" /></div>
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

export default Sidenav;
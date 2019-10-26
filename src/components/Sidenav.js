import React from 'react';
import { Link } from 'react-router-dom';
function Sidenav() {
    return (
        <div>
            <div class="navbar-fixed">
                <nav>
                    <div className="nav-wrapper plomo">
                        <div class="container ">
                            <Link to="/" className="left "><h5>Aula virtual Pregrado - FISI</h5></Link>
                            <a href="#" data-target="mobile-navbar" class="sidenav-trigger right">
                                <i class="material-icons naranja-texto">menu</i>
                            </a>
                            <ul id="navbar-items" class="right hide-on-med-and-down">
                                <li><Link to="/about"> Mensajes <i class="material-icons left naranja-claro-texto">forum</i> </Link></li>
                                <li><Link to="/">Mis Cursos <i class="material-icons naranja-claro-texto left">book</i></Link></li>

                                <li>
                                    <a class="dropdown-trigger" data-target="dropdown-menu" href="#">
                                        Mi Usuario<i class="material-icons left naranja-claro-texto">person</i> <i class="material-icons right naranja-texto">arrow_drop_down</i>
                                    </a>
                                </li>
                            </ul>
                            <ul id="dropdown-menu" class="dropdown-content">
                                <li><a href="#" className="black-text">Mis Notas</a></li>
                                <li><a href="#" className="black-text">Mi Perfil</a></li>
                                <li class="divider"></li>
                                <li><a href="#" className="black-text">Cerrar Sesion</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <ul id="mobile-navbar" className="sidenav azul-oscuro">
                <li>
                    <div class="user-view">
                        <div class="background">
                            <img class="imagen-fondo" src="gatos-persas.jpg" />
                        </div>
                        <a href="#user"><img class="circle" src="gato.jpg" /></a>
                        <a href="#name"><span class="white-text name">Usuario</span></a>
                        <a href="#email"><span class="white-text email">gato_oculto@gmail.com</span></a>
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
        </div>
    );
};

export default Sidenav;
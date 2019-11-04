import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

import { AuthUserContext } from '../Session';
import './nav.css';
const Navigation = () => (
  <div className="navfijo">
    <nav className="navbar navbar-expand-lg navbar-light oscuro ">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="logo-fisi-header-2.png" className="imagen-logo" alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon naranja-texto">  <i className="material-icons">dehaze</i></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto enLinea">
            <AuthUserContext.Consumer>
              {authUser =>
                authUser ? <NavigationAuth /> : <NavigationNonAuth />
              }

            </AuthUserContext.Consumer>
          </ul>
        </div>
      </div>
    </nav>
    <nav className="navbar navbar-expand-lg bot-navbar">
    </nav>
  </div >
);

const NavigationAuth = () => (
  <ul>

    <li className="nav-item">
      <Link className="nav-link texto-claro" to={ROUTES.HOME}><i className="material-icons naranja">book</i>Cursos</Link>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle texto-claro" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="material-icons naranja">person</i>Usuario
        </a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <Link className="dropdown-item" to={ROUTES.ACCOUNT}>Cuenta</Link>
        <Link className="dropdown-item" to={ROUTES.ADMIN}>Administrar</Link>
        <div className="dropdown-divider"></div>
        <SignOutButton />
      </div>
    </li>

  </ul>
);

const NavigationNonAuth = () => (
  <ul>

  </ul>
);

export default Navigation;

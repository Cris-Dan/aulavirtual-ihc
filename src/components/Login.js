import React, { useCallback, useContext } from 'react';
import SidenavLogin from './Sidenav-login';
import { Link, withRouter } from 'react-router-dom';
import '../styles/Login.css';

function login(props) {

  return (
    <div>
      <SidenavLogin />
      <div className="container">
        <div className="section">
          <div id="login-page" className="row">
            <div className="col s12 m6 offset-m3 card card-borde">
              <div className="card-content">
                <form className="login-form">
                  <div className="row">
                    <div className="input-field col s12 m8 offset-m2">
                      <div className="row">
                        <img className="logo-fisi left" src="logo-fisi-icon.png" alt="fisi logo" />
                        <span className="card-title"> Aula virtual FISI</span>
                        <p>Bienvenido de vuelta, porfavor ingrese con su cuenta.</p>
                      </div>
                    </div>

                    <div className="input-field col s12 m8 offset-m2">
                      <i className="material-icons prefix ">mail_outline</i>
                      <input className="validate" id="email" type="email" />
                      <label className="label-color" htmlFor="email" data-error="wrong" data-success="right">Correo institucional</label>
                    </div>


                    <div className="input-field col s12 m8 offset-m2">
                      <i className="material-icons prefix ">lock_outline</i>
                      <input id="password" type="password" />
                      <label className="label-color" htmlFor="password">Contraseña</label>
                    </div>


                    <div className="input-field col s12 m8 offset-m2">
                      <Link to="/principal" className="btn waves-effect waves-light col s12 boton-ingresar">Ingresar </Link>
                    </div>


                    <div className="input-field col s12 m8 offset-m2">
                      <div className="divider"></div>
                    </div>

                    <div className="input-field col s12 m8 offset-m2">
                      <p>O ingrese con una cuenta de google.</p>
                    </div>

                    <div className="input-field">
                      <div className="btn white darken-4 col s12 m8 offset-m2">
                        <a
                          className=" a-tt-none deep-orange-text " onClick={props.handleAuth}>
                          <div className="left">
                            <img className="logo-google" alt="Google Logo" src="google logo.png"></img>
                          </div>
                          Ingresa con Google
                          </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default withRouter(login);
import React from 'react';
import SidenavLogin from './Sidenav-login';
import { Link, Redirect } from 'react-router-dom';

function logear(e) {

  console.log("holi");
  //return <Redirect to="/principal" />;

}

function login() {
  return (
    <div className="fondo">
      <main>
        <SidenavLogin />
        <div id="login-page" className="row inicio">

          <div className="col s12 m6 offset-m3 card-panel card-borde">
            <form className="login-form ">
              <div className="row">
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix ">mail_outline</i>
                  <input className="validate" id="email" type="email" />
                  <label className="label-color" htmlFor="email" data-error="wrong" data-success="right">Correo institucional</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix ">lock_outline</i>
                  <input id="password" type="password" />
                  <label className="label-color" htmlFor="password">Contraseña</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <Link to="/principal" className="btn waves-effect waves-light col s12 boton-ingresar" onClick={logear}>Ingresar </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>

    </div>
  );
};

export default login;
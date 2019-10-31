import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "firebase";
import { AuthContext } from "./Auth.js";
import SidenavLogin from './Sidenav-login';
import '../styles/Login.css';


const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/Principal");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  const handleLoginGoogle = useCallback(
    async event => {
      event.preventDefault();
      try {
        const provider = new app.auth.GoogleAuthProvider();
        await app.auth().signInWithPopup(provider);

        history.push("/Principal");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/Principal" />;
  }

  return (
    <div>
      <SidenavLogin />
      <div className="container">
        <div className="section">
          <div id="login-page" className="row">
            <div className="col s12 m6 offset-m3 card card-borde">
              <div className="card-content">
                <form className="login-form" onSubmit={handleLogin}>
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
                      <button type="submit" className="btn waves-effect waves-light col s12 boton-ingresar">Ingresar </button>
                    </div>


                    <div className="input-field col s12 m8 offset-m2">
                      <div className="divider"></div>
                    </div>

                    <div className="input-field col s12 m8 offset-m2">
                      <p>O ingrese con una cuenta de google.</p>
                    </div>


                  </div>
                </form>
                <div className="row">
                  <div className="input-field">
                    <div className="btn white darken-4 col s12 m8 offset-m2" onClick={handleLoginGoogle}>
                      <a
                        className=" a-tt-none deep-orange-text " >
                        <div className="left">
                          <img className="logo-google" alt="Google Logo" src="google logo.png"></img>
                        </div>
                        Ingresa con Google
                          </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default withRouter(Login);
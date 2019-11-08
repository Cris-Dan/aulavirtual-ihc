import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import './SignIn.css';
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignInPage = () => (
  <div className="row margen no-gutters mt-0 w100">
    <div className="col-md-8 col-0 fondo  w100">

    </div>
    <div className="col-md-4 col-12 w100">
      <SignInForm />
    </div>








  </div >
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password.length < 8 || email === '';

    return (
      <form className="ml-5 mr-5 margen-top margen-bot" onSubmit={this.onSubmit}>
        <h2 className="mb-5">
          INICIAR SESION
					</h2>



        <div class="form-group">
          <label htmlFor="exampleInputEmail1">✉  Correo Institucional</label>
          <input name="email"
            value={email}
            onChange={this.onChange} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese su correo institucional." />
          <small id="emailHelp" class="form-text text-muted">Si tiene problemas al momento de ingresar con su correo consulte con red telematica.</small>

        </div>


        <div class="form-group">
          <label htmlFor="exampleInputPassword1">🗝 Contraseña</label>
          <input name="password" pattern=".{8,}"
            value={password}
            onChange={this.onChange} type="password" class="form-control" id="exampleInputPassword1" aria-describedby="passHelp" placeholder="Ingrese su contraseña." />
          <small id="passHelp" class="form-text text-muted">La contraseña debe tener al menos 8 caracteres.</small>

        </div>




        <div className="container-login100-form-btn">
          <button disabled={isInvalid} type="submit" className="btn btn-block texto-claro azul-oscuro">
            Ingresar
						</button>
        </div>

        {error && <p>{error.message === "The password is invalid or the user does not have a password." ?
          ("la contraseña es invalida o el correo no se encuentra registrado.") :
          ("el formato del correo debe ser: ejemplo@unmsm.edu.pe ")}</p>}
      </form>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };

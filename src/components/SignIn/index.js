import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import './SignIn.css';
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignInPage = () => (
  <div className="">
    <div className="limiter">
      <div className="container-login100 ">
        <div className="wrap-login100 claro">

          <SignInForm />
          <div className="login100-more fondo">
          </div>
        </div>
      </div>
    </div>
  </div>
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

    const isInvalid = password === '' || email === '';

    return (
      <form className="login100-form validate-form" onSubmit={this.onSubmit}>
        <span className="login100-form-title p-b-43 claro">
          INICIAR SESION
					</span>


        <div class="form-group">
          <label for="exampleInputEmail1">✉  Correo Institucional</label>
          <input name="email"
            value={email}
            onChange={this.onChange} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese su correo institucional." />
          <small id="emailHelp" class="form-text text-muted">Si tiene problemas al momento de ingresar con su correo consulte con red telematica.</small>

        </div>


        <div class="form-group">
          <label for="exampleInputPassword1">🗝 Contraseña</label>
          <input name="password"
            value={password}
            onChange={this.onChange} type="password" class="form-control" id="exampleInputPassword1" placeholder="Ingrese su contraseña." />
        </div>




        <div className="container-login100-form-btn">
          <button disabled={isInvalid} type="submit" className="login100-form-btn azul-oscuro">
            Ingresar
						</button>
        </div>

        {error && <p>{error.message}</p>}
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

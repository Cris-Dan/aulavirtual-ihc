import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { passwordOne } = this.state;

    this.props.firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
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
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === '';

    return (
      <div className="col-12 col-md-8">
        <div className="card ">
          <form onSubmit={this.onSubmit}>

            <div className="card-header"> Cambia tu contraseña</div>
            <div className="card-body">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="">Contraseña</span>
                </div>
                <input name="passwordOne"
                  value={passwordOne}
                  onChange={this.onChange}
                  type="password"
                  placeholder="Nueva contraseña" className="form-control" />
                <input name="passwordTwo"
                  value={passwordTwo}
                  onChange={this.onChange}
                  type="password"
                  placeholder="Confirma nueva contraseña" className="form-control" />
              </div>



              {error && <p>{error.message}</p>}

            </div>
            <div className="card-footer">
              <button className="btn oscuro  texto-claro" disabled={isInvalid} type="submit"> Reiniciar contraseña</button>
            </div>
          </form>
        </div>

      </div >

    );
  }
}

export default withFirebase(PasswordChangeForm);

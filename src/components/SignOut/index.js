import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignOutButtomBase = () => (
  <div>
    <SignOutButton />
  </div>
);

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

  }

  onSubmit = async () => {
    await this.props.firebase.doSignOut();
    this.props.history.push(ROUTES.SIGN_IN);
  };

  render() {
    return (
      <button className="dropdown-item" type="button" onClick={this.onSubmit}>
        Salir</button >
    );
  }
}

const SignOutButton = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignOutButtomBase;

export { SignOutButton };
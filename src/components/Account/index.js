import React from 'react';

import { AuthUserContext } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { withAuthorization } from '../Session';
import firebase from 'firebase';
class AccountPageBase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      loading: false
    };
  }
  componentDidMount() {
    this.setState({
      loading: true,
    });
    console.log("usuario id " + this.props.usuarioId);
    firebase.database().ref(`users/${this.props.usuarioId}`).on('value', snapshot => {
      const userObject = snapshot.val();


      console.log(userObject);
      this.setState({
        user: userObject,
        loading: false,
      });
    });

  }

  componentWillMount() {
    firebase.database().ref(`users/${this.props.usuarioId}`).off();
  }

  render() {
    const user = this.state.user;
    const loading = this.state.loading;
    return (


      <div >
        {loading && <div><h3>Cargando pagina por favor espere...</h3></div>}
        {!loading && user && (<React.Fragment>
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="card ">
                <div className="card-header"> Datos del  {user.rol}</div>
                <div className="card-body">
                  <h5 className="card-title">{user.username}</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><p className="card-text">Correo: {user.email}</p></li>
                    <li className="list-group-item"><p className="card-text">Edad: {user.edad}</p></li>
                    <li className="list-group-item"><p className="card-text">Genero: {user.genero}</p></li>
                
                  </ul>

                </div>
                <div className="card-footer text-muted"> Actualizar datos proximamente...</div>
              </div>
            </div>


            <PasswordChangeForm />
          </div>




        </React.Fragment>)}
      </div>)
  }
}

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div className="container mt-3">

        <AccountPageBase usuarioId={authUser.uid} />

      </div>
    )}
  </AuthUserContext.Consumer>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);

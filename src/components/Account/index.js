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
              <div class="card ">
                <div class="card-header"> Datos del  {user.rol}</div>
                <div class="card-body">
                  <h5 class="card-title">{user.username}</h5>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item"><p class="card-text">Correo: {user.email}</p></li>
                    <li class="list-group-item"><p class="card-text">Edad: {user.edad}</p></li>
                    <li class="list-group-item"><p class="card-text">Genero: {user.genero}</p></li>
                
                  </ul>

                </div>
                <div class="card-footer text-muted"> Actualizar datos proximamente...</div>
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
      <div className="container margen">

        <AccountPageBase usuarioId={authUser.uid} />

      </div>
    )}
  </AuthUserContext.Consumer>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);

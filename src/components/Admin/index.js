import React, { Component } from 'react';
import FormClase from './FormClase';
import { withFirebase } from '../Firebase';
import FormArchivos from './FormArchivos';


class AdminPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],

    };


  }
  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        this.props.firebase
          .user(authUser.user.uid)
          .set({
            username,
            email,
          })
          .then(() => {

          })
          .catch(error => {
            this.setState({ error });
          });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };



  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.cursos().on('value', snapshot => {
      const usersObject = snapshot.val();

      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key,
      }));

      this.setState({
        users: usersList,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.cursos().off();
  }

  render() {
    const { users, loading } = this.state;
    console.log(users);
    return (
      <div>

        <h1>Admin</h1>

        {loading && <div>Loading ...</div>}

        <UserList users={users} />
      </div>
    );
  }
}

const UserList = ({ users }) => (
  <div className="container">
    <div className="row">
      <div className="col">
        <ul>
          {users.map(user => (

            <li key={user.uid}>
              <span>
                <strong>ID:</strong> {user.uid}
              </span>
              <span>
                <strong>E-Mail:</strong> {user.email}
              </span>
              <span>
                <strong>Username:</strong> {user.username}
              </span>
            </li>


          ))}
        </ul>

      </div>
      <div className="col">
        <FormClase users={users} />
        <FormArchivos />
      </div>
    </div>
  </div>
);

export default withFirebase(AdminPage);





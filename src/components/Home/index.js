import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import CursoCard from '../CursoCard';
import ArchivosRecientes from '../ArchivosRecientes';
import Biblioteca from '../Bibliotecas';
class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
    };
  }

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
    return (<div className="container margen">
      {console.log("cursos:")}
      {console.log(this.state.users)}
      <div className="row">
        <div className="col-12 col-md-8">
          {loading && <div>Cargando ...</div>}
          <div>
            <UserList users={users} />
          </div>
        </div>
        <div className="col">
          <div className="row">
            <ArchivosRecientes />
            <Biblioteca />
          </div>
        </div>
      </div>
    </div>);
  }
}

const UserList = ({ users }) => (
  <ul>
    {users.map(curso => (
      <Link className="sin-deco" key={curso.uid} to={`/home/${curso.uid}`}>
        <CursoCard estado={curso.estado} nombre={curso.nombre} semestre={curso.semestre} escuela={curso.escuela} ciclo={curso.ciclo} />
      </Link>
    ))}
  </ul>
);

export default withFirebase(HomePage);



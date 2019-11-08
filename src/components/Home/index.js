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
      archivos: [],
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

    this.props.firebase.archivos().on('value', snapshot => {
      const archivosObject = snapshot.val();

      const archivosList = Object.keys(archivosObject).map(key => ({
        ...archivosObject[key],
        uid: key,
      }));

      this.setState({
        archivos: archivosList,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.cursos().off();
    this.props.firebase.archivos().off();
  }

  render() {
    const { users, loading, archivos } = this.state;

    return (
      <div>

        <div className=" img-alto mb-3">
          <div className="container margen2 ">
            <div className="row">
              <div className="col-12">
                <h2 className="mt-5 texto-claro ">BIENVENIDO AL AULA VIRTUAL</h2>
              </div>
              < div className="col-12">
                <p className="texto-claro">aula virtual semestre 2019-2</p>
              </div>


            </div>
          </div>

        </div>
        <div className="container ">
          {loading && <div><h3>Cargando pagina por favor espere...</h3></div>}
          {!loading && users && archivos && (<React.Fragment>
            <div className="row">
              <div className="col-12 col-md-8">
                <UserList users={users} />

              </div>
              <div className="col-12 col-md-4">
                <div className="row">
                  <ArchivosRecientes archivos={archivos} />
                  <Biblioteca />
                </div>
              </div>
            </div>
          </React.Fragment>)}

        </div>
      </div>);
  }
}

const UserList = ({ users }) => (
  <div className="row row-eq-height">
    {
      users.map(curso => (
        <div className="col-md-12 " key={curso.uid}>
          <Link className="sin-deco " to={`/home/${curso.uid}`}>
            <CursoCard uid={curso.uid} estado={curso.estado} nombre={curso.nombre} semestre={curso.semestre} escuela={curso.escuela} ciclo={curso.ciclo} />
          </Link>
        </div>
      )
      )
    }
  </div >


);


export default withFirebase(HomePage);



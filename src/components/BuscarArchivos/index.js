import './BuscarArchivos.css';
import React, { Component } from 'react';
import { withFirebase } from '../Firebase';



class AdminPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      archivos: [],
      busqueda:'',

    };


  }
  onSubmit = event => {
    

    event.preventDefault();
  };
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


  componentDidMount() {
    this.setState({ loading: true });

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
    this.props.firebase.archivos().off();
  }

  render() {
    const { archivos, loading,busqueda } = this.state;
    
    return (
      <div className="container margen">
         {loading && <div><h3>Cargando pagina por favor espere...</h3></div>}
         {!loading && archivos && (<React.Fragment>
            <div className="row justify-content-center mb-3">
                    
                    <div className="col-12
                    col-md-6 p-4">
                    <h1>Buscar en el aula virtual</h1>

                    </div>
                    <div className="col-12 col-md-8 mb-3">
                    <div className="input-group flex-nowrap">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="addon-wrapping"><i className="material-icons buscar">search</i></span>
                      </div>
                      <input type="text"  name="busqueda"
                  value={busqueda}  onChange={this.onChange}
                  className="form-control largo" placeholder="Ingrese el nombre del archivo" aria-label="Username" aria-describedby="addon-wrapping"/>
                    </div>
                    </div>

                
                <ArchivoList archivos={archivos}  busqueda={busqueda}/>
                
              </div>
      </React.Fragment>)}
      </div>

    );
  }
}




const ArchivoList = ({ archivos,busqueda}) => (      
            <div className="col-12 col-md-8">
              
                <ul>
                  {archivos.map((archivo,i) => (
                    archivo.nombre.toLowerCase().indexOf(busqueda.toLowerCase()) !== -1 ?
                    (<li key={i} className="list-group-item naranja-texto"><a href={archivo.url} rel="noopener noreferrer" target="_blank" className="naranja-texto"><i className="icon-file-pdf"></i> {archivo.nombre}</a></li>):<div></div>
                  ))}
                </ul>
      </div>   
);

export default withFirebase(AdminPage);



const BuscarArchivos = () => (
    <div className="container margen">
        <div className="row justify-content-center">
            <div className="col-12
             col-md-6 p-4">
            <h1>Buscar en el aula virtual</h1>

            </div>
            <div className="col-12">
            <div className="input-group flex-nowrap">
              <div className="input-group-prepend">
                <span className="input-group-text" id="addon-wrapping"><i className="material-icons buscar">search</i></span>
              </div>
              <input type="text" className="form-control largo" placeholder="Ingrese el nombre del archivo" aria-label="Username" aria-describedby="addon-wrapping"/>
            </div>
            </div>
        </div>
        
    </div>
);


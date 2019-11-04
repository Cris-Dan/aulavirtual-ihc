import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import ArchivosRecientes from '../ArchivosRecientes';
import Biblioteca from '../Bibliotecas';
import './Curso.css';
class CursoPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            users: [],
            curso: null,
            cursoId: "",
            clases: [],
            archivos: [],
            claseId: null
        };
    }

    componentDidMount() {
        this.setState({ loading: true });
        this.setState({ cursoId: this.props.match.params.curso });

        this.props.firebase.curso(this.props.match.params.curso).on('value', snapshot => {
            const cursoObject = snapshot.val().nombre;
            this.setState({
                curso: cursoObject,
                loading: false,
                claseId: snapshot.val().clases
            });
            this.props.firebase.clase(snapshot.val().clases).on('value', snapshot => {
                const claseObject = snapshot.val().clase;
                this.setState({
                    clases: claseObject,
                    loading: false,
                });
                console.log(this.state.clases);
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
        this.props.firebase.clase(this.state.claseId).off();
        this.props.firebase.curso(this.props.match.params.curso).off();
        this.props.firebase.archivos().off();
    }

    render() {
        const { clases, curso, loading, archivos } = this.state;
        console.log(curso);
        return (
            <div className="container margen">

                {loading && <div><h3>Cargando pagina por favor espere...</h3></div>}
                {!loading && curso && clases && archivos && (<React.Fragment>
                    <div className="row">
                        <div className="col-md-8 col-12">
                            <nav aria-label="breadcrumb" >
                                <ol className="breadcrumb oscuro">
                                    <li className="breadcrumb-item"><Link to="/Home" >Cursos</Link></li>
                                    <li className="breadcrumb-item active texto-blanco" aria-current="page">{curso}</li>
                                </ol>
                            </nav>
                            <ClasesList clases={clases} />
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
        );
    }
}



const ClasesList = ({ clases }) => (
    <div className="accordion" id="accordionExample">
        {clases.map((clase, i) => (
            <div className="card" key={i}>
                <div className="card-header " id={"heading" + i}>

                    <h2 className="mb-0">
                        <button className={"btn btn-link " + estadoHayTareaCollapsed(clase.tarea)} type="button" data-toggle="collapse" data-target={"#collapse" + i} aria-expanded={clase.tarea} aria-controls={"collapse" + i}>
                            {estadoHayTarea(clase.tarea, i)}
                        </button>
                    </h2>

                </div>
                <div id={"collapse" + i} className={"collapse " + estadoHayTareaShow(clase.tarea)} aria-labelledby={"heading" + i} data-parent="#accordionExample">
                    <div className="card-body">
                        <ComunicadosList comunicados={
                            comunicados(clase.comunicados)
                        } />
                        <ArchivosList archivos={archivos(clase.archivos)} />
                    </div>
                </div>
            </div>
        ))}
    </div>
);
function comunicados(comunicados) {
    return comunicados !== undefined ? comunicados : ["No hay mensajes en esta clase."];
}

const ComunicadosList = ({ comunicados }) => (
    <ul className="list-group list-group-flush">
        {
            comunicados.map((comunicado, i) => (<li className="list-group-item" key={i}>{comunicado}</li>))
        }
    </ul>
);


function archivos(archivos) {
    return archivos !== undefined ? archivos : [{ nombre: "No hay archivos en esta clase." }];
}



const ArchivosList = ({ archivos }) => (
    <ul className="list-group list-group-flush">
        {
            archivos.map((archivo, i) => (archivo.nombre !== "No hay archivos en esta clase." ? (<li key={i} className="list-group-item naranja-texto"><a href={archivo.url} rel="noopener noreferrer" target="_blank" className="naranja-texto"><i className="icon-file-pdf"></i> {archivo.nombre}</a></li>) : <li className="list-group-item" key={i}>{archivo.nombre}</li>))
        }
    </ul>
);

function estadoHayTarea(estado, i) {
    return estado ? (<div className="naranja-texto">Clase {i + 1} HAY TAREAS PENDIENTES!</div>) : (<div> Clase {i + 1} estas al dia con las tareas.</div>);
}
function estadoHayTareaCollapsed(estado) {
    return estado ? "" : "collapsed";
}
function estadoHayTareaShow(estado) {
    return estado ? "show" : "";
}

export default withFirebase(CursoPage);



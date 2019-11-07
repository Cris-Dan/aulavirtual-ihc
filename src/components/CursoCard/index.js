import React from 'react';
import './CursoCard.css';
import firebase from 'firebase';
import { withFirebase } from '../Firebase';
function estadoHayTarea(estado) {
    return estado ? (<p className="naranja-texto">HAY TAREAS PENDIENTES! 🚨</p>) : (<p className="azul-oscuro-texto">No hay tareas pendientes.</p>);
}
function estadoHayTareaColor(estado) {
    return estado ? "card-fondo-cutre2" : "card-fondo-cutre";
}
function estadoHayTareaBool(tareas) {
    let temp = true;

    tareas.forEach(tarea => {
        if (tarea.entregado !== undefined)
            if (tarea.entregado === false) temp = false
    });
    return !temp;

}
class CursoCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            claseId: null
        };
    }

    componentDidMount() {
        this.setState({ loading: true });
        this.props.firebase.curso(this.props.uid).on('value', snapshot => {

            this.props.firebase.clase(snapshot.val().clases).on('value', snapshot => {
                this.setState({
                    loading: false,
                    claseId: snapshot.val().clases
                });
                const claseObject = snapshot.val().clase;
                let temp = false;
                claseObject.forEach(element => {
                    if (estadoHayTareaBool(element.tareas) === true) temp = true
                });
                firebase.database().ref(`cursos/${this.props.uid}/estado`).set(temp);



            });
        });
    }

    componentWillUnmount() {
        this.props.firebase.clase(this.state.claseId).off();
        this.props.firebase.curso(this.props.uid).off();

    }
    render() {
        const { loading } = this.state;
        return (
            <div >
                {loading && <div></div>}
                {!loading && (<React.Fragment>
                    <div id={this.props.uid} className="card mb-3" >
                        <div className="row no-gutters">
                            <div className="col-md-1">
                                <div className={estadoHayTareaColor(this.props.estado)}></div>
                            </div>
                            <div className="col-md-11">
                                <div className="card-header letra-oscura">
                                    EAP {this.props.escuela}/ Semestre {this.props.semestre}/ ciclo {this.props.ciclo}
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title letra-oscura">{this.props.nombre}</h5>


                                </div>
                                <div className="card-footer"> {estadoHayTarea(this.props.estado)}</div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>)}
            </div >
        );
    }
}



export default withFirebase(CursoCard);
import React, { Component } from "react";
import firebase from 'firebase';


class BotonEliminarAl extends Component {

    onSubmit = event => {
        firebase.database().ref(`clases/${this.props.claseId}/clase/${this.props.numero}/tareas/${this.props.i}/entregado`).set(false);
        firebase.database().ref(`clases/${this.props.claseId}/clase/${this.props.numero}/tareasEntregadas/${this.props.i}`).remove();
        event.preventDefault();
    }
    render() {
        return (

            <button type="button" className="close" aria-label="Close" onClick={this.onSubmit}>
                <span aria-hidden="true">&times;</span>
            </button>
        );
    }
}

export default BotonEliminarAl;
import React, { Component } from "react";
import firebase from 'firebase';


class ArchivoFormBase extends Component {

    onSubmit = event => {
        firebase.database().ref(`clases/${this.props.claseId}/clase/${this.props.numero}/${this.props.atributo}/${this.props.i}`).remove();
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

export default ArchivoFormBase;
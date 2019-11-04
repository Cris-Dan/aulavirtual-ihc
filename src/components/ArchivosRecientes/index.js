import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import './ArchivosRecientes.css';
const ArchivosRecientes = ({ archivos }) => (
    <div className="container">

        <div className="card border-dark mb-3" >
            <div className="card-header oscuro">
                <h4 className="texto-claro">Archivos Recientes</h4>
                <buscarForm /></div>
            <div className="card-body text-dark">
                <ul className="list-group list-group-flush">
                    {archivos.reverse().slice(0, 5).map((archivo, i) => (
                        <li key={i} className="list-group-item naranja-texto"><a href={archivo.url} rel="noopener noreferrer" target="_blank" className="naranja-texto"><i className="icon-file-pdf"></i> {archivo.nombre}</a></li>
                    ))
                    }
                </ul>
            </div>
        </div>
    </div>
);

class SignInFormBase extends Component {
    constructor(props) {
        super(props);


    }

    onSubmit = event => {
        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {

                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {

        return (
            <form className="input-group md-form form-sm form-1 pl-0" onSubmit={this.onSubmit}>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <button className="btn btn-outline-secondary " type="button" id="button-addon1">  <i className="material-icons buscar">search</i></button>
                    </div>
                    <input type="text" className="form-control largo" placeholder="Buscar" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                </div>
            </form >
        );
    }
}







const buscarForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);

export default ArchivosRecientes;

export { buscarForm as SignInForm };

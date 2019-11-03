import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import './ArchivosRecientes.css';
const ArchivosRecientes = () => (
    <div className="container">

        <div className="card border-dark mb-3" >
            <div className="card-header oscuro">
                <h2 className="texto-claro">Archivos Recientes</h2>
                <SignInForm /></div>
            <div className="card-body text-dark">

                <ul className="list-group list-group-flush">
                    <li className="list-group-item naranja-texto"><i className="icon-file-pdf"></i> Verificacion y validacion.pdf</li>
                    <li className="list-group-item naranja-texto"><i className="icon-file-zip"></i> LibreriaGLUT.rar</li>
                    <li className="list-group-item naranja-texto"><i className="icon-file-word"></i> Formato para el proyecto.docx</li>
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
                        <button className="btn btn-outline-secondary" type="button" id="button-addon1">  <i className="material-icons">search</i></button>
                    </div>
                    <input type="text" className="form-control largo" placeholder="Buscar" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                </div>
            </form >
        );
    }
}

const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);

export default ArchivosRecientes;

export { SignInForm };

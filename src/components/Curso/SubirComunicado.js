import React, { Component } from "react";
import firebase from 'firebase';
const INITIAL_STATE = {
    nombre: '',
    error: null,
    tareasEntregadas: [],
    claseActual: null,
    cursoId: '',
    clases: ' ',
};

class ArchivoFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    componentWillMount() {
        const cursoId2 = this.props.curso;


        firebase.database().ref(`cursos/${cursoId2}`).on('value', snapshot => {
            const claseObject = snapshot.val().clases;

            this.setState({ clases: claseObject });

            firebase.database().ref(`clases/${claseObject}`).on('value', snapshot => {
                this.setState({ claseActual: snapshot.val().clase[this.props.numero] });

            });
            firebase.database().ref(`clases/${claseObject}/clase/${this.props.numero}`).on('value', snapshot => {
                this.setState({ tareasEntregadas: snapshot.val().comunicados });

            });


        });


    }

    componentWillUnmount() {
        const cursoId2 = this.props.curso;
        const clases = this.state.clases;
        firebase.database().ref(`clases/${clases}`).off();
        firebase.database().ref(`cursos/${cursoId2}`).off();
        firebase.database().ref(`clases/${clases}/clase/${this.props.numero}`).off();
    }
    onSubmit = event => {
        const { nombre, tareasEntregadas, clases, numero } = this.state;
        if (tareasEntregadas != undefined) {
            tareasEntregadas.push(
                nombre

            );
            firebase.database().ref(`clases/${clases}/clase/${this.props.numero}/comunicados`).set(tareasEntregadas);

            this.setState({ nombre: '' });
            event.preventDefault();
        };
    }
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const {
            nombre,
            error, clases
        } = this.state;

        return (
            <form onSubmit={this.onSubmit} className="mt-3">

                <label htmlFor="basic-url">Agregar nuevo comunicado 📝</label>
                <div className="input-group mb-3">
                    <input className="form-control" id="basic-url"
                        name="nombre"
                        value={nombre}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Ingrese su nuevo comunicado aqui." aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Agregar</button>
                    </div>
                </div>
                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

export default ArchivoFormBase;
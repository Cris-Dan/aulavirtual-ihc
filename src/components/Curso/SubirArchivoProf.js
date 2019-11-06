import React, { Component } from "react";
import firebase from 'firebase';
const INITIAL_STATE = {
    nombre: '',
    url: '',
    error: null,
    uploadValue: 0,
    cursoId: '',
    clases: ' ',
    archivos: [],
    claseActual: null
};

class ArchivoFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    componentWillMount() {
        const cursoId2 = this.props.curso;
        const numeroClase = this.props.numero;
        const numero = this.props.numero;
        const clases = this.state.clases;


        firebase.database().ref(`cursos/${cursoId2}`).on('value', snapshot => {
            const claseObject = snapshot.val().clases;
            console.log("la clase " + claseObject);
            this.setState({ clases: claseObject });
            console.log(`clases/${claseObject}/clase/${numero}`);
            firebase.database().ref(`clases/${claseObject}`).on('value', snapshot => {
                this.setState({ claseActual: snapshot.val().clase[numero] });

            });
            firebase.database().ref(`clases/${claseObject}/clase/${numero}`).on('value', snapshot => {
                this.setState({ archivos: snapshot.val().archivos });

            });


        });


    }

    componentWillUnmount() {
        const cursoId2 = this.props.curso;
        const numeroClase = this.props.numero;
        const numero = this.props.numero;
        const clases = this.state.clases;
        firebase.database().ref(`clases/${clases}`).off();
        firebase.database().ref(`cursos/${cursoId2}`).off();
        firebase.database().ref(`clases/${clases}/clase/${numero}`).off();
    }

    onSubmit = event => {
        event.preventDefault();
        const file = event.target.files[0];
        const storageRef = firebase.storage().ref(`archivos/${file.name}`);
        const task = storageRef.put(file);
        const cursoId2 = this.props.curso;
        const numero = this.props.numero;
        const clases = this.state.clases;
        const claseActual = this.state.claseActual;
        const archivos = this.state.archivos;
        console.log("what: " + cursoId2 + " numero de clase " + numero);

        console.log(task);
        task.on('state_changed', snapshot => {

            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            this.setState({
                uploadValue: percentage
            })
        }, error => {

            console.error(error.message);
        }, () => {
            storageRef.getDownloadURL().then(function (url) {
                firebase.database().ref('archivos').push({
                    nombre: file.name,
                    url: url,
                    curso: cursoId2,
                    clase: numero
                });
                if (archivos != undefined) {
                    archivos.push({
                        nombre: file.name,
                        url: url,
                    });
                    firebase.database().ref(`clases/${clases}/clase/${numero}/archivos`).set(archivos);
                }
            }).catch(function (error) {
                console.log(error);
            });
        });


        console.log("uwu");
    };

    render() {
        console.log("aca esta el curso: ");
        const cursoId = this.props.curso;
        const clases = this.state.clases;
        const claseActual = this.state.claseActual;
        console.log("aca");
        console.log(claseActual);
        console.log(clases);
        return (
            <div className="input-group">
                <div className="row">
                    <div className="col-12">
                        <div className="custom-file">
                            <input type="file" id={cursoId} className="custom-file-input" aria-describedby="inputGroupFileAddon04" onChange={this.onSubmit} />
                            <label className="custom-file-label" htmlFor={cursoId}>Elije un archivo</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <progress className="barra-carga" value={this.state.uploadValue} max='100'>
                            {this.state.uploadValue} % </progress>
                    </div>
                </div>
            </div>
        );
    }
}

export default ArchivoFormBase;
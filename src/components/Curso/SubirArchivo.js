import React, { Component } from "react";
import { withFirebase } from '../Firebase';
import firebase from 'firebase';
const INITIAL_STATE = {
    nombre: '',
    url: '',
    error: null,
    uploadValue: 0,
    cursoId: ''
};

class ArchivoFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    componentWillMount() {
        this.setState({
            cursoId: this.props.curso
        });


        console.log(this.state.curso);
    }

    onSubmit = event => {
        event.preventDefault();
        const file = event.target.files[0];
        const storageRef = firebase.storage().ref(`archivos/${file.name}`);
        const task = storageRef.put(file);
        this.setState({
            cursoId: this.props.curso
        });


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
                   /* curso: this.props.curso*/
                });
            }).catch(function (error) {
                console.log(error);
            });
        });


        console.log("uwu");
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (

            <div className="input-group">

                <div className="row">
                    <div className="col-12">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" onChange={this.onSubmit} />
                            <label className="custom-file-label" htmlFor="inputGroupFile04">Elije un archivo</label>
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

export default withFirebase(ArchivoFormBase);
import React, { Component } from "react";
import firebase from 'firebase';

import CursoPage from './index';
import CursoPageProf from './Curso';

class Selector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rol: '',
            loading: false
        };
    }
    componentWillMount() {
        this.setState({ loading: true });
        
        
        
        firebase.database().ref(`users/${this.props.idUsuario}`).on('value', snapshot => {
            const rol = snapshot.val().rol;
            
            this.setState({
                rol,
                loading: false
            });
        });
    }

    componentWillUnmount() {
        firebase.database().ref(`users/${this.props.idUsuario}`).off();
    }




    render() {
        const { rol, loading } = this.state;
        return (
            <div>
                {loading && <div>Loading ...</div>}
                {rol !== 'profesor' ? <CursoPage cursoId={this.props.cursoId} /> : <CursoPageProf cursoId={this.props.cursoId} />}
            </div>
        );
    }
}

export default Selector;
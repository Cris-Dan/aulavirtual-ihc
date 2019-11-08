import React, { Component } from "react";
import firebase from 'firebase';

import HomePage from './index';
import HomePageProf from './HomePageProf';

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
              
                {rol !== 'profesor' ? <HomePage /> : <HomePageProf />}
            </div>
        );
    }
}

export default Selector;
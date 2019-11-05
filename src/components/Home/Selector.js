import React, { Component } from "react";
import { withFirebase } from '../Firebase';


class Selector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rol: '',
            loading: false,
        };
    }
    componentDidMount() {
        this.setState({ loading: true });
        this.props.firebase.user(this.props.idUsuario).on('value', snapshot => {
            const cursoObject = snapshot.val().rol;
            this.setState({
                rol: cursoObject,
                loading: false,
            });
        });
    }

    componentWillUnmount() {
        this.props.firebase.user(this.props.idUsuario).off();
    }




    render() {

        return (
            <div>

            </div>
        );
    }
}

export default withFirebase(Selector);
import React, { Component } from "react";
import { withFirebase } from '../Firebase';
const INITIAL_STATE = {
    nombre: '',
    url: '',
    error: null,
};

class ArchivoFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { nombre, url } = this.state;
        this.props.firebase
            .archivos()
            .push({
                nombre: nombre,
                url: url,
            })
            .then(() => {
                this.setState({ ...INITIAL_STATE });
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
        const {
            nombre,
            url,
            error,
        } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <input className="form-control"
                    name="nombre"
                    value={nombre}
                    onChange={this.onChange}
                    type="text"
                    placeholder="nombre"
                />
                <input className="form-control"
                    name="url"
                    value={url}
                    onChange={this.onChange}
                    type="text"
                    placeholder="url"
                />

                <button type="submit">
                    Agregar
          </button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

export default withFirebase(ArchivoFormBase);
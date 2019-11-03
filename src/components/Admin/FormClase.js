import React, { Component } from "react";
import { withFirebase } from '../Firebase';
const INITIAL_STATE = {
  curso: '',
  numero: '',
  seccion: '',
  comunicado: '',
  error: null,
};

class ClaseFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { curso, numero, seccion, comunicado } = this.state;
    this.props.firebase
      .clases()
      .push({
        curso,
        clase: [numero, seccion, comunicado]
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
      curso,
      numero,
      seccion,
      error,
      comunicado
    } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input className="form-control"
          name="curso"
          value={curso}
          onChange={this.onChange}
          type="text"
          placeholder="curso"
        />
        <input className="form-control"
          name="numero"
          value={numero}
          onChange={this.onChange}
          type="text"
          placeholder="numero"
        />
        <input className="form-control"
          name="seccion"
          value={seccion}
          onChange={this.onChange}
          type="text"
          placeholder="seccion"
        />
        <input className="form-control"
          name="comunicado"
          value={comunicado}
          onChange={this.onChange}
          type="text"
          placeholder="Comunicado"
        />

        <button type="submit">
          Agregar
          </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default withFirebase(ClaseFormBase);
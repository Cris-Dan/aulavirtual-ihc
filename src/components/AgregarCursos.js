import React from "react";

const AgregarCursos = (props) => {

    
    return (
        <div className="section">
            <div className="row">
                <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Agregar un nuevo curso</span>
                            <div className="row">
                                <form className="col s12" onSubmit={props.handleAddCurso}>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="nombre" type="text" className="validate" />
                                            <label for="nombre">nombre</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="semestre" type="text" className="validate" />
                                            <label for="semestre">semestre</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="escuela" type="text" className="validate" />
                                            <label for="escuela">escuela</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="ciclo" type="text" className="validate" />
                                            <label for="ciclo">ciclo</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <button type="submit" className="btn right">agregar</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgregarCursos;
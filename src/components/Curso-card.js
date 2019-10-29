import React from 'react';
import { Link } from 'react-router-dom';

function estadoHayTarea(estado) {
    return estado ? (<a href="#">hay tareas pendientes!</a>) : (<a href="#" className="azul-oscuro-texto">no hay tareas pendientes.</a>);
}
function estadoHayTareaColor(estado) {
    return estado ? "card-fondo-cutre2" : "card-fondo-cutre";
}
function CursoCard(props) {
    return (
        <div>
            <Link to={"/principal/" + props._id}>
                <div className="col s12 m12">
                    <div className="card horizontal ">
                        <div className="card-image">
                            <div className={estadoHayTareaColor(props.estado)}></div>
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <span className="card-title black-text">{props.nombre}</span>
                                <p className="black-text">EAP {props.escuela} {props.semestre} / Ciclo {props.ciclo}</p>
                            </div>
                            <div className="card-action claro">
                                {estadoHayTarea(props.estado)}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CursoCard;
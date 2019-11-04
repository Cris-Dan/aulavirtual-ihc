import React from 'react';
import './CursoCard.css';

function estadoHayTarea(estado) {
    return estado ? (<p className="naranja-texto">HAY TAREAS PENDIENTES!</p>) : (<p className="azul-oscuro-texto">No hay tareas pendientes.</p>);
}
function estadoHayTareaColor(estado) {
    return estado ? "card-fondo-cutre2" : "card-fondo-cutre";
}


const CursoCard = (props) => (
    <div >
        <div id={props.uid} className="card mb-3" >
            <div className="row no-gutters">
                <div className="col-md-1">
                    <div className={estadoHayTareaColor(props.estado)}></div>
                </div>
                <div className="col-md-11">
                    <div className="card-header letra-oscura">
                        EAP {props.escuela}/ Semestre {props.semestre}/ ciclo {props.ciclo}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title letra-oscura">{props.nombre}</h5>


                    </div>
                    <div className="card-footer"> {estadoHayTarea(props.estado)}</div>
                </div>
            </div>
        </div>
    </div >
);

export default CursoCard;
import React from 'react';
import './CursoCard.css';



const CursoCard = (props) => (
    <div >
        <div id={props.uid} className="card mb-3" >
            <div className="row no-gutters">
                <div className="col-md-1">
                    <div className="card-fondo-cutre"></div>
                </div>
                <div className="col-md-11">
                    <div className="card-header letra-oscura">
                        EAP {props.escuela}/ Semestre {props.semestre}/ ciclo {props.ciclo}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title letra-oscura">{props.nombre}</h5>


                    </div>
                    <div className="card-footer"> <p className="azul-oscuro-texto">Click aqui para ver el curso.</p></div>
                </div>
            </div>
        </div>
    </div >
);

export default CursoCard;
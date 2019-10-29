import React from 'react';

function CursoCard(props) {
    return (
        <div className="clase">
            <div className="col s12 m12">
                <h4 className="card-title left naranja-claro-texto"><b>Clase {props.clase}</b></h4>
            </div>
            <div className="collection">
                <div className="row">
                    <div className="col s12 m12 claro">
                        <h5 className="collection-item left claro">Mensajes</h5>
                    </div>
                    {props.mensajes.map((mensaje, i) => {
                        return (
                            <p key={i} className="collection-item naranja-texto">{mensaje.mensaje}</p>
                        );
                    })}

                    <div className="col s12 m12 claro">
                        <h5 className="collection-item left claro">Archivos</h5>
                    </div>
                    {props.archivos.map((archivo, i) => {
                        return (
                            <a key={i} href="#!" className="collection-item naranja-texto"><i className="icon-file-word"></i>{archivo.archivo}</a>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default CursoCard;
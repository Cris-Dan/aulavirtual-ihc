import React from 'react';

function Mensajes(mensajes) {
    const men = mensajes.map((mensaje, i) =>
        <p key={i} className="collection-item naranja-texto">{mensaje.mensaje}</p>
    );
    return (<div>{men}</div>);
}
function Archivos(archivos) {
    const arch = archivos.map((archivo, i) =>
        <a key={i} href="#!" className="collection-item naranja-texto"><i className="icon-file-word"></i>{archivo.archivo}</a>
    );
    return (<div>{arch}</div>);
}

function Secciones(secciones) {
    const secc = secciones.map((seccion, i) =>
        <div key={i}>
            <div className="col s12 m12 claro">
                <h5 className="collection-item left claro">{seccion.titulo}</h5>
            </div>
            {Mensajes(seccion.mensajes)}
            {Archivos(seccion.archivos)}
        </div>);
    return (<div>{secc}</div>);
}

function Clases(clases) {
    const cla = clases.map((clase, i) =>
        <div key={i}>
            <div className="col s12 m12">
                <h4 className="card-title left naranja-claro-texto"><b>Clase {clase._id}</b></h4>
            </div>
            <div className="collection">
                <div className="row">
                    {Secciones(clase.secciones)}
                </div>
            </div>
        </div>);
    return (<div>{cla}</div>)
}


function CursoCard2(props) {
    return (
        <div className="clase">
            {Clases(props.clases)}
        </div>
    );
};

export default CursoCard2;
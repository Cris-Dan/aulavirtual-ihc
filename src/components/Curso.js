import React from 'react';
import ArchivosRecientes from './ArchivosRecientes';
import ClaseCard from './Clase-card';
import ClaseCard2 from './Clase-card2';

const clases = [{
    "_id": 1,
    "secciones": [
        {
            "titulo": "Teoria",
            "mensajes": [{ "mensaje": "desarrollar los ejercicios propuestos en el pdf." }],
            "archivos": [{ "archivo": "Verificacion y validacion.pdf" }, { "archivo": "Formato para el proyecto.docx" }]
        }
        ,
        {
            "titulo": "Practica",
            "mensajes": [{ "mensaje": "agregar la libreria a su IDE" }, { "mensaje": "resolver los ejercicos de la clase 7" }],
            "archivos": [{ "archivo": "LibreriaGLUT.rar" }, { "archivo": "Clase 7.pdf" }]
        }
    ]
},
{
    "_id": 2,
    "secciones": [
        {
            "titulo": "Teoria",
            "mensajes": [{ "mensaje": "desarrollar los ejercicios propuestos en el pdf." }],
            "archivos": [{ "archivo": "Verificacion y validacion.pdf" }, { "archivo": "Formato para el proyecto.docx" }]
        }
        ,
        {
            "titulo": "Laboratorio",
            "mensajes": [{ "mensaje": "agregar la libreria a su IDE" }, { "mensaje": "resolver los ejercicos de la clase 7" }],
            "archivos": [{ "archivo": "LibreriaGLUT.rar" }, { "archivo": "Clase 7.pdf" }]
        }
    ]
}
];

function Curso() {
    return (
        <div>
            <div className="container">
                <div className="section">
                    <div className="row">
                        <div className="col s12 m8">
                            <div className="section">
                                <div className="card horizontal azul-oscuro">
                                    <div className="card-image">
                                        <div className="card-fondo-cutre2"></div>
                                    </div>
                                    <div className="card-stacked">
                                        <div className="card-content">
                                            <span className="card-title white-text">GERENCIA DE PROYECTO DE SOFTWARE</span>
                                            <p className="white-text">EAP SOFTWARE 2019-2 / Ciclo 0</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-content black-text">
                                        <div className="row">
                                            <ClaseCard2 clases={clases} />
                                            <ClaseCard clase="3" mensajes={[{ "mensaje": "desarrollar los ejercicios propuestos en el pdf de teoria." }, { "mensaje": "mensaje2" }]} archivos={[{ "archivo": "Verificacion y validacion.pdf" }, { "archivo": "Formato para el proyecto.docx" }]} />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <ArchivosRecientes />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Curso;
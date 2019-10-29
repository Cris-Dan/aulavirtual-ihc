import React from 'react';
import ArchivosRecientes from './ArchivosRecientes';
import ClaseCard from './Clase-card';
import ClaseCard2 from './Clase-card2';



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
                                            <div className="clase">
                                                <div className="col s12 m12">
                                                    <h4 className="card-title left naranja-claro-texto"><b>Clase 1</b></h4>
                                                </div>
                                                <div className="collection">
                                                    <div className="row">
                                                        <div className="col s12 m12 claro">
                                                            <h5 className="collection-item  left claro">Teoria</h5>
                                                        </div>
                                                        <a href="#!" className="collection-item naranja-texto"><i className="icon-file-pdf"></i> Verificacion y validacion.pdf</a>
                                                        <a href="#!" className="collection-item naranja-texto"><i className="icon-file-word"></i> Formato para el proyecto.docx</a>
                                                        <div className="col s12 m12 claro">
                                                            <h5 className="collection-item left claro">Practica</h5>
                                                        </div>
                                                        <p className="collection-item naranja-texto">desarrollar los ejercicios propuestos en el pdf de teoria.</p>
                                                        <a href="#!" className="collection-item naranja-texto"><i className="icon-file-word"></i> Formato para el proyecto.docx</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="clase">
                                                <div className="col s12 m12">
                                                    <h4 className="card-title left naranja-claro-texto"><b>Clase 2</b></h4>
                                                </div>
                                                <div className="collection">
                                                    <div className="row">
                                                        <div className="col s12 m12 claro">
                                                            <h5 className="collection-item  left claro">Teoria</h5>
                                                        </div>
                                                        <a href="#!" className="collection-item naranja-texto"><i className="icon-file-pdf"></i> Verificacion y validacion.pdf</a>
                                                        <a href="#!" className="collection-item naranja-texto"><i className="icon-file-word"></i> Formato para el proyecto.docx</a>
                                                        <div className="col s12 m12 claro">
                                                            <h5 className="collection-item left claro">Practica</h5>
                                                        </div>
                                                        <p className="collection-item naranja-texto">desarrollar los ejercicios propuestos en el pdf de teoria.</p>
                                                        <a href="#!" className="collection-item naranja-texto"><i className="icon-file-word"></i> Formato para el proyecto.docx</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <ClaseCard clase="3" mensajes={[{ "mensaje": "desarrollar los ejercicios propuestos en el pdf de teoria." }, { "mensaje": "mensaje2" }]} archivos={[{ "archivo": "Verificacion y validacion.pdf" }, { "archivo": "Formato para el proyecto.docx" }]} />
                                            <ClaseCard2 />
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
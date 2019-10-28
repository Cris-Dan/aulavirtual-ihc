import React from 'react';
import ArchivosRecientes from './ArchivosRecientes';

function Curso() {
    return (
        <div>
            <div className="container">
                <div className="section">
                    <div className="row">
                        <div class="col s12 m8">
                            <div className="section">
                                <div class="card horizontal azul-oscuro">
                                    <div class="card-image">
                                        <div className="card-fondo-cutre2"></div>
                                    </div>
                                    <div class="card-stacked">
                                        <div class="card-content">
                                            <span className="card-title white-text">GERENCIA DE PROYECTO DE SOFTWARE</span>
                                            <p className="white-text">EAP SOFTWARE 2019-2 / Ciclo 0</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-content black-text">
                                        <div className="row">
                                            <div className="clase">
                                                <div className="col s12 m12">
                                                    <h4 class="card-title left naranja-claro-texto"><b>Clase 1</b></h4>
                                                </div>
                                                <div className="collection">
                                                    <div className="row">
                                                        <div className="col s12 m12 claro">
                                                            <h5 class="collection-item  left claro">Teoria</h5>
                                                        </div>
                                                        <a href="#!" class="collection-item naranja-texto"><i class="icon-file-pdf"></i> Verificacion y validacion.pdf</a>
                                                        <a href="#!" class="collection-item naranja-texto"><i class="icon-file-word"></i> Formato para el proyecto.docx</a>
                                                        <div className="col s12 m12 claro">
                                                            <h5 class="collection-item left claro">Practica</h5>
                                                        </div>
                                                        <p class="collection-item naranja-texto">desarrollar los ejercicios propuestos en el pdf de teoria.</p>
                                                        <a href="#!" class="collection-item naranja-texto"><i class="icon-file-word"></i> Formato para el proyecto.docx</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="clase">
                                                <div className="col s12 m12">
                                                    <h4 class="card-title left naranja-claro-texto"><b>Clase 2</b></h4>
                                                </div>
                                                <div className="collection">
                                                    <div className="row">
                                                        <div className="col s12 m12 claro">
                                                            <h5 class="collection-item  left claro">Teoria</h5>
                                                        </div>
                                                        <a href="#!" class="collection-item naranja-texto"><i class="icon-file-pdf"></i> Verificacion y validacion.pdf</a>
                                                        <a href="#!" class="collection-item naranja-texto"><i class="icon-file-word"></i> Formato para el proyecto.docx</a>
                                                        <div className="col s12 m12 claro">
                                                            <h5 class="collection-item left claro">Practica</h5>
                                                        </div>
                                                        <p class="collection-item naranja-texto">desarrollar los ejercicios propuestos en el pdf de teoria.</p>
                                                        <a href="#!" class="collection-item naranja-texto"><i class="icon-file-word"></i> Formato para el proyecto.docx</a>
                                                    </div>
                                                </div>
                                            </div>
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
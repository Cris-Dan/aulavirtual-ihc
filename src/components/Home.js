import React from 'react';
import { Link } from 'react-router-dom';
import ArchivosRecientes from './ArchivosRecientes';
function Home() {
    return (
        <div>
            <div className="container">

                <div className="section">

                    <div className="row">
                        <div className="col s12 m8">
                            <div className="section">
                                <div className="row ">
                                    <Link to="/curso">
                                        <div class="col s12 m12">
                                            <div class="card horizontal ">
                                                <div class="card-image">
                                                    <div className="card-fondo-cutre2"></div>
                                                </div>
                                                <div class="card-stacked">
                                                    <div class="card-content">
                                                        <span className="card-title black-text">GERENCIA DE PROYECTO DE SOFTWARE</span>
                                                        <p className="black-text">EAP SOFTWARE 2019-2 / Ciclo 0</p>
                                                    </div>
                                                    <div class="card-action claro">
                                                        <a href="#">hay tareas pendientes!</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    <div class="col s12 m12">
                                        <div class="card horizontal">
                                            <div class="card-image">
                                                <div className="card-fondo-cutre"></div>
                                            </div>
                                            <div class="card-stacked">
                                                <div class="card-content">
                                                    <span className="card-title">GERENCIA DE PROYECTO DE SOFTWARE</span>
                                                    <p>EAP SOFTWARE 2019-2 / Ciclo 0</p>
                                                </div>
                                                <div class="card-action claro">
                                                    <a href="#" className="azul-oscuro-texto">No hay tareas pendientes.</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col s12 m12">
                                        <div class="card horizontal">
                                            <div class="card-image">
                                                <div className="card-fondo-cutre"></div>
                                            </div>
                                            <div class="card-stacked">
                                                <div class="card-content">
                                                    <span className="card-title">NTERACCION HOMBRE - COMPUTADOR</span>
                                                    <p>EAP SOFTWARE 2019-2 / Ciclo 0</p>
                                                </div>
                                                <div class="card-action claro">
                                                    <a href="#" className="azul-oscuro-texto">No hay tareas pendientes.</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col s12 m12">
                                        <div class="card horizontal">
                                            <div class="card-image">
                                                <div className="card-fondo-cutre"></div>
                                            </div>
                                            <div class="card-stacked">
                                                <div class="card-content">
                                                    <span className="card-title">DATA WAREHOUSE</span>
                                                    <p>EAP SOFTWARE 2019-2 / Ciclo 0</p>
                                                </div>
                                                <div class="card-action claro">
                                                    <a href="#" className="azul-oscuro-texto">No hay tareas pendientes.</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col s12 m12">
                                        <div class="card horizontal">
                                            <div class="card-image">
                                                <div className="card-fondo-cutre"></div>
                                            </div>
                                            <div class="card-stacked">
                                                <div class="card-content">
                                                    <span className="card-title">GESTION DE CONFIGURACION Y MANTENIMIENTO</span>
                                                    <p>EAP SOFTWARE 2019-2 / Ciclo 8</p>
                                                </div>
                                                <div class="card-action claro">
                                                    <a href="#" className="azul-oscuro-texto">No hay tareas pendientes.</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col s12 m12">
                                        <div class="card horizontal">
                                            <div class="card-image">
                                                <div className="card-fondo-cutre"></div>
                                            </div>
                                            <div class="card-stacked">
                                                <div class="card-content">
                                                    <span className="card-title">DATA WAREHOUSE</span>
                                                    <p>EAP SOFTWARE 2019-2 / Ciclo 0</p>
                                                </div>
                                                <div class="card-action claro">
                                                    <a href="#" className="azul-oscuro-texto">No hay tareas pendientes.</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col s12 m12">
                                        <div class="card horizontal">
                                            <div class="card-image">
                                                <div className="card-fondo-cutre"></div>
                                            </div>
                                            <div class="card-stacked">
                                                <div class="card-content">
                                                    <span className="card-title">DATA WAREHOUSE</span>
                                                    <p>EAP SOFTWARE 2019-2 / Ciclo 0</p>
                                                </div>
                                                <div class="card-action claro">
                                                    <a href="#" className="azul-oscuro-texto">No hay tareas pendientes.</a>
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

export default Home;

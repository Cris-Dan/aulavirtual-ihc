import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <div class="parallax-container principal">
                <div class="parallax"><img src="fisi-pabellon.jpg" /></div>
                <div className="row">
                    <div className="col s12 m8 offset-m2">
                        <div className="white-text transparent bienvenida">

                            <h4>BIENVENIDO AL AULA VIRTUAL</h4>
                            <p>Aula virtual Semestre 2019-2</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">

                <div className="section">

                    <div className="row">
                        <div className="col s12 m7">
                            <h1 class="header left">Cursos</h1>
                        </div>
                        <div className="col s12 m5">
                            <div class="input-field">
                                <i class="material-icons prefix">search</i>
                                <input type="text" id="autocomplete-input" class="autocomplete" />
                                <label for="autocomplete-input">busqueda de archivos</label>
                            </div>
                        </div>
                        <div>
                            <div className="col s12 m8">
                                <div className="section ">
                                    <div className="row ">
                                        <div class="col s12 m12">
                                            <div class="card horizontal">
                                                <div class="card-image">
                                                    <div className="card-fondo-cutre2"></div>
                                                </div>
                                                <div class="card-stacked">
                                                    <div class="card-content">
                                                        <span className="card-title">GERENCIA DE PROYECTO DE SOFTWARE</span>
                                                        <p>EAP SOFTWARE 2019-2 / Ciclo 0</p>
                                                    </div>
                                                    <div class="card-action claro">
                                                        <a href="#">hay tareas pendientes!</a>
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
                            <div className="col s12 m4">
                                <div className="section ">
                                    <div className="row ">

                                        <div className="col s12">
                                            <div className="card azul-oscuro">
                                                <div className="card-content white-text">
                                                    <span className="card-title">Archivos Recientes</span>
                                                </div>
                                                <div className="collection ">
                                                    <a href="#!" class="collection-item claro naranja-texto"><i class="icon-file-pdf"></i> Verificacion y validacion.pdf</a>
                                                    <a href="#!" class="collection-item claro naranja-texto"><i class="icon-file-zip"></i> LibreriaGLUT.rar</a>
                                                    <a href="#!" class="collection-item claro naranja-texto"><i class="icon-file-word"></i> Formato para el proyecto.docx</a>
                                                    <a href="#!" class="collection-item claro naranja-texto"><i class="icon-file-pdf"></i> Clase 7.pdf</a>
                                                    <a href="#!" class="collection-item claro naranja-texto"><i class="icon-file-pdf"></i> Clase 8.pdf</a>
                                                    <a href="#!" class="collection-item claro naranja-texto"><i class="icon-file-pdf"></i> Clase 9.pdf</a>
                                                    <a href="#!" class="collection-item claro naranja-texto"><i class="icon-file-pdf"></i> Clase 10.pdf</a>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col s12">
                                            <div className="card azul-oscuro">
                                                <div className="card-content white-text">
                                                    <span className="card-title">Biblioteca Virtual</span>
                                                </div>
                                                <div className="collection">
                                                    <a href="http://sisbib.unmsm.edu.pe/m_recursos/recursos_suscripcion.html" rel="noopener noreferrer" target="_blank" className="collection-item claro naranja-texto">Revistas Científicas</a>
                                                    <a href="http://sisbib.unmsm.edu.pe/m_catalogo/catalogos.html" rel="noopener noreferrer" target="_blank" className="collection-item claro naranja-texto">Catálogo Electrónico</a>
                                                    <a href="http://sisbib.unmsm.edu.pe/m_recursos/repositorios.html" rel="noopener noreferrer" target="_blank" className="collection-item claro naranja-texto">Repositorio Digital UNMSM</a>
                                                    <a href="http://revistasinvestigacion.unmsm.edu.pe/" rel="noopener noreferrer" target="_blank" className="collection-item claro naranja-texto">Revistas de Investigación</a>
                                                    <a href="http://revistasinvestigacion.unmsm.edu.pe/index.php/sistem" rel="noopener noreferrer" target="_blank" className="collection-item claro naranja-texto">Revista RISI</a>
                                                    <a href="http://bvcyt.concytec.gob.pe/" rel="noopener noreferrer" target="_blank" className="collection-item claro naranja-texto">Biblioteca CONCYTEC</a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

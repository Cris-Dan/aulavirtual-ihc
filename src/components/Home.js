import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col s12 m8">
                        <div className="section ">
                            <div className="row ">
                                <div className="col s12">
                                    <div className="card azul-oscuro">
                                        <div className="card-content white-text">
                                            <span className="card-title">Bienvenido al Aula Virtual</span>
                                            <p>Aula virtual Semestre 2019-2</p>
                                        </div>
                                        <div class="card-action">
                                            <Link to="/about" class="amarillo-texto">Tienes mensajes sin leer <i class="material-icons naranja-claro-texto right">announcement</i> </Link>
                                        </div>
                                    </div>
                                    <div className="card nube">
                                        <div className="card-content ">
                                            <span className="card-title">DATAWAREHOUSE</span>
                                            <p>EAP SOFTWARE 2019-2 / Ciclo 0</p>
                                        </div>
                                    </div>
                                    <div className="card nube">
                                        <div className="card-content ">
                                            <span className="card-title">METODOLOGIA DE LA INVESTIGACION</span>
                                            <p>EAP SOFTWARE 2019-2 / Ciclo 0</p>
                                        </div>
                                    </div>
                                    <div className="card nube">
                                        <div className="card-content ">
                                            <span className="card-title">GERENCIA DE PROYECTO DE SOFTWARE</span>
                                            <p>EAP SOFTWARE 2019-2 / Ciclo 0</p>
                                        </div>
                                    </div>
                                    <div className="card nube">
                                        <div className="card-content ">
                                            <span className="card-title">NTERACCION HOMBRE - COMPUTADOR</span>
                                            <p>EAP SOFTWARE 2019-2 / Ciclo 0</p>
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
                                            <span className="card-title">Biblioteca Virtual</span>
                                        </div>
                                        <div className="collection">
                                            <a href="http://sisbib.unmsm.edu.pe/m_recursos/recursos_suscripcion.html" rel="noopener noreferrer" target="_blank" className="collection-item white-text plomo">Revistas Científicas</a>
                                            <a href="http://sisbib.unmsm.edu.pe/m_catalogo/catalogos.html" rel="noopener noreferrer" target="_blank" className="collection-item white-text plomo">Catálogo Electrónico</a>
                                            <a href="http://sisbib.unmsm.edu.pe/m_recursos/repositorios.html" rel="noopener noreferrer" target="_blank" className="collection-item white-text plomo">Repositorio Digital UNMSM</a>
                                            <a href="http://revistasinvestigacion.unmsm.edu.pe/" rel="noopener noreferrer" target="_blank" className="collection-item white-text plomo">Revistas de Investigación</a>
                                            <a href="http://revistasinvestigacion.unmsm.edu.pe/index.php/sistem" rel="noopener noreferrer" target="_blank" className="collection-item white-text plomo">Revista RISI</a>
                                            <a href="http://bvcyt.concytec.gob.pe/" rel="noopener noreferrer" target="_blank" className="collection-item white-text plomo">Biblioteca CONCYTEC</a>
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

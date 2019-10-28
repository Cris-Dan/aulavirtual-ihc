import React from 'react';

function ArchivosRecientes() {
    return (
        <div>
            <div className="col s12 m4">
                <div className="section ">
                    <div className="row ">

                        <div className="col s12">
                            <div className="card azul-oscuro">
                                <div className="card-content white-text">
                                    <span className="card-title">Archivos Recientes</span>
                                    
                                    <div class="input-field white-text">
                                            <i class="material-icons prefix">search</i>
                                            <input type="text" id="autocomplete-input" class="autocomplete white-text" />
                                            <label for="autocomplete-input">busqueda de archivos</label>
                                     </div>

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
    );
};

export default ArchivosRecientes;
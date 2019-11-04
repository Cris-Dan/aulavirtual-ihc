import React from 'react';

const Biblioteca = () => (
    <div className="container">
        <div className="card border-dark mb-3" >
            <div className="card-header oscuro">
                <h4 className="texto-claro">Biblioteca Virtual</h4>
            </div>
            <div className="card-body text-dark ">

                <ul className="list-group list-group-flush ">
                    <li className="list-group-item naranja-texto"><a href="http://sisbib.unmsm.edu.pe/m_recursos/recursos_suscripcion.html" rel="noopener noreferrer" target="_blank" className="claro naranja-texto">Revistas Científicas</a></li>
                    <li className="list-group-item naranja-texto"><a href="http://sisbib.unmsm.edu.pe/m_catalogo/catalogos.html" rel="noopener noreferrer" target="_blank" className="claro naranja-texto">Catálogo Electrónico</a></li>
                    <li className="list-group-item naranja-texto"><a href="http://sisbib.unmsm.edu.pe/m_recursos/repositorios.html" rel="noopener noreferrer" target="_blank" className="claro naranja-texto">Repositorio Digital UNMSM</a></li>
                    <li className="list-group-item naranja-texto"><a href="http://revistasinvestigacion.unmsm.edu.pe/" rel="noopener noreferrer" target="_blank" className="claro naranja-texto">Revistas de Investigación</a></li>
                    <li className="list-group-item naranja-texto"><a href="http://revistasinvestigacion.unmsm.edu.pe/index.php/sistem" rel="noopener noreferrer" target="_blank" className="claro naranja-texto">Revista RISI</a></li>
                    <li className="list-group-item naranja-texto"> <a href="http://bvcyt.concytec.gob.pe/" rel="noopener noreferrer" target="_blank" className="claro naranja-texto">Biblioteca CONCYTEC</a></li>
                </ul>
            </div>
        </div>
    </div>
);

export default Biblioteca;
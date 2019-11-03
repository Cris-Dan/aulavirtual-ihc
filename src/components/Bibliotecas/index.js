import React from 'react';

const Biblioteca = () => (
    <div className="container">
        <div className="card border-dark mb-3" >
            <div className="card-header oscuro">
                <h2 className="texto-claro">Biblioteca Virtual</h2>
            </div>
            <div className="card-body text-dark">

                <ul className="list-group list-group-flush">
                    <li className="list-group-item naranja-texto"><i className="icon-file-pdf"></i> Verificacion y validacion.pdf</li>
                    <li className="list-group-item naranja-texto"><i className="icon-file-zip"></i> LibreriaGLUT.rar</li>
                    <li className="list-group-item naranja-texto"><i className="icon-file-word"></i> Formato para el proyecto.docx</li>
                </ul>
            </div>
        </div>
    </div>
);

export default Biblioteca;
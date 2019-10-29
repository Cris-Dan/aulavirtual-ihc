import React from 'react';
import ArchivosRecientes from './ArchivosRecientes';
import CursoCard from './Curso-card';
function Home(props) {
    console.log(props.cursos + " en home");
    return (
        <div>
            <div className="container">
                <div className="section">
                    <div className="row">
                        <div className="col s12 m8">
                            <div className="section">
                                <div className="row ">
                                    <CursoCard estado={false} nombre="DATA WAREHOUSE" semestre="2019-2" escuela="SOFTWARE" ciclo="0" />
                                    <CursoCard estado={true} nombre="GERENCIA DE PROYECTO DE SOFTWARE" semestre="2019-2" escuela="SOFTWARE" ciclo="8" />
                                    <CursoCard estado={false} nombre="INTERACCION HOMBRE - COMPUTADOR" semestre="2019-2" escuela="SOFTWARE" ciclo="8" />
                                    <CursoCard estado={false} nombre="GESTION DE CONFIGURACION Y MANTENIMIENTO" semestre="2019-2" escuela="SOFTWARE" ciclo="8" />
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

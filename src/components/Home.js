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
                                    {props.cursos.map((curso, i) => {
                                        return (
                                            <CursoCard key={i} _id={curso._id} estado={curso.estado} nombre={curso.nombre} semestre={curso.semestre} escuela={curso.escuela} ciclo={curso.ciclo} />
                                        );
                                    })}
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

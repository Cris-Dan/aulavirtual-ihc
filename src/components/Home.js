import React, { useEffect, useState } from 'react';
import ArchivosRecientes from './ArchivosRecientes';
import app from "firebase";
import CursoCard from './Curso-card';
const Home = (props) => {

    var [cursos, setCursos] = useState(null);
    useEffect(() => {
        app.database().ref('cursos').on('value', function (snapshot) {
            setCursos(cursos, snapshot.val());
            console.log(`recibido: ${snapshot.val()}`);
            console.log(`guardado: ${cursos}`);
        });
    });


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

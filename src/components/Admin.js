import React, { useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "firebase";
import { AuthContext } from "./Auth.js";
import Sidenav from './Sidenav';
import AgregarCursos from './AgregarCursos';
const Admin = () => {
    const handleAddCurso = (
        async event => {
            event.preventDefault();
            const { nombre, semestre, escuela, ciclo } = event.target.elements;
            try {
                app.database().ref(`cursos/${nombre.value}`).set({
                    semestre: semestre.value, escuela: escuela.value, ciclo: ciclo.value, estado: false
                });
                alert("Curso agregado con exito");
            } catch (error) {
                alert(error);
            }
        }
    );





    const { currentUser } = useContext(AuthContext);
    if (!currentUser) {
        return <Redirect to="/" />;
    }
    return (
        <div>
            <Sidenav />
            <div className="container">
                <AgregarCursos handleAddCurso={handleAddCurso} />
            </div>
        </div>
    )
}

export default withRouter(Admin);
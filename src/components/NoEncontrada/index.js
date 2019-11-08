import React from 'react';
import { Link } from 'react-router-dom';
const NoEncontrada = () => (
    <div className="container">
        <div className="row  justify-content-center">

            <div className="col-12 text-center">
            <img src="404.png" className="" alt="Pagina no encontrada" />
            </div>
            <div className="col-12 text-center">
                <h1 className="">Pagina no encontrada 💤</h1>
            </div>
            <div className="col-12 text-center">
                <p>La direccion de la pagina web que ha intentado ingresar no existe en el sitio web.</p>
            </div>
            <div className="col-12 text-center mt-3">
                <Link to="/Home" className="azul-oscuro-texto">➡ <b>Le recomendamos que vuelva a nuestra pagina principal.</b> </Link>
            </div>


        </div>

    </div >
);

export default NoEncontrada;

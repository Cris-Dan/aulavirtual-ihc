import React from 'react';
import { Link } from 'react-router-dom';

function SidenavLogin() {
    return (
        <div >
            
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper oscuro">
                        <div className="row">
                            <div className="col s12 m12">
                                <div className="container">


                                    <Link to="/" className="left"><img className="imagen-logo" src="logo-fisi-header-2.png" alt="logo" /></Link>

                                </div>

                            </div>
                            <div className="col s12 m12 borde-cero">
                                <div className="bot-navbar"></div>
                            </div>
                        </div>

                    </div>
                </nav>
            </div>

            
        </div>
    );
};

export default SidenavLogin;
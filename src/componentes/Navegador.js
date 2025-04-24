import React from "react";
import { Link } from "react-router-dom";

const Navegador = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light px-4 py-3" style={{ backgroundColor: "#B7C0F9" }}>
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">NOTAS</span>
                <div className="ms-auto d-flex gap-2">
                    <Link to="/Registro" className="btn btn-sm">Registrarse</Link>
                    <button className="btn btn-primary btn-sm">Ingresar</button>
                </div>
            </div>
        </nav>
    );
};
export default Navegador;
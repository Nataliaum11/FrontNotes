import React from "react";

const Navegador = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light px-4 py-3" style={{ backgroundColor: "#B7C0F9" }}>
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">NOTAS</span>
                <div className="ms-auto d-flex gap-2">
                    <button className="btn btn-sm">Registrarse</button>
                    <button className="btn btn-primary btn-sm">Ingresar</button>
                </div>
            </div>
        </nav>
    );
};
export default Navegador;
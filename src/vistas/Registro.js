import React from "react";
import Navegador from "../componentes/Navegador";
import { Form, Container } from "react-bootstrap";

const Registro = () => {
    return (
        <div>
            <Navegador/>
            <Container className="sign in d-flex flex-column justify-content-center align-items-center">
                <h2 className="text-center">Registrate</h2>
                <form>
                <Form.Group className="d-flex justify-content-center">
                   <Form.Label className="text-center">Ingresa tu nombre</Form.Label> 
                   <Form.Control type="name" className="form-control" id="nombrePersona" required></Form.Control>
                </Form.Group>
                <Form.Group className="d-flex justify-content-center">
                   <Form.Label className="text-center">Nombre de usuario</Form.Label> 
                   <Form.Control type="name" className="form-control" id="nombreUsuario" required></Form.Control>
                </Form.Group>
                <Form.Group className="d-flex justify-content-center">
                   <Form.Label className="text-center">Ingresa tu correo</Form.Label> 
                   <Form.Control type="email" className="form-control" id="emailUsuario" required></Form.Control>
                </Form.Group>
                <Form.Group className="d-flex justify-content-center">
                   <Form.Label className="text-center">Ingresa una contraseña</Form.Label> 
                   <Form.Control type="password" className="form-control" id="contraseña" required></Form.Control>
                </Form.Group>
                <Form.Group className="d-flex justify-content-center">
                   <Form.Label className="text-center">Ingresa tu nombre</Form.Label> 
                   <Form.Control type="password" className="form-control" id="confirmarContraseña" required></Form.Control>
                </Form.Group>
               </form>
               <button variant="primary" type="submit" >Registrarme</button>
               <button className="btn btn-danger"> <i className="bi bi-google me-2"></i> </button>
            </Container>
        </div>
    )
}

export default Registro;
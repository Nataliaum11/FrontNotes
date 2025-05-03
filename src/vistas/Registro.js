import React, { useState } from "react";
import Navegador from "../componentes/Navegador";
import { Form, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import '../App.css';

const Registro = () => { 
   const [ formData, setFormData ] = useState ({
      nombre: "",
      username: "",
      correo: "",
      contraseña: "",
      confirmContraseña: "",
   });

   const [, setError] = useState(""); // Para mostrar errores
   const navigate = useNavigate();

   const handlechange = (e) => {
      setFormData ({
         ...formData,
         [e.target.id]: e.target.value,
      });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();;

      if (formData.contraseña !== formData.confirmContraseña) {
         setError("Las contraseñas deben coincidir.");
         return;
       }

       setError("");

      try {
         const response = await fetch( "http://localhost:3000/register", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
               nombre: formData.nombre,
               username: formData.username,
               correo: formData.correo,
               contraseña: formData.contraseña,
            }),
         });

         console.log("Response status:", response.status);   
         const data = await response.json();
         console.log("response data:", data)

         if (!response.ok) {
            setError(data.message || "Ocurrió un error durante el registro.");
            return;
          }
          alert("¡Registro exitoso!");
          navigate("/login");

      } catch (error) {
         console.error("Error en el registro:", error);
         alert("Ocurrio un error a la hora de realizar tu registro, vuelve a intentarlo.");
      }
   };
    return (
        <div>
            <Navegador/>
            <Container  className="mi-cardRegister sign in d-flex flex-column justify-content-center align-items-center ">
                <h3 className="text-center">Registrate</h3>
                <Form onSubmit={ handleSubmit }>
                <Form.Group className="mb-1">
                   <Form.Label className="text-titulos m-0 p-0">Ingresa tu nombre</Form.Label> 
                   <Form.Control type="name" id="nombre" value={ formData.nombre }    className="form-control custom-border" onChange={ handlechange } required></Form.Control>
                </Form.Group>
                <Form.Group className="mb-1">
                   <Form.Label className="text-titulos m-0 p-0">Nombre de usuario</Form.Label> 
                   <Form.Control type="name" id="username" className="form-control custom-border" value={ formData.username } onChange={ handlechange } required></Form.Control>
                </Form.Group>
                <Form.Group className="mb-1">
                   <Form.Label className="text-titulos m-0 p-0">Ingresa tu correo</Form.Label> 
                   <Form.Control type="email" id="correo" className="form-control custom-border" value={ formData.correo } onChange={ handlechange } required></Form.Control>
                </Form.Group>
                <Form.Group className="mb-1">
                   <Form.Label className="text-titulos m-0 p-0">Ingresa una contraseña</Form.Label> 
                   <Form.Control type="password" id="contraseña" className="form-control custom-border" value={ formData.contraseña } onChange={ handlechange } required></Form.Control>
                </Form.Group>
                <Form.Group className="mb-1">
                   <Form.Label className="text-titulos m-0 p-0">Confirmar contraseña</Form.Label> 
                   <Form.Control type="password" id="confirmContraseña" className="form-control custom-border" value={ formData.confirmContraseña} onChange={ handlechange } required></Form.Control>
                </Form.Group>
                <div className="d-flex justify-content-center">
                <Button type="submit" className="mt-3">Registrarme</Button> 
                </div>
               </Form>
            </Container>
        </div>
    );
};

export default Registro;
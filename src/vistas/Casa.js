import React from 'react';
import { Card, Form, Container } from 'react-bootstrap';
import Navegador from '../componentes/Navegador';
import '../App.css';

const Casa = () => {
    const fecha = new Date();
    const opcionesFecha = { day: 'numeric', month: 'long', year: 'numeric' };
    const opcionesHora = { hour: '2-digit', minute: '2-digit', hour12: true };
    const fechaFormateada = fecha.toLocaleDateString('es-ES', opcionesFecha);
    const horaFormateada = fecha.toLocaleTimeString('es-ES', opcionesHora);

    const cajas = [
        { id: 1, fecha: fechaFormateada, hora: horaFormateada, texto: 'Mañana debo hacer café' },
        { id: 2, fecha: fechaFormateada, hora: horaFormateada, texto: 'Reunión a las 10 AM' },
        { id: 3, fecha: fechaFormateada, hora: horaFormateada, texto: 'Comprar pan por la tarde' },
    ];

    return (
        <div>
            <Navegador />
            <Container fluid className="d-flex flex-column justify-content-center align-items-center">
                <h1 className='text_title mt-5'>Bienvenid@</h1>
                <h2 className='text'>Inicia sesión para crear tus notas</h2>
            </Container>
            <div className="d-flex justify-content-center">
                {cajas.map((caja) => (
                    <Card key={cajas.id} className="mi-card" style={{ background: '#B7C0F9' }}>
                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label className="text-fecha">{caja.fecha},{caja.hora}</Form.Label>
                                    <Form.Label>Nota del día</Form.Label>
                                    <h1></h1>
                                    <Form.Label>{caja.texto}</Form.Label>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Casa;



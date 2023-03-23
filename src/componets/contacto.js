import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './module.css/contacto.css'

export default class Contacto extends Component {
  render() {
    return (
      <div className='contacto' id='contacto'>
        <img className='img-contacto ' src="img/programador.png" alt=''/>
        <h5 className='cont-title'>Contacto</h5>
        <section >
                <Form className='formd' action="https://formsubmit.co/962fc3bb6ebc5d623bb3cb1e94924eaa" method="POST">
                    <Form.Group className="mb-3" >
                        <Form.Control type='text' placeholder='--Nombre--' name='nombre'/>
                    </Form.Group>
                    <Form.Group className="mb-3"  >
                        <Form.Control type="email" placeholder='--Correo--' name='correo' />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Control type='text' placeholder='--Tema de Interes--' name='tema' />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Control as="textarea" rows={3} placeholder='--Mensaje--' name='mensaje' />
                    </Form.Group>
                    <Button className='ov-btn-slide-close' type="submit">
                        Enviar!
                    </Button>
                    <Form.Control type='hidden' name='_next' value="http://localhost:3000/"/>
                    <Form.Control type='hidden' name='_captcha' value="false"/>
                </Form>
        </section>
      </div>
    )
  }
}

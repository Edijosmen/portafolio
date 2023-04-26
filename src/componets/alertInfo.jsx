import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import './module.css/alert.css'
export default function AlertDismissible({title,state,description,front,back,nP,changestateAlert}) {
 

  return (
    <>
      <Alert className='alert' show={state} variant="dark">
        <Alert.Heading>{title}</Alert.Heading>
        <p>
          {description}
        </p>
        <br/>
       <div className='github'>
       <label>Github</label>
        <span>Front-end: <a href={`${front}`} target="_blank">{front}</a></span>
        <span>Back-end:  <a href={`${back}`} target="_blank">{back}</a></span>
       </div>
      {nP ==="dos" &&
       <>
       <div className='github'>
       <label>Tecnologías</label>
        <span>Front-end: React,Tailwind,js</span>
        <span>Back-end: C#, Asp.net 6, EF,sql server</span>
       </div>
       </>}
       {nP === "uno" &&
       <>
       <div className='github'>
       <label>Tecnologías</label>
        <span>Front-end: React,css,js</span>
        <span>Back-end: C#, Asp.net 6, EF, sql server,AutoMapper</span>
       </div>
       </>
       }
       {nP === "tres" &&
       <>
       <div className='github'>
       <label>Tecnologías</label>
        <span>Front-end: React,css,js</span>
        <span>Back-end: C#, Asp.net 6, EF, sql server,AutoMapper</span>
       </div>
       </>
       }
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => changestateAlert()} variant="outline-success">
            Cerrar!
          </Button>
        </div>
      </Alert>

      {/* {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>} */}
    </>
  );
}

import React from 'react'
import './module.css/porfolio.css'
export default function Intro() {
  return (
    <div>
      <div className='encabezado'>
        <div className='col col-md-8'>
            <span className='hola'>Hola,  soy<span className='name'> Edinson Meneses</span> </span>
            <br/>
            <span className='devp'> -Backend Developer-</span>
        </div>
        <div className='col col-md-4 body-img'>
            <img className='img-intro ' src="img/ReadyPlayerMe-Avatar.png"  alt=''/>
        </div>
      </div>
    
    </div>
  )
}

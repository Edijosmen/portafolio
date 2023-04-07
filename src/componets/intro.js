import React from 'react'
import './module.css/intro.css'

export default function Intro() {
  return (
    <div className='encabezado' id='intro'>
      <div >
        <img src="img/edidevlogo.png" alt='' />
        <br />
        <span className='hola'>Hola,<br/>  soy<span className='name'> Edinson Meneses</span> </span>
        <br />
        <span className='devp'> -Backend Developer-</span>
      </div>
      <div className='foto'>
        <img className='img-intro ' src="img/ReadyPlayerMe-Avatar.png" alt='' />
      </div>
    </div>
  )
}

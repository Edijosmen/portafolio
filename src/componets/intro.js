import React from 'react'
import './module.css/intro.css'

export default function Intro() {
  return (
    <div className='encabezado' id='intro'>
      <div >
        <img src="img/edidev5.png" alt='' />
        <br />
        <span className='name'> Edinson Meneses</span>
        <br />
        <span className='devp'> -Backend Developer-</span>
      </div>
      <div className='foto'>
        <img className='img-intro ' src="img/ReadyPlayerMe-Avatar.png" alt='' />
      </div>
    </div>
  )
}

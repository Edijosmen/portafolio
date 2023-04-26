import React from 'react'
import './module.css/perfil.css'


import {BiUserPin} from 'react-icons/bi'
import {BsGithub,BsLinkedin} from 'react-icons/bs'

export default function Perfil() {
  return (
      <div>
          <div className='perfil' id='perfils'>
              <section className=' col sobre'>
                  <hr className='p-hr'></hr>
                  <span className='descripcion '>
                      Soy Ingeniero de sistemas, entusiasta en la innovación tecnológica,
                      Desarrollador Backend con preferencia en las tecnologías de .Net.
                      con capacidad de aprendizaje y adaptabilidad para afrontar los nuevos retos venideros.
                      Permitiendome alcanzar mi objetivo de elevar el conocimiento y experiencia como profesional en el desarrollo de software.
                  </span>
                
                  <div className='elaces'>
                     <a className='ov-btn-slide-close' href='/download/portafolio.pdf' download>Descargar CV</a>
                     
                  </div>
                  <hr className='p-hr'></hr>
              </section>

              <section className='col date-personls'>
                  <BiUserPin className='icon-user'></BiUserPin> <span className='title2'>Datos Personales</span>
                  <div className='date-contenido'>
                      <div className=' mb-3'>
                          <div className='fi'>
                              <label>Perfil</label>
                              <br />
                              <span>Developer</span>
                          </div>
                          <div className='fi'>
                              <label>Celular</label>
                              <br />
                              <span>+57 310-6658-317 </span>
                          </div>
                      </div>


                      <div className=' mb-3'>
                          <div className='fi'>
                              <label>Email</label>
                              <br />
                              <span>Edison.jm26Dev@gmail.com</span>
                          </div>
                          <div className='fi'>
                              <label>Pais</label>
                              <br />
                              <span>Colombia</span>
                          </div>
                      </div>
                      
                  </div>
                  <a href='https://github.com/Edijosmen'><BsGithub className='git'/></a>
                  <a href='https://www.linkedin.com/in/edinson-dev26/'><BsLinkedin className='lik'/></a>
              </section>
             
          </div>
          
      </div>
  )
}

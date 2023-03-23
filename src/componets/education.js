import React from 'react'
import {RxExternalLink} from 'react-icons/rx'
import './module.css/education.css'
export default function Education() {
    function ver(url){
        window.open(url);
    }

  return (
      <div id='educacion'>
          <h5 className='ed-title'>Educación</h5>
          <section className='education'>
              <div className='ed-kid'>
                  <div className="-box">
                      <div>
                          <a>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <p className='ed-title-curs'>Ingeniero de Sistemas</p>
                              <div className='entity'>
                                  <p>INSTITUTO TECNOLOGICO DEL PUTUMAYO</p>
                                  <p>JUL. 2021</p>
                              </div>

                          </a>
                      </div>
                  </div>
                  <div className="-box">
                      <div>
                          <a>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <p className='ed-title-curs'>Arquitectura de Aplicaciones Empresariales con .Net Core</p>
                              <div className='entity'>
                                  <p>Udemy</p>
                                  <p>oct. 2022</p>
                              </div>
                              <p className='creden'><RxExternalLink onClick={() => ver("https://www.udemy.com/certificate/UC-fc6d5876-1b34-4d33-b99c-d3d9ab6c5b22/")} className='ed-icon'></RxExternalLink> Mostrar Credencial</p>
                          </a>
                      </div>
                  </div>
                  <div className="-box">
                      <div>
                          <a>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <p className='ed-title-curs'>Master Api RESTful con Asp.NET Core Web </p>
                              <div className='entity'>
                                  <p>Udemy</p>
                                  <p>Marz. 2022</p>
                              </div>
                              <p className='creden'><RxExternalLink onClick={() => ver("https://www.udemy.com/certificate/UC-af77543c-00cd-40fd-9bda-f6b21b0c73dd/")} className='ed-icon'></RxExternalLink> Mostrar Credencial</p>
                          </a>
                      </div>
                  </div>
                  <div className="-box">
                      <div>
                          <a>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <p className='ed-title-curs'>Aceleración de Alkemy</p>
                              <div className='entity'>
                                  <p>Alkemy</p>
                                  <p>Ago. 2021</p>
                              </div>
                              <p className='creden'><RxExternalLink onClick={() => ver("https://assets.alkemy.org/certificates/google-oauth2%7C107401040582698522584/ACCELERATION_CERTIFICATE/7e31f254-5679-41d2-9e6d-4bc2087988bd.pdf")} className='ed-icon'></RxExternalLink> Mostrar Credencial</p>
                          </a>
                      </div>
                  </div>
              </div>
              <div className='ed-kid'>
                  <div className="-box">
                      <div>
                          <a>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <p className='ed-title-curs'>Angular - NET Core - Aplicaciones de preguntas y Respuestas</p>
                              <div className='entity'>
                                  <p>Udemy</p>
                                  <p>Jun. 2022</p>
                              </div>
                              <p className='creden'><RxExternalLink onClick={() => ver("https://www.udemy.com/certificate/UC-e62e4bf1-ee12-4080-bb49-e6b86a938cfd/")} className='ed-icon'></RxExternalLink> Mostrar Credencial</p>
                          </a>
                      </div>
                  </div>


                  <div className="-box">
                      <div>
                          <a>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <p className='ed-title-curs'>.NET Esencial</p>
                              <div className='entity'>
                                  <p>Linkeding</p>
                                  <p>ene. 2023</p>
                              </div>
                              <p className='creden'><RxExternalLink onClick={() => ver("https://drive.google.com/file/d/1uCqyj2_mfuT8ffI-giuM3wxSHxdnbu-u/view?usp=sharing")} className='ed-icon'></RxExternalLink> Mostrar Credencial</p>
                          </a>
                      </div>
                  </div>
                  <div className="-box">
                      <div>
                          <a>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <p className='ed-title-curs'>Emulación NoCountry</p>
                              <div className='entity'>
                                  <p>NoCountry</p>
                                  <p>Freb. 2023</p>
                              </div>
                              <p className='creden'><RxExternalLink onClick={() => ver("https://drive.google.com/file/d/1B2txPsrLPu2-XkODyRBwuWCIcPkAIuml/view")} className='ed-icon'></RxExternalLink> Mostrar Credencial</p>
                          </a>
                      </div>
                  </div>
              </div>
          </section>

          <div >

          </div>
      </div>
  )
}

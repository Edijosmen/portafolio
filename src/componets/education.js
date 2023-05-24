import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {RxExternalLink} from 'react-icons/rx'
import Carousel from 'react-bootstrap/Carousel';
import './module.css/education.css'
export default function Education() {
    function ver(url){
        window.open(url);
    }
    AOS.init();
  return (
      <div id='educacion'>
          <h5 className='ed-title'>Educación</h5>
          <section className='education'>
              <div className='ed-kid'>
                  <div data-aos="zoom-in-up">
                      <div className="-box" >
                          <div className='conte'>
                              <div className='conten-detalle'>
                                  <p className='ed-title-curs'>Ingeniero de Sistemas</p>
                                  <div className='entity'>
                                      <p>INSTITUTO TECNOLOGICO DEL PUTUMAYO</p>
                                      <p>JUL. 2021</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div> 
                  <div data-aos="zoom-in-up">
                      <div className="-box">
                          <div className='conte'>                          
                              <div className='conten-detalle'>
                                  <p className='ed-title-curs'>Aceleración de Alkemy</p>
                                  <div className='entity'>
                                      <p>Alkemy</p>
                                      <p>Ago. 2021</p>
                                  </div>
                                  <p className='creden'><RxExternalLink onClick={() => ver("https://assets.alkemy.org/certificates/google-oauth2%7C107401040582698522584/ACCELERATION_CERTIFICATE/7e31f254-5679-41d2-9e6d-4bc2087988bd.pdf")} className='ed-icon'></RxExternalLink> Mostrar Credencial</p>
                              </div>

                          </div>
                      </div>
                  </div>
              </div>

              <div className='ed-kid'>
              <div data-aos="zoom-in-up">
                      <div className="-box">
                          <div className='conte'>
                              <div className='conten-detalle'>
                                  <p className='ed-title-curs'>Tecnólogo En Desarrollo De Software</p>
                                  <div className='entity'>
                                      <p>INSTITUTO TECNOLOGICO DEL PUTUMAYO</p>
                                      <p>Julio. 2019</p>
                                  </div>
                                 
                              </div>

                          </div>
                      </div>
                  </div>
                  <div data-aos="zoom-in-up">
                      <div className="-box">
                          <div className='conte'>
                              <div className='conten-detalle'>
                                  <p className='ed-title-curs'>Emulación NoCountry</p>
                                  <div className='entity'>
                                      <p>NoCountry</p>
                                      <p>Freb. 2023</p>
                                  </div>
                                  <p className='creden'><RxExternalLink onClick={() => ver("https://drive.google.com/file/d/1B2txPsrLPu2-XkODyRBwuWCIcPkAIuml/view")} className='ed-icon'></RxExternalLink> Mostrar Credencial</p>
                              </div>

                          </div>
                      </div>
                  </div>
              </div>
          </section>
            <h5 className='ed-title'>Cursos</h5>  
          <section>
              <Carousel className='m-3'>
                  <Carousel.Item interval={1000}>
                  <div className="-box">
                          <div className='conte'>
                              <span className='lio'></span>
                              <span className='lio'></span>
                              <span className='lio'></span>
                              <span className='lio'></span>
                              <span className='lio'></span>
                              <span className='lio'></span>
                              <span className='lio'></span>
                              <span className='lio'></span>
                              <div className='conten-detalle-c'>
                                  <p className='ed-title-curs'>SQL-Consultas en Microsoft SQL Server</p>
                                  <div className='entity'>
                                      <p>Udemy</p>
                                      <p>Mayo. 2023</p>
                                  </div>
                                  <p className='creden'><RxExternalLink onClick={() => ver("https://www.udemy.com/certificate/UC-73b237c5-4667-4f99-82c2-8069c4791799/")} className='ed-icon'></RxExternalLink> Mostrar Credencial</p>
                              </div>

                          </div>
                      </div>
                     
                  </Carousel.Item>
                  <Carousel.Item interval={500}>
                  <div className="-box">
                          <div className='conte'>
                              <span className='lio'></span>
                              <span className='lio'></span>
                              <span className='lio'></span>
                              <span className='lio'></span>
                              <span className='lio'></span>
                              <span className='lio'></span>
                              <span className='lio'></span>
                              <span className='lio'></span>

                              <div className='conten-detalle-c'>
                                  <p className='ed-title-curs'>Arquitectura de Aplicaciones Empresariales con .Net Core</p>
                                  <div className='entity'>
                                      <p>Udemy</p>
                                      <p>oct. 2022</p>
                                  </div>
                                  <p className='creden'><RxExternalLink onClick={() => ver("https://www.udemy.com/certificate/UC-fc6d5876-1b34-4d33-b99c-d3d9ab6c5b22/")} className='ed-icon'></RxExternalLink> Mostrar Credencial</p>
                              </div>

                          </div>
                      </div>
                  </Carousel.Item>
                  <Carousel.Item>
           
                      <div className="-box">
                          <div className='conte'>
                              <span className='lio'></span>
                              <span className='lio'></span>
                              <span className='lio'></span>
                              <span className='lio'></span>
                              <span className='lio'></span>
                              <span className='lio'></span>
                              <span className='lio'></span>
                              <span className='lio'></span>
                              <div className='conten-detalle-c'>
                                  <p className='ed-title-curs'>Master Api RESTful con Asp.NET Core Web </p>
                                  <div className='entity'>
                                      <p>Udemy</p>
                                      <p>Marz. 2022</p>
                                  </div>
                                  <p className='creden'><RxExternalLink onClick={() => ver("https://www.udemy.com/certificate/UC-af77543c-00cd-40fd-9bda-f6b21b0c73dd/")} className='ed-icon'></RxExternalLink> Mostrar Credencial</p>
                              </div>

                          </div>
                      </div>
                  </Carousel.Item>
                  <Carousel.Item>
                  <div className="-box">
                          <div className='conte'>
                              <span className='lio'></span>
                              <span className='lio'></span>
                              <span className='lio'></span>
                              <span className='lio'></span>
                              <span className='lio'></span>
                              <span className='lio'></span>
                              <span className='lio'></span>
                              <span className='lio'></span>
                              <div className='conten-detalle-c'>
                                  <p className='ed-title-curs'>Angular - NET Core - Aplicaciones de preguntas y Respuestas</p>
                                  <div className='entity'>
                                      <p>Udemy</p>
                                      <p>Jun. 2022</p>
                                  </div>
                                  <p className='creden'><RxExternalLink onClick={() => ver("https://www.udemy.com/certificate/UC-e62e4bf1-ee12-4080-bb49-e6b86a938cfd/")} className='ed-icon'></RxExternalLink> Mostrar Credencial</p>
                              </div>

                          </div>
                      </div>
                  </Carousel.Item>
                  <Carousel.Item>
                  <div className="-box">
                          <div className='conte'>
                              <span className='lio'></span>
                              <span className='lio'></span>
                              <span className='lio'></span>
                              <span className='lio'></span>
                              <span className='lio'></span>
                              <span className='lio'></span>
                              <span className='lio'></span>
                              <span className='lio'></span>
                              <div className='conten-detalle-c'>
                                  <p className='ed-title-curs'>.NET Esencial</p>
                                  <div className='entity'>
                                      <p>Linkeding</p>
                                      <p>ene. 2023</p>
                                  </div>
                                  <p className='creden'><RxExternalLink onClick={() => ver("https://drive.google.com/file/d/1uCqyj2_mfuT8ffI-giuM3wxSHxdnbu-u/view?usp=sharing")} className='ed-icon'></RxExternalLink> Mostrar Credencial</p>
                              </div>

                          </div>
                      </div>
                  </Carousel.Item>
              </Carousel>
          </section>
      </div>
  )
}

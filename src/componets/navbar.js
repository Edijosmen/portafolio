import React from 'react'
import {FiMenu} from 'react-icons/fi'
import {SiDevdotto} from 'react-icons/si'
import { Navbar,Container,Nav} from 'react-bootstrap'
import './module.css/navbar.css'
import { useState } from 'react'


export default function NavBar() {
  const  [check,setCheck] = useState(false);
   function btnclik(){
    if(check==true){
        setCheck(false); 
    }else{
        setCheck(true);
    }
   }
   console.log(check);
  return (
      <div>
          {/* <Navbar bg="light" expand="lg">
              <Container>
                  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto">
                          <Nav.Link href="#home">Home</Nav.Link>
                          <Nav.Link href="#link">Link</Nav.Link>
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar> */}
          <nav className='container-menu'>
              <a>
                  <img src="img/logo-porfoliof.png" alt='' />
              </a>
              <ul className='ul-flued'>
                  <li ><a href='#'>Inicio</a></li>
                  <li ><a href='#perfils'>Perfil</a></li>
                  <li ><a href='#'>Skill</a></li>
                  <li ><a href='#'>Proyectos</a></li>
              </ul>

              <a ><FiMenu className='color' onClick={btnclik}></FiMenu></a>
              <SiDevdotto className='devtto'></SiDevdotto>
          </nav>
          <section className='container-menu2'>
              <ul className={check === true ? 'ul-activo' : 'ul-inactivo'} hidden={check === true ? 'true' : undefined}>
                  <li ><a href='#'>Inicio</a></li>
                  <li ><a href='#'>Perfil</a></li>
                  <li ><a href='#'>Skill</a></li>
                  <li ><a href='#'>Proyectos</a></li>
              </ul>
          </section>
      </div>
  )
}

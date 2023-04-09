import React from 'react'
import {FiMenu} from 'react-icons/fi'
import {SiDevdotto} from 'react-icons/si'
import { Navbar,Container,Nav} from 'react-bootstrap'
import './module.css/navbar.css'
import { useState } from 'react'


export default function NavBar() {
  const  [check,setCheck] = useState(false);
   function btnclik(){
    document.querySelector(".container-menu2 ul").classList.toggle("show");
    if(check==true){
        setCheck(false); 
    }else{
        setCheck(true);
    }
   }
   console.log(check);
  return (
      <div>
          <nav className='container-menu' >
              <ul className="ul-flued">
                  <li ><a href='#intro'>Inicio</a></li>
                  <li ><a href='#perfils'>Perfil</a></li>
                  <li ><a href='#skill'>Skill</a></li>
                  <li ><a href='#proyecto'>Proyectos</a></li>
              </ul>

              <a ><FiMenu className='color' onClick={btnclik}></FiMenu></a>
              
          </nav>
          <section className='container-menu2'>
              <ul>
                  <li ><a href='#intro'>Inicio</a></li>
                  <li ><a href='#perfils'>Perfil</a></li>
                  <li ><a href='#skill'>Skill</a></li>
                  <li ><a href='#proyecto'>Proyectos</a></li>
              </ul>
          </section>
      </div>
  )

  
}



import React from 'react'
import Contacto from '../componets/contacto'
import Education from '../componets/education'
import Footer from '../componets/footer'
import Intro from '../componets/intro'
import NavBar from '../componets/navbar'
import Perfil from '../componets/perfil'
import Proyectos from '../componets/proyectos'
import Skill from '../componets/skill'
import './module.css'
export default function Porfolio() {
  return (
    <div className='body'>
     <NavBar/>
     <Intro/>
     <Perfil/>
     <Skill/>
     <Education/>
     <Proyectos/>
     <Contacto/>
     <Footer/>
    </div>
  )
}
